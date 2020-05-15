pragma solidity ^0.6.0;

import "./CommunityRoles.sol";

contract RainCommunity is CommunityRoles {

  string private _name;
  string private _symbol;

  constructor(string memory name, string memory symbol) public {
    _name = name;
    _symbol = symbol;
  }

  /**
   * @dev Returns the name of the community.
   */
  function name() public view returns (string memory) {
    return _name;
  }

  /**
   * @dev Returns the symbol of the community.
   */
  function symbol() public view returns (string memory) {
    return _symbol;
  }
}
