# -*- shell-script -*-
# Maintainer: Ivan Shapovalov <intelfx@intelfx.name>
# Contributor: goodmen <goodmenzy@gmail.com>

pkgname=crosstool-ng-git
epoch=1
pkgver=1.24.0.r235.g5fbcd4b7
pkgrel=1
pkgdesc="crosstool-NG aims at building toolchains."
arch=('x86_64' 'armv6h' 'armv7h' 'aarch64')
url="http://crosstool-ng.org/"
license=('GPL')
depends=('ncurses' 'make')
makedepends=('git' 'flex' 'bison' 'gperf' 'help2man' 'unzip' 'lzip')
provides=('crosstool-ng')
conflicts=('crosstool-ng')
source=('git+https://github.com/crosstool-ng/crosstool-ng')
md5sums=('SKIP')

pkgver() {
	cd crosstool-ng

	git describe --long --tags | sed 's/^crosstool-ng-//;s/-rc/rc/;s/-/.r/;s/-/./'
}

prepare () {
	cd crosstool-ng

	# gcc 10.2.0 -- https://aur.archlinux.org/packages/crosstool-ng-git/#comment-760589
	#git pull --no-edit origin pull/1368/head
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
