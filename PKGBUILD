# Maintainer: Jesse Chan <jc@linux.com>
# Contributor: Jesse Chan <jc@linux.com>
_npmname=flood
_npmver=4.5.1
pkgname=nodejs-flood
pkgver=$_npmver
pkgrel=1
pkgdesc="A modern web UI for various torrent clients"
arch=(any)
url="https://flood.js.org"
license=('GPL3')
depends=('nodejs')
makedepends=('jq' 'npm')
optdepends=('mediainfo')
source=(https://registry.npmjs.org/$_npmname/-/$_npmname-$_npmver.tgz)
sha1sums=('2c6c4d3c72ea4edaae922d32de3df3a6c61607f4')
noextract=("$_npmname-$_npmver.tgz")

package() {
    # Thanks jeremejevs and je-vv for the pointers on these!
    npm install -g --user root --cache "${srcdir}/npm-cache" --prefix "$pkgdir/usr" "$srcdir/$_npmname-$pkgver.tgz"

    # Fix permissions
    find "$pkgdir"/usr -type d -exec chmod 755 {} +

    # npm gives ownership of ALL FILES to build user
    # https://bugs.archlinux.org/task/63396
    chown -R root:root "${pkgdir}"

    # Remove references to pkgdir
    find "$pkgdir" -type f -name package.json -print0 | xargs -0 sed -i "/_where/d"

    # Remove references to srcdir
    local tmppackage="$(mktemp)"
    local pkgjson="$pkgdir/usr/lib/node_modules/$_npmname/package.json"
    jq '.|=with_entries(select(.key|test("_.+")|not))' "$pkgjson" > "$tmppackage"
    mv "$tmppackage" "$pkgjson"
    chmod 644 "$pkgjson"
}
