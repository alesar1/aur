# Maintainer: Chocobo1 <chocobo1 AT archlinux DOT net>

pkgname=aom-psy-git
pkgver=r32348.g797b2371e
pkgrel=1
pkgdesc="An open, royalty-free video coding format designed for video transmissions over the Internet"
arch=('i686' 'x86_64')
url="https://aomedia.org/"
license=('BSD' 'custom:PATENTS')
depends=('gcc-libs')
makedepends=('git' 'cmake' 'doxygen' 'graphviz' 'perl' 'yasm' 'clang' 'ccache')
optdepends=('aocc: AMD Optimizing Compiler')
provides=('aom' 'aom-git' 'libaom.so')
conflicts=('aom' 'aom-git')
source=("git+https://gitlab.com/shssoichiro/aom.git#branch=patched")
sha256sums=('SKIP')

pkgver() {
  cd "aom"

  _rev=$(git rev-list --count --all)
  _hash=$(git rev-parse --short HEAD)
  printf "r%s.g%s" "$_rev" "$_hash"
}

build() {
  cd "aom"

  cmake \
    -B "_build" \
    -DENABLE_CCACHE=1 \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX="/usr" \
    -DCMAKE_INSTALL_LIBDIR="lib" \
    -DCMAKE_C_COMPILER="clang" \
    -DCMAKE_CXX_COMPILER="clang++" \
    -DAOM_EXTRA_C_FLAGS="-march=native -O3 -flto=thin" \
    -DAOM_EXTRA_CXX_FLAGS="-march=native -O3 -flto=thin" \
    -DAOM_EXTRA_EXE_LINKER_FLAGS="-flto=thin" \
    -DBUILD_SHARED_LIBS=1 \
    -DENABLE_TESTS=0 \
    -DENABLE_EXAMPLES=1 \
    -DCONFIG_AV1_ENCODER=1 \
    -DCONFIG_AV1_DECODER=1 \
    -DCONFIG_THREE_PASS=0 \
    -DCONFIG_SHARP_SETTINGS=1 \
    ./
  make -C "_build"
}

package() {
  cd "aom"

  make -C "_build" DESTDIR="$pkgdir" install

  install -d "$pkgdir/usr/share/doc/aom"
  cp -R "_build/docs/." "$pkgdir/usr/share/doc/aom"

  install -Dm644 {LICENSE,PATENTS} -t "$pkgdir/usr/share/licenses/aom"
}
