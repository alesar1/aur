# Maintainer: Locutus <locutus@operamail.com>
# Contributor: Tobias Brunner <tobias@tobru.ch>

_npmname=cloudron
_npmver=4.11.0
pkgname=cloudron-cli
pkgver=$_npmver
pkgrel=1
pkgdesc="Cloudron Commandline Tool"
arch=('any')
url="https://git.cloudron.io/cloudron/cloudron-cli"
license=('MIT')
depends=('nodejs')
makedepends=('npm' 'jq')
optdepends=()
source=("http://registry.npmjs.org/$_npmname/-/$_npmname-$_npmver.tgz")
noextract=("$_npmname-$_npmver.tgz")
sha256sums=('5d283d7c5de7c40d7917377c5f1daa9aba5640eac67b246500cc025b0d59a22c')

package() {
	npm install -g --user root --prefix "$pkgdir/usr" "$srcdir/$_npmname-$pkgver.tgz"
	find "$pkgdir/usr" -type d -exec chmod 755 {} +

	# Remove references to $pkgdir
	find "$pkgdir" -type f -name package.json -print0 | xargs -0 sed -i "/_where/d"

	# Remove references to $srcdir
	local tmppackage="$(mktemp)"
	local pkgjson="$pkgdir/usr/lib/node_modules/$_npmname/package.json"
	jq '.|=with_entries(select(.key|test("_.+")|not))' "$pkgjson" > "$tmppackage"
	mv "$tmppackage" "$pkgjson"
	chmod 644 "$pkgjson"
}
