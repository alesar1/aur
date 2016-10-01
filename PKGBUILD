# Maintainer: Oleg Shparber <trollixx+aur@gmail.com>
# Contributor: Whyme Lyu <callme5long@gmail.com>
# URL: https://github.com/trollixx/aur-packages

pkgname=zeal-git
_appname=zeal
pkgver=0.3.0.1.g0e6d4ff
pkgrel=2
pkgdesc="An offline API documentation browser"
arch=('i686' 'x86_64')
url="https://zealdocs.org/"
license=('GPL3')
depends=('libarchive' 'qt5-webkit' 'qt5-imageformats' 'qt5-x11extras'
         'xcb-util-keysyms' 'xdg-utils')
makedepends=('git')
conflicts=('zeal')
source=("git+https://github.com/zealdocs/$_appname")
sha1sums=('SKIP')

pkgver() {
	cd ${srcdir}/${_appname}
	git describe | sed 's/^v//;s/-/./g'
}

build() {
	cd ${srcdir}/${_appname}
	QT_SELECT=5 qmake PREFIX=/usr CONFIG+=force_debug_info
	make
}

package() {
	cd ${srcdir}/${_appname}
	make INSTALL_ROOT="$pkgdir" install
}
