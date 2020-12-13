const DappToken = artifacts.require("DappToken");
const DappTokenSale = artifacts.require("DappTokenSale");
const Music = artifacts.require("Musicc");
const MusicContract = artifacts.require("MusicContract");

module.exports = async function(deployer) {
  var tokenPrice = 1000000000000000;
    //deployer.deploy(DappToken, 1000000).then(async function() {
      deployer.deploy(DappToken, "MSIC Token", "MSIC").then(async function() {
      // Token price is 0.001 Ether
      await deployer.deploy(MusicContract, DappToken.address, tokenPrice);
      await deployer.deploy(Music, DappToken.address, MusicContract.address);
      return deployer.deploy(DappTokenSale, DappToken.address, tokenPrice);
    });
  };

