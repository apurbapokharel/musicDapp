// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.0 <0.8.0;

import './DappToken.sol';
import '@openzeppelin/contracts/math/SafeMath.sol';

contract DappTokenSale{

    using SafeMath for uint256;

    address admin;
    DappToken public tokenContract;
    uint256 public tokenPrice;
    uint256 public tokensSold;
    address currentContract;

    event Sell(address _buyer, uint256 _amount);

    constructor(DappToken _tokenContract, uint256 _tokenPrice) {
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    } 

    function buyTokens(uint256 _numberOfTokens, address _caller) public payable {
        require(msg.value == _numberOfTokens.mul(tokenPrice), 'insifficient value sent by the msg.sender');
        //currentContract = address(this);
        // currentContract = this; //it cannot be implicitly converted this way
        require(tokenContract.balanceOf(address(this)) >= _numberOfTokens, 'contract does not have sufficient token');
        //implicit converstion of SC to address is given by this
        //explict conversion of SC to address is given by address(this)
        // address _from = address(this);
        require(tokenContract.transfer(_caller, _numberOfTokens, address(this)), 'unable to call transfer function of tokencontract');
        tokensSold = tokensSold.add(_numberOfTokens);
        emit Sell(_caller, _numberOfTokens);
    }

    function endSale() public {
        require(msg.sender == admin,'msg.sender is not the admin');
        require(tokenContract.transfer(admin, tokenContract.balanceOf(address(this)), address(this)),'unable to transfer remaining token to admin');

        //selfdistruct garna ni milcha
        //contract cannot be deleted in the BC but the varibales will be reset 
        //thats the way to selfdestruct in solidity
        //selfdestruct(admin);
    }
}