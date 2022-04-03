# Installation
## Necessary configuration
### bitcoind
1. `sudo nano /etc/bitcoin/bitcoin.conf` and set "rpcuser=" and "rpcpassword=" how you like and "whitelist=127.0.0.1". You will need those credentials later. Optionally, uncomment "prune=550".

### NBXplorer
1. `nano ~/.nbxplorer/Main/settings.config` and set "btc.rpc.auth=" according to the priorly set values in the bitcoin configuration file.

### BTCPayServer
1. `nano ~/.btcpayserver/Main/settings.config` and configure your database.

## Optional configuration
Information on the lightning connection string can be found [here](https://github.com/btcpayserver/BTCPayServer.Lightning). Decide for one lightning implementation.

### c-lightning
1. `nano ~/.btcpayserver/Main/settings.config` and add the setting "BTC.lightning=type=clightning;server=unix://home/USERNAME/.lightning/lightning-rpc".

### LND
1. `lnd` as a private key needs to be generated.
2. `lncli create` and create your necessary wallet or restore an existing one.
3. `sudo nano /etc/bitcoin/bitcoin.conf` and add the following settings.
```
zmqpubrawblock=tcp://127.0.0.1:28332
zmqpubrawtx=tcp://127.0.0.1:28333
```
4. `nano ~/.btcpayserver/Main/settings.config` and append the output of `openssl x509 -noout -fingerprint -sha256 -in ~/.lnd/tls.cert | sed -e "s/.*=//;s/://g"` to the file line "BTC.lightning=type=lnd-rest;server=https://127.0.0.1:8080/;macaroonfilepath=/home/USERNAME/.lnd/data/chain/bitcoin/mainnet/admin.macaroon;certthumbprint=".

## Required services
1. bitcoind.service

# Usage
* Finally, all software needs to be run. The following shows how to run the software and its dependencies with `tmux`.
* Start:
```
tmux new-session -s c-lightning -d "lightningd --network bitcoin --bitcoin-rpcuser USERNAME --bitcoin-rpcpassword PASSWORD --rpc-file /home/USERNAME/.lightning/lightning-rpc --log-level info;bash -i"
```
or
```
tmux new-session -s lnd -d "lnd --bitcoin.active --bitcoin.mainnet --bitcoin.node bitcoind --bitcoind.rpcuser USERNAME --bitcoind.rpcpass PASSWORD --bitcoind.zmqpubrawblock tcp://127.0.0.1:28332 --bitcoind.zmqpubrawtx tcp://127.0.0.1:28333 --externalip localhost;bash -i"
lncli unlock
```

```
tmux new-session -s nbxplorer -d "nbxplorer;bash -i"
tmux new-session -s btcpayserver -d "btcpayserver;bash -i"
```
* Stop:
```
tmux kill-session -t c-lightning
```
or
```
tmux kill-session -t lnd
```

```
tmux kill-session -t nbxplorer
tmux kill-session -t btcpayserver
```
