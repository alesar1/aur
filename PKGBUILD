# Maintainer: "Jan Kohnert <bughunter@jan-kohnert.de"
# Contributor: Graziano Giuliani <graziano.giuliani@poste.it>
pkgname=eccodes
pkgver=2.21.0
_attnum=45757960
pkgrel=1
pkgdesc="ECMWF decoding library for GRIB, BUFR and GTS"
arch=('i686' 'x86_64')
url="https://software.ecmwf.int/wiki/display/ECC/ecCodes+Home"
license=('Apache')
depends=('openjpeg' 'libpng' 'netcdf')
optdepends=('libaec: for compression' 'jasper: as an alternative to openjpeg')
makedepends=('gcc-fortran' 'cmake')
conflicts=('grib_api' 'libbufr-ecmwf')
source=(http://software.ecmwf.int/wiki/download/attachments/${_attnum}/${pkgname}-${pkgver}-Source.tar.gz)
sha512sums=('f2ba8361b99800646a92f5f5beb7ec2facf2ee3b8a3f7985d9681a23b2faae778004c8c688ebe4b3a8492e99c76422c66ecc8943d12d3342d5bc1d38362ccf06')

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
