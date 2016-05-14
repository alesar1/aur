# Maintainer: Alexander Rødseth <xyproto@archlinux.org>
# Contributor: mosra <mosra@centrum.cz>

pkgname=corrade
pkgver=2016.05.13
pkgrel=1
pkgdesc='C++11/C++14 multiplatform utility library'
arch=('x86_64' 'i686')
url='http://mosra.cz/blog/corrade.php'
license=('MIT')
makedepends=('cmake' 'git' 'ninja')
source=('git://github.com/mosra/corrade.git#commit=142b2a7241')
sha1sums=('SKIP')

build() {
  mkdir -p build
  cd build

  cmake ../corrade \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -GNinja
  ninja
}

package() {
  DESTDIR="$pkgdir" ninja -C build install
}

# vim:set ts=2 sw=2 et:
