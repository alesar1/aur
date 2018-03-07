# Maintainer: Llewelyn Trahaearn <woefulderelict [at] gmail [dot] com>
# Contributor: Mihails Strasuns <public [at] dicebot [dot] lv>
# Contributor: Sven-Hendrik Haase <sh [at] lutzhaase [dot] com>

pkgname=lib32-liblphobos
pkgver=1.8.0
pkgrel=1
pkgdesc="Runtime and Phobos library for the LLVM based D compiler. (32-bit)"
arch=('x86_64')
url="https://github.com/ldc-developers/ldc"
license=('BSD')
groups=('dlang' 'dlang-ldc')
depends=('ldc' 'lib32-curl' 'lib32-gcc-libs')
makedepends=('git' 'llvm' 'libconfig' 'cmake')
provides=("d-runtime" "d-stdlib")
replaces=("lib32-liblphobos-devel")
source=("$url/releases/download/v${pkgver}/ldc-${pkgver}-src.tar.gz")
sha256sums=('e421a1f4bbf97d173bd277125794862ca5b6a09409586b806cec23b922955c7f')

build() {
  cd ldc-$pkgver-src

  [ -d build ] || mkdir build
  cd build

  cmake \
    -DMULTILIB=ON \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_SKIP_RPATH=ON \
    -DINCLUDE_INSTALL_DIR=/usr/include/dlang/ldc \
    -DBUILD_SHARED_LIBS=ON \
    ..

  make
}

package() {
  cd ldc-$pkgver-src/build

  # Libraries
  install -d "${pkgdir}/usr/lib32"
  install -m755 ./lib32/*.so* "${pkgdir}/usr/lib32"

  # License
  install -D -m644 ../LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
