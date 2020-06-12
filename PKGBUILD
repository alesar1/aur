# Maintainer: Nick Boughton (nicholasboughton@gmail.com)
# Contributor: GFdevelop

_npmscope=quasar
_npmname=cli
_npmid="@$_npmscope/$_npmname"

pkgname="${_npmscope}-${_npmname}"
pkgver=1.0.7
pkgrel=3
pkgdesc='CLI management tool for development with the Quasar framework'
arch=('any')
url=https://quasar.dev
license=('MIT')
depends=('nodejs>=10.0.0')
makedepends=('npm>=5.0.0')
optdepends=('npm: JS package management support')
conflicts=()
source=("$pkgname-$pkgver.tar.gz::https://registry.npmjs.org/$_npmid/-/$_npmname-$pkgver.tgz")
noextract=("${source[@]%%::*}")
# Get SHASUM:  curl -s "https://registry.npmjs.org/@quasar/cli" | jq '.versions."1.0.7".dist.shasum'
sha1sums=('0bb8de2f74d822c9e1ee237ae4036efed559c67d')

package() {
 # Setting temporary cache
  npm install -g --user root --cache "$srcdir/npm-cache" --prefix "$pkgdir/usr" "${source[@]%%::*}"

  # Non-deterministic race in npm gives 777 permissions to random directories.
  # See https://github.com/npm/npm/issues/9359 for details.
  find "${pkgdir}"/usr -type d -execdir chmod 755 {} \+

  # npm gives ownership of ALL FILES to build user
  # https://bugs.archlinux.org/task/63396
  chown -R root:root $pkgdir

  # Package contains reference to $srcdir/$pkgdir
  find "${pkgdir}" -type f -name package.json -execdir sed -i '/_where/d' {} \+
  
  # print first line (the '{' symbol) and lines from the first non-underscored key to the end
  # (npm internal keys are underscored but we don't need these keys)
  sed -i -n '1p;/  "[^_].*": {$/,$p' "$pkgdir"/usr/lib/node_modules/"$_npmid"/package.json

  # Add license
  install -Dm644 "$pkgdir/usr/lib/node_modules/$_npmid/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
