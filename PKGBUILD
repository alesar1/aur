# Maintainer:  Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=foy
pkgver=0.1.29
pkgrel=2
pkgdesc="A simple, light-weight and modern task runner for general purpose"
arch=('any')
url='http://zaaack.github.io/foy'
license=('MIT')
depends=('nodejs')
makedepends=('yarn')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/zaaack/foy/archive/v${pkgver}.tar.gz")
sha256sums=('484db37c31bb3980357c4782eb977b71fe2f7b78c8aede3632128666d85cd315')

prepare() {
  cd ${srcdir}/${pkgname}-${pkgver}
  mkdir -p ${srcdir}/yarn_cache
  rm package-lock.json
  rm -rf .vscode
  yarn --cache-folder=${srcdir}/yarn_cache install 
}

build() {
  cd ${srcdir}/${pkgname}-${pkgver}
  yarn --cache-folder=${srcdir}/yarn_cache build
}

package() {
  mkdir -p ${pkgdir}/usr/bin
  mkdir -p ${pkgdir}/usr/lib/node_modules/@zaaack/
  mv ${srcdir}/${pkgname}-${pkgver} ${pkgdir}/usr/lib/node_modules/@zaaack/foy
  ln -s /usr/lib/node_modules/@zaaack/foy/lib/cli.js ${pkgdir}/usr/bin/foy
  find "$pkgdir" -name package.json -print0 | xargs -r -0 sed -i '/_where/d'
  find "${pkgdir}/usr" -type d -exec chmod 755 {} +
  local tmppackage="$(mktemp)"
  local pkgjson="$pkgdir/usr/lib/node_modules/@zaaack/$pkgname/package.json"
  jq '.|=with_entries(select(.key|test("_.+")|not))' "$pkgjson" > "$tmppackage"
  mv "$tmppackage" "$pkgjson"
  chmod 644 "$pkgjson"
  chown -R root:root "${pkgdir}"
  install -Dm644 "${pkgdir}/usr/lib/node_modules/@zaaack/foy/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}