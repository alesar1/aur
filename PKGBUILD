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
conflicts=('iotop')
source=()
md5sums=()

_gitroot=https://github.com/Tomas-M/iotop.git
_gitname=iotop

prepare() {
	cd "${srcdir}"
	if [ -d "${srcdir}"/$_gitname ] ; then
		cd $_gitname && git pull origin
	else
		git clone $_gitroot
	fi
	sed -i 's|/sbin/|/bin/|g' ${srcdir}/$_gitname/Makefile
}

package() {
	cd "${srcdir}/$_gitname"
	make DESTDIR="$pkgdir/" V=1 install
}
