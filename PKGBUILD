# Maintainer : Florent H. CARRÉ <colundrum@gmail.com>

_npmname=ionic
_npmver=1.7.10
pkgname=nodejs-ionic
pkgver=1.7.10
pkgrel=1
pkgdesc="A tool for creating and building Ionic Framework mobile apps."
arch=(any)
url="http://ionicframework.com/"
license=('MIT')
depends=('nodejs')
optdepends=()
source=(http://registry.npmjs.org/$_npmname/-/$_npmname-$_npmver.tgz)
noextract=($_npmname-$_npmver.tgz)
sha256sums=('1bb6e0cddec885123b201068b787c7417426759a18da006617736f8977235e91')

package() {
  cd "$srcdir"
  local _npmdir="$pkgdir/usr/lib/node_modules/"
  mkdir -p "$_npmdir"
  cd "$_npmdir"
  npm install -g --prefix "$pkgdir/usr" $_npmname@$_npmver
}
