# Maintainer: Daniel Lima <danielm@tinyhub.tk>

pkgname=gohufont-powerline
_gitname=$pkgname
pkgver=0.1.r1.g0b2a9cf
pkgrel=1
depends=()
makedepends=('xorg-bdftopcf')
url=('https://github.com/dnmario/gohufont-powerline')
license='WTFPL'
pkgdesc="GohuFont with powerline and statusbar symbols."
arch=('any')
source=("git://github.com/dnmario/${_gitname}")
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/$_gitname"
	git describe --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
	cd "$srcdir/$_gitname"
	make install DESTDIR=$pkgdir
}

