# Maintainer: Cedric Girard <girard.cedric@gmail.com>
# Contributor: Tom <tomgparchaur@gmail.com>
pkgname=cacti-spine
pkgver=1.1.3
pkgrel=1
pkgdesc="Faster poller for Cacti."
arch=('i686' 'x86_64')
url="http://cacti.net/spine_info.php"
license=('GPL')
depends=('libmariadbclient' 'net-snmp' "cacti=${pkgver}")
makedepends=('help2man')
options=('!makeflags')
backup=('etc/spine.conf')
source=( "http://www.cacti.net/downloads/spine/${pkgname}-${pkgver/_/}.tar.gz")
md5sums=('0a21b836cc0a1bed438bdad3635f975f')


build() {
  cd "${srcdir}/${pkgname}-${pkgver/_/}"
  ./configure --prefix=/usr --sysconfdir=/etc
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver/_/}"
  make DESTDIR="${pkgdir}" install
  mv "${pkgdir}"/etc/spine.conf.dist "${pkgdir}"/etc/spine.conf
}

