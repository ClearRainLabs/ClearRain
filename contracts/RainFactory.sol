pragma solidity 0.6.7;

import "hardlydifficult-eth/contracts/proxies/Clone2Factory.sol";
import "./RainCommunity.sol";

contract RainFactory {
  using Clone2Factory for address;

  struct Community {
    bool deployed;
  }

  mapping(address => Community) public childCommunities; // this needs to be an array to access communities in graph??

  event NewCommunity(address indexed creator, address indexed newCommunityAddress);

  function createCommunity(
    string memory _newName,
    string memory _newSymbol,
    bytes12 _salt
  ) public
  {
    _createCommunity(_newName, _newSymbol, _salt, address(this));
  }

  function _createCommunity(
    string memory _newName,
    string memory _newSymbol,
    bytes12 _salt,
    address _communityTemplate
  ) private
  {
    bytes32 salt;

    assembly {
      let pointer := mload(0x40)
      mstore(pointer, shl(96, caller()))
      mstore(add(pointer, 0x14), _salt)
      salt := mload(pointer)
    }

    address payable newCommunity = address(uint160(address(_communityTemplate).createClone2(salt)));
    RainCommunity(newCommunity).initialize(_newName, _newSymbol);

    childCommunities[newCommunity] = Community({ deployed: true });
    emit NewCommunity(msg.sender, newCommunity);  }
}
