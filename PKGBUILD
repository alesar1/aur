# Maintainer: tildearrow <acc12345acc at gmail dot com>
# Contributor: Felix Yan <felixonmars@archlinux.org>
# Contributor: Antonio Rojas <arojas@archlinux.org>
# Contributor: Andrea Scarpino <andrea@archlinux.org>

pkgname=kwin-lowlatency
pkgver=5.15.3
pkgrel=1
pkgdesc='the compositor, with added stutter/latency reductions'
arch=(x86_64)
url='https://github.com/tildearrow/kwin-lowlatency'
license=(LGPL)
depends=(kscreenlocker xcb-util-cursor plasma-framework kcmutils breeze kinit qt5-sensors)
makedepends=(extra-cmake-modules qt5-tools kdoctools)
optdepends=('qt5-virtualkeyboard: virtual keyboard support for kwin-wayland')
provides=(kwin)
conflicts=(kwin)
groups=(plasma)
source=("git+https://github.com/tildearrow/kwin-lowlatency.git")
sha256sums=(SKIP)
install=$pkgname.install

prepare() {
  cd "$pkgname"
  git checkout d64cb911cd899c1214fb5e0e41b29aad038ba5b2
  cd ..
  mkdir -p build
}

build() {
  cd build
  cmake ../$pkgname \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=lib \
    -DCMAKE_INSTALL_LIBEXECDIR=lib \
    -DBUILD_TESTING=OFF
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install
}
