const TestToken = artifacts.require('./helper/TestToken.sol');
const Proxy = artifacts.require('./Proxy.sol');
const HybridExchange = artifacts.require('./HybridExchange.sol');

module.exports = async (deployer, network) => {
    let tokenAddress = process.env.TOKEN_ADDRESS;
    if (!tokenAddress) {
        const token = await TestToken.deployed();
        tokenAddress = token.address;
    }
    console.log('tokenAddress', tokenAddress);

    let proxyAddress = process.env.PROXY_ADDRESS;
    if (!proxyAddress) {
        const proxy = await Proxy.deployed();
        proxyAddress = proxy.address;
    }
    console.log('proxyAddress', proxyAddress);

    await deployer.deploy(HybridExchange, proxyAddress, tokenAddress);
};
