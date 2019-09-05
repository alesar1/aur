# Maintainer: Andrew Sun <adsun701@gmail.com>
# Contributor: David Schury <dasc@posteo.de>

pkgname=mingw-w64-libsigc++
_pkgname=libsigc++
pkgver=3.0.0
pkgrel=1
pkgdesc="Libsigc++ implements a full callback system for use in widget libraries - V2 (mingw-w64)"
arch=('any')
url="https://libsigcplusplus.github.io/libsigcplusplus/"
license=('LGPL')
makedepends=('mingw-w64-gcc' 'mingw-w64-configure')
depends=('mingw-w64-crt')
options=('!strip' '!buildflags' 'staticlibs')
source=("http://ftp.gnome.org/pub/GNOME/sources/$_pkgname/${pkgver%.*}/$_pkgname-${pkgver}.tar.xz")
sha256sums=('50a0855c1eb26e6044ffe888dbe061938ab4241f96d8f3754ea7ead38ab8ed06')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  cd "${srcdir}/$_pkgname-$pkgver/"
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch} && pushd build-${_arch}
    ${_arch}-configure \
      --disable-documentation \
      ..
    make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "${srcdir}/$_pkgname-$pkgver/build-${_arch}"
    make DESTDIR="${pkgdir}" install
    ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g "$pkgdir"/usr/${_arch}/lib/*.a
  done
}
