pragma solidity ^0.6.0;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract CommunityRoles is AccessControl {

  bytes32 public constant OWNER_ROLE = keccak256('OWNER_ROLE');
  bytes32 public constant ADMIN_ROLE = keccak256('ADMIN_ROLE');
  bytes32 public constant MODERATOR_ROLE = keccak256('MODERATOR_ROLE');

  address private _owner;
  mapping(address => bool) private _admins;
  mapping(address => bool) private _moderators;
  mapping(address => bool) private _members;

  constructor() public {
    _setupRole(OWNER_ROLE, msg.sender);
    _setupRole(ADMIN_ROLE, msg.sender);
    _setupRole(MODERATOR_ROLE, msg.sender);

    _admins[msg.sender] = true;
    _moderators[msg.sender] = true;
    _members[msg.sender] = true;

    _setRoleAdmin(OWNER_ROLE, OWNER_ROLE);
    _setRoleAdmin(ADMIN_ROLE, OWNER_ROLE);
    _setRoleAdmin(MODERATOR_ROLE, ADMIN_ROLE);

    _owner = msg.sender;
  }

  function owner() public view returns (address) {
    return _owner;
  }

  function transferOwnership(address newOwner) public {
    grantRole(OWNER_ROLE, newOwner);
    addAdmin(newOwner);
    addModerator(newOwner);

    renounceRole(OWNER_ROLE, msg.sender);
    _owner = newOwner;
  }

  function addAdmin(address admin) public {
    grantRole(ADMIN_ROLE, admin);
    _admins[admin] = true;
  }

  function removeAdmin(address admin) public {
    if (msg.sender == admin) {
      renounceRole(ADMIN_ROLE, admin);
    } else {
      revokeRole(ADMIN_ROLE, admin);
    }

    _admins[admin] = false;
  }

  function addModerator(address moderator) public {
    require(hasRole(ADMIN_ROLE, msg.sender),'Caller is not an admin');
    grantRole(MODERATOR_ROLE, moderator);
    _moderators[moderator] = true;
  }

  function removeModerator(address moderator) public {
    if (msg.sender == moderator) {
      renounceRole(MODERATOR_ROLE, moderator);
    } else {
      revokeRole(MODERATOR_ROLE, moderator);
    }

    _moderators[moderator] = false;
  }

  function addMember(address user) public {
    _members[user] = true;
  }

  function removeMember(address user) public {
    require(hasRole(MODERATOR_ROLE, msg.sender) || msg.sender == user, 'Caller is not a moderator or itself');
    _members[user] = false;
  }
}
