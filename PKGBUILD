_npmname=webpack-dev-server
_npmver=1.14.1
pkgname=nodejs-webpack-dev-server # All lowercase
pkgver=1.14.1
pkgrel=1
pkgdesc="Serves a webpack app. Updates the browser on changes."
arch=(any)
url="http://github.com/webpack/webpack-dev-server"
license=()
depends=('nodejs' 'npm' )
optdepends=()
source=(http://registry.npmjs.org/$_npmname/-/$_npmname-$_npmver.tgz)
noextract=($_npmname-$_npmver.tgz)
sha1sums=(e51de228071258b0db6d55e0f5fee55eec6755de)

package() {
  cd $srcdir
  local _npmdir="$pkgdir/usr/lib/node_modules/"
  mkdir -p $_npmdir
  cd $_npmdir
  npm install -g --prefix "$pkgdir/usr" $_npmname@$_npmver
}

# vim:set ts=2 sw=2 et:
