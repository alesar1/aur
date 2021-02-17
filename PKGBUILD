# Maintainer: Gustavo Castro < gustawho [ at ] gmail [ dot ] com >

pkgname=qqc2-breeze-style
pkgver=5.21.0
pkgrel=1
pkgdesc="Breeze inspired QQC2 Style"
arch=('x86_64' 'armv7' 'aarch64')
url="https://invent.kde.org/plasma/qqc2-breeze-style"
license=('GPL3')
depends=('qt5-base' 'qt5-declarative' 'qt5-quickcontrols2' 'kirigami2')
makedepends=('git' 'extra-cmake-modules')
provides=('qqc2-breeze-style')
conflicts=('qqc2-breeze-style')
source=("git+${url}.git#commit=ce8022d7a71096e9a2953d8af492b46a0b2e1133")
md5sums=('SKIP')

build() {
  cd "${pkgname}"
  cmake -DCMAKE_INSTALL_PREFIX=/usr -B build
  make -C build
}

package() {
  cd "${pkgname}"
  make -C build DESTDIR="${pkgdir}" PREFIX=/usr install
}
