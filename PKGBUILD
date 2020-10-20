# Maintainer: Amy Wilson <awils_1 at xsmail dot com>
pkgname="wyvern"
pkgver="1.4.1"
pkgrel="2"
pkgdesc="Command-line tool written in rust that is meant to make downloading GOG games and associated activities easier and faster on linux."
arch=("x86_64")
url="https://git.sr.ht/%7Enicohman/wyvern/"
license=("GPL")
makedepends=("rust")
depends=("curl")
source=("$pkgname-$pkgver.tar.gz::https://git.sr.ht/%7Enicohman/$pkgname/archive/${pkgver}.tar.gz")
md5sums=('2079044e8b513db7367ca44fec11c169')

build() {
  cd ${pkgname}-${pkgver}
  cargo build --release
}

package() {
  cd ${pkgname}-${pkgver}
  install -Dm 755 "target/release/${pkgname}" -t "$pkgdir/usr/bin"
}

