# Maintainer: Jonne Haß <me@jhass.eu>

_npmname=ember-cli
pkgname=nodejs-$_npmname
pkgver=3.0.0
pkgrel=1
pkgdesc="The ember command line interface"
arch=('any')
url="http://www.ember-cli.com/"
license=('MIT')
depends=('nodejs' 'npm')
source=(https://registry.npmjs.org/$_npmname/-/$_npmname-$pkgver.tgz)
noextract=($_npmname-$pkgver.tgz)
sha256sums=('324f174b7d3209070cb9ab349a711b4a0861bc6d510ecad91554c4d9375e1d7a')

package() {
  cd "$srcdir"
  local _npmdir="$pkgdir/usr/lib/node_modules/"
  mkdir -p "$_npmdir"
  cd "$_npmdir"
  npm install --no-optional --user root -g --prefix "$pkgdir/usr" $_npmname@$pkgver
  find "$pkgdir" -type d -exec chmod 755 \{\} +
}
