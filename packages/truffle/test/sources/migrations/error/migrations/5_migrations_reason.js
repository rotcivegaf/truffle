const RevertWithReason = artifacts.require("RevertWithReason");

module.exports = async function(deployer) {
  await deployer.deploy(RevertWithReason);
};
