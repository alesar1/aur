# Maintainer: Anton Leontiev <bunder /at/ t-25.ru>
pkgname=bgrep
pkgver=0.2
pkgrel=1
pkgdesc='Binary grep'
arch=('i686' 'x86_64')
url='https://github.com/tmbinc/bgrep'
license=('BSD')
source=(https://github.com/tmbinc/bgrep/archive/$pkgname-$pkgver.tar.gz)
md5sums=('99846d0a782bd72665349fd0269eaf11')

build() {
	cd "$srcdir/$pkgname-$pkgname-$pkgver"
	make
}

check() {
	cd "$srcdir/$pkgname-$pkgname-$pkgver/test"
	./bgrep-test.sh
}

package() {
	install -Dm755 "$srcdir/$pkgname-$pkgname-$pkgver/bgrep" "$pkgdir/usr/bin/bgrep"
}