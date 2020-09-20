pragma solidity 0.5.16;

contract DappToken{

    string public name = "DApp Token";
    string public symbol = "DAPP";
    string public standard = "1.0";
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance; //2nd address is allowed to spedn value on behaf of 1st address

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);


    constructor(uint256 _initialSupply) public {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
    }

    // function transfer(address _to, uint256 _value) public returns (bool success){
    //     require(balanceOf[msg.sender] >= _value, ' _value greater than the msg.sender balance');
    //     balanceOf[msg.sender] -= _value;
    //     balanceOf[_to] += _value;
    //     emit Transfer(msg.sender, _to, _value);
    //     return true;
    // }

    function transfer(address _to, uint256 _value, address _from) public returns (bool success){
        require(balanceOf[_from] >= _value, ' _value greater than the msg.sender balance');
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool success){
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success){
        require(_value <= allowance[_from][msg.sender], 'approved token insufficient');
        require(_value <= balanceOf[_from], 'insufficient token balance of account');
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        allowance[_from][msg.sender] -= _value;
        emit Transfer(_from, _to, _value);
        return true;
    }

}