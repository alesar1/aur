# Maintainer: Felix Höffken <felix at ctrl.alt.coop>

_npmname=@nestjs/cli
_npmver=6.6.4
_srcname="cli-${_npmver}.tgz"
pkgname=nodejs-nestjs-cli
pkgver=${_npmver}
pkgrel=0
pkgdesc="The command line interface for nestjs"
arch=(any)
url='https://docs.nestjs.com/cli/overview'
license=()
depends=('npm' 'jq' 'typescript')
optdepends=()
source=(http://registry.npmjs.org/${_npmname}/-/${_npmname}-${_npmver}.tgz)
noextract=(${_srcname})
sha256sums=('a9bf712a03eca912ba84701fa6d0ca82ba015fd32ce7fa2e2c0c5907f727ece9')

package() {
  npm install --cache "${srcdir}/npm-cache" -g --user root --prefix "$pkgdir"/usr "${srcdir}/${_srcname}"
  find "${pkgdir}"/usr -type d -exec chmod 755 {} +

  # Remove references to $pkgdir
  find "$pkgdir" -type f -name package.json -print0 | xargs -0 sed -i "/_where/d"

  # Remove references to $srcdir
  local tmppackage="$(mktemp)"
  local pkgjson="$pkgdir/usr/lib/node_modules/$_npmname/package.json"
  jq '.|=with_entries(select(.key|test("_.+")|not))' "$pkgjson" > "$tmppackage"
  mv "$tmppackage" "$pkgjson"
  chmod 644 "$pkgjson"
}

# vim:set ts=2 sw=2 et:
