# Maintainer: Hugues Chabot <at google mail>
_npmname=eslint
_npmver=1.10.0
pkgname=nodejs-eslint # All lowercase
pkgver=1.10.0
pkgrel=1
pkgdesc="An AST-based pattern checker for JavaScript."
arch=(any)
url="http://eslint.org"
license=()
depends=('nodejs' 'npm' )
optdepends=()
source=(http://registry.npmjs.org/$_npmname/-/$_npmname-$_npmver.tgz)
noextract=($_npmname-$_npmver.tgz)
sha256sums=('1e42f4cefd760ec5cd5dec92b08830981c47aa5b7a4c073b893b6ab5e409b943')

package() {
  cd $srcdir
  local _npmdir="$pkgdir/usr/lib/node_modules/"
  mkdir -p $_npmdir
  cd $_npmdir
  npm install -g --prefix "$pkgdir/usr" $_npmname@$_npmver
}

# vim:set ts=2 sw=2 et:
