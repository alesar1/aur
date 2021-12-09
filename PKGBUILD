# Maintainer: Carlos Aznarán <caznaranl@uni.pe>
pkgname=ampl-asl
_gitcommit=9fe80da2a7128bd41ee398dc5707c98013fb0530
pkgver=20211109
pkgrel=1
pkgdesc="AMPL Solver Library"
arch=('x86_64')
url="https://github.com/${pkgname/-//}"
license=('custom')
depends=(openmp)
makedepends=(cmake git)
source=("git+${url}#commit=${_gitcommit}")
sha512sums=('SKIP')

build() {
  cmake \
    -S "asl" \
    -B build \
    -DCMAKE_BUILD_TYPE=None \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DBUILD_SHARED_LIBS=1 \
    -Wno-dev
  cmake --build build --target all
}

package() {
  DESTDIR="${pkgdir}" cmake --build build --target install
}
