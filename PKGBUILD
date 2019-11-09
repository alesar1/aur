# Maintainer: Christoph Stahl <christoph.stahl@tu-dortmund.de>
# Contributor: John D Jones III AKA jnbek <jnbek1972 -_AT_- g m a i l -_Dot_- com>

_npmname=pulp
pkgname=nodejs-$_npmname
pkgver=13.0.0
pkgrel=1
pkgdesc='A build system and package manager for PureScript projects.'
arch=('any')
url='https://github.com/purescript-contrib/pulp'
license=('LGPL3')
makedepends=('npm' 'jq')
depends=('nodejs' 'bower' 'purescript')
source=("https://registry.npmjs.org/$_npmname/-/$_npmname-$pkgver.tgz"
        "LICENSE")
noextract=($_npmname-$pkgver.tgz)

package() {
    npm install -g --user root --prefix="$pkgdir/usr" "$srcdir/$_npmname-$pkgver.tgz"
    find "$pkgdir/usr" -type d -exec chmod 755 {} +
    find "$pkgdir" -type f -name package.json -print0 | xargs -0 sed -i "/_where/d"
    local tmppackage="$(mktemp)"
    local pkgjson="$pkgdir/usr/lib/node_modules/$_npmname/package.json"
    jq '.|=with_entries(select(.key|test("_.+")|not))' "$pkgjson" > "$tmppackage"
    mv "$tmppackage" "$pkgjson"
    chmod 644 "$pkgjson"

    chown root:root "$srcdir/LICENSE"
    install -Dm 644 "$srcdir/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
sha256sums=('91b5e517afffc8f53ed6dc608eef908bd92843ce73976acf57db6eca897b5ba0'
            'f67583c638fab1468c13e230cf928dbdee18f3315e3452228eb7cfcd05eee4b8')
