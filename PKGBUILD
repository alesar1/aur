# Maintainer: Rafael Cavalcanti <rccavalcanti at gmail dot com>
# Contributor: Jorge Barroso <jorge.barroso.11 at gmail dot com>
# Contributor: x-demon

pkgname=nicotine-plus-git
_gitname=nicotine-plus
pkgver=1.4.1.r17.g8b2c199
pkgrel=2
pkgdesc="A fork of Nicotine, a graphical client for Soulseek."
arch=('any')
url="http://nicotine-plus.org/"
license=('GPL3')
depends=('pygtk' 'gtk2' 'python2-mutagen')
makedepends=('git' 'python2')
optdepends=('miniupnpc: UPnP support'
	'python2-geoip: for geo-blocker'
	'python2-notify: for notifications')
source=(git+https://github.com/Nicotine-Plus/${_gitname}.git)
sha512sums=('SKIP')

pkgver() {
	cd "${srcdir}/${_gitname}"
	git describe --long --tags | sed 's/-/.r/;s/-/./'
}

build() {
	cd "${srcdir}/${_gitname}"
	python2 setup.py build
}

package() {
	cd "${srcdir}/${_gitname}"
	python2 setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}

