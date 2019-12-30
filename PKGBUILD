# Maintainer: Sérgio Gomes <superherointj at gmail dot com>

pkgname=ponyup
pkgver=0.4.0
pkgrel=1
pkgdesc="The Pony language toolchain multiplexer"
arch=('x86_64')
url="https://github.com/ponylang/ponyup"
license=('BSD')
depends=('openssl')
makedepends=('git' 'ponyc' 'pony-stable')
source=(
  "$pkgname-$pkgver.tar.gz::https://github.com/ponylang/ponyup/archive/$pkgver.tar.gz"
  "ponyup.sh"
)
sha256sums=(
  'c83e792d5b82d1370f1bcb73e820b2bdf0f55015f04880d7a62593947c1d05cd'
  'e3685b937791d8fbd1a7d5181163395805d9454611ae384633603973f4b2fd6a'
)
install=ponyup.install

prepare() {
    cd "$pkgname"-"$pkgver"
    stable fetch
}

build() {
    cd "$pkgname"-"$pkgver"
    make BUILD_DIR="./build" ssl="1.1.x" arch="x86-64" version="$pkgver" static=false linker=bfd
}

package() {
    cd "$pkgname"-"$pkgver"
    install -D -m755 ./build/ponyup "$pkgdir"/usr/bin/ponyup
    install -D -m644 "$srcdir"/ponyup.sh "$pkgdir"/etc/profile.d/ponyup.sh
    install -D -m644 ./LICENSE "$pkgdir"/usr/share/licenses/"$pkgname"
}