# Maintainer: Antonio Rojas <arojas@archlinux.org>

pkgname=plasma5-applets-window-buttons
pkgver=0.7.0
pkgrel=1
pkgdesc="Plasma 5 applet in order to show window buttons in your panels"
arch=(x86_64)
url="https://github.com/psifidotos/applet-window-buttons"
license=(GPL)
depends=(plasma-workspace)
makedepends=(extra-cmake-modules)
source=($pkgname-$pkgver.tar.gz::"https://github.com/psifidotos/applet-window-buttons/archive/v$pkgver.tar.gz")
sha256sums=('63e1cffdd82c9d7bd40ac006fb8413281d1cf97e7df33a74880629197a9625d5')

prepare() {
  mkdir -p build
}

build() {
  cd build
  cmake ../applet-window-buttons-$pkgver
}

package() {
  cd build
  make DESTDIR="$pkgdir" install
}
