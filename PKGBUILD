# Maintainer Gustavo Castro < gustawho [ at ] gmail [ dot ] com >

pkgname=koko
pkgver=22.02
pkgrel=2
arch=(x86_64 i686 arm armv6h armv7h aarch64)
pkgdesc="Image gallery application designed for desktop and touch devices"
url="https://invent.kde.org/graphics/koko"
license=('LGPL2.1')
depends=('kirigami2' 'kcoreaddons' 'kguiaddons' 'kconfig' 'kquickimageeditor' 'knotifications'
         'exiv2' 'kdeclarative' 'kfilemetadata' 'ki18n' 'kio' 'kdbusaddons' 'qt5-location')
makedepends=('extra-cmake-modules' 'qt5-svg' 'qt5-tools')
source=("https://download.kde.org/stable/plasma-mobile/${pkgver}/${pkgname}-${pkgver}.tar.xz")
md5sums=('7a09c1247126b38dd5d1e6688998e468')

build() {
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release -B build -S "${pkgname}-${pkgver}"
  cmake --build build --config Release
}

package() {
  DESTDIR="${pkgdir}" cmake --install build --config Release
}
