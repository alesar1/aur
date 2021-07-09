# Maintainer: "Jan Kohnert <bughunter@jan-kohnert.de"
# Contributor: Graziano Giuliani <graziano.giuliani@poste.it>
pkgname=eccodes
pkgver=2.22.1
_attnum=45757960
pkgrel=1
pkgdesc="ECMWF decoding library for GRIB, BUFR and GTS"
arch=('i686' 'x86_64')
url="https://software.ecmwf.int/wiki/display/ECC/ecCodes+Home"
license=('Apache')
depends=('openjpeg2' 'netcdf')
makedepends=('gcc-fortran' 'cmake')
conflicts=('grib_api' 'libbufr-ecmwf')
source=(http://software.ecmwf.int/wiki/download/attachments/${_attnum}/${pkgname}-${pkgver}-Source.tar.gz)
sha512sums=('86818604eca75a34c8ce0cf0540d255c0db2d92bf03970a65c972fb2a16b6c472f6dcebfd04bdac4b76b8db2fcf2ed4dfa8a70875eaf1353a775fc185e5de9a0')

build() {
    cd "$srcdir"/${pkgname}-${pkgver}-Source
    mkdir -p build
    cd build
    cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=production \
        -DCMAKE_INSTALL_DATAROOTDIR=/usr/share/$pkgname/definitions \
        -DCMAKE_INSTALL_DATADIR=/usr/share -DENABLE_AEC=ON \
        -DENABLE_PNG=ON -DENABLE_ECCODES_THREADS=ON -DENABLE_JPG=ON \
        -DENABLE_JPG_LIBOPENJPEG=ON -DENABLE_JPG_LIBJASPER=OFF ..
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
