# Maintainer: Daurnimator <quae@daurnimator.com>

pkgname=(lua-luaossl lua51-luaossl lua52-luaossl)
pkgver=20190612
pkgrel=1
arch=('x86_64')
url='http://25thandclement.com/~william/projects/luaossl.html'
license=('MIT')
makedepends=('lua' 'lua51' 'lua52')
depends=('openssl')
source=("$pkgname-$pkgver.tar.gz::https://github.com/wahern/luaossl/archive/rel-$pkgver.tar.gz")
md5sums=('f7960de30931a60ac5eb1196a340772c')

build() {
	cd luaossl-rel-$pkgver;
	make prefix=/usr
}

package_lua-luaossl() {
	pkgdesc='Most comprehensive OpenSSL module in the Lua universe for Lua 5.3'

	cd luaossl-rel-$pkgver;
	make DESTDIR="$pkgdir" prefix=/usr install5.3
	install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}

package_lua51-luaossl() {
	pkgdesc='Most comprehensive OpenSSL module in the Lua universe for Lua 5.1'

	cd luaossl-rel-$pkgver;
	make DESTDIR="$pkgdir" prefix=/usr install5.1
	install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}

package_lua52-luaossl() {
	pkgdesc='Most comprehensive OpenSSL module in the Lua universe for Lua 5.2'

	cd luaossl-rel-$pkgver;
	make DESTDIR="$pkgdir" prefix=/usr install5.2
	install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
