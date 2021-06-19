# Maintainer: Thomas Quillan <tjquillan@gmail.com>

pkgname=nodejs-neovim
_npmname=neovim
pkgver=4.10.0
pkgrel=1
pkgdesc="Nvim Node.js client and plugin host"
arch=("any")
url="https://github.com/neovim/node-client"
license=("MIT")
depends=("nodejs")
makedepends=("npm" "jq")
optdepends=()
source=("https://registry.npmjs.org/$_npmname/-/$_npmname-$pkgver.tgz")
sha256sums=('85b00f63745b70a5247e8f3910cef0d7203393f2c3e54c8bf389338c3cb7a5f2')
noextract=("$_npmname-$pkgver.tgz")

package() {
	npm install -g --cache "${srcdir}/npm-cache" --prefix "$pkgdir/usr" "$srcdir/$_npmname-$pkgver.tgz"

	# Non-deterministic race in npm gives 777 permissions to random directories.
	# See https://github.com/npm/cli/issues/1103 for details.
	find "${pkgdir}/usr" -type d -exec chmod 755 {} +

	# npm gives ownership of ALL FILES to build user
	# https://bugs.archlinux.org/task/63396
	chown -R root:root "${pkgdir}"

	# Remove references to $pkgdir
	find "$pkgdir" -type f -name package.json -print0 | xargs -0 sed -i "/_where/d"

	# Remove references to $srcdir
	local tmppackage="$(mktemp)"
	local pkgjson="$pkgdir/usr/lib/node_modules/$_npmname/package.json"
	jq '.|=with_entries(select(.key|test("_.+")|not))' "$pkgjson" > "$tmppackage"
	mv "$tmppackage" "$pkgjson"
	chmod 644 "$pkgjson"
}
