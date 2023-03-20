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

  it('should deploy contract with non empty address', async() => {
    const { contract } = await loadFixture(deploy)
    expect(contract.address).to.not.equal(ethers.constants.AddressZero)
  })

  describe('proposal creation', () => {
    it('should fail to create a proposal, empty id', async() => {
      const { contract } = await loadFixture(deploy)
      await expect(contract.createProposal('', ethers.utils.parseEther('5'))).to.be.rejectedWith('no proposalId')
    })
    it('should create a proposal', async() => {
      const { contract } = await loadFixture(deploy)
      await expect(contract.createProposal('abc', ethers.utils.parseEther('5'))).to.be.fulfilled
    })
  })

  describe('fund proposal', () => {
    it('should fail to fund a proposal, zero amount provided', async() => {
      const { contract } = await loadFixture(deploy)
      await expect(contract.fundProposal('abc')).to.be.rejectedWith('null amount')
    })
    it('should fund a proposal', async() => {
      const { contract } = await loadFixture(deploy)
      await expect(contract.fundProposal('abc', {value:ethers.utils.parseEther('5')})).to.be.fulfilled
    })
    it('should fail to fund a proposal, funding completed', async() => {
      const { contract } = await loadFixture(deploy)
      await expect(contract.fundProposal('abc', {value:ethers.utils.parseEther('5')})).to.be.rejectedWith('Funding done')
    })
  })

  describe('flag proposal', () => {
    it('should fail to flag proposal, funding already completed', async() => {
      const { contract } = await loadFixture(deploy)
      console.log(await contract.getProposal('abc'))
    })
  })

})