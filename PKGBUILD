# Maintainer: Nek.12 <vaizin.nikita@gmail.com>
pkgname='notion-enhancer'
pkgver=0.8.4
pkgrel=1
pkgdesc="An enhancer/customiser for the all-in-one productivity workspace notion.so"
arch=('any')
url="https://github.com/dragonwocky/notion-enhancer"
license=(MIT)
groups=()
depends=('notion-app>=1:2.0.7-3.2'
         'nodejs>=14.8.0-1'
         'asar>=3.0.3-1')
makedepends=('npm' 'jq')
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=$pkgname
source=("https://registry.npmjs.org/notion-enhancer/-/$pkgname-$pkgver.tgz")
noextract=("${pkgname}-${pkgver}.tgz" )
md5sums=('3dd7768e8152093f284dd749e8c5ad2d')
package() {
    npm install --ignore-scripts -g --user root --cache "${srcdir}/npm-cache" --prefix "${pkgdir}/usr" "${srcdir}/${pkgname}-${pkgver}.tgz"

    #fix file permissions
    find "${pkgdir}/usr" -type d -exec chmod 755 {} +
    chown -R root:root "${pkgdir}"

    # Remove references to $pkgdir
	find "$pkgdir" -type f -name package.json -print0 | xargs -0 sed -i "/_where/d"

	# Remove references to $srcdir
	local tmppackage="$(mktemp)"
	local pkgjson="$pkgdir/usr/lib/node_modules/$pkgname/package.json"
	jq '.|=with_entries(select(.key|test("_.+")|not))' "$pkgjson" > "$tmppackage"
	mv "$tmppackage" "$pkgjson"
	chmod 644 "$pkgjson"
}
