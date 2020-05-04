# Maintainer: Markus Näther <naether.markus@gmail.com>
pkgname=hipblas
_pkgver=3.3
pkgver="$_pkgver.0"
pkgrel=1
pkgdesc="Next generation BLAS implementation for ROCm platform"
arch=('x86_64')
url="https://github.com/ROCmSoftwarePlatform/hipBLAS"
license=('MIT')
depends=('hcc' 'hip')
makedepends=('cmake' "hcc>=$pkgver" 'python2' "comgr>=$pkgver" 'rocminfo')
source=("https://github.com/ROCmSoftwarePlatform/hipBLAS/archive/rocm-$pkgver.tar.gz"
        "hipblas_hsa.patch")
sha256sums=('7be4f69749fb0b8deeaf47615f2c1ffbeee15f9cd6ef14cfea2a550cb0347a50'
            'd5206ce084f065f860ba1b1f9dc860c1500d9d4cc0b92473e1072ad819e8148d')

prepare() {
  cd "$srcdir/hipBLAS-rocm-$pkgver"
  patch -Np1 -i "$srcdir/hipblas_hsa.patch"
}

build() {
  mkdir -p "$srcdir/build"
  cd "$srcdir/build"

  # fix broken build with stack protection
  export CFLAGS="$(sed -e 's/-fstack-protector-strong//' <<< "$CFLAGS")"
  export CXXFLAGS="$(sed -e 's/-fstack-protector-strong//' <<< "$CXXFLAGS")"
  export CPPFLAGS="$(sed -e 's/-fstack-protector-strong//' <<< "$CPPFLAGS")"

  # compile with HCC
  export CXX="/opt/rocm/hcc/bin/hcc"

  # TODO: fix librocblas.so, it contains references to $srcdir
  cmake -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_INSTALL_PREFIX=/opt/rocm/hipblas \
        -Dhip_DIR=/opt/rocm/hip/lib/cmake/hip \
        -Dhcc_DIR=/opt/rocm/hcc/lib/cmake/hcc \
        -Damd_comgr_DIR=/opt/rocm/lib/cmake/amd_comgr \
        -DBUILD_CLIENTS_SAMPLES=OFF \
        -DBUILD_CLIENTS_TESTS=OFF \
        -DHSA_PATH=/opt/rocm/hsa \
        "$srcdir/hipBLAS-rocm-$pkgver"
  make
}

package() {
  cd "$srcdir/build"

  make DESTDIR="$pkgdir" install

  install -d "$pkgdir/etc/ld.so.conf.d"
  cat << EOF > "$pkgdir/etc/ld.so.conf.d/hipblas.conf"
/opt/rocm/hipblas/lib
EOF
}
