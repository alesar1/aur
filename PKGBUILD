# Maintainer Torsten Keßler <t dot kessler at posteo dot de>

pkgname=hipfft
pkgver=4.1.0
pkgrel=1
pkgdesc='rocFFT marshalling library.'
arch=('x86_64')
url='https://github.com/ROCmSoftwarePlatform/hipFFT'
license=('MIT')
depends=('hip-rocclr' 'rocfft')
makedepends=('cmake' 'git')
source=("$pkgname-$pkgver.tar.gz::$url/archive/rocm-$pkgver.tar.gz")
sha256sums=('885ffd4813f2c271150f1b8b386f0af775b38fc82b96ce6fd94eb4ba0c0180be')
_dirname="$(basename "$url")-$(basename "${source[0]}" ".tar.gz")"

build() {
  CXX=/opt/rocm/hip/bin/hipcc \
  cmake -Wno-dev -S "$_dirname" \
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
