pragma solidity ^0.6.0;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract RainCommunity is AccessControl {

  bytes32 public constant OWNER_ROLE = keccak256('OWNER_ROLE');
  bytes32 public constant ADMIN_ROLE = keccak256('ADMIN_ROLE');

  address payable public owner;
  address payable[] public admins;

  mapping(address => bool) private _moderators;
  mapping(address => bool) private _members;

  string private _name;
  string private _symbol;

  constructor (string memory name, string memory symbol) public {
    _name = name;
    _symbol = symbol;

    // set up roles
    _setupRole(OWNER_ROLE, msg.sender);
    grantRole(ADMIN_ROLE, msg.sender);

    _moderators[msg.sender] = true;
    _members[msg.sender] = true;

    _setRoleAdmin(OWNER_ROLE, OWNER_ROLE);
    _setRoleAdmin(ADMIN_ROLE, OWNER_ROLE);

    owner = msg.sender;
  }

  /**
   * @dev Returns the name of the community.
   */
  function name () public view returns (string memory) {
    return _name;
  }

  /**
   * @dev Returns the symbol of the community.
   */
  function symbol () public view returns (string memory) {
    return _symbol;
  }

  function _addModerator (address payable moderator) private {
    require(hasRole(ADMIN_ROLE, msg.sender),'Caller is not an admin');
    _moderators[moderator] = true;
  }

  function _addAdmin (address payable admin) private {
    require(hasRole(OWNER_ROLE, msg.sender), 'Caller does not own the community');
    grantRole(ADMIN_ROLE, admin);
    admins.push(admin);
  }
}
