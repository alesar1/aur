# Contributor: Anton Bazhenov <anton.bazhenov at gmail>
# Contributor: Graziano Giuliani <graziano.giuliani@poste.it>

pkgname=grib_api
pkgver=1.17.0
_attnum=3473437
pkgrel=1
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
md5sums=('bca7114d2c3100501a08190a146818d2')

build() {
  cd "$srcdir"/${pkgname}-${pkgver}-Source
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
