const TestToken = artifacts.require('./helper/TestToken.sol');

module.exports = async (deployer, network) => {
    await deployer.deploy(
        TestToken,
        process.env.NAME || process.env.SYMBOL || 'NovaToken',
        process.env.SYMBOL || 'Nova',
        18
    );
};
