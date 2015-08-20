# maintainer: hzy068808 at gmail.com
# contributer: a304yuanyuan at gmail.com

pkgname=moonplayer
pkgver=0.39
pkgrel=1
pkgdesc="A qt font-end for mplayer with the abilities of watching and downloading videos from network"
arch=('i686' 'x86_64')
url="https://github.com/coslyk/moonplayer"
license=('GPL')
depends=('qt4' 'python2' 'mplayer')
makedepends=('git')
source=("git+https://github.com/coslyk/moonplayer")
sha1sums=('SKIP')

pkgver(){
	cd $srcdir/$pkgname
	grep "Latest version" README.md | awk '{ print $3 }' | sed 's/^v//g'
}
build() {
	cd $srcdir/$pkgname/src

#	sed -i 's/python/python2/g' moonplayer.pro

	qmake-qt4 moonplayer.pro

	make
}

package() {
	cd $srcdir/$pkgname/src

	make INSTALL_ROOT=$pkgdir install

	cd $pkgdir/usr/share

	mv icons pixmaps
}
