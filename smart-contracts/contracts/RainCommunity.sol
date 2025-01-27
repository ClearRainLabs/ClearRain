pragma solidity 0.6.7;

import "@openzeppelin/contracts-ethereum-package/contracts/Initializable.sol";
import "hardlydifficult-eth/contracts/proxies/Clone2Factory.sol";
import "./CommunityRoles.sol";

contract RainCommunity is
  Initializable,
  CommunityRoles
{
  using Clone2Factory for address;

  struct Community {
    bool deployed;
  }

  mapping(address => Community) public childCommunities;

  string private _name;
  string private _symbol;

  address public parentCommunity;

  address payable public communityTemplate;

  event NewCommunity(address indexed creator, address indexed newCommunityAddress);
  event SetCommunityTemplate(address communityTemplate);

  function initialize(
    address _parentCommunity,
    address _owner,
    string calldata name,
    string calldata symbol,
    bool _isOpen
  ) external
    initializer
  {
    _initializeComunityRoles(_owner, _isOpen);
    _name = name;
    _symbol = symbol;
    parentCommunity = _parentCommunity;
  }

  function initialize(
    address _parentCommunity,
    address _owner,
    string calldata name,
    string calldata symbol,
    address payable _defaultTemplate,
    bool _isOpen
  ) external
    initializer
  {
    // TODO: should check to make sure default template is initialized

    _initializeComunityRoles(_owner, _isOpen);
    _name = name;
    _symbol = symbol;
    parentCommunity = _parentCommunity;
    communityTemplate = _defaultTemplate;
    emit SetCommunityTemplate(_defaultTemplate);
  }

  /**
   * @dev Returns the name of the community.
   */
  function name() external view returns (string memory) {
    return _name;
  }

  /**
   * @dev Returns the symbol of the community.
   */
  function symbol() external view returns (string memory) {
    return _symbol;
  }

  function setCommunityTemplate(
    address payable _communityTemplate
  ) external
    onlyOwner()
  {
    RainCommunity(_communityTemplate).initialize(
      address(this), address(0), "", "", true
    );

    communityTemplate = _communityTemplate;

    emit SetCommunityTemplate(_communityTemplate);
  }

  function createCommunity(
    string calldata _newName,
    string calldata _newSymbol,
    bool _isOpen,
    bytes12 _salt
  ) external
  {
    _createCommunity(_newName, _newSymbol, _isOpen, _salt);
  }

  function _createCommunity(
    string memory _newName,
    string memory _newSymbol,
    bool _isOpen,
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
    RainCommunity(newCommunity).initialize(address(this), msg.sender, _newName, _newSymbol, communityTemplate, _isOpen);
    childCommunities[newCommunity] = Community({ deployed: true });
    emit NewCommunity(msg.sender, newCommunity);
  }
}
