# Maintainer: Tomasz Jakub Rup <tomasz.rup@gmail.com>
pkgname=pnpm
pkgver=6.31.0
pkgrel=0
pkgdesc="Fast, disk space efficient package manager"
arch=('any')
url="https://pnpm.js.org/"
license=('MIT')
depends=('nodejs>=12.17.0')
makedepends=('npm' 'jq')
source=("https://registry.npmjs.org/$pkgname/-/$pkgname-$pkgver.tgz")
noextract=("$pkgname-$pkgver.tgz")
sha256sums=('8572a190629ca810bcd80aa8c401e1c67d39db6e8d08e6b1b092ab5f45a023e4')

package() {
	npm install -g --user root --prefix "$pkgdir"/usr "$srcdir/$pkgname-$pkgver.tgz"
	local _npmdir="$pkgdir/usr/lib/node_modules/$pkgname"
	find "$pkgdir"/usr -type d -exec chmod 755 {} +
	chown -R root:root "$pkgdir"
	find "$pkgdir"/usr/lib -depth -name '*.map' -delete
	install -Dm644 "$_npmdir/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	install -Dm644 "$_npmdir/README.md" "$pkgdir/usr/share/doc/$pkgname/README.md"
	rm -rf "$pkgdir/usr/etc" "$_npmdir/LICENSE" "$_npmdir/README.md"

	local tmppackage="$(mktemp)"
	jq '.|=with_entries(select(.key|test("_.+")|not))' "$_npmdir/package.json" > "$tmppackage"
	mv "$tmppackage" "$_npmdir/package.json"
	chmod 644 "$_npmdir/package.json"
}
