# Maintainer: lantw44 at gmail dot com

pkgname=mingw-w64-adwaita-icon-theme
pkgver=3.28.0
pkgrel=1
pkgdesc="Adwaita icon theme (mingw-w64)"
arch=(any)
url="http://www.gnome.org"
license=('LGPL3')
makedepends=(
  'mingw-w64-configure'
  'gtk3'
  'librsvg')
depends=('mingw-w64-hicolor-icon-theme')
options=(!strip !buildflags staticlibs)
source=("https://download.gnome.org/sources/adwaita-icon-theme/${pkgver%.*}/adwaita-icon-theme-${pkgver}.tar.xz")
sha256sums=('7aae8c1dffd6772fd1a21a3d365a0ea28b7c3988bdbbeafbf8742cda68242150')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  cd "${srcdir}/adwaita-icon-theme-${pkgver}"
  for _arch in ${_architectures}; do
    mkdir -p "build-${_arch}"
    cd "build-${_arch}"
    ${_arch}-configure
    make
    cd ..
  done
}

package() {
  cd "${srcdir}/adwaita-icon-theme-${pkgver}"
  for _arch in ${_architectures}; do
    cd "build-${_arch}"
    make DESTDIR="$pkgdir" install
    find "$pkgdir/usr/${_arch}" -name '*.exe' | xargs -rtL1 ${_arch}-strip
    find "$pkgdir/usr/${_arch}" -name '*.dll' | xargs -rtL1 ${_arch}-strip --strip-unneeded
    find "$pkgdir/usr/${_arch}" -name '*.a' -o -name '*.dll' | xargs -rtL1 ${_arch}-strip -g
    cd ..
  done
}
