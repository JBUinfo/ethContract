const FirstContract = artifacts.require("firstContract");

module.exports = function(deployer) {
  deployer.deploy(FirstContract);
};
