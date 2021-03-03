# Maintainer: Gustavo Castro < gustawho [ at ] gmail [ dot ] com >

pkgname=qqc2-breeze-style
pkgver=5.21.2
pkgrel=1
pkgdesc="Breeze inspired QQC2 Style"
arch=('x86_64' 'armv7' 'aarch64')
url="https://invent.kde.org/plasma/qqc2-breeze-style"
license=('GPL3')
depends=('qt5-base' 'qt5-declarative' 'qt5-quickcontrols2' 'kirigami2')
makedepends=('git' 'extra-cmake-modules')
source=("git+${url}.git#commit=610bb1a85dd3f8b238d1724ed78184636f1a4270")
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
