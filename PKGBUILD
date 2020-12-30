_name=digestif
pkgname=digestif-git
pkgver=0.3.149.bbd522e
pkgrel=1
arch=(any)
license=(MIT)
url="https://github.com/astoff/$_name"
pkgdesc='A code analyzer and Language Server Protocol implementation for [La|Con|Bib]TeX[t] documents.'
provides=($_name)
conflicts=($_name)
depends=(lua lua-lpeg lua-dkjson)
makedepends=(luarocks)
source=("git+$url.git")
sha256sums=('SKIP')

pkgver() {
	cd "$_name"
	printf "%s.%s.%s" \
		"$(git describe --tags --abbrev=0)" \
		"$(git rev-list --count HEAD)" \
		"$(git rev-parse --short HEAD)"
}

build() {
	cd "$srcdir/$_name"
	sed "s/version = \"dev-1\"/version = \"$pkgver-1\"/" "$_name-dev-1.rockspec" > "$_name-$pkgver-1.rockspec"
	luarocks build --pack-binary-rock --deps-mode=none "$_name-$pkgver-1.rockspec"
}

package() {
	cd "$srcdir/$_name"
	local luaver=$(lua -e 'print(_VERSION)' | cut -d' ' -f2)
	luarocks install --tree="$pkgdir/usr/" --deps-mode=none "$_name-$pkgver-1.rockspec"
	cat >"$pkgdir/usr/bin/digestif" <<EOF
#!/bin/bash
lua /usr/lib/luarocks/rocks-$luaver/digestif/$pkgver-1/bin/digestif "\$@"
EOF
	chmod +x "$pkgdir/usr/bin/digestif"
	#sed -Ei "s|'$pkgdir|'|" "$pkgdir/usr/bin/digestif"
	# remove luarocks-created root manifest
	rm "$pkgdir/usr/lib/luarocks/rocks-$luaver/manifest"
}
