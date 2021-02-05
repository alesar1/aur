# Maintainer: fenrig <fenrig.linux at outlook.com>
pkgname=lib_amxc-git
pkgver=v1.0.5.r0.g4c321b7
pkgrel=1
pkgdesc="Generic C-implementation of data containers"
arch=('any')
url="https://gitlab.com/soft.at.home/ambiorix/libraries/libamxc"
license=('MIT')

depends=(
)
makedepends=(
)
provides=(
	'lib_amxc'
)
conflicts=(
	'lib_amxc'
)

gitbranch="master"

source=("${pkgname}::git+https://gitlab.com/soft.at.home/ambiorix/libraries/libamxc.git#branch=${gitbranch}")
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
