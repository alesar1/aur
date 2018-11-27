# Maintainer: Andrew Sun <adsun701@gmail.com>

pkgname=mingw-w64-tslib
_pkgname=tslib
pkgver=1.18
pkgrel=1
pkgdesc="Touchscreen Access Library (mingw-w64)"
arch=('any')
url="https://github.com/kergoth/tslib"
license=('GPL2')
makedepends=('mingw-w64-configure')
depends=('mingw-w64-crt')
options=('!strip' '!buildflags' 'staticlibs')
source=("https://github.com/kergoth/tslib/releases/download/${pkgver}/${_pkgname}-${pkgver}.tar.xz")
sha256sums=('986cce6d8ed896c0eba68d78acd788c7860ffe8a2165a9f631954e7f2889958b')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}/"
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch} && pushd build-${_arch}
    ${_arch}-configure \
      --sysconfdir=/usr/${_arch}/etc \
      --disable-input \
      --disable-touchkit \
      --disable-waveshare \
      ..
    make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "${srcdir}/${_pkgname}-${pkgver}/build-${_arch}"
    make DESTDIR="${pkgdir}" install
    ${_arch}-strip --strip-unneeded "${pkgdir}"/usr/${_arch}/bin/*.exe
    ${_arch}-strip --strip-unneeded "${pkgdir}"/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g "${pkgdir}"/usr/${_arch}/lib/*.a
    ${_arch}-strip --strip-unneeded "${pkgdir}"/usr/${_arch}/lib/ts/*.dll
    ${_arch}-strip -g "${pkgdir}"/usr/${_arch}/lib/ts/*.a
  done
}
