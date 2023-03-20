// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Raise {

    /** @dev Anatomy of a proposal onchain */
    struct Proposal {
        uint256 totalAmount;
        uint256 amountRaised;
        address payable proposalCreator;
        uint256 flagCount;
        bool underInvestigation;
        bool FundsSent;
    }

    /** 
     * @dev Modifier that checks if the funding amount has not been completed.
     * This is to avoid any project to be overfunded i.e being funded above the specified amount
      */
    modifier proposalCheck(string memory _proposalId) {
        Proposal memory proposal = proposals[_proposalId];
        require(proposal.amountRaised < proposal.totalAmount, 'Funding done');
        require(proposal.underInvestigation == false, 'Paused');
        _;
    }



    event ProposalCreated(string proposalId);
    event ProposalFunded(string proposalId, uint256 amount);


    /**@dev List of all proposals already created and recorded onchain */
    mapping(string => Proposal) proposals;

    function createProposal( string memory _proposalId, uint256 _totalAmount ) external {
        require(keccak256(abi.encodePacked(_proposalId)) != keccak256(abi.encodePacked()), 'no proposalId');
        Proposal memory newProposal = Proposal(_totalAmount, 0, payable(msg.sender), 0, false, false);
        proposals[_proposalId] = newProposal;
        emit ProposalCreated(_proposalId);
    }

    function fundProposal( string memory _proposalId ) external payable proposalCheck(_proposalId) {
        require(msg.value > 0, 'null amount');
        //payable(address(this)).transfer(msg.value);
        proposals[_proposalId].proposalCreator.transfer(msg.value);
        proposals[_proposalId].amountRaised += msg.value;
        emit ProposalFunded(_proposalId, msg.value);
    }

    /**
     * This function is helpful to notify about malicious projects.
     * Each project flaged will be investigated further to see if it's legitimate
     * No restriction for who can flag a project 
     */ 
    function flagProposal( string memory _proposalId ) external proposalCheck(_proposalId) {
        proposals[_proposalId].flagCount = proposals[_proposalId].flagCount + 1;
    }

    /**
     * function that pauses deposits on a certain proposal if flagged too much
     * only admin can execute this
     */
    function pauseProposal(string memory _proposalId) external proposalCheck(_proposalId) {
        proposals[_proposalId].underInvestigation = true;
    }  //to be thought about

    /**
     * function that unpauses deposits on a certain proposal if proposal is legitimate after investigation
     * only admin can execute this
     */
    function unpauseProposal(string memory _proposalId) external {
        require(proposals[_proposalId].underInvestigation == true, 'Not paused');
        proposals[_proposalId].underInvestigation = false;
    }  //to be thought about

    /**
     * Owner of a proposal can withdraw funds when the campain is done
     */
    function withdrawFunds( string memory _proposalId ) external {
        Proposal memory proposal = proposals[_proposalId];
        require(proposal.amountRaised >= proposal.totalAmount, 'Funding ongoing');
        proposal.FundsSent = true;
        proposal.proposalCreator.transfer(proposal.totalAmount);
    }







    function getProposal(string memory id) external view returns(Proposal memory prop) {
        return proposals[id];
    }

}