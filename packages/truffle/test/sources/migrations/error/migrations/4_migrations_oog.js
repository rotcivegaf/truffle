const Loops = artifacts.require("Loops");

module.exports = async function(deployer) {
  await deployer.deploy(Loops);
};
