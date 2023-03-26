// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

/****************** SMART CONTRACT NOT AUDITED  *******************/

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
    modifier proposalCheck(uint256  _proposalId) {
        Proposal memory proposal = proposals[_proposalId];
        require(proposal.amountRaised < proposal.totalAmount, 'Funding done');
        require(proposal.underInvestigation == false, 'Paused');
        _;
    }

    modifier isProposal(uint256 _proposalId, uint256 _totalAmount) {
        Proposal memory proposal = proposals[_proposalId];
        require(_totalAmount > 0, 'Increase amount');
        require(proposal.totalAmount == 0, 'Proposal already exists');
        _;
    }

    modifier canWithdraw(uint _proposalId) {
        Proposal memory proposal = proposals[_proposalId];
        require(proposal.amountRaised >= proposal.totalAmount, 'Funding ongoing');
        require(proposal.proposalCreator == msg.sender, "Denied, not creator");
        require(proposal.underInvestigation == false, 'Investigation ongoing');
        require(proposal.FundsSent == false, 'Withdraw done');
        _;
    }

    event ProposalCreated(uint256 proposalId);
    event ProposalFunded(uint256 proposalId, uint256 amount);
    event ProposalFlagged(uint256 proposalId);


    /**@dev List of all proposals already created and recorded onchain */
    mapping(uint256 => Proposal) proposals;

    function createProposal( uint256 _proposalId, uint256 _totalAmount ) external isProposal(_proposalId, _totalAmount) {
        Proposal memory newProposal = Proposal(_totalAmount, 0, payable(msg.sender), 0, false, false);
        proposals[_proposalId] = newProposal;
        emit ProposalCreated(_proposalId);
    }

    function fundProposal(uint256 _proposalId ) external payable proposalCheck(_proposalId) {
        require(msg.value > 0, 'null amount');
        //(bool sent, ) = address(this).call{value: msg.value}("");
        //require(sent, "Failed to send Ether");
        proposals[_proposalId].proposalCreator.transfer(msg.value);
        proposals[_proposalId].amountRaised += msg.value;
        emit ProposalFunded(_proposalId, msg.value);
    }

    /**
     * This function is helpful to notify about malicious projects.
     * Each project flaged will be investigated further to see if it's legitimate
     * No restriction for who can flag a project 
     */ 
    function flagProposal( uint256 _proposalId ) external proposalCheck(_proposalId) {
        proposals[_proposalId].flagCount = proposals[_proposalId].flagCount + 1;
        emit ProposalFlagged(_proposalId);
    }

    /**
     * function that pauses deposits on a certain proposal if flagged too much
     * only admin can execute this
     */
    function pauseProposal( uint256 _proposalId) external proposalCheck(_proposalId) {
        proposals[_proposalId].underInvestigation = true;
    } 

    /**
     * function that unpauses deposits on a certain proposal if proposal is legitimate after investigation
     * only admin can execute this
     */
    function unpauseProposal(uint256 _proposalId) external {
        require(proposals[_proposalId].underInvestigation == true, 'Not paused');
        proposals[_proposalId].underInvestigation = false;
    } 

    /**
     * Owner of a proposal can withdraw funds when the campain is done
     */
    function withdrawFunds( uint256 _proposalId ) external payable canWithdraw(_proposalId) {
        proposals[_proposalId].FundsSent = true;
        //(bool sent,) = proposals[_proposalId].proposalCreator.call{value: proposals[_proposalId].totalAmount}("");
        //require(sent, "Failed to send Ether");
    }

    function getProposal(uint256 id) external view returns(Proposal memory prop) {
        return proposals[id];
    }

}