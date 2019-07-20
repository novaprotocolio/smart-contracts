const WETH = artifacts.require('./helper/WethToken.sol');

module.exports = async (deployer, network) => {
    await deployer.deploy(WETH);
};
