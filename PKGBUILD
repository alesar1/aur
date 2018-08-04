# Maintainer: Andrew Sun <adsun701@gmail.com>

pkgname=mingw-w64-gtkmm3
_pkgname=gtkmm3
pkgver=3.22.2
pkgrel=1
pkgdesc="C++ bindings for GTK+ 3 (mingw-w64)"
url="http://www.gtkmm.org/"
arch=('any')
license=('LGPL')
depends=('mingw-w64-gtk3' 'mingw-w64-pangomm' 'mingw-w64-atkmm')
makedepends=('mingw-w64-configure')
options=('!strip' '!buildflags' 'staticlibs')
source=("https://download.gnome.org/sources/gtkmm/${pkgver%.*}/gtkmm-${pkgver}.tar.xz")
sha256sums=('91afd98a31519536f5f397c2d79696e3d53143b80b75778521ca7b48cb280090')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  cd "${srcdir}/gtkmm-${pkgver}"
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
    cd "${srcdir}/gtkmm-${pkgver}/build-${_arch}"
    make DESTDIR="${pkgdir}" install
    find "${pkgdir}/usr/${_arch}" -name '*.def' -o -name '*.exp' | xargs -rtl1 rm
    ${_arch}-strip --strip-unneeded "${pkgdir}"/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g "${pkgdir}"/usr/${_arch}/lib/*.a
  done
}
