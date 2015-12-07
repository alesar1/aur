# Maintainer: Lukas Jirkovsky <l.jirkovsky@gmail.com>
# Contributor: Brandon Andrews <bsa@bsa.isa-geek.com>
# Contributor: Mael Kerbiriou <mael.kerbiriouATfreeDOTfr>
pkgname=pfstools
pkgver=2.0.4
pkgrel=2
pkgdesc="Set of command line programs for reading, writing and manipulating high-dynamic range (HDR) images"
arch=('i686' 'x86_64')
url="http://pfstools.sourceforge.net/"
license=('LGPL2.1')
depends=('gcc-libs')
provides=('pfscalibration' 'pfstmo')
conflicts=('pfscalibration' 'pfstmo')
optdepends=('freeglut: OpenGL image viewer' 'glu: OpenGL image viewer' \
            'qt4: Qt GUI' 'opencv: pfsalign' \
            'openexr: OpenEXR support' 'imagemagick: ImageMagick support' \
            'netpbm: PBM support' 'dcraw: RAW support' \
            'gsl: mantiuk08 tone mapping operator' \
            'fftw: durand02 tone mapping operator')
makedepends=('cmake' 'openexr' 'imagemagick' 'libtiff' 'freeglut' 'glu' 'netpbm' 'qt4')
options=(!libtool)
source=(http://downloads.sourceforge.net/pfstools/$pkgname-$pkgver.tgz)
md5sums=('f17e2834798cda75d32b2fcd11826d82')

build() {
  cd "$srcdir"/$pkgname-$pkgver
  mkdir -p build
  cd build

  cmake .. \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release

  make
}

package() {
  cd "$srcdir"/$pkgname-$pkgver/build
  make DESTDIR="$pkgdir/" install

  cd "$pkgdir"/usr/bin
  chmod 755 *
}
