# Maintainer: Thomas "Ventto" Venriès <thomas.venries@gmail.com>

pkgname=batify
pkgver=0.9
pkgrel=1
pkgdesc='Simple plug and battery level warnings using udev and libnotify (multi-users).'
arch=('any')
url="https://github.com/Ventto/${pkgname}.git"
license=('MIT')
depends=('bash')
provides=("${pkgname}")
conflicts=("${pkgname}")
makedepends=('git' 'libnotify')
optdepends=('notification-daemon')
source=("https://github.com/Ventto/${pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=('SKIP')

build() {
  cd ${pkgname}-${pkgver}
  make
}

package() {
  cd ${pkgname}-${pkgver}
  make DESTDIR="${pkgdir}" install
}
