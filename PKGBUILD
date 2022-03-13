# Maintainer: "Jan Kohnert <bughunter@jan-kohnert.de"
# Contributor: Graziano Giuliani <graziano.giuliani@poste.it>
pkgname=eccodes
pkgver=2.25.0
_attnum=45757960
pkgrel=1
pkgdesc="ECMWF decoding library for GRIB, BUFR and GTS"
arch=("i686" "x86_64")
url="https://software.ecmwf.int/wiki/display/ECC/ecCodes+Home"
license=("Apache")
depends=("openjpeg2" "netcdf")
makedepends=("gcc-fortran" "cmake")
conflicts=("grib_api" "libbufr-ecmwf")
source=(
    "${pkgname}-${pkgver}-Source.tar.gz::https://confluence.ecmwf.int/download/attachments/${_attnum}/${pkgname}-${pkgver}-Source.tar.gz?api=v2"
    "http://download.ecmwf.org/test-data/eccodes/eccodes_test_data.tar.gz"
)
sha512sums=(
    "b6c675e9bb7377120ae0eb5f1601c3980925b78f240aa26e46cf50ce0d64c5566a4191c83b2ca6ab11fcbcadb70bad1f2c4e188adc245dcf2237292bd359078d"
    "553eb69f3664c2f847c5ee7a84066e814ef03b3148ae2c13d845891038336daca815673650f1d06efee4f4a1ddaa4326f2ddfbe81d29382e3f25608b249b8d9e"
)
    
prepare() {
    mkdir -p "$srcdir"/${pkgname}-${pkgver}-Source/build
    mv data "$srcdir"/${pkgname}-${pkgver}-Source/build/
}

build() {
    cd "$srcdir"/${pkgname}-${pkgver}-Source
    mkdir -p build
    cd build
    cmake -DCMAKE_BUILD_TYPE=production -DCMAKE_INSTALL_DATADIR=/usr/share \
        -DCMAKE_INSTALL_DATAROOTDIR=/usr/share/$pkgname/definitions \
        -DCMAKE_INSTALL_PREFIX=/usr -DENABLE_AEC=ON \
        -DENABLE_ECCODES_THREADS=ON -DENABLE_EXTRA_TESTS=ON -DENABLE_JPG=ON \
        -DENABLE_JPG_LIBJASPER=OFF -DENABLE_JPG_LIBOPENJPEG=ON -DENABLE_PNG=ON ..
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
