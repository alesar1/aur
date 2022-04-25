# Maintainer: Strahinya Radich <contact@strahinja.org>
pkgname=poe
pkgver=1.5.1
pkgrel=2
pkgdesc=".po file editor"
arch=('x86_64')
url="https://strahinja.srht.site/poe"
license=('GPL3')
source=("$pkgname-$pkgver.tar.gz::https://git.sr.ht/~strahinja/poe/archive/v$pkgver.tar.gz")
md5sums=('ee9135d140152fa4b44dc18368911e9e')

build() {
	local redo=$(command -v redo || echo ./do -c)
	cd $pkgname-v$pkgver
	FALLBACKVER=$pkgver-$pkgrel PREFIX="$pkgdir/usr" ${redo}
}

package() {
	local redo=$(command -v redo || echo ./do)
	cd $pkgname-v$pkgver
	PREFIX="$pkgdir/usr" ${redo} install
}
