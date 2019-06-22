# Maintainer: Ali Mousavi <ali.mousavi@gmail.com>
_npmname=gatsby-cli
pkgname=nodejs-$_npmname
pkgver=2.7.0
pkgrel=1
pkgdesc="The Gatsby command line interface"
arch=(any)
url="https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-cli"
license=('MIT')
depends=('nodejs')
makedepends=('npm' 'jq')
source=("https://registry.npmjs.org/$_npmname/-/$_npmname-$pkgver.tgz")
noextract=($_npmname-$pkgver.tgz)
md5sums=('0bf58f5e4ffcd1ad0b96e79cf3452b34')

package() {
    npm install -g --cache $srcdir/npm-cache --user root --prefix $pkgdir/usr $srcdir/$_npmname-$pkgver.tgz
    find "$pkgdir"/usr -type d -exec chmod 755 {} +

    # Remove references to $pkgdir
    find "$pkgdir" -type f -name package.json -print0 | xargs -0 sed -i "/_where/d"

    # Remove references to $srcdir
    local tmppackage="$(mktemp)"
    local pkgjson="$pkgdir/usr/lib/node_modules/$_npmname/package.json"
    jq '.|=with_entries(select(.key|test("_.+")|not))' "$pkgjson" > "$tmppackage"
    mv "$tmppackage" "$pkgjson"
    chmod 644 "$pkgjson"
}

