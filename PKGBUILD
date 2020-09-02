# Contributor: Rumen Jekov <rvjekov@gmail.com>
# Maintainer: Rumen Jekov <rvjekov@gmail.com>
# Maintainer: Boian Bonev <bbonev@ipacct.com>

pkgname=iotop-c
pkgver=1.10
pkgrel=1
pkgdesc="simple top-like I/O monitor (implemented in C)"
arch=('any')
url="https://github.com/Tomas-M/iotop"
license=('GPL2')
depends=('ncurses')
makedepends=('git' 'pkgconf')
conflicts=('iotop' 'iotop-git')
provides=('iotop')
source=("iotop-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz" "${url}/releases/download/v${pkgver}/iotop-${pkgver}.tar.gz.asc")
validpgpkeys=('BA60BC20F37E59444D6D25001365720913D2F22D')
md5sums=('SKIP' 'SKIP')

package() {
	cd "${srcdir}/iotop-${pkgver}"
	make DESTDIR="${pkgdir}" V=1 install
}
