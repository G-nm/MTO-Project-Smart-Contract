const ProjectToken = artifacts.require("ProjectToken");

module.exports = function (deployer) {
  deployer.deploy(ProjectToken, "1000000000");
};
