# Maintainer: Simon Legner <Simon.Legner@gmail.com>
_npmname=lebab
_npmver=2.7.2
pkgname=lebab # All lowercase
pkgver=2.7.2
pkgrel=1
pkgdesc="Turn your JavaScript ES5 code into readable ES6/ES7"
arch=(any)
url="https://github.com/mohebifar/lebab"
license=('MIT')
depends=('nodejs' 'npm' )
optdepends=()
source=(http://registry.npmjs.org/$_npmname/-/$_npmname-$_npmver.tgz)
noextract=($_npmname-$_npmver.tgz)

package() {
  cd $srcdir
  local _npmdir="$pkgdir/usr/lib/node_modules/"
  mkdir -p $_npmdir
  cd $_npmdir
  npm install -g --prefix "$pkgdir/usr" $_npmname@$_npmver
}

# vim:set ts=2 sw=2 et:
sha1sums=('b232483e2dc5a9e970a73d09c425665575c8f3b7')
