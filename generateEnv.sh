#!/bin/bash

DIR=$(dirname $0) ;

getAddress() {
    jq .networks $DIR/build/contracts/$1.json | jq -rc .[].address
}

echo REACT_APP_NOVA_PROXY_ADDRESS=`getAddress Proxy` \
REACT_APP_NOVA_TOKEN_ADDRESS=`getAddress TestToken` \
REACT_APP_WETH_TOKEN_ADDRESS=`getAddress WethToken`

echo NSK_NOVA_TOKEN_ADDRESS=`getAddress TestToken` \
NSK_HYBRID_EXCHANGE_ADDRESS=`getAddress HybridExchange` \
NSK_PROXY_ADDRESS=`getAddress Proxy`