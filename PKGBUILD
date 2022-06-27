# Maintainer: Devin Lin <devin@kde.org>
pkgname=plasma-settings
pkgver=22.06
pkgrel=0
pkgdesc="Settings application for Plasma Mobile"
arch=(x86_64 i686 i486 pentium4 arm armv6h armv7h aarch64)
url="https://invent.kde.org/plasma-mobile/plasma-settings"
license=('GPL3')
groups=()
depends=(
  'kcmutils'
  'plasma-workspace'
  'kdeclarative'
  'plasma-framework'
  'ki18n'
  'modemmanager-qt'
  'networkmanager-qt'
  'powerdevil'
)
makedepends=(cmake extra-cmake-modules)
source=("https://download.kde.org/stable/plasma-mobile/$pkgver/$pkgname-$pkgver.tar.xz")
sha256sums=('550834aef84cd53ca56d764e647d47f9a0ead29dbe556b39226901e7faf7df24')

prepare() {
  mkdir -p build
}

build() {
  cmake -B build -S "${pkgname}-${pkgver}" \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=/usr/lib
  cmake --build build
}

package() {
  DESTDIR="$pkgdir" cmake --install build
}
