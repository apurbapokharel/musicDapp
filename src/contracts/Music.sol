// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.0 <0.8.0;

import './DappToken.sol';
import './MusicContract.sol';

contract Musicc {
    
    string public name;
    address admin;
    DappToken public tokenContract;
    MusicContract public musicContract;
    mapping(uint => Music) public music;
    uint public  musicCount = 0;

    struct Music
    {
        string musicName;
        string artistName;
        uint price;
        string musicIdentifier;
    }

    //events are created to make sure that receipts are obtained after a txn is completed.
    event MusicAdded
    (
        string musicName,
        string artistName,
        uint price,
        string musicIdentifier
    );

     event MusicPurchased
    (
        string musicName,
        string artistName,
        uint price,
        string musicIdentifier
    );

    event MusicTipped
    (
        string musicName,
        string artistName,
        uint price,
        string musicIdentifier
    );
    
    constructor(DappToken _tokenContract, MusicContract _musicContract) {
        admin = msg.sender;
        tokenContract = _tokenContract;
        musicContract = _musicContract;
        name = "Music Marketplace";
    } 

    function musicAdd(string memory _musicName, string memory _artistName, uint _price, string memory _musicIdentifier) public
    {
        //Require valid name
        require(bytes(_musicName).length > 0);
        require(bytes(_artistName).length > 0);

        //Require valid price
        require(_price > 0);
        musicCount ++;
        //Create the product
        music[musicCount] = Music(_musicName, _artistName, _price,  _musicIdentifier);

        //Trigger an event
        emit MusicAdded(_musicName, _artistName, _price,  _musicIdentifier);
    }

    function musicPurchase(uint256 _musicCount, string memory _musicIdentifier) public 
    {
        //fetch product
        //memory space is being used to store copy of said product i.e copy of products[_id]
        Music memory _product = music[_musicCount];

        //check is there is enough token of the msg.sender
        require(tokenContract.balanceOf(msg.sender) >= _product.price, 'msg.sender has insufficient token');

        uint256 _tokenPrice = _product.price;

        //call storeAndAllocateTokens from musiccontract
        require(musicContract.storeAndAllocateTokens(_product.price, _musicIdentifier), 'unable to call storeAndAllocateToken');

        //trasnfer the total token to musicContract
        require(tokenContract.tTransfer(address(musicContract), _tokenPrice, msg.sender), 'unable to call transfer fucntion of tokencontract');
       
        //trigger an event 
        emit MusicPurchased(_product.musicName, _product.artistName, _product.price, _product.musicIdentifier);
    } 

    function musicTip(uint256 _musicCount, string memory _musicIdentifier, uint256 _tokenNumber) public 
    {
        //fetch product
        Music memory _product = music[_musicCount];
        
        //check is there is enough token of the msg.sender
        require(tokenContract.balanceOf(msg.sender) >= _tokenNumber, 'msg.sender has insufficient token');

        //call storeAndAllocateTokens from musiccontract
        require(musicContract.storeAndAllocateTokens(_tokenNumber, _musicIdentifier), 'unable to call storeAndAllocateToken');

        //pay the seller by tranfering token
        require(tokenContract.tTransfer(address(musicContract), _tokenNumber, msg.sender), 'unable to call transfer fucntion of tokencontract');
        
        //trigger an event
        emit MusicTipped(_product.musicName, _product.artistName, _tokenNumber, _product.musicIdentifier);
    }
}