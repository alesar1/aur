# Maintainer: Daniel Lima <danielm@nanohub.tk>

pkgname=xcursor-capitaine-git
conflicts=('xcursor-capitaine'
           'capitaine-cursors')
pkgver=2.1.r2.g3ae9ace
pkgrel=1
pkgdesc='Capitaine Cursors - an x-cursor theme inspired by macOS and based on KDE Breeze'
arch=('any')
url='https://krourke.org/projects/art/capitaine-cursors'
license=('LGPLv3')
source=(git+https://github.com/keeferrourke/capitaine-cursors)
md5sums=('SKIP')

pkgver() {
	cd $srcdir/capitaine-cursors
	git describe --tags | sed 's/^r//;s/-/.r/;s/-/./g'
}

package() {
	cd $srcdir/capitaine-cursors
	install -d $pkgdir/usr/share/icons/
	cp -pr $srcdir/capitaine-cursors/dist/ $pkgdir/usr/share/icons/capitaine-cursors
}

