# Contributor: Anton Bazhenov <anton.bazhenov at gmail>
# Contributor: Graziano Giuliani <graziano.giuliani@poste.it>

pkgname=grib_api
pkgver=1.20.0
_attnum=3473437
pkgrel=2
pkgdesc="A program interface for encoding and decoding GRIB messages"
arch=('i686' 'x86_64')
url="https://software.ecmwf.int/wiki/display/GRIB/Home"
license=('Apache')
depends=('openjpeg' 'libpng' 'python2' 'netcdf')
optdepends=('libaec: for compression' 'jasper: as an alternative to openjpeg')
makedepends=('gcc-fortran' 'python2' 'python2-numpy' 'cmake')
provides=('grib_api')
replaces=('grib_api' 'grib_def')
conflicts=('grib_def')
source=(http://software.ecmwf.int/wiki/download/attachments/${_attnum}/${pkgname}-${pkgver}-Source.tar.gz)
md5sums=('1137dfc0b8e933f2dacb1b6da7e8a5e2')

build() {
  cd "$srcdir"/${pkgname}-${pkgver}-Source
  sed -i 's/image.inmem_.*=.*1;//' src/grib_jasper_encoding.c
  mkdir -p build
  cd build
  [ -x /usr/bin/aec ] && has_aec=1 || has_aec=0
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=production \
    -DCMAKE_INSTALL_DATAROOTDIR=/usr/share/$pkgname/definitions \
    -DCMAKE_INSTALL_DATADIR=/usr/share -DENABLE_AEC=$has_aec \
    -DENABLE_PNG=1 -DENABLE_GRIB_THREADS=1 \
    -DOPENJPEG_INCLUDE_DIR=`pkg-config --variable=includedir libopenjpeg` \
    -DPYTHON_EXECUTABLE=/usr/bin/python2 ..
  make || return 1
}

package() {
  cd "$srcdir"/${pkgname}-${pkgver}-Source/build
  make DESTDIR="$pkgdir" install || return 1
}
