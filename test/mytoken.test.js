const { expect } = require("chai");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("MyToken");

    const hardhatToken = await Token.deploy(1000000);

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    const totalSupply = await hardhatToken.totalSupply()
    expect(totalSupply.toBigInt()).to.equal(ownerBalance.toBigInt());
  });
});
