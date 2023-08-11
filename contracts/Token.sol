// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.17;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract Token is ERC20{
    constructor()ERC20("RohitSah","RHT"){}
    function mint()external {
        _mint(msg.sender,1000);
    }
}