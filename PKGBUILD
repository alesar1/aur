# Maintainer: aimileus <me at aimileus dot nl>
# Contributor: Sebastian Gumprich <aur at gumpri dot ch>
# Contributor: twa022
# Contributor: shimi <shimi.chen@gmail.com>
# Contributor: Gustavo Castro <gustawho at gmail dot com>
pkgname=indicator-kdeconnect
pkgver=0.9.3
pkgrel=1
epoch=1
pkgdesc="Integrate KDEConnect on desktop environments that use AppIndicators (e.g. Unity)"
arch=('x86_64')
url="https://github.com/bajoja/indicator-kdeconnect"
license=('LGPL')
depends=('libappindicator-gtk3' 'kdeconnect' 'python-requests-oauthlib' 'python-gobject')
makedepends=('cmake' 'vala')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/Bajoja/indicator-kdeconnect/archive/${pkgver}.tar.gz")
sha256sums=('6a75da2b87c8c23808376683db5a2563dc31fd9a38548ac1480682e53245bed0')

build() {
  cd "${pkgname}-${pkgver}"
  [ ! -d build ] && mkdir build
  cd build
  cmake .. -DCMAKE_INSTALL_PREFIX=/usr
  make
}

package() {
  cd "${pkgname}-${pkgver}"/build
  make DESTDIR="${pkgdir}" install
}
