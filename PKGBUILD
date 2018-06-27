# Maintainer: grmat <grmat@sub.red>

pkgname='compute-runtime'
pkgdesc="Intel(R) Graphics Compute Runtime for OpenCL(TM). Replaces Beignet for Gen8 (Broadwell) and beyond. Weekly build version."
pkgver='18.25.10965'
pkgrel=2
arch=('x86_64')
url='https://01.org/compute-runtime'
license=('MIT')
makedepends=('git' 'llvm' 'clang' 'python2' 'opencl-headers' 'cmake')
optdepends=('libva: for cl_intel_va_api_media_sharing'
            'libdrm: for cl_intel_va_api_media_sharing')
depends=('ocl-icd')
conflicts=('compute-runtime-git')

source=("neo::git+https://github.com/intel/compute-runtime#tag=$pkgver"
        "clang_source::git+https://github.com/llvm-mirror/clang#branch=release_40"
        "common_clang::git+https://github.com/intel/opencl-clang#commit=9b2473d"
        "llvm_patches::git+https://github.com/intel/llvm-patches#commit=8a7abaf"
        "llvm_source::git+https://github.com/llvm-mirror/llvm#branch=release_40"
        "gmmlib::git+https://github.com/intel/gmmlib#commit=5ff84b9"
        "igc::git+https://github.com/intel/intel-graphics-compiler#commit=dca01ed")

sha256sums=('SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP'
            'SKIP')

prepare() {
  cd "${srcdir}"
  mkdir "${srcdir}/build"
}

build() {
  cd "${srcdir}/build"
  # doesn't build with gcc8 and gcc54 doesn't know -fno-plt
  cmake -DBUILD_TYPE=Release \
        -DCMAKE_BUILD_TYPE=Release \
        ../neo
  make "$MAKEFLAGS"
}

package() {
  cd "${srcdir}/build"
  make DESTDIR="$pkgdir" install
}

