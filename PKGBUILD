# Maintainer: Fabio Loli <loli_fabio@protonmail.com>
# https://github.com/FabioLolix

pkgname=madrigal-git
pkgver=r192.8395a23
pkgrel=3
pkgdesc="Qt5 OpenHome control point, still in development"
arch=('i686' 'x86_64')
url="https://github.com/CDrummond/madrigal"
license=('GPL3')
depends=('qt5-svg' 'hicolor-icon-theme')
makedepends=('git')
provides=('madrigal')
source=("${pkgname}::git+https://github.com/CDrummond/madrigal.git")
md5sums=('SKIP')

pkgver() {
  cd ${pkgname}
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	install -d ${srcdir}/${pkgname}/build
	cd ${srcdir}/${pkgname}/build
	cmake .. -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr
	make
	make DESTDIR=$pkgdir install
}
