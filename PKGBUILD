# Maintainer: Gustavo Castro < gustawho [ at ] gmail [ dot ] com >

pkgname=qmlkonsole
pkgver=21.05
pkgrel=1
pkgdesc="Terminal app for Plasma Mobile"
arch=('x86_64')
url="https://invent.kde.org/plasma-mobile/qmlkonsole"
license=('GPL3')
depends=('ki18n' 'kconfig' 'kirigami2' 'qmltermwidget')
makedepends=('git' 'qt5-tools' 'qt5-svg' 'extra-cmake-modules')
source=("http://download.kde.org/stable/plasma-mobile/${pkgver}/${pkgname}-${pkgver}.tar.xz")
sha256sums=('56c121a43fadd698aff3b6f7608693afc038a632a28ab97771fbd19f804544bd')

build() {
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release -B build -S "${pkgname}-${pkgver}"
  cmake --build build --config Release
}

package() {
  DESTDIR="${pkgdir}" cmake --install build --config Release
}
