// // SPDX-License-Identifier: GPL-3.0
// pragma solidity >=0.4.0 <0.8.0;

// import '@openzeppelin/contracts/math/SafeMath.sol';

// contract DappToken{

//     using SafeMath for uint256;

//     string public name = "DApp Token";
//     string public symbol = "DAPP";
//     string public standard = "1.0";
//     uint256 public totalSupply;

//     mapping(address => uint256) public balanceOf;
//     mapping(address => mapping(address => uint256)) public allowance; //2nd address is allowed to spedn value on behaf of 1st address

//     event Transfer(address indexed _from, address indexed _to, uint256 _value);
//     event Approval(address indexed _owner, address indexed _spender, uint256 _value);


//     constructor(uint256 _initialSupply) {
//         balanceOf[msg.sender] = _initialSupply;
//         totalSupply = _initialSupply;
//     }

//     function transfer(address _to, uint256 _value, address _from) public returns (bool success){
//         require(balanceOf[_from] >= _value, ' _value greater than the msg.sender balance');
//         balanceOf[_from] = balanceOf[_from].sub(_value);
//         balanceOf[_to] = balanceOf[_to].add(_value);
//         emit Transfer(_from, _to, _value);
//         return true;
//     }

//     function approve(address _spender, uint256 _value) public returns (bool success){
//         allowance[msg.sender][_spender] = _value;
//         emit Approval(msg.sender, _spender, _value);
//         return true;
//     }

//     function transferFrom(address _from, address _to, uint256 _value) public returns (bool success){
//         require(_value <= allowance[_from][msg.sender], 'approved token insufficient');
//         require(_value <= balanceOf[_from], 'insufficient token balance of account');
//         balanceOf[_from] = balanceOf[_from].sub(_value);
//         balanceOf[_to] = balanceOf[_to].add(_value);
//         allowance[_from][msg.sender] = allowance[_from][msg.sender].sub(_value);
//         emit Transfer(_from, _to, _value);
//         return true;
//     }
// }

// SPDX-License-Identifier: GPL-3.0 
pragma solidity >=0.4.0 <0.8.0;
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract DappToken is ERC20 {
    constructor(string memory name, string memory symbol) public ERC20(name, symbol)
    {
        _setupDecimals(10);
        _mint(msg.sender, 1000000 * 10**10);
    }
    function tTransfer(address recipient, uint256 amount, address sender) public returns (bool) {
        _transfer(sender, recipient, amount);
        return true;
    }
}