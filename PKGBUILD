# Maintainer: Nick Boughton (nicholasboughton@gmail.com)
# Contributor: GFdevelop

_npmscope=vue
_npmname=cli-service-global
_npmid="@$_npmscope/$_npmname"

pkgname="${_npmscope}-${_npmname}"
pkgver=4.5.8
pkgrel=1
pkgdesc='vue-cli-service global addon for vue-cli'
arch=('any')
url=https://cli.vuejs.org
license=('MIT')
depends=('nodejs' 'vue-cli')
makedepends=('npm')
source=("$pkgname-$pkgver.tar.gz::https://registry.npmjs.org/$_npmid/-/$_npmname-$pkgver.tgz")
noextract=("${source[@]%%::*}")
# Get SHASUM:  curl -s "https://registry.npmjs.org/@vue/cli-service-global" | jq '.versions."4.5.8".dist.shasum'
sha1sums=('18e351bbdfa2770e807dc7837ae6ec7711f1824e')

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
  sed -i "s|$pkgdir||" "$pkgdir"/usr/lib/node_modules/"$_npmid"/node_modules/sshpk/package.json
  sed -i "s|$pkgdir||" "$pkgdir"/usr/lib/node_modules/"$_npmid"/node_modules/he/package.json

  # Add license
  install -Dm644 "$pkgdir/usr/lib/node_modules/$_npmid/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
