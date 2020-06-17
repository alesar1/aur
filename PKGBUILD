# Maintainer: 0x9fff00 <0x9fff00+git@protonmail.ch>

pkgname=terser
pkgver=4.8.0
pkgrel=1
pkgdesc='JavaScript parser, mangler/compressor and beautifier toolkit for ES6+'
arch=('any')
url='https://github.com/fabiosantoscode/terser'
license=('BSD')
depends=('nodejs')
makedepends=('jq' 'npm')
provides=('nodejs-terser')
conflicts=('nodejs-terser')
replaces=('nodejs-terser')
source=("https://registry.npmjs.org/$pkgname/-/$pkgname-$pkgver.tgz")
sha256sums=('fa2d07983dd150fa42d2137c76dc513b40215716ae8a27154166bbb396a2c571')

package() {
  # based on https://wiki.archlinux.org/index.php/Node.js_package_guidelines as of 2020-03-22
  npm install -g --user root --prefix "$pkgdir/usr" "$srcdir/$pkgname-$pkgver.tgz"

  # Non-deterministic race in npm gives 777 permissions to random directories.
  # See https://github.com/npm/npm/issues/9359 for details.
  find "$pkgdir/usr" -type d -exec chmod 755 {} +

  # npm gives ownership of ALL FILES to build user
  # https://bugs.archlinux.org/task/63396
  chown -R root:root "$pkgdir"

  # fix package containing reference to $srcdir/$pkgdir
  find "$pkgdir" -name package.json -print0 | xargs -r -0 sed -i '/_where/d'

  local tmppackage="$(mktemp)"
  local pkgjson="$pkgdir/usr/lib/node_modules/$pkgname/package.json"
  jq '.|=with_entries(select(.key|test("_.+")|not))' "$pkgjson" > "$tmppackage"
  mv "$tmppackage" "$pkgjson"
  chmod 644 "$pkgjson"

  # package specific
  install -Dm 644 "$srcdir/package/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
