const BN = require("bignumber.js");
let amount = BN("1e28");
console.log(amount);

const MyToken = artifacts.require("MyToken");

module.exports = function (deployer) {
  deployer.deploy(MyToken, amount);
};
