# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=kmdr
pkgver=1.2.0
pkgrel=1
pkgdesc="The CLI tool for explaining commands from your terminal"
arch=('any')
url="https://kmdr.sh"
license=('MIT')
depends=('nodejs')
makedepends=('npm' 'jq')
source=("$pkgname-$pkgver.tar.gz::https://github.com/ediardo/kmdr-cli/archive/v$pkgver.tar.gz")
sha256sums=('512cbc06e57ab9ea5e6986b9ae0681b9691b58b2cc549edf693cf71fdb5f3a04')

package() {
	cd "$pkgname-cli-$pkgver"
	npm install "$pkgname@latest" \
		--cache "$srcdir/npm-cache" \
		-g \
		--user root \
		--prefix "$pkgdir"/usr

	# Non-deterministic race in npm gives 777 permissions to random directories.
	# See https://github.com/npm/npm/issues/9359 for details.
	find "$pkgdir"/usr -type d -exec chmod 755 {} +

	# Remove references to $pkgdir
	find "$pkgdir" -type f -name package.json -print0 | xargs -0 sed -i "/_where/d"

	# Remove references to $srcdir
	local tmppackage="$(mktemp)"
	local pkgjson="$pkgdir/usr/lib/node_modules/$pkgname/package.json"
	jq '.|=with_entries(select(.key|test("_.+")|not))' "$pkgjson" > "$tmppackage"
	mv "$tmppackage" "$pkgjson"
	chmod 644 "$pkgjson"

	install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
}
