pkgname=vercel
pkgver=19.2.0
pkgrel=1
pkgdesc="The command line interface for Vercel"
arch=(any)
url="https://github.com/zeit/now"
license=('MIT')
depends=('npm')
makedepends=('jq')
source=(http://registry.npmjs.org/$pkgname/-/$pkgname-$pkgver.tgz)
noextract=($pkgname-$pkgver.tgz)
sha256sums=('378ee275ba79010fd13f386d4a65d66d52e2d8688a38ab84217f5945d57408a3')

# For more info about this package see:
# https://wiki.archlinux.org/index.php/Node.js_package_guidelines
package() {
  npm install -g --user root --cache "${srcdir}/npm-cache" --prefix "$pkgdir/usr" "$srcdir/$pkgname-$pkgver.tgz"

  # Fix permissions
  find "$pkgdir"/usr -type d -exec chmod 755 {} +

  # Remove references to pkgdir
  find "$pkgdir" -type f -name package.json -print0 | xargs -0 sed -i "/_where/d"

  # Remove references to srcdir
  local tmppackage="$(mktemp)"
  local pkgjson="$pkgdir/usr/lib/node_modules/$pkgname/package.json"
  jq '.|=with_entries(select(.key|test("_.+")|not))' "$pkgjson" > "$tmppackage"
  mv "$tmppackage" "$pkgjson"
  chmod 644 "$pkgjson"

  # npm gives ownership of ALL FILES to build user
  # https://bugs.archlinux.org/task/63396
  chown -R root:root "${pkgdir}"
}
