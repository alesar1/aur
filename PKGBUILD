# Maintainer: Thorben Günther <echo YWRtaW5AeGVucm94Lm5ldAo= | base64 -d>

pkgname=ansible-language-server
pkgver=0.8.0
pkgrel=1
pkgdesc='Ansible Language Server'
arch=('any')
url="https://github.com/ansible/ansible-language-server"
license=('MIT')
depends=('ansible' 'nodejs')
optdepends=('ansible-lint: required for linter support')
makedepends=('npm' 'jq')
source=("$pkgname-$pkgver.tgz::https://registry.npmjs.org/@ansible/$pkgname/-/$pkgname-$pkgver.tgz")
noextract=("$pkgname-$pkgver.tgz")
sha256sums=('7acc49fbd3840ab5b5602292fc69e90404f11c68fb6deb9eb54e2965e051022e')

package() {
    npm install -g --prefix "$pkgdir/usr" "$srcdir/$pkgname-$pkgver.tgz"
    find "$pkgdir/usr" -type d -exec chmod 755 {} +
    chown -R root:root "${pkgdir}"

    # Remove references to $pkgdir
    find "$pkgdir" -type f -name package.json -print0 | xargs -0 sed -i "/_where/d"

    # Remove references to $srcdir
    local tmppackage="$(mktemp)"
    local pkgjson="$pkgdir/usr/lib/node_modules/@ansible/$pkgname/package.json"
    jq '.|=with_entries(select(.key|test("_.+")|not))' "$pkgjson" > "$tmppackage"
    mv "$tmppackage" "$pkgjson"
    chmod 644 "$pkgjson"
}
