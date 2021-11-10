# Maintainer: Tom Zander

pkgname=flowee-pay
pkgver=2021.06.0
pkgrel=1
pkgdesc="Flowee Payment solution"
arch=('x86_64' 'aarch64')
url="http://flowee.org/"
license=('GPL3')
depends=('qt5-base')
makedepends=('boost' 'cmake' 'flowee>=2021.06.0')
provides=('flowee-pay')
source=("https://gitlab.com/FloweeTheHub/pay/-/archive/$pkgver/pay-$pkgver.tar.gz"
    "https://flowee.org/products/pay/blockheaders")
sha256sums=('892926867f92e521f3ae0bf4d047e63d45b757d40d114f4d51c494a52b4ce0ec'
    '8c2dfde998b4472aea25daa1e4bfe7bcca0b765145ee740bd8cfb0152400abce')

build() {
  mkdir -p build
  cd build
  cmake -DCMAKE_BUILD_TYPE:STRING=Release -DCMAKE_INSTALL_PREFIX=$pkgdir/usr/ ../pay-$pkgver
  make
}

check() {
    cd build/testing
    make check
}

package() {
  cd build
  make install

  install -Dm 644 "$srcdir/blockheaders" -t "$pkgdir/usr/share/floweepay"
  install -Dm 644 "$srcdir/pay-$pkgver/data/bip39-english" -t "$pkgdir/usr/share/floweepay"
}
