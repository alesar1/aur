# Maintainer: Michael Koloberdin <koloberdin@gmail.com>
pkgname=urweb
pkgver=20170105
pkgrel=1
pkgdesc="Ur/Web: purely functional language/framework for web programming"
arch=('i686' 'x86_64')
url="http://www.impredicative.com/ur/"
license=('BSD')
makedepends=('curl' 'mlton')
depends=('libmysqlclient' 'postgresql-client' 'sqlite3' 'openssl' 'uthash')
source=("http://www.impredicative.com/ur/$pkgname-$pkgver.tgz"
	"use-system-uthash.patch")
md5sums=('2b7038feec03eef5761c5641bc28c176'
         '23f6f18b7bdbb7ff7c1497734513737e')

prepare() {
	cd "$pkgname-$pkgver"
	patch -p1 -i "$srcdir/use-system-uthash.patch"
}

build() {
	cd "$pkgname-$pkgver"
	./configure --prefix=/usr
	make
}

check() {
	cd "$pkgname-$pkgver"
	make -k check
}

package() {
	cd "$pkgname-$pkgver"
	
	make DESTDIR="$pkgdir/" install
	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
