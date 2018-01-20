const EspeoTokenIco = artifacts.require('./EspeoTokenIco.sol');

contract('EspeoTokenIco', accounts => {

  it('should have initial supply of 1,000,000 units assigned to funds wallet', async () => {
    const fundsWallet = accounts[1];
    const espeoToken = await EspeoTokenIco.new(fundsWallet);

    const expectedSupply = 1000000 * Math.pow(10, 18);
    
    const totalSupply = await espeoToken.totalSupply();
    assert.equal(totalSupply, expectedSupply, 'Total supply mismatch');
    
    const fundsWalletBalance = await espeoToken.balanceOf(fundsWallet);
    assert.equal(fundsWalletBalance.toNumber(), expectedSupply, 'Initial funds wallet balance mismatch');
  });
});