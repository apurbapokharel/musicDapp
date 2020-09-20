pragma solidity 0.5.16;

import './DappToken.sol';

contract DappTokenSale{

    address admin;
    DappToken public tokenContract;
    uint256 public tokenPrice;
    uint256 public tokensSold;
    address currentContract;

    event Sell(address _buyer, uint256 _amount);

    constructor(DappToken _tokenContract, uint256 _tokenPrice) public{
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    } 

    function multiply(uint x, uint y) internal pure returns (uint z) {
        require(y == 0 || (z = x * y) / y == x);
    }

    // function buyTokens(uint256 _numberOfTokens) public payable {
    //     require(msg.value == multiply(_numberOfTokens, tokenPrice), 'insifficient value sent by the msg.sender');
    //     //currentContract = address(this);
    //     // currentContract = this; //it cannot be implicitly converted this way
    //     require(tokenContract.balanceOf(address(this)) >= _numberOfTokens, 'contract does not have sufficient token');
    //     //implicit converstion of SC to address is given by this
    //     //explict conversion of SC to address is given by address(this)
    //     require(tokenContract.transfer(msg.sender, _numberOfTokens), 'unable to call transfer fucntion of tokencontract');
    //     tokensSold += _numberOfTokens;
    //     emit Sell(msg.sender, _numberOfTokens);
    // }

    function buyTokens(uint256 _numberOfTokens, address _caller) public payable {
        require(msg.value == multiply(_numberOfTokens, tokenPrice), 'insifficient value sent by the msg.sender');
        //currentContract = address(this);
        // currentContract = this; //it cannot be implicitly converted this way
        require(tokenContract.balanceOf(address(this)) >= _numberOfTokens, 'contract does not have sufficient token');
        //implicit converstion of SC to address is given by this
        //explict conversion of SC to address is given by address(this)
        // address _from = address(this);
        require(tokenContract.transfer(_caller, _numberOfTokens, address(this)), 'unable to call transfer fucntion of tokencontract');
        tokensSold += _numberOfTokens;
        emit Sell(_caller, _numberOfTokens);
    }

    function endSale() public {
        require(msg.sender == admin,'msg.sender is not the admin');
        require(tokenContract.transfer(admin, tokenContract.balanceOf(address(this)), address(this)),'unable to transfer remaining token to admin');

        //selfdistruct garna ni milcha
        //contract cannot be deleted in the BC but the varibales will be reset 
        //thats the way to selfdestruct in solidity
        //selfdestruct(admin);
        //write a test to see if the tokenprice is 0 i.e reset after self destruct
    }
}