const Proxy = artifacts.require('./Proxy.sol');
const HybridExchange = artifacts.require('./HybridExchange.sol');
module.exports = async (deployer, network) => {
    const proxy = await Proxy.deployed();
    let exchangeAddress = process.env.EXCHANGE_ADDRESS;
    if (!exchangeAddress) {
        const exchange = await HybridExchange.deployed();
        exchangeAddress = exchange.address;
    }
    console.log('exchangeAddress', exchangeAddress);

    await proxy.addAddress(exchangeAddress);
};
