# Original build: fermyon <antifermion@protonmail.com>
# Maintainer: Markus Näther <naetherm@cs.uni-freiburg.de>
pkgname=rocm-cmake
pkgver=3.0.0
pkgrel=1
pkgdesc="cmake modules for common build tasks needed for the ROCM software stack"
arch=('x86_64')
url="https://github.com/RadeonOpenCompute/rocm-cmake"
license=('MIT')
makedepends=('cmake')
source=("https://github.com/RadeonOpenCompute/rocm-cmake/archive/roc-$pkgver.tar.gz")
sha256sums=('9393fd534a100e8da55f44d0625337d76f3c7890e0297fe690c9e7d384b205ef')

build() {
  mkdir -p "$srcdir/build"
  cd "$srcdir/build"

  cmake -DCMAKE_INSTALL_PREFIX=/opt/rocm \
        "$srcdir/$pkgname-roc-$pkgver"
}

package() {
  cd "$srcdir/build"

  cmake --build . --target install
}
