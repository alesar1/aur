# Maintainer: James Spencer <james.s.spencer@gmail.com>

pkgname=cube-perf
_version=4.3
_patch=.4
pkgver=${_version}${_patch}
pkgrel=1
pkgdesc="Performance report explorer for displaying a multi-dimensional performance space."
arch=('i686' 'x86_64')
url="http://www.scalasca.org/software/cube-4.x/download.html"
license=('BSD')
depends=('qt4')
source=(http://apps.fz-juelich.de/scalasca/releases/cube/${_version}/dist/cube-${pkgver}.tar.gz)
sha1sums=('fd4c34996c1ea8002ddb771b6c23130bf6268926')
options=('!makeflags')

build() {
  cd "$srcdir/cube-$pkgver"
  ./configure --prefix=/usr --with-compression=full --with-qt=/usr/bin/qmake-qt4
  make
}

package() {
  cd "$srcdir/cube-$pkgver"
  make DESTDIR="$pkgdir/" install
  install -Dm644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/COPYING"
}
