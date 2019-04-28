# maintainer: hzy068808 at gmail.com
# contributer: a304yuanyuan at gmail.com
# contributer: rob.til.freedman@googlemail.com

pkgname=moonplayer
pkgver=2.7
pkgrel=1
pkgdesc="A qt font-end for mplayer with the abilities of watching and downloading videos from chinese network"
arch=('i686' 'x86_64')
url="https://github.com/coslyk/moonplayer"
license=('GPL')
depends=('python' 'qt5-x11extras' 'qt5-websockets' 'qt5-webengine' 'mpv' 'qtermwidget')
makedepends=('git')
source=(
	$pkgname-$pkgver.tar.gz::https://github.com/coslyk/moonplayer/archive/$pkgver.tar.gz
	)
provides=('moonplayer')
conflicts=('moonplayer')
sha1sums=('2bb7e120dccf04cc1d89a6ad5047deea3f984d5f')

build() {
	cd $srcdir/$pkgname-$pkgver/src
#
	find . -name '*.py' -exec sed -i \
	's|#![ ]*/usr/bin/python$|&2|;s|#![ ]*/usr/bin/env python$|&2|' {} +

	qmake-qt5 PREFIX=/usr moonplayer.pro

	make
}

package() {
	cd $srcdir/$pkgname-$pkgver/src

	make INSTALL_ROOT=$pkgdir install

	#clean pyc
	#rm $pkgdir/usr/share/moonplayer/plugins/*.pyc

	cd $pkgdir/usr/share

	mv icons pixmaps
}
