pkgname=electrum-ltc-git
pkgver=3.3.5.1.git20190514.7db15b9
pkgrel=1
pkgdesc='Litecoin thin client'
arch=(any)
url=https://electrum-ltc.org/
license=(MIT)
depends=(desktop-file-utils
         libsecp256k1
         python-aiohttp
         python-aiohttp-socks
         python-aiorpcx
         python-btchip
         python-certifi
         python-dnspython
         python-ecdsa
         python-jsonrpclib-pelix
         python-matplotlib
         python-protobuf
         python-pyaes
         python-pycryptodomex
         python-pyqt5
         python-qrcode
         python-scrypt
         python-websocket-client
         zbar)
makedepends=(git python-requests)
source=(git+https://github.com/pooler/electrum-ltc)
sha256sums=(SKIP)

pkgver() {
  cd electrum-ltc
  printf %s.git%s "$(grep -om1 '[0-9.]*' electrum_ltc/version.py)" \
                  "$(git log -1 --format=%ad.%h --date=format:%Y%m%d --abbrev=7)"
}

build() {
  cd electrum-ltc
  protoc --proto_path=electrum_ltc --python_out=electrum_ltc electrum_ltc/paymentrequest.proto
  contrib/make_locale
  ./setup.py build
}

package() {
  cd electrum-ltc
  ./setup.py install -O1 --root="$pkgdir" --skip-build
  install -Dm644 AUTHORS README.rst RELEASE-NOTES -t "$pkgdir"/usr/share/doc/electrum-ltc
  install -Dm644 LICENCE -t "$pkgdir"/usr/share/licenses/$pkgname
}
