# Maintainer: Tom Zander

pkgname=fulcrum
pkgdesc='A fast & nimble SPV server for Bitcoin Cash'
pkgver=1.2.12
pkgrel=1
url='https://gitlab.com/FloweeTheHub/fulcrum'
arch=('x86_64')
license=('GPL3')
depends=(
  'qt5-base'
  'rocksdb'
  'python'
)
optdepends=('jemalloc: reduce memory fragmentation')
backup=('etc/fulcrum.conf')
install=fulcrum.install
provides=("$pkgname")
source=(
    "https://gitlab.com/FloweeTheHub/fulcrum/-/archive/v$pkgver/fulcrum-v$pkgver.tar.gz"
    "fulcrum.conf"
)
sha256sums=('3fb0f0bd2fc0009fea8cfe4a908be201b07b458dfaf16dd12786a97811131c8a'
    '975025a1810178a7ec32dc4bd8cd5767a68d21378ec65baf9708f6d5b3842a1b'
)

prepare() {
  cd "fulcrum-v$pkgver"
  qmake -makefile CONFIG+=recheck CONFIG+=release Fulcrum.pro
}

build() {
  cd "fulcrum-v$pkgver"
  make
}

package() {
    install -Dm 775 "$srcdir/fulcrum-v$pkgver/Fulcrum" -T "$pkgdir/usr/bin/fulcrum"
    install -Dm 775 "$srcdir/fulcrum-v$pkgver/FulcrumAdmin" -T "$pkgdir/usr/bin/fulcrum-admin"
    install -Dm 664 "$srcdir/fulcrum.conf" -t "$pkgdir/etc/"
}
