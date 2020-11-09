# Author: Lukas Grossar <lukas.grossar@gmail.com
# Maintainer: Lukas Grossar <lukas.grossar@gmail.com
_npmname=cz-emoji
pkgname=nodejs-cz-emoji
pkgver=1.3.0
pkgrel=1
pkgdesc="Commitizen plugin to use gitmojis in your commits"
arch=(any)
url="https://github.com/ngryman/cz-emoji"
license=('MIT')
depends=('nodejs' 'nodejs-commitizen')
makedepends=('npm' 'jq')
source=(http://registry.npmjs.org/$_npmname/-/$_npmname-$pkgver.tgz)
noextract=($_npmname-$pkgver.tgz)
sha512sums=('21a9f6f14f0a56a894647c7cc98d334a47a19459338be80050e4f54f0c6a947d95759e0df2229b485902f484b90b336f2f191e59679f0fba5fb927673956e39b')

package() {
    npm install -g --user root --prefix "$pkgdir/usr" "$srcdir/$_npmname-$pkgver.tgz"

    # Remove references to $pkgdir
    find "$pkgdir" -type f -name package.json -print0 | xargs -0 sed -i "/_where/d"

    # Remove references to $srcdir
    local tmppackage="$(mktemp)"
    local pkgjson="$pkgdir/usr/lib/node_modules/$_npmname/package.json"
    jq '.|=with_entries(select(.key|test("_.+")|not))' "$pkgjson" > "$tmppackage"
    mv "$tmppackage" "$pkgjson"
    chmod 644 "$pkgjson"
    chmod u=rwX,go=rX -R "$pkgdir"
    chown -R root:root "$pkgdir"
}
