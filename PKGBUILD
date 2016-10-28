# Maintainer: Karl-Felix Glatzer <karl.glatzer@gmx.de>
pkgname=mingw-w64-orc
pkgver=0.4.26
pkgrel=1
pkgdesc="Optimized Inner Loop Runtime Compiler (mingw-w64)"
arch=('any')
license=('custom')
url="https://cgit.freedesktop.org/gstreamer/orc/"
depends=('mingw-w64-crt')
makedepends=('mingw-w64-gcc' 'mingw-w64-configure')
options=('!strip' '!buildflags' '!libtool' 'staticlibs')
source=(http://gstreamer.freedesktop.org/data/src/orc/orc-${pkgver}.tar.xz)
sha256sums=('7d52fa80ef84988359c3434e1eea302d077a08987abdde6905678ebcad4fa649')
_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build () {
  for _arch in ${_architectures}; do
    mkdir -p ${srcdir}/orc-$pkgver/build-${_arch} && cd ${srcdir}/orc-$pkgver/build-${_arch}

    unset LDFLAGS CPPFLAGS
    ${_arch}-configure --enable-gtk-doc-html=no
    make
  done
}

package() {
  for _arch in ${_architectures}; do
    cd ${srcdir}/orc-$pkgver/build-${_arch}
    make DESTDIR="$pkgdir" install
    install -Dm644 ${srcdir}/orc-$pkgver/COPYING "$pkgdir/usr/${_arch}/share/licenses/orc/COPYING"

    ${_arch}-strip -x -g ${pkgdir}/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g ${pkgdir}/usr/${_arch}/lib/*.a
    rm ${pkgdir}/usr/${_arch}/bin/*.exe
  done
}
