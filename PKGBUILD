# Maintainer: tytan652 <tytan652 at tytanium dot xyz>

pkgname=libajantv2
_pkgver=16.1
pkgver=${_pkgver//-/_}
pkgrel=4
epoch=1
pkgdesc="AJA NTV2 Open Source Static Libs and Headers for building applications that only wish to statically link against"
arch=("i686" "x86_64" "aarch64")
url="https://github.com/aja-video/ntv2"
license=("MIT")
depends=()
makedepends=("cmake" "git")
options=('!lto' 'debug')
source=("ntv2::git+https://github.com/aja-video/ntv2.git#commit=abf17cc1e7aadd9f3e4972774a3aba2812c51b75")
sha256sums=("SKIP")

prepare() {
  cd ntv2

  if [[ $CCX == 'clang++' ]]; then
    sed -i 's/Clang|GNU/Clang/g' cmake/CommonFlags.cmake
  else
    sed -i 's/Clang|GNU/GNU/g' cmake/CommonFlags.cmake
  fi
  
  sed -i 's/Linux|Darwin/Linux/g' cmake/CommonFlags.cmake
  sed -i 's/Debug|RelWithDebInfo/RelWithDebInfo/g' cmake/CommonFlags.cmake
}

build() {
  cd ntv2
  mkdir -p build; cd build

  cmake \
    -DCMAKE_BUILD_TYPE=RelWithDebInfo \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=lib \
    -DAJA_BUILD_OPENSOURCE=ON ..

  make
}

package() {
  cd ntv2
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  
  cd build
  make install DESTDIR="$pkgdir"
}
