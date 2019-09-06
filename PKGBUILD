pkgname=mingw-w64-coin-or-osi
pkgver=0.108.5
pkgrel=1
pkgdesc="COIN-OR Open Solver Interface (mingw-w64)"
arch=(any)
url="https://projects.coin-or.org/Osi"
license=(EPL)
groups=(mingw-w64-coin-or)
depends=(mingw-w64-coin-or-coinutils)
makedepends=(mingw-w64-configure)
options=('!buildflags' '!strip' 'staticlibs')
source=("https://www.coin-or.org/download/source/Osi/Osi-${pkgver}.tgz")
sha256sums=('8efabdb3d5c89837d73fa6f9e7b764dce7450c579037964b64a996757f4d7d2c')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
  cd Osi-$pkgver
  for _arch in ${_architectures}; do
    mkdir -p build-${_arch} && pushd build-${_arch}
    COIN_SKIP_PROJECTS="Sample" \
    ${_arch}-configure \
      --with-coinutils-lib="$(${_arch}-pkg-config --libs coinutils)" \
      --with-coinutils-incdir="/usr/${_arch}/include/coin/" \
      lt_cv_deplibs_check_method=pass_all ..
    make
    popd
  done
}

package() {
  for _arch in ${_architectures}; do
    cd "$srcdir"/Osi-$pkgver/build-${_arch}
    PKG_CONFIG_PATH_CUSTOM="$pkgdir"/usr/${_arch}/lib/pkgconfig/ \
    make DESTDIR="$pkgdir" install
    rm -r "$pkgdir"/usr/${_arch}/share
    ${_arch}-strip -g "$pkgdir"/usr/${_arch}/lib/*.a
    ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
  done
}
