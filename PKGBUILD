# Maintainer Gustavo Castro < gustawho [ at ] gmail [ dot ] com >

pkgname=koko
pkgver=21.05
pkgrel=1
arch=(x86_64 i686 arm armv6h armv7h aarch64)
pkgdesc="Image gallery application designed for desktop and touch devices"
url="https://invent.kde.org/graphics/koko"
license=('LGPL2.1')
depends=('kirigami2' 'kcoreaddons' 'kguiaddons' 'kconfig' 'knotifications' 'exiv2')
makedepends=('extra-cmake-modules' 'qt5-svg' 'qt5-tools')
source=("https://download.kde.org/stable/plasma-mobile/${pkgver}/${pkgname}-${pkgver}.tar.xz")
md5sums=('4d1b7b49b3ac5466c2070adcddebcc9f')

build() {
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release -B build -S "${pkgname}-${pkgver}"
  cmake --build build --config Release
}

package() {
  DESTDIR="${pkgdir}" cmake --install build --config Release
}
