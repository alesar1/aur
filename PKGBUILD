pkgname=mingw-w64-speex
pkgver=1.2rc2
pkgrel=1
pkgdesc="A free codec for free speech (mingw-w64)"
arch=(any)
url="http://www.speex.org"
license=("BSD")
makedepends=('mingw-w64-configure')
depends=('mingw-w64-speexdsp' 'mingw-w64-libogg')
options=('staticlibs' '!strip' '!buildflags')
source=("http://downloads.us.xiph.org/releases/speex/speex-$pkgver.tar.gz")
md5sums=('6ae7db3bab01e1d4b86bacfa8ca33e81')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  cd "${srcdir}"/speex-${pkgver}
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch} && pushd build-${_arch}
    ${_arch}-configure --disable-binaries ..
    make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "${srcdir}/speex-${pkgver}/build-${_arch}"
    make DESTDIR="$pkgdir" install
    rm -r "$pkgdir/usr/${_arch}/share"
    ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g "$pkgdir"/usr/${_arch}/lib/*.a
  done
}
