# Maintainer: Andrew Sun <adsun701 at gmail dot com>

pkgname=mingw-w64-proj
pkgver=7.0.0
pkgrel=1
arch=('any')
pkgdesc="Cartographic Projections library (mingw-w64)"
depends=('mingw-w64-crt' 'mingw-w64-sqlite' 'mingw-w64-libtiff' 'mingw-w64-curl')
makedepends=('mingw-w64-configure' 'mingw-w64-wine')
options=('!strip' '!buildflags' 'staticlibs')
license=('MIT')
url="https://proj.org/"
source=("https://github.com/OSGeo/PROJ/releases/download/${pkgver}/proj-${pkgver}.tar.gz")
sha256sums=('ee0e14c1bd2f9429b1a28999240304c0342ed739ebaea3d4ff44c585b1097be8')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  for _arch in ${_architectures}; do
    mkdir -p ${srcdir}/build-${_arch} && pushd ${srcdir}/build-${_arch}
    cp -rf "${srcdir}"/proj-${pkgver}/. ${srcdir}/build-${_arch}
    LIBS+=" -lssp" ${_arch}-configure \
      .
    make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "${srcdir}/build-${_arch}"
    make DESTDIR="${pkgdir}" install
    rm -rf "${pkgdir}"/usr/${_arch}/share
    ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.exe
    ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g "$pkgdir"/usr/${_arch}/lib/*.a
  done
}
