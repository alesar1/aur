pkgname=mingw-w64-giflib
pkgver=5.1.2
pkgrel=1
pkgdesc="A library for reading and writing gif images (mingw-w64)"
arch=(any)
url="http://sourceforge.net/projects/giflib/"
license=("MIT")
makedepends=(xmlto docbook-xml mingw-w64-configure)
depends=(mingw-w64-crt)
options=(staticlibs !strip !buildflags)
source=("http://downloads.sourceforge.net/sourceforge/giflib/${pkgname#mingw-w64-}-${pkgver}.tar.bz2"
"giflib-5.0.4-include-stddef.patch")
md5sums=('323a9f11ab56c8a2d1715376410ce376'
         'e39b98822334f2bd2009469e5dea65c5')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

prepare() {
	cd giflib-$pkgver
	patch -Np1 -i "$srcdir/giflib-5.0.4-include-stddef.patch"
}

build() {
	cd giflib-${pkgver}
  for _arch in ${_architectures}; do
		unset LDFLAGS
    mkdir -p build-${_arch} && pushd build-${_arch}
		${_arch}-configure
    make bin_PROGRAMS=''
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "${srcdir}/giflib-${pkgver}/build-${_arch}"
    make DESTDIR="$pkgdir" bin_PROGRAMS='' install
    find "$pkgdir/usr/${_arch}" -name '*.exe' -exec rm {} \;
    find "$pkgdir/usr/${_arch}" -name '*.dll' -exec ${_arch}-strip --strip-unneeded {} \;
    find "$pkgdir/usr/${_arch}" -name '*.a' -o -name '*.dll' | xargs ${_arch}-strip -g
    rm -r "$pkgdir/usr/${_arch}/share"
  done
}
