# Contributor: Xiao-Long Chen <chenxiaolong@cxl.epac.to>
pkgname=mingw-w64-cairo
pkgver=1.14.4
pkgrel=2
pkgdesc="Cairo vector graphics library (mingw-w64)"
arch=(any)
url="http://cairographics.org/"
license=("LGPL" "MPL")
makedepends=(mingw-w64-configure mingw-w64-librsvg mingw-w64-poppler)
depends=(mingw-w64-fontconfig mingw-w64-pixman mingw-w64-lzo mingw-w64-glib2)
options=(!strip !buildflags staticlibs)
provides=($pkgname-bootstrap)
replaces=($pkgname-bootstrap)
conflicts=($pkgname-bootstrap)
source=("http://cairographics.org/releases/cairo-${pkgver}.tar.xz"
"0009-standalone-headers.mingw.patch"
"0026-create-argb-fonts.all.patch"
"0030-add-cairo-API-to-setup-Win32-surface-for-HDC.patch")
sha1sums=('5b44471e7c328f96de6830baf8ea65030de797f9'
          '58c548d2791ba20dd7f6e328ff596f746df3aa10'
          '9c0e533614782a41af2c3806a43ab7fe9d6a5431'
          'c0c9546f120133b8e5b116650ba233a15a1e20c4')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

prepare() {
	cd cairo-$pkgver
	patch -p1 -i ${srcdir}/0009-standalone-headers.mingw.patch
  patch -p1 -i ${srcdir}/0026-create-argb-fonts.all.patch
  patch -p1 -i ${srcdir}/0030-add-cairo-API-to-setup-Win32-surface-for-HDC.patch
  autoreconf -fi
}

build() {
  cd cairo-${pkgver}
  CFLAGS+=" -Wno-implicit-function-declaration"
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch} && pushd build-${_arch}
    ${_arch}-configure \
      --enable-win32 \
      --enable-win32-font \
      --enable-gobject \
      --enable-tee \
      --disable-xlib \
      --disable-xcb \
      --enable-pdf \
      --enable-ps \
      --enable-svg \
      ac_cv_prog
    make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "${srcdir}/cairo-${pkgver}/build-${_arch}"
    make DESTDIR="$pkgdir" install
    find "$pkgdir/usr/${_arch}" -name '*.dll' -exec ${_arch}-strip --strip-unneeded {} \;
    find "$pkgdir/usr/${_arch}" -name '*.a' -o -name '*.dll' | xargs ${_arch}-strip -g
    rm -r "$pkgdir/usr/${_arch}/share"
  done
}
