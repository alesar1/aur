# Maintainer: fenrig <fenrig.linux at outlook.com>
pkgname=lib_amxp-git
pkgver=v0.9.0.r0.g6564fe1
pkgrel=1
pkgdesc="Generic C-API for common patterns"
arch=('any')
url="https://gitlab.com/soft.at.home/ambiorix/libraries/libamxp"
license=('MIT')

depends=(
	'lib_amxc'
)
makedepends=(
)
provides=(
	'lib_amxp'
)
conflicts=(
	'lib_amxp'
)

gitbranch="master"

source=("${pkgname}::git+https://gitlab.com/soft.at.home/ambiorix/libraries/libamxp.git#branch=${gitbranch}")
md5sums=('SKIP')

pkgver() {
  cd "${pkgname}"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	cd "${pkgname}"
	make
}

package() {
	cd "${pkgname}"
	make DEST="${pkgdir}/" LIBDIR="/usr/lib" install
}
