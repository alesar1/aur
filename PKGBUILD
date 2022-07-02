# Maintainer: Gustavo Castro < gustawho [ at ] gmail [ dot ] com >

pkgname=kalk
pkgver=22.06
pkgrel=1
pkgdesc="Kalk is a powerful cross-platfrom calculator application built with the Kirigami framework"
arch=(x86_64 i686 arm armv6h armv7h aarch64)
url="https://invent.kde.org/plasma-mobile/kalk"
license=('GPL3')
depends=('ki18n' 'kconfig' 'kcoreaddons' 'knotifications' 'kirigami2' 'kunitconversion'
         'kdbusaddons' 'plasma-framework' 'gmp' 'mpfr' 'qt5-feedback')
makedepends=('qt5-tools' 'qt5-svg' 'extra-cmake-modules')
source=("http://download.kde.org/stable/plasma-mobile/${pkgver}/${pkgname}-${pkgver}.tar.xz")
sha256sums=('6a2b23e57a0e5ab09ed18ee565f0976bcd8dc2bdece5b64be14c4949adcb8325')

build() {
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release -B build -S "${pkgname}-${pkgver}"
  cmake --build build --config Release
}

package() {
  DESTDIR="${pkgdir}" cmake --install build --config Release
}
