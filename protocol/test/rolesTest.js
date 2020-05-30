async function checkCommunityRoles (contract, accounts, initName, initSymbol, initOwner) {
  this.contract = contract
  it('Get name and symbol', async () => {
    const name = await this.contract.name.call()
    assert.equal(name, initName, `Name ${name} was not correct`)

    const symbol = await this.contract.symbol.call()
    assert.equal(symbol, initSymbol, `Symbol ${symbol} was not correct`)
  })

  it('Get owner of the community', async () => {
    const owner = await this.contract.owner.call()
    assert.equal(owner, accounts[0], 'Owner should be the first account')
  })

  it('Add/Remove admin, moderator, and member', async () => {
    await this.contract.addAdmin(accounts[1], { from: initOwner })

    // owner add moderator
    await this.contract.addModerator(accounts[2], { from: initOwner })
    // admin add moderator
    await this.contract.addModerator(accounts[3], { from: accounts[1] })

    // test 'member' functions
    await this.contract.addMember(accounts[4], { from: accounts[4] })
    await this.contract.addMember(accounts[5], { from: accounts[4] })
    await this.contract.addMember(accounts[6], { from: accounts[6] })

    await this.contract.removeMember(accounts[6], { from: initOwner })
    await this.contract.removeMember(accounts[4], { from: accounts[2] })

    await this.contract.removeModerator(accounts[3], { from: initOwner })

    try {
      await this.contract.addAdmin(accounts[2], { from: accounts[1] })
      assert.fail()
    } catch (e) {
      assert.ok(/revert/.test(e.message))
    }

    try {
      await this.contract.removeModerator(accounts[2], { from: accounts[4] })
      assert.fail()
    } catch (e) {
      assert.ok(/revert/.test(e.message))
    }

    await this.contract.removeAdmin(accounts[1], { from: initOwner })
  })

  it('Add/Remove Self', async () => {
    // members
    await this.contract.addMember(accounts[1], { from: accounts[1] })
    await this.contract.removeMember(accounts[1], { from: accounts[1] })

    // moderators
    await this.contract.addModerator(accounts[1], { from: initOwner })
    await this.contract.removeModerator(accounts[1], { from: accounts[1] })

    // admin
    await this.contract.addAdmin(accounts[1], { from: initOwner })
    await this.contract.removeAdmin(accounts[1], { from: accounts[1] })
  })

  it('Transfer ownership', async () => {
    await this.contract.transferOwnership(accounts[1], { from: initOwner })
    let newOwner = await this.contract.owner.call()
    assert.equal(newOwner, accounts[1], 'Owner should have updated')

    try {
      const prevOwner = initOwner
      await this.contract.transferOwnership(accounts[2], { from: prevOwner })
      assert.fail()
    } catch (e) {
      assert.ok(/revert/.test(e.message))
    }

    await this.contract.transferOwnership(accounts[2], { from: accounts[1] })
    newOwner = await this.contract.owner.call()
    assert.equal(newOwner, accounts[2], 'Owner should be updated again')
  })
}

module.exports = {
  checkCommunityRoles
}
