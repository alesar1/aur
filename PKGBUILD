# Maintainer: "Jan Kohnert <bughunter@jan-kohnert.de"
# Contributor: Graziano Giuliani <graziano.giuliani@poste.it>
pkgname=eccodes
pkgver=2.20.0
_attnum=45757960
pkgrel=2
pkgdesc="ECMWF decoding library for GRIB, BUFR and GTS"
arch=('i686' 'x86_64')
url="https://software.ecmwf.int/wiki/display/ECC/ecCodes+Home"
license=('Apache')
depends=('openjpeg' 'libpng' 'netcdf')
optdepends=('libaec: for compression' 'jasper: as an alternative to openjpeg')
makedepends=('gcc-fortran' 'cmake')
conflicts=('grib_api' 'libbufr-ecmwf')
source=(http://software.ecmwf.int/wiki/download/attachments/${_attnum}/${pkgname}-${pkgver}-Source.tar.gz)
sha512sums=('ea2953987c4713b230e6d75ad5ae1dbbeea2633d1caf60614ececfe2fabe07d7c794baf120f5df82716f37b2540f7f6a6cd82f04070a78bf65dc7d499ca50dc0')

build() {
  cd "$srcdir"/${pkgname}-${pkgver}-Source
  sed -i 's/image.inmem_.*=.*1;//' src/grib_jasper_encoding.c
  mkdir -p build
  cd build
  [ $(pacman -Qq libaec 2>/dev/null) ] && use_aec="ON" || use_aec="OFF"
  [ $(pacman -Qq jasper 2>/dev/null) ] && use_jasper="ON" || use_jasper="OFF"
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=production \
    -DCMAKE_INSTALL_DATAROOTDIR=/usr/share/$pkgname/definitions \
    -DCMAKE_INSTALL_DATADIR=/usr/share -DENABLE_AEC=$use_aec \
    -DENABLE_PNG=ON -DENABLE_ECCODES_THREADS=ON -DENABLE_JPG=ON \
    -DENABLE_JPG_LIBOPENJPEG=ON -DENABLE_JPG_LIBJASPER=$use_jasper ..
  make
}

check() {
    cd "$srcdir"/${pkgname}-${pkgver}-Source/build
    make test
}

package() {
  cd "$srcdir"/${pkgname}-${pkgver}-Source/build
  make DESTDIR="$pkgdir" install
}
