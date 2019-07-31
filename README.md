## Nova Protocol

> Nova Protocol is an open-source framework for building decentralized exchanges on Ethereum.

![](./images/nova_small.jpg)

Nova is designed for developers looking to build decentralized exchanges without having to deal with the complexity and expense of designing, deploying, and securing their own smart contracts.

## Features

Nova 1.0 contains a single exchange contract called `HybridExchange.sol` with the following attributes:

* No order collision
* No possibility of front-running
* Accurate market orders
* Ability to collect fees as a percentage of the traded assets
* Allows asymmetrical maker/taker fee structure, rebates, discounts
* Multiple settlement models:
  * Wallet to wallet mode
  * Contract-deposit mode (supports ETH)
* Highly optimized gas usage

## Installation

```bash
yarn
```
To build json ABI files:

```bash
yarn compile
```

## Tests

```bash
yarn coverage
```

## Deploy new token
```bash
NAME=TriToken SYMBOL=Tri yarn deploy-token
```

## Play with myetherwallet
```bash
# get abi then copy and paste into contract field on myetherwallet addon
jq -c .abi build/contracts/Proxy.json | it2copy
```