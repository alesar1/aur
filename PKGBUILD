# Maintainer Torsten Keßler <t dot kessler at posteo dot de>

pkgname=hipfft
pkgver=4.3.1
pkgrel=1
pkgdesc='rocFFT marshalling library.'
arch=('x86_64')
url='https://github.com/ROCmSoftwarePlatform/hipFFT'
license=('MIT')
depends=('hip-rocclr' 'rocfft')
makedepends=('cmake' 'git')
source=("$pkgname-$pkgver.tar.gz::$url/archive/rocm-$pkgver.tar.gz")
sha256sums=('429cfd40415856da8f5c2c321b612800d6826ee121df5a4e6d1596cad5b51727')
_dirname="$(basename "$url")-$(basename "${source[0]}" ".tar.gz")"

build() {
  # -fcf-protection is not supported by HIP, see
  # https://github.com/ROCm-Developer-Tools/HIP/blob/rocm-4.3.x/docs/markdown/clang_options.md

  # With version 3.21, HIP support was added to CMake that breaks the current scripts, see
  # https://github.com/ROCmSoftwarePlatform/rocRAND/issues/198#issuecomment-893573440
  CXX=/opt/rocm/bin/hipcc \
  CXXFLAGS="${CXXFLAGS} -fcf-protection=none" \
  cmake -Wno-dev -S "$_dirname" \
        -D__skip_rocmclang=ON \
        -DCMAKE_INSTALL_PREFIX=/opt/rocm \
        -DBUILD_CLIENTS_SAMPLES=OFF \
        -DBUILD_CLIENTS_TESTS=OFF
  make
}

package() {
  DESTDIR="$pkgdir" make install

  install -Dm644 /dev/stdin "$pkgdir/etc/ld.so.conf.d/hipfft.conf" << EOF
/opt/rocm/hipfft/lib
EOF
  install -Dm644 "$srcdir/hipFFT-rocm-$pkgver/LICENSE.md" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
