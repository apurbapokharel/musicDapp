pragma solidity 0.5.16;

import './DappToken.sol';

contract Musicc {
    
    string public name;
    address admin;
    DappToken public tokenContract;
    uint public musicCount = 0;
    mapping(uint => Music) public music;

    struct Music
    {
        uint id;
        string musicName;
        string artistName;
        uint price;
        address payable owner;
        string musicIdentifier;
        string aesKey;
    }

    //events are created to make sure that receipts are obtained after a txn is completed.
    event MusicAdded
    (
        uint id,
        string musicName,
        string artistName,
        uint price,
        address payable owner,
        string musicIdentifier,
        string aesKey
       
    );

     event MusicPurchased
    (
        uint id,
        string musicName,
        string artistName,
        uint price,
        address payable owner,
        string musicIdentifier,
        string aesKey
       
    );

    event MusicTipped
    (
        uint id,
        string musicName,
        string artistName,
        uint price,
        address payable owner,
        string musicIdentifier,
        string aesKey
       
    );
    
    constructor(DappToken _tokenContract) public{
        admin = msg.sender;
        tokenContract = _tokenContract;
        name = "Music Marketplace";
    } 

    function musicAdd(string memory _musicName, string memory _artistName, uint _price, string memory _musicIdentifier, string memory _aesKey) public
    {
        //Require valid name
        require(bytes(_musicName).length > 0);
        require(bytes(_artistName).length > 0);
        //Require valid price
        require(_price > 0);
        //Increment productCount
        musicCount ++;
        //Create the product
        music[musicCount] = Music(musicCount, _musicName, _artistName, _price, msg.sender,  _musicIdentifier, _aesKey);
        //Trigger an event
        emit MusicAdded(musicCount, _musicName, _artistName, _price, msg.sender,  _musicIdentifier, _aesKey);
    }

    function musicPurchase(uint _id) public 
    {
        //fetch product
        //memory space is being used to store copy of said product i.e copy of products[_id]
        Music memory _product = music[_id];

        //fetch owner
        address payable _seller = _product.owner;

        //check if product has valid id
        require(_product.id >0 && _product.id <= musicCount, 'product is not valid');

        //check is there is enough token of the msg.sender
        require(tokenContract.balanceOf(msg.sender) >= _product.price, 'msg.sender has insufficient token');

        //check if the buyer is not the seller
        require(_seller != msg.sender, 'buyer cannot be the seller');

        uint256 _tokenPrice = _product.price;
        //pay the seller by calling the transfer fucntion in Dapptoken.sol
        require(tokenContract.transfer(_seller, _tokenPrice, msg.sender), 'unable to call transfer fucntion of tokencontract');

        //update product
        music[_id] = _product;

        //trigger an event 
        emit MusicPurchased(musicCount, _product.musicName, _product.artistName, _product.price, _product.owner , _product.musicIdentifier, _product.aesKey);
    } 

    function musicTip(uint _id, uint256 _tokenNumber) public 
    {
        //fetch product
        Music memory _product = music[_id];
        
        //fetch owner
        address payable _seller = _product.owner;

        //check if product is valid
        require(_product.id >0 && _product.id <= musicCount);

        //check is there is enough token of the msg.sender
        require(tokenContract.balanceOf(msg.sender) >= _tokenNumber, 'msg.sender has insufficient token');

        //pay the seller by tranfering token
        require(tokenContract.transfer(_seller, _tokenNumber, msg.sender), 'unable to call transfer fucntion of tokencontract');

        //trigger an event
        emit MusicTipped(musicCount, _product.musicName, _product.artistName, _product.price, _product.owner , _product.musicIdentifier, _product.aesKey);
    }
}