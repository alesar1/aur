## Command line stock and cryptocurrency portfolio tracker.
#### How to install:
Before installation, make sure all dependencies are installed:
* curl
* json-c
* ncurses
```bash
$ git clone https://github.com/aokellermann/tick.git
$ cd tick
$ make
$ sudo make install
```
If you are an Arch user, you can install from the AUR.
```bash
$ yaourt -S tick
```
#### Portfolio
To update your portfolio, use the options add, rm, or set. You may use the
special string "USD$" to add US Dollars to your portfolio.
```bash
$ tick [add/rm/set] [symbol/crypto_id/USD$] [quantity of shares] [USD spent]
```
For example, to add 3 shares of Tesla bought for $918.12 total, run
```bash
$ tick add tsla 3 918.12
```
You can also specify the price per share instead of total spent:
```bash
$ tick add tsla 3 306.04ea
```

The parameter "add" will add your input to the current portfolio, "rm" will
subtract from your current portfolio, and "set" will set your portfolio to
the input, discarding any existing data about that security. Trading costs/fees
should be factored into your USD spent. When adding a cryptocurrency to your
portfolio, you must use the cryptocurrency's name. For instance, to add Ripple,
you must use "ripple" instead of "xrp". This is due to some cryptocurrency
tickers also being listed on the stock market, such as ETH.

To get info about your current holdings, run
```bash
$ tick check [symbol/crypto_id/sort_option]
```
Running "check" with no other arguments will list your entire portfolio
as well as produce a grand total. Adding the argument "-v", "-p", "-1",
or "-7" will sort the output by value, profit, one day profit, or seven
day profit. To check a single security, use the symbol or crypto_id as
the argument instead of sort options.

You may encrypt your portfolio using the RC4 algorithm
```bash
$ tick encrypt
```
and decrypt it with
```bash
$ tick decrypt
```
You can modify and check your portfolio without explicitly decrypting it.

#### Security Information

To get information about a security, you can use the info command.
```bash
$ tick info tsla
```

The graph command will print out a graph in your terminal of the historic
price of the given security. Cryptocurrencies aren't supported yet, due to
API constraints. You may press the UP arrow key to zoom in, the DOWN arrow
key to zoom out, the LEFT arrow to pan left, the RIGHT arrow to pan right,
or the letter "q" to quit.
```bash
$ tick graph [symbol]
```

The cmp command has the same functionality as graph, but is intended for
comparing two securities. The command takes two symbols as arguments.
Both graphs will be displayed. To com
```bash
$ tick cmp [symbol] [symbol]
```
To compare the graphs of Tesla and Ford, run
```bash
$ tick cmp tsla f
```

To get the top three news articles on a specific stock or cryptocurrency,
you can run
```bash
$ tick news [symbol]
```
If you wish to use spaces in your input, you can either surround the phrase
with quotes or replace spaces with underscores.

Once installed, you may read the man page for more information.

#### License
MIT License

Stock information is taken from IEX's free API. Mutual fund and over-the-counter
information is taken from and Morningstar's free API. Cryptocurrency information
is taken from Coinmarketcap's free API. News information is taken from News
API. Shortened links are provided by Google's URL Shortener API. Please do
not abuse the APIs by repeatedly requesting information. Read the provided
license for more information.
#### Future Ideas/To-do
* Historical support -- 7d/28d profits (wait for coinmarketcap historical release)
* Look for API to replace Morningstar for MUTF/OTCMKTS data, preferably with
intraday data (wait for iex v2 probably)
* DEB/RPM package
* List whether stock/etf/mutual fund/crypto/etc. in portfolio for less API calls
and portfolio distribution (tried to implement, but IEX API is unpredictable; wait for v2)
* Format prices with commas (set locale?)
* Function to add new attributes to portfolio if not found
* Maybe replace News API with IEX news endpoint
* Bookmark certain stocks (not included in portfolio)
* Zoom in more than one month for graph
* Average graph points when skipping indices for greater accuracy
* Android app?