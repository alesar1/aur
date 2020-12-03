# Maintainer: fenrig <fenrig.linux at outlook.com>
pkgname=lib_amxt-git
pkgver=v0.1.1.r0.g0b549e9
pkgrel=1
pkgdesc="simple tty api library, adds interactive terminal interface to your applications"
arch=('any')
url="https://gitlab.com/soft.at.home/ambiorix/libraries/libamxt"
license=('MIT')

depends=(
	'lib_amxc'
	'lib_amxp'
)
makedepends=(
)
provides=(
	'lib_amxt'
)
conflicts=(
	'lib_amxt'
)

gitbranch="master"

source=("${pkgname}::git+https://gitlab.com/soft.at.home/ambiorix/libraries/libamxt.git#branch=${gitbranch}")
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
	make DEST="${pkgdir}/" INSTALL_LIB_DIR="/lib" install
}
