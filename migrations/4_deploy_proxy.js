const Proxy = artifacts.require('./Proxy.sol');

module.exports = async (deployer, network) => {
    await deployer.deploy(Proxy);
};
