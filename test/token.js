const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('ERC20 Token Contract', async () => {
  let token;
  let signer1;
  let signer2;
  beforeEach(async () => {
    [signer1, signer2] = await ethers.getSigners();
    const Token = await ethers.getContractFactory('Token');
    token = await Token.deploy();
  });
  it('Check Token Name', async () => {
    let name = await token.name();
    console.log('Name of the Token ', name);
    expect(name).to.be.equal('RohitSah');
  });
  it('Check Token Symbol ', async () => {
    let symbol = await token.symbol();
    console.log('Symbol of the Token ', symbol);
    expect(symbol).to.be.equal('RHT');
  });
  it('Check Total Supply', async () => {
    let totalSupply = await token.totalSupply();
    console.log('TotalSupply of the Token ', totalSupply);
    expect(totalSupply).to.be.equal(0);
  });
  it('Check Minted Token & Transfer Token to Address 2', async () => {
    await token.mint();
    console.log('Balance of Address 1', await token.balanceOf(signer1.address));
    console.log('Balance of Address 2', await token.balanceOf(signer2.address));
    await token.transfer(signer2.address, 50);
    expect(await token.balanceOf(signer1.address)).to.be.equal(950);
    console.log('Balance of Address 1', await token.balanceOf(signer1.address));
    console.log('Balance of Address 2', await token.balanceOf(signer2.address));
  });
});
