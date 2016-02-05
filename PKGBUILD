# Maintainer: Jakob Gahde <j5lx@fmail.co.uk>

pkgname=sjaakii
pkgver=1.2.1
pkgrel=1
pkgdesc="A XBoard chess engine that can play normal chess as well as a number of other games and chess variants"
arch=('i686' 'x86_64')
url="http://www.eglebbk.dds.nl/program/chess-index.html"
license=('GPL3')
makedepends=('cmake')
source=("http://www.eglebbk.dds.nl/program/download/${pkgname}-${pkgver}-src.tar.gz")
md5sums=('24771662d06592d45b255dda216378fc')

build() {
  cd "${srcdir}/SjaakII"

  [ -d build ] && rm -rf build
  mkdir build && cd build
  cmake .. \
      -DCMAKE_BUILD_TYPE=Release \
      -DCMAKE_INSTALL_PREFIX=/usr
  make
}

package() {
  cd "${srcdir}/SjaakII/build"

  make DESTDIR="${pkgdir}" install
}
