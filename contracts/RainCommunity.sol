pragma solidity 0.6.7;

import "@openzeppelin/contracts-ethereum-package/contracts/Initializable.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/access/AccessControl.sol";
import "hardlydifficult-eth/contracts/proxies/Clone2Factory.sol";

contract RainCommunity is
  Initializable,
  AccessControlUpgradeSafe
{
  using Clone2Factory for address;

  struct Community {
    bool deployed;
  }

  mapping(address => Community) public childCommunities; // this needs to be an array to access communities in graph??

  string private _name;
  string private _symbol;

  bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
  bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
  bytes32 public constant MODERATOR_ROLE = keccak256("MODERATOR_ROLE");

  address private _owner;
  mapping(address => bool) private _admins;
  mapping(address => bool) private _moderators;
  mapping(address => bool) private _members;

  address public parentCommunity;

  address public communityTemplate;

  event NewCommunity(address indexed creator, address indexed newCommunityAddress);
  event SetCommunityTemplate(address communityTemplate)

  function initialize(
    address _parentCommunity
    string memory name,
    string memory symbol
  ) public
    initializer
  {
    __AccessControl_init();
    _name = name;
    _symbol = symbol;
    parentCommunity = _parentCommunity;

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

  modifier onlyOwner() {
    require(_owner == msg.sender, "Ownable: caller is not the owner");
    _;
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

  function owner() public view returns (address) {
    return _owner;
  }

  function setCommunityTemplate(
    address payable _communityTemplate
  ) external
    onlyOwner
  {
    RainCommunity(_communityTemplate).initialize(
      address(this), "", ""
    );

    communityTemplate = _communityTemplate;

    emit SetCommunityTemplate(_communityTemplate);
  }

  function transferOwnership(address newOwner) public {
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

  function removeAdmin(address admin) public {
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
    require(hasRole(MODERATOR_ROLE, _owner) || _owner == user, "Caller is not a moderator or itself");
    _members[user] = false;
  }

  function createCommunity(
    string memory _newName,
    string memory _newSymbol,
    bytes12 _salt
  ) public
  {
    _createCommunity(_newName, _newSymbol, _salt);
  }

  function _createCommunity(
    string memory _newName,
    string memory _newSymbol,
    bytes12 _salt
  ) private
  {
    bytes32 salt;

    assembly {
      let pointer := mload(0x40)
      mstore(pointer, shl(96, caller()))
      mstore(add(pointer, 0x14), _salt)
      salt := mload(pointer)
    }

    address payable newCommunity = address(uint160(address(communityTemplate).createClone2(salt)));
    RainCommunity(newCommunity).initialize(address(this), _newName, _newSymbol);

    childCommunities[newCommunity] = Community({ deployed: true });
    emit NewCommunity(msg.sender, newCommunity);
  }
}
