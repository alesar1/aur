# Maintainer: Integral <integral@murena.io>

pkgname=arianna
pkgver=1.1.0
pkgrel=2
pkgdesc="EPub Reader for mobile devices"
url="https://invent.kde.org/graphics/${pkgname}"
depends=('kirigami-addons' 'kquickcharts' 'hicolor-icon-theme')
arch=('x86_64' 'aarch64')
license=('GPL' 'LGPL' 'MIT' 'BSD')
makedepends=('git' 'extra-cmake-modules' 'kdoctools' 'kfilemetadata' 'qqc2-desktop-style' 'python' 'reuse' 'baloo' 'qt5-websockets' 'qt5-webengine')
provides=('arianna')
conflicts=('arianna')
source=("https://invent.kde.org/graphics/${pkgname}/-/archive/v${pkgver}/${pkgname}-v${pkgver}.tar.gz")
sha256sums=('b2624a4d567bc975d7d4dd053e5e99f64f6a8cd7d0e55231a3a32581ab30bb26')

prepare() {
  mkdir -p ${pkgname}-v${pkgver}/build/
}

build() {
  cd ${pkgname}-v${pkgver}/build/
  cmake -B build/ -S ../${_pkgname} -DBUILD_TESTING=OFF
  cmake --build build/
}

package() {
  cd ${pkgname}-v${pkgver}/build/
  DESTDIR="${pkgdir}" cmake --install build/
}
