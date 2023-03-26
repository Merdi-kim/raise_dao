import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

describe('Raise contract', () => {
  async function deploy() {
    const [owner, otherAccount] = await ethers.getSigners();
    const RaiseContract = await ethers.getContractFactory("Raise");
    const contract = await RaiseContract.deploy();
    return { contract, owner, otherAccount };
  }
  let contract

  it('should deploy contract with non empty address', async() => {
    const data = await deploy()
    contract = data.contract
    expect(data.contract.address).to.not.equal(ethers.constants.AddressZero)
  })

  describe('proposal creation', () => {
    it('should create a proposal', async() => {
      await expect(contract.createProposal(243, ethers.utils.parseEther('5'))).to.be.fulfilled
    })
    it('should fail to create a proposal, amount zero', async() => {
      await expect(contract.createProposal(243, ethers.utils.parseEther('0'))).to.be.rejectedWith('Increase amount')
    })
    it('should fail to create a proposal, proposal already exists', async() => {
      await expect(contract.createProposal(243, ethers.utils.parseEther('1'))).to.be.rejectedWith('Proposal already exists')
    })
  })

  describe('fund proposal', () => {
    it('should fail to fund a proposal, zero amount provided', async() => {
      await expect(contract.fundProposal(243)).to.be.rejectedWith('null amount')
    })
    it('should fund a proposal', async() => {
      //await contract.fundProposal(243, {value:ethers.utils.parseEther('5')})
      await expect(contract.fundProposal(243, {value:ethers.utils.parseEther('5')})).to.be.fulfilled
    })
    it('should fail to fund a proposal, funding completed', async() => {
      await expect(contract.fundProposal(243, {value:ethers.utils.parseEther('5')})).to.be.rejectedWith('Funding done')
    })
  })

  describe('flag proposal', () => {
    it('should fail to flag proposal, funding already completed', async() => {
      await expect(contract.flagProposal(243)).to.be.rejectedWith('Funding done')
    })
  })

  describe('pause/unpause proposal', () => {
    let contract2
    it('should deploy new contract with non empty address', async() => {
      const data = await deploy()
      contract2 = data.contract
      expect(data.contract.address).to.not.equal(ethers.constants.AddressZero)
    })
    it('should create a proposal', async() => {
      await expect(contract2.createProposal(243, ethers.utils.parseEther('5'))).to.be.fulfilled
    })
    it('should flag proposal', async() => {
      await expect(contract2.flagProposal(243)).to.be.fulfilled
    })
    it('should fail to unpause proposal, not paused', async() => {
      await expect(contract2.unpauseProposal(243)).to.be.rejectedWith('Not paused')
    })
    it('should pause proposal', async() => {
      /**** anyone can pause the contract, this will change when we enforce ownership of the contract*/
      await expect(contract2.pauseProposal(243)).to.be.fulfilled
    })
    it('should unpause proposal', async() => {
      /**** anyone can unpause the contract, this will change when we enforce ownership of the contract*/ 
      await expect(contract2.unpauseProposal(243)).to.be.fulfilled
    })
  })

  describe('withdraw funds', () => {
    let contract3
    it('should deploy new contract with non empty address', async() => {
      const data = await deploy()
      contract3 = data.contract
      expect(data.contract.address).to.not.equal(ethers.constants.AddressZero)
    })
    it('should create a proposal', async() => {
      await expect(contract3.createProposal(243, ethers.utils.parseEther('5'))).to.be.fulfilled
    })
    it('should fail to withdraw funds, funding ongoing', async() => {
      await expect(contract3.withdrawFunds(243)).to.be.rejectedWith('Funding ongoing')
    })
    it('should fund a proposal', async() => {
      await expect(contract3.fundProposal(243, {value:ethers.utils.parseEther('5')})).to.be.fulfilled
    })
    it('should fail to withdraw funds, not creator', async() => {
      const [_, signer2] = await ethers.getSigners()
      await expect(contract3.connect(signer2).withdrawFunds(243)).to.be.rejectedWith('Denied, not creator')
    })
    it('should withdraw funds', async() => {
      await contract3.withdrawFunds(243)
      //await expect(contract3.withdrawFunds(243)).to.be.fulfilled
    })
    it('should fail to withdraw funds, withdraw done', async() => {
      await expect(contract3.withdrawFunds(243)).to.be.rejectedWith('Withdraw done')
    })
  })

})