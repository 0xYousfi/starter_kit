const Migrations = artifacts.require("EthSwap");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};