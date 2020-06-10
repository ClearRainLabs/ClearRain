pragma solidity 0.6.7;

import "@openzeppelin/contracts-ethereum-package/contracts/access/AccessControl.sol";

contract CommunityRoles is
  Initializable,
  AccessControlUpgradeSafe
{

  bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
  bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
  bytes32 public constant MODERATOR_ROLE = keccak256("MODERATOR_ROLE");

  address private _owner;
  mapping(address => bool) private _admins;
  mapping(address => bool) private _moderators;
  mapping(address => bool) private _members;

  bool public isOpen;

  event MemberAdded(address indexed account, address indexed sender);
  event MemberRemoved(address indexed account, address indexed sender);

  function _initializeComunityRoles(address _initOwner, bool _isOpen) internal {
    __AccessControl_init();

    _setupRole(OWNER_ROLE, _initOwner);
    _setupRole(ADMIN_ROLE, _initOwner);
    _setupRole(MODERATOR_ROLE, _initOwner);

    _admins[_initOwner] = true;
    _moderators[_initOwner] = true;
    _members[_initOwner] = true;

    _setRoleAdmin(OWNER_ROLE, OWNER_ROLE);
    _setRoleAdmin(ADMIN_ROLE, OWNER_ROLE);
    _setRoleAdmin(MODERATOR_ROLE, ADMIN_ROLE);

    _owner = _initOwner;
    isOpen = _isOpen;
  }

  modifier onlyOwner() {
    require(_owner == msg.sender, "Ownable: caller is not the owner");
    _;
  }

  function owner() external view returns (address) {
    return _owner;
  }

  function transferOwnership(address newOwner) external {
    grantRole(OWNER_ROLE, newOwner);
    addAdmin(newOwner);
    addModerator(newOwner);

    renounceRole(OWNER_ROLE, _owner);
    _owner = newOwner;
  }

  function addAdmin(address admin) public {
    grantRole(ADMIN_ROLE, admin);
    _admins[admin] = true;
  }

  function removeAdmin(address admin) external {
    if (msg.sender == admin) {
      renounceRole(ADMIN_ROLE, admin);
    } else {
      revokeRole(ADMIN_ROLE, admin);
    }

    _admins[admin] = false;
  }

  function addModerator(address moderator) public {
    require(hasRole(ADMIN_ROLE, _owner), "Caller is not an admin");
    grantRole(MODERATOR_ROLE, moderator);
    _moderators[moderator] = true;
  }

  function removeModerator(address moderator) external {
    if (msg.sender == moderator) {
      renounceRole(MODERATOR_ROLE, moderator);
    } else {
      revokeRole(MODERATOR_ROLE, moderator);
    }

    _moderators[moderator] = false;
  }

  function addMember(address user) external {
    if (isOpen) {
      _members[user] = true;
      emit MemberAdded(user, msg.sender);
    } else {
      require(hasRole(MODERATOR_ROLE, msg.sender) || hasRole(ADMIN_ROLE, msg.sender),
        'Sender must be admin or moderator to add a member');
      _members[user] = true;
      emit MemberAdded(user, msg.sender);
    }
  }

  function removeMember(address user) external {
    require(hasRole(MODERATOR_ROLE, _owner) || _owner == user, "Caller is not a moderator or itself");
    _members[user] = false;
    emit MemberRemoved(user, msg.sender);
  }

  function canAppend(address addr) external view returns (bool) {
    return isOpen || _members[addr];
  }
}
