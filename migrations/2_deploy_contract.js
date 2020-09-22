const DappToken = artifacts.require("DappToken");
const DappTokenSale = artifacts.require("DappTokenSale");
const Music = artifacts.require("Musicc");

module.exports = function(deployer) {
  var tokenPrice = 1000000000000000;
    deployer.deploy(DappToken, 1000000).then(function() {
      // Token price is 0.001 Ether
      deployer.deploy(Music,  DappToken.address);
      return deployer.deploy(DappTokenSale, DappToken.address, tokenPrice);
    });
  };

