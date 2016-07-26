# Maintainer: Jeena <hello@jeena.net>

pkgname=feedthemonkey
_name=FeedTheMonkey
pkgver=2.2.1
pkgrel=1
pkgdesc="Desktop client for the TinyTinyRSS reader"
arch=('i686' 'x86_64')
url="http://jabs.nu/feedthemonkey"
license=('GPL3')
depends=('qt5-declarative' 'qt5-quick1' 'qt5-quickcontrols' 'qt5-webengine')
source=("https://github.com/jeena/${_name}/archive/v${pkgver}.tar.gz")
md5sums=('5a54045934ab45068c8908fe459bd278')

build() {
	cd "${_name}-$pkgver"
	qmake-qt5 PREFIX=${pkgdir}/usr
	make
}

package() {
	cd "${_name}-$pkgver"
	make install
	install -D -m644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/COPYING"
}
