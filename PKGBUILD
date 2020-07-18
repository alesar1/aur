# Maintainer: Chih-Hsuan Yen <yan12125@gmail.com>

pkgname=nsync
pkgver=1.24.0
pkgrel=1
pkgdesc='A C library that exports various synchronization primitives, such as mutexes'
arch=(x86_64)
url='https://github.com/google/nsync'
license=(Apache)
depends=(gcc-libs)
makedepends=(cmake)
source=("https://github.com/google/nsync/archive/$pkgver/$pkgname-$pkgver.tar.gz")
sha256sums=('47a6eb2a295be5121a1904a6a775722338a20dc02ee3eec4169ed2c3f203617a')

build() {
  cmake -B build -S $pkgname-$pkgver \
    -DCMAKE_BUILD_TYPE=None \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DBUILD_SHARED_LIBS=ON
  make -C build
}

check() {
  make -C build test
}

package() {
  make -C build DESTDIR="$pkgdir" install
}
