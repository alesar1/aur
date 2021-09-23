pkgname=mingw-w64-libjpeg
pkgver=9c
pkgrel=1
pkgdesc="JPEG image compression (mingw-w64)"
arch=(any)
url="http://ijg.org/"
license=("custom")
makedepends=(mingw-w64-configure)
depends=(mingw-w64-crt)
options=(!libtool !strip !buildflags)
conflicts=(mingw-w64-libjpeg-turbo)
provides=(mingw-w64-libjpeg-turbo)
source=("http://www.ijg.org/files/jpegsrc.v$pkgver.tar.gz")
sha256sums=('1e9793e1c6ba66e7e0b6e5fe7fd0f9e935cc697854d5737adec54d93e5b3f730')


_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  cd "${srcdir}"/jpeg-${pkgver}
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch} && pushd build-${_arch}
    ${_arch}-configure
    make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "${srcdir}/jpeg-${pkgver}/build-${_arch}"
    make DESTDIR="$pkgdir" install
    rm -r "$pkgdir/usr/${_arch}/share"
    rm "$pkgdir"/usr/${_arch}/bin/*.exe
    install -m644 "$srcdir/jpeg-$pkgver/jpegint.h" "$pkgdir/usr/${_arch}/include/"
    ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g "$pkgdir"/usr/${_arch}/lib/*.a
  done
}

