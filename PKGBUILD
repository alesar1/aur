# Maintainer: Polichronucci <nick at discloud dot eu> 

pkgname=owncloud-app-notifications
pkgver=9.0.0
pkgrel=1
pkgdesc="An app that notifies the user about important events of other apps"
arch=('any')
url="https://github.com/owncloud/notifications"
license=('AGPL')
depends=('owncloud')
options=('!strip')
source=("$pkgname-$pkgver.tar.gz::https://github.com/owncloud/notifications/archive/v9.0.0.tar.gz")
sha512sums=("0b00dba2db819b7ac5a2ef8280be3930d1ba350892d2b4b92b8879932d5ff8db9492a7ef9d151ff3e5282f0c9ac980bfc5b77f456482388b98fb92b02109868b")

package() {
  install -d "${pkgdir}/usr/share/webapps/owncloud/apps"
  cp -a "${srcdir}/notifications-${pkgver}" "${pkgdir}/usr/share/webapps/owncloud/apps/notifications"
}
