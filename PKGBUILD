# Maintainer: Polichronucci <nick at discloud dot eu>

pkgname=owncloud-app-ocsms
pkgver=1.11.4
pkgrel=1
pkgdesc="Push your Android SMS to your ownCloud instance."
arch=('any')
url="https://github.com/nextcloud/ocsms"
license=('AGPL')
depends=('owncloud')
makedepends=()
options=('!strip')
source=("$pkgname-$pkgver.tar.gz::https://github.com/nextcloud/ocsms/archive/${pkgver}.tar.gz")
sha512sums=('6a6e6d543e034be2425766cfbfd084681a7d400b28db1b31c9b87b331663fc37a118830042cd8722dc68022c44383b8c9aa8ff6096d67e2105a3e1a37f230289')

package() {
  install -d "${pkgdir}/usr/share/webapps/owncloud/apps"
  cp -a "${srcdir}/ocsms-${pkgver}" "${pkgdir}/usr/share/webapps/owncloud/apps/ocsms"
}
