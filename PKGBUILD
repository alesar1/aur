# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor:	Dimitris Kiziridis <ragouel at outlook dot com>
# Contributor: davedatum <ask at davedatum dot com>

pkgname=heimer
pkgver=3.2.0
pkgrel=1
pkgdesc="Cross-platform mind map, diagram, and note-taking tool written in Qt"
arch=("x86_64")
url='https://github.com/juzzlin/heimer'
license=('GPL3')
depends=('hicolor-icon-theme' 'qt5-svg')
makedepends=('cmake' 'qt5-tools')
changelog=CHANGELOG
source=("$pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz")
sha256sums=('e72dd06295eb126fa3cbbaaa5b8dd6592604a2089cf805bc3caa2739757ecb46')

build() {
	cmake \
		-DCMAKE_BUILD_TYPE=None \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-Wno-dev \
		-S "Heimer-$pkgver" \
		-B build
	make -C build
}

package() {
	DESTDIR="$pkgdir/" make install -C build
	cd "Heimer-$pkgver"
	install -Dm644 COPYING -t "$pkgdir/usr/share/licenses/$pkgname/"
}
