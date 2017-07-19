# Maintainer: Sebastian Gumprich <aur at gumpri dot ch>
# Contributor: twa022
# Contributor: shimi <shimi.chen@gmail.com>
# Contributor: Gustavo Castro <gustawho at gmail dot com>
pkgname=indicator-kdeconnect
epoch=1
pkgver=0.9.1
pkgrel=1
pkgdesc="Integrate KDEConnect on desktop environments that use AppIndicators (e.g. Unity)"
arch=('any')
url="https://github.com/bajoja/indicator-kdeconnect"
license=('GPL')
conflicts=("${pkgname}-git")
depends=('libappindicator-gtk3' 'kdeconnect' 'vala' 'python-requests-oauthlib' 'python-gobject')
makedepends=('cmake')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/Bajoja/indicator-kdeconnect/archive/${pkgver}.tar.gz")
sha256sums=('9263239df0b1300e93d25a64a2f8972487aa6047c99318b31de6b1973a0760bd')

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
