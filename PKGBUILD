pkgname=mingw-w64-libwebp
pkgver=0.5.1
pkgrel=1
pkgdesc="WebP library (mingw-w64)"
arch=(any)
url="https://developers.google.com/speed/webp/"
license=("BSD")
makedepends=(mingw-w64-configure)
depends=(mingw-w64-libjpeg-turbo mingw-w64-libpng mingw-w64-libtiff mingw-w64-giflib)
options=(staticlibs !strip !buildflags)
source=("http://downloads.webmproject.org/releases/webp/libwebp-$pkgver.tar.gz")
sha256sums=('6ad66c6fcd60a023de20b6856b03da8c7d347269d76b1fd9c3287e8b5e8813df')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
	cd "$srcdir/libwebp-$pkgver"
  for _arch in ${_architectures}; do
    unset LDFLAGS
    mkdir -p build-${_arch} && pushd build-${_arch}
    ${_arch}-configure \
      --enable-swap-16bit-csp \
      --enable-experimental \
      --enable-libwebp{mux,demux,decoder,extras}
    make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "$srcdir/libwebp-$pkgver/build-${_arch}"
    make DESTDIR="$pkgdir" install
    find "$pkgdir/usr/${_arch}" -name '*.exe' -exec rm {} \;
    find "$pkgdir/usr/${_arch}" -name '*.dll' -exec ${_arch}-strip --strip-unneeded {} \;
    find "$pkgdir/usr/${_arch}" -name '*.a' -o -name '*.dll' | xargs ${_arch}-strip -g
    rm -r "$pkgdir/usr/${_arch}/share"
  done
}
