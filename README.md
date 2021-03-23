# Installation
## Necessary configuration
### bitcoind
1. `sudo nano /etc/bitcoin/bitcoin.conf` and uncomment "prune=550". Set "rpcuser=" and "rpcpassword=" how you like. You will need those values later.
2. `sudo nano /etc/bitcoin/bitcoin.conf` and add the following to the `[main]` block which is at the end of the file.
```
whitelist=127.0.0.1
zmqpubrawblock=tcp://127.0.0.1:28332
zmqpubrawtx=tcp://127.0.0.1:28333
```

### lnd
1. Start lnd.
2. `lncli create` and create your necessary wallet.

### nbxplorer
1. `nano ~/.nbxplorer/Main/settings.config` and set "btc.rpc.auth=" according to the priorly set values in the bitcoin configuration file.

### btcpayserver
1. `nano ~/.btcpayserver/Main/settings.config` and uncomment the SQLite database line. Alternatively, a different database can be used instead.
2. `nano ~/.btcpayserver/Main/settings.config` and append the output of `openssl x509 -noout -fingerprint -sha256 -inform pem -in ~/.lnd/tls.cert` to the file line `BTC.lightning=type=lnd-rest;server=https://127.0.0.1:8080/;macaroonfilepath=/home/USERNAME/.lnd/data/chain/bitcoin/mainnet/admin.macaroon;certthumbprint=`.

### nginx
* You can use any HTTP server which supports reverse proxying. Instructions are given for nginx.
1. `sudo nano /etc/nginx/nginx.conf` and configure your nginx server as a reverse HTTP proxy to the btcpayserver HTTP server. Additional headers are needed as otherwise the website will show an error that HTTPS is not used. You also need to create SSL keys.
```
http
{
    # Variables
    map $scheme $proxy_x_forwarded_ssl
    {
        default off;
        https on;
    }

    map $http_upgrade $proxy_connection
    {
        default upgrade;
        "" close;
    }

    server
    {
        listen          443 ssl;
        server_name     subdomain.domain.me;

        # SSL
        include /etc/letsencrypt/options-ssl-nginx.conf;
        ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
        ssl_certificate_key /etc/letsencrypt/live/subdomain.domain.me/privkey.pem;
        ssl_certificate /etc/letsencrypt/live/subdomain.domain.me/fullchain.pem;

        location /
        {
            # Proxy
            proxy_pass          http://localhost:5285;
            proxy_http_version  1.1;
            proxy_set_header    Host $host;
            proxy_set_header    Upgrade $http_upgrade;
            proxy_set_header    Connection $proxy_connection;
            proxy_set_header    X-Forwarded-For $remote_addr;
            proxy_set_header    X-Forwarded-Proto $scheme;
            proxy_set_header    X-Forwarded-Ssl $proxy_x_forwarded_ssl;
            proxy_set_header    X-Forwarded-Port $server_port;
        }
    }
}
```

## Required services
1. `sudo systemctl start bitcoind.service`
2. `sudo systemctl enable bitcoind.service`

## Usage
* Start: `tmux new-session -s lnd -d "lnd --externalip=EXTERNAL_IP_ADDRESS --bitcoin.active --bitcoin.mainnet --bitcoin.node=bitcoind --bitcoind.rpcuser=USERNAME --bitcoind.rpcpass=PASSWORD --bitcoind.zmqpubrawblock=tcp://127.0.0.1:28332 --bitcoind.zmqpubrawtx=tcp://127.0.0.1:28333";lncli unlock;nbxplorer-start;btcpayserver-start`
* Stop: `tmux kill-session -t lnd;nbxplorer-stop;btcpayserver-stop`
