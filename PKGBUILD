# Maintainer: eolianoe <eolianoe [at] gmail [DoT] com>

pkgname=coin-or-ipopt
pkgver=3.12.12
pkgrel=1
pkgdesc="Interior Point OPTimizer"
arch=('i686' 'x86_64')
url="https://projects.coin-or.org/Ipopt"
license=('EPL')
groups=('coin-or')
depends=('lapack')
makedepends=('gcc-fortran' 'wget')
source=("http://www.coin-or.org/download/source/Ipopt/Ipopt-$pkgver.tgz")
sha1sums=('2f008bbdc2ce88691d75b1de5ff49bc4e6b3cb5a')

prepare(){
  cd "$srcdir/Ipopt-$pkgver/ThirdParty/ASL" && ./get.ASL
  cd "$srcdir/Ipopt-$pkgver/ThirdParty/Metis" && ./get.Metis
  cd "$srcdir/Ipopt-$pkgver/ThirdParty/Mumps" && ./get.Mumps
}

build() {
  cd "$srcdir"
  mkdir -p build && pushd build
  "$srcdir/Ipopt-$pkgver/./configure" --prefix=/usr
  make
}

check() {
  cd "$srcdir/build"
  make tests
}

package() {
  cd "$srcdir/build"
  PKG_CONFIG_LIBDIR="${pkgdir}/usr/lib/pkgconfig/" \
  make DESTDIR="$pkgdir/" install
}

