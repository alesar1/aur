# Maintainer: Michael von Domaros <mvondomaros at gmail dot com>
pkgname=travis
pkgver=151107
pkgrel=1
pkgdesc="Trajectory Analyzer and Visualizer"
arch=('i686' 'x86_64')
url="http://www.travis-analyzer.de"
license=('GPL3')
depends=('gcc-libs')
options=('!strip')
source=($url/files/$pkgname-src-$pkgver.tar.gz)
md5sums=('66e9d1f7d3d6087feff9d992ba79f256')

build() {
	cd "$srcdir/$pkgname-src-$pkgver"
	make
}

package() {
	cd "$srcdir/$pkgname-src-$pkgver"
	install -Dm 755 exe/travis $pkgdir/usr/bin/travis
}
