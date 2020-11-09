# Maintainer: skwerlman <skw@tetrarch.co>
# Contributor: Ethan Rakoff <ethan@ethanrakoff.com>
# Contributor: Scott Linder <scott.linder18@gmail.com>
# Contributor: Jorge Araya Navarro <elcorreo@deshackra.com>
# Contributor: Mikhail Burakov <mikhail.burakov@gmail.com>

pkgname=cockatrice-client-git
pkgver=2.7.5
pkgrel=2
pkgdesc='Open-source multiplatform supported program for playing tabletop card games over a network.'
arch=('i686' 'x86_64')
url='https://cockatrice.github.io/'
license=('GPL2')
depends=('protobuf' 'qt5-svg' 'qt5-tools' 'qt5-multimedia' 'qt5-websockets')
makedepends=('cmake' 'git' 'zlib')
checkdepends=('gtest' 'valgrind')
optdepends=('zlib: Support compressed MTGJSON')
provides=('cockatrice-client')
conflicts=('cockatrice-client')
source=("git+https://github.com/Cockatrice/Cockatrice")
sha256sums=('SKIP')

build() {
  cd "$srcdir/Cockatrice"
  test -d build && rm -rf build
  mkdir build
  cd build
  cmake -DCMAKE_INSTALL_PREFIX:PATH=/usr -DWITH_ORACLE=1 -DWITH_CLIENT=1 -DWITH_DBCONVERTER=1 -DWITH_SERVER=0 -DTEST=1 ..
  make
}

check() {
  cd "$srcdir/Cockatrice/build"
  make test
}

package() {
  cd "$srcdir/Cockatrice/build"
  make DESTDIR="$pkgdir/" install
}
