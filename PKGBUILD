# -*- shell-script -*-
# Maintainer: Ivan Shapovalov <intelfx@intelfx.name>
# Contributor: goodmen <goodmenzy@gmail.com>

pkgname=crosstool-ng-git
epoch=1
pkgver=1.24.0rc1.r0.gfb744d81
pkgrel=1
pkgdesc="crosstool-NG aims at building toolchains."
arch=('i686' 'x86_64')
url="http://crosstool-ng.org/"
license=('GPL')
depends=('ncurses' 'make')
makedepends=('git' 'flex' 'bison' 'gperf' 'help2man' 'unzip' 'lzip')
provides=('crosstool-ng')
conflicts=('crosstool-ng')
source=('git://github.com/crosstool-ng/crosstool-ng')
md5sums=('SKIP')

pkgver() {
	cd crosstool-ng

	git describe --long --tags | sed 's/^crosstool-ng-//;s/-rc/rc/;s/-/.r/;s/-/./'
}

build () {
	cd crosstool-ng

	./bootstrap
	./configure --prefix=/usr
	make
}

package () {
	cd crosstool-ng

	make DESTDIR="$pkgdir" install
}
