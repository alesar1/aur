# Maintainer: acxz <akashpatel2008 at yahoo dot com>

pkgname=hipsycl-cpu
pkgver=0.9.2
pkgrel=1
pkgdesc="Implementation of SYCL 1.2.1 over AMD HIP/NVIDIA CUDA"
arch=("x86_64")
url="https://github.com/illuhad/hipSYCL"
license=("BSD")
provides=(hipsycl sycl)
makedepends=(cmake)
depends=(llvm clang python boost hipcpu openmp)
source=("$pkgname-$pkgver::https://github.com/illuhad/hipSYCL/archive/v$pkgver.tar.gz")
sha256sums=('086cd259345627cd1205a2fbb96fb1f3d1c4f3a13f9520753a4f4df313445c6d')

_pkgname=hipSYCL

prepare() {
    # Delete the install lines for contrib hip and hipcpu
    sed -i '/contrib/d' ${srcdir}/${_pkgname}-${pkgver}/CMakeLists.txt
}

build() {
    mkdir -p ${srcdir}/${_pkgname}-${pkgver}/build
    cd ${srcdir}/${_pkgname}-${pkgver}/build

    cmake .. -DCMAKE_BUILD_TYPE=Release \
          -DCMAKE_INSTALL_PREFIX=/usr \
          -DWITH_CUDA_BACKEND=OFF \
          -DWITH_ROCM_BACKEND=OFF \
          -DWITH_CPU_BACKEND=ON
}

package() {
    cd "${srcdir}/${_pkgname}-${pkgver}/build"
    make DESTDIR=${pkgdir} install
}
