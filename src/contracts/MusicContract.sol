// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.0 <0.8.0;

import '@openzeppelin/contracts/math/SafeMath.sol';
import './DappToken.sol';

contract MusicContract{
    
    using SafeMath for uint256;
    uint256 public tokenPrice;
    DappToken public tokenContract;
    
    constructor(DappToken _tokenContract, uint256 _tokenPrice) {
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    } 
    
    struct Contract {
        string musicIdentifier;
        address singer;
        uint256 singerPercentage;
        address producer;
        uint256 producerPercentage;
        address writer;
        uint256 writerPercenrage;
    }
    
    struct account{
        uint256 redeemableBalance;
    }
    
    event contractInitialized(
        string musicIdentifier,
        address indexed singer,
        uint256 singerPercentage,
        address indexed producer,
        uint256 producerPercentage,
        address indexed writer,
        uint256 writerPercenrage
    );
    
    event RedeemTokens(
        address indexed owner,
        uint256 numberOfTokens
    );
    
    uint public contractCount = 0;
    //uint256 public totalRedeemableBalance;
    mapping(address => account) public balanceOf;
    mapping(string => Contract ) contractMusic;
    
    
    //if all three are the same person than set the adresses and percentages to zero and then when dividing amount write checks accordingly
    //musicIdentifier is used in mapping as musicIdentifier is same for music added in music.sol and contract addded in musicContract.sol
    //musicIdentifier is also stored in struct as same artist, singer, writer can make anither song with another contract so to seperate those two I have added musicIdentifier yet again
    
    function setContract(string memory _musicIdentifer, address _singer, uint256 _sPer, address _producer ,uint256 _pPer, address _writer, uint256 _wPer) public {
        //valid musicIdentifier
        require(bytes(_musicIdentifer).length > 0, 'Invalid musicIdentifier provided in params');

        //singer cannot be zero address
        require(_singer != address(0), 'Singer address cannot be zero');

        //singer percentage cannot be zero
        require(_sPer != 0, 'Singer percentage cannot be zero');

        //if addres of producre is zero the percentage must be zero
        if(_producer == address(0)){
            require(_pPer == 0, 'Producer percentage must be zero when address is zero');
        }

        //if addres of writer is zero the percentage must be zero
        if(_writer == address(0)){
            require(_wPer == 0, 'Writer percentage must be zero when address is zero');
        }
        contractCount  ++;
        contractMusic[_musicIdentifer] = Contract(_musicIdentifer, _singer, _sPer, _producer, _pPer, _writer, _wPer);
        emit contractInitialized(_musicIdentifer, _singer, _sPer, _producer, _pPer, _writer, _wPer);
    }
    
    // function getRedeemableBalance(address _owner) public returns (uint256){
    //     return balanceOf[_owner].redeemableBalance;
    // }
    
    function storeAndAllocateTokens(uint256 _amount, string memory _musicIdentifer) public returns(bool){
        
        //get contract data 
        Contract memory music_Contract = contractMusic[_musicIdentifer];

        //divide and allocate _amount
        if(music_Contract.singerPercentage != 0){
            balanceOf[music_Contract.singer].redeemableBalance = (_amount.mul(music_Contract.singerPercentage)).div(100);
        }  
        if(music_Contract.writerPercenrage != 0){
            balanceOf[music_Contract.writer].redeemableBalance = (_amount.mul(music_Contract.writerPercenrage)).div(100);
        }
        if(music_Contract.producerPercentage != 0){
            balanceOf[music_Contract.producer].redeemableBalance = (_amount.mul(music_Contract.producerPercentage)).div(100);
        }

        //update totalRedeemableBalance
        //totalRedeemableBalance = totalRedeemableBalance.add(_amount);
        //no need as balanceOf this contract will give the total reddemable amount
        return true;
    }
    
    function redeemTokens(uint256 _amountOfToken, address _owner) public payable{
        //check msg.value sent by _owner
        require(msg.value == (_amountOfToken.mul(tokenPrice)).div(10**10), 'insifficient value sent by the msg.sender');
        
        //check validity of address  _owner
        require(_owner != address(0),'Owner cannot have 0 address');
        
        //check if _owner has redeemableBalance
        require(balanceOf[_owner].redeemableBalance != 0,'_owner has no redeemable Tokens');
        
        //check if _amountOfToken is <= redeemableBalance
        require(_amountOfToken <= balanceOf[_owner].redeemableBalance,'Cannot reddem more tokens than which is owned to you');
        
        //calculate remaining redeemabletokens and update user struct
        balanceOf[_owner].redeemableBalance = balanceOf[_owner].redeemableBalance.sub(_amountOfToken);
        //call transfer method of DappToken
        require(tokenContract.tTransfer(_owner, _amountOfToken, address(this)), 'unable to call transfer function of tokencontract');
        
        //require(tokenContract.transfer(_owner, _amountOfToken), 'unable to call transfer function of tokencontract');

        //emit event
        emit RedeemTokens(_owner, _amountOfToken);
    }
}