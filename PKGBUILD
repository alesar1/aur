# Maintainer: Jakub Okoński <jakub@okonski.org>
pkgname=miopengemm
pkgver=1.1.6
pkgrel=1
pkgdesc="An OpenCL GEMM kernel generator"
arch=('x86_64')
url="https://github.com/ROCmSoftwarePlatform/MIOpenGEMM"
license=('custom:NCSAOSL')
depends=('ocl-icd')
makedepends=('opencl-headers' 'cmake' 'ocl-icd' 'rocm-cmake')
source=("https://github.com/ROCmSoftwarePlatform/MIOpenGEMM/archive/$pkgver.tar.gz")
sha256sums=('9ab04903794c6a59432928eaec92c687d51e2b4fd29630cf227cbc49d56dc69b')

build() {
  mkdir -p "$srcdir/build"
  cd "$srcdir/build"

  cmake -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_INSTALL_PREFIX=/opt/rocm \
        "$srcdir/MIOpenGEMM-$pkgver"
  make
}

package() {
  cd "$srcdir/build"

  make DESTDIR="$pkgdir" install
}

