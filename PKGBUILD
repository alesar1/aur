# Maintainer: Strahinya Radich <contact@strahinja.org>
pkgname=sled
pkgver=0.9.2
pkgrel=1
pkgdesc="Simple text editor"
arch=('x86_64')
url="https://strahinja.srht.site/sled"
license=('GPL3')
source=("$pkgname-$pkgver.tar.gz::https://git.sr.ht/~strahinja/sled/archive/v$pkgver.tar.gz")
md5sums=('7c0b123352789745d308c8f56c81f7f6')

build() {
	cd $pkgname-v$pkgver
	FALLBACKVER=$pkgver-$pkgrel PREFIX="$pkgdir/usr" ./do -c
}

package() {
	cd $pkgname-v$pkgver
	PREFIX="$pkgdir/usr" ./do install
}
