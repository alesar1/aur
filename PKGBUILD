# Maintainer: Daniel Bermond <dbermond@archlinux.org>
# Maintainer: Bruno Pagani <archange@archlinux.org>

_srcname=SPIRV-LLVM-Translator
pkgname=lib32-${_srcname,,}
pkgver=13.0.0.r24+gf1372c87
pkgrel=1
pkgdesc="Tool and a library for bi-directional translation between SPIR-V and LLVM IR"
arch=(x86_64)
url="https://github.com/KhronosGroup/SPIRV-LLVM-Translator"
license=(custom)
depends=(llvm-libs spirv-llvm-translator)
makedepends=(git cmake llvm spirv-headers spirv-tools)
checkdepends=(python python-setuptools clang)
# Adapted from IGC release notes 99420daab98998a7e36858befac9c5ed109d4920
_commit=f1372c879bf4294ed37a6a259b3f6000458c0d02
source=(git+${url}.git#commit=$_commit)
sha256sums=(SKIP)

pkgver() {
  cd ${_srcname}
  git describe --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./;s/-/+/'
}

build() {
  export CC="gcc -m32"
  export CXX="g++ -m32"
  export PKG_CONFIG_PATH="/usr/lib32/pkgconfig"

  cmake -B build -S ${_srcname} \
    -DBUILD_SHARED_LIBS=ON \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DLLVM_LIBDIR_SUFFIX=32 \
    -DCMAKE_POSITION_INDEPENDENT_CODE=ON \
    -DCMAKE_SKIP_RPATH=ON \
    -DLLVM_INCLUDE_TESTS=ON \
    -DLLVM_EXTERNAL_LIT=/usr/bin/lit \
    -DLLVM_EXTERNAL_SPIRV_HEADERS_SOURCE_DIR=/usr/include/spirv/ \
    -Wno-dev \
    -DCCACHE_ALLOWED=OFF # ccache should be managed by makepkg
  make -C build
}

check() {
  # https://github.com/KhronosGroup/SPIRV-LLVM-Translator/issues/1433
  LD_LIBRARY_PATH="${srcdir}/build/lib/SPIRV" make -C build test || echo "Tests failed"
}

package() {
  make -C build DESTDIR="${pkgdir}" install
  rm -rf "${pkgdir}/usr/include"
  install -Dm644 ${_srcname}/LICENSE.TXT -t "${pkgdir}"/usr/share/licenses/${pkgname}/
}
