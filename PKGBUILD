pkgname=mingw-w64-expat
pkgver=2.2.10
pkgrel=1
pkgdesc="An XML parser library (mingw-w64)"
arch=(any)
url="http://expat.sourceforge.net"
license=("custom")
makedepends=(mingw-w64-configure)
depends=(mingw-w64-crt)
options=(!strip !buildflags staticlibs)
source=("http://downloads.sourceforge.net/expat/expat-${pkgver}.tar.bz2")
sha256sums=('b2c160f1b60e92da69de8e12333096aeb0c3bf692d41c60794de278af72135a5')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  cd "${srcdir}/expat-${pkgver}"
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch} && pushd build-${_arch}
    ${_arch}-configure --without-docbook ..
    make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "${srcdir}/expat-${pkgver}/build-${_arch}"
    make DESTDIR="$pkgdir" install
    rm "$pkgdir"/usr/${_arch}/bin/*.exe
    ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g "$pkgdir"/usr/${_arch}/lib/*.a
    rm -r "$pkgdir/usr/${_arch}/share"
  done
}
