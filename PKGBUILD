# Maintainer: 0x9fff00 <0x9fff00+git@protonmail.ch>

_name=terser
pkgname=nodejs-$_name
pkgver=4.3.4
pkgrel=1
pkgdesc='JavaScript parser, mangler/compressor and beautifier toolkit for ES6+'
arch=('any')
url='https://github.com/fabiosantoscode/terser'
license=('BSD')
depends=('nodejs')
makedepends=('jq' 'npm')
source=("https://registry.npmjs.org/$_name/-/$_name-$pkgver.tgz")
sha256sums=('2a8ebf66f006790f10a74b75ac25988d29a8aef76971f35e9abf1ddbe5dd63ea')

package() {
  npm install -g --user root --prefix "$pkgdir/usr" "$srcdir/$_name-$pkgver.tgz"
  find "$pkgdir/usr" -type d -exec chmod 755 {} +
  find "$pkgdir" -name package.json -print0 | xargs -0 sed -i '/_where/d'
  local tmppackage="$(mktemp)"
  local pkgjson="$pkgdir/usr/lib/node_modules/$_name/package.json"
  jq '.|=with_entries(select(.key|test("_.+")|not))' "$pkgjson" > "$tmppackage"
  mv "$tmppackage" "$pkgjson"
  chmod 644 "$pkgjson"

  install -Dm 644 "$srcdir/package/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
