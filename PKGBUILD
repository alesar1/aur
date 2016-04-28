# Maintainer: Chan Beom Park <cbpark@gmail.com>

_pkgname=LoopTools
pkgname=looptools
pkgver=2.13
pkgrel=5
pkgdesc="package for evaluation of scalar and tensor one-loop integrals"
arch=("i686" "x86_64")
url="http://www.feynarts.de/looptools"
license=('GPL3')
depends=("gcc-fortran")
options=('staticlibs')
source=("http://www.feynarts.de/looptools/${_pkgname}-$pkgver.tar.gz")
sha256sums=('8065eb9b7546cea34a9ad77d67f4efd440a58c6548e66e7f1761ecee41605bc3')

build() {
  cd "${_pkgname}-$pkgver"
  ./configure --prefix=/usr
  sed -i 's/LIBDIR = $(PREFIX)\/lib$(LIBDIRSUFFIX)/LIBDIR = $(PREFIX)\/lib/' makefile
  make
}

package() {
  cd "${_pkgname}-$pkgver"
  make PREFIX="$pkgdir/usr" install
  install -D -m644 COPYING "$pkgdir/usr/share/licenses/$pkgname/COPYING"
  cd $pkgdir/usr/bin
  mv fcc fcc-looptools; rm -f f++; ln -sf fcc-looptools f++-looptools
}
