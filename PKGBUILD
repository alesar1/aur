# Maintainer: gardenapple@posteo.net
pkgname=readability-cli
_pkgver=2.0.0-pre.5
pkgver="${_pkgver//-/_}"
pkgrel=1
pkgdesc="Firefox Reader Mode in your terminal! - CLI tool for Mozilla's Readability library"
arch=('any')
url="https://www.npmjs.com/package/$pkgname"
license=('GPL3')
depends=('nodejs')
makedepends=('npm' 'jq')
optdepends=('bash-completion: Bash completion'
            'zsh: zsh completion')
source=("https://registry.npmjs.org/$pkgname/-/$pkgname-$_pkgver.tgz")
noextract=("$pkgname-$_pkgver.tgz")
sha256sums=('ab90cf4f9939b2294c8e29a07bf2237546ac69267015f8d212fc8bac48af1d45')
b2sums=('a2678d522b513bb11c02f1eb9c4282a1cfd87c5e3a7ec688f745baa9440f930eb5c79b806c6b7286b7891e7e124bb2d73eafc183fe6786586ab4755c759a9a33')

package() {
	npm install -g --user root --prefix "$pkgdir/usr" "$srcdir/$pkgname-$_pkgver.tgz"

	# Shell completions
	cd "$pkgdir/usr/bin"
	SHELL=/bin/zsh ./readable --completion \
		| install -Dm644 /dev/stdin "$pkgdir/usr/share/zsh/site-functions/_readable"
	SHELL=/bin/bash ./readable --completion \
		| install -Dm644 /dev/stdin "$pkgdir/usr/share/bash-completion/completions/readable"
	cd -


	# Non-deterministic race in npm gives 777 permissions to random directories.
	# See https://github.com/npm/cli/issues/1103 for details.
	find "$pkgdir/usr" -type d -exec chmod 755 {} +

	# Remove references to $pkgdir
	find "$pkgdir" -type f -name package.json -print0 | xargs -0 sed -i "/_where/d"

	# Remove references to $srcdir
	local tmppackage="$(mktemp)"
	local pkgjson="$pkgdir/usr/lib/node_modules/$pkgname/package.json"
	jq '.|=with_entries(select(.key|test("_.+")|not))' "$pkgjson" > "$tmppackage"
	mv "$tmppackage" "$pkgjson"
	chmod 644 "$pkgjson"

	find "$pkgdir" -type f -name package.json | while read pkgjson; do
		local tmppackage="$(mktemp)"
		jq 'del(.man)' "$pkgjson" > "$tmppackage"
		mv "$tmppackage" "$pkgjson"
		chmod 644 "$pkgjson"
	done
}

