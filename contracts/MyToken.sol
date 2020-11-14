// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity >=0.6.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(uint256 initialSupply) public ERC20("Mtoken", "MTO") {
        _mint(msg.sender, initialSupply);
    }
}