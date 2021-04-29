# Maintainer: Gustavo Castro < gustawho [ at ] gmail [ dot ] com >

pkgname=qqc2-breeze-style
pkgver=5.21.3
pkgrel=1
pkgdesc="Breeze inspired QQC2 Style"
arch=('x86_64' 'armv7' 'aarch64')
url="https://invent.kde.org/plasma/qqc2-breeze-style"
license=('GPL3')
depends=('qt5-base' 'qt5-declarative' 'qt5-quickcontrols2' 'kirigami2')
makedepends=('git' 'extra-cmake-modules')
source=("git+${url}.git#commit=b63b4f315ca2f69b086257b95531b5be13a5fb20")
md5sums=('SKIP')

build() {
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release -B build -S "${pkgname}"
  cmake --build build --config Release
}

package() {
  DESTDIR="${pkgdir}" cmake --install build --config Release
}
