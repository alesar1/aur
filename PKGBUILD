# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: Simon Legner <Simon.Legner@gmail.com>

pkgname=rollup
pkgver=2.66.0
pkgrel=1
pkgdesc="Next-generation ES6 module bundler"
arch=('any')
url="https://rollupjs.org/"
license=('MIT')
depends=('nodejs')
makedepends=('npm')
changelog=CHANGELOG.md
options=('!emptydirs')
source=("$pkgname-$pkgver.tgz::https://registry.npmjs.org/$pkgname/-/$pkgname-$pkgver.tgz")
noextract=($pkgname-$pkgver.tgz)
sha256sums=('c932aaec8151cecff007b8002dd05a2a3ed7ac39030e499ea15d4ee020e62ce9')

package() {
	export NODE_ENV=production
	npm install -g \
		--cache "$srcdir/npm-cache" \
		--prefix "$pkgdir/usr" \
		"$pkgname-$pkgver.tgz"
	chown -R root:root "$pkgdir/"

	install -d "$pkgdir/usr/share/licenses/$pkgname/"
	install -d "$pkgdir/usr/share/doc/$pkgname/"
	ln -s "/usr/lib/node_modules/$pkgname/LICENSE.md" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	ln -s "/usr/lib/node_modules/$pkgname/README.md" -t "$pkgdir/usr/share/doc/$pkgname/"
}
