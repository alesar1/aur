# Contributor: Graziano Giuliani <graziano.giuliani@poste.it>
# Contributor: Antonio Cervone <ant.cervone@gmail.com>

pkgname=metview
pkgver=5.8.3
pkgrel=1
pkgdesc="ECMWF interactive meteorological application"
arch=(i686 x86_64)
url="https://software.ecmwf.int/wiki/display/METV/Metview"
license=('APACHE')
groups=(science)
depends=('magics++>=4.0.0'
         qt5-xmlpatterns
         qt5-svg
         lapack
         snappy
         cgal)
makedepends=(rpcsvc-proto)
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
source=(https://software.ecmwf.int/wiki/download/attachments/3964985/Metview-${pkgver}-Source.tar.gz
        rpc.patch
        blas.patch
        gfortran.patch)

noextract=()
sha256sums=('a1b3245e851471c94ad36d3fbba75ad1f0517d9ba7b47137300227585d7487e6'
            'abd2f612ca08e9d2a7c288ab0d5512777411f9e6c6077e9b1ac62d4a444345a2'
            'c80aed03a542364af5ff177a49e04052d017f992f9139300249be31466170096'
            'a86a2a0c8c7a52c38f2c37d2366d0ff22beabf81723f8c6f9696a1743221c3f0')

prepare() {
  cd Metview-${pkgver}-Source
  patch --forward --strip=1 --input=$srcdir/rpc.patch
  patch --forward --strip=1 --input=$srcdir/blas.patch
  patch --forward --strip=1 --input=$srcdir/gfortran.patch
}

build() {
  cd Metview-${pkgver}-Source
  mkdir -p build && cd build
  cmake \
    -Dmagics_DIR=/usr/share/magics/cmake \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=production \
    -DCMAKE_INSTALL_DATADIR=/usr/share \
    -DPYTHON_EXECUTABLE=/usr/bin/python3 \
    ..

  make
}

package()
{
  cd Metview-${pkgver}-Source/build
  make DESTDIR="$pkgdir" install
}

# vim:set ts=2 sw=2 et:
