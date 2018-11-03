# Maintainer: Andrew Sun <adsun701@gmail.com

pkgname=mingw-w64-geos
pkgver=3.7.0
pkgrel=1
pkgdesc="C++ port of the Java Topology Suite (mingw-w64)"
arch=('any')
url="http://trac.osgeo.org/geos/"
license=('LGPL')
depends=('mingw-w64-crt')
makedepends=('mingw-w64-cmake')
options=('!emptydirs' '!buildflags' '!strip' 'staticlibs')
source=("http://download.osgeo.org/geos/geos-${pkgver}.tar.bz2"
        "geos-3.5.0.patch")
sha256sums=('4fbf41a792fd74293ab59e0a980e8654cd411a9d45416d66eaa12d53d1393fd7'
            '206f8780b8da547d3fd1bbc3ffb827abc71ec0e5d90a217db2032fe481807992')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

prepare() {
  cd "${srcdir}/geos-${pkgver}"
  patch -Np1 -i "${srcdir}/geos-3.5.0.patch"
}

build() {
  cd "${srcdir}/geos-${pkgver}"
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch} && pushd build-${_arch}
    ${_arch}-cmake \
      -DGEOS_ENABLE_INLINE=OFF \
      ..
    make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "${srcdir}/geos-${pkgver}/build-${_arch}"
    make DESTDIR="${pkgdir}" install
    install -d "$pkgdir"/usr/bin
    ln -s /usr/${_arch}/bin/${_arch}-geos-config "$pkgdir"/usr/bin/${_arch}-geos-config
    ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g "$pkgdir"/usr/${_arch}/lib/*.a
  done
}
