# Maintainer: Strahinya Radich <contact@strahinja.org>
pkgname=poe
pkgver=1.4.6
pkgrel=1
pkgdesc=".po file editor"
arch=('x86_64')
url="https://strahinja.srht.site/poe"
license=('GPL3')
source=("$pkgname-$pkgver.tar.gz::https://git.sr.ht/~strahinja/poe/archive/v$pkgver.tar.gz")
md5sums=('fb0465d23c541a2be99124d2fb853ecd')

build() {
	cd $pkgname-v$pkgver
	FALLBACKVER=$pkgver-$pkgrel PREFIX="$pkgdir/usr" ./do -c
}

package() {
	cd $pkgname-v$pkgver
	PREFIX="$pkgdir/usr" ./do install
}
