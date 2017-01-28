_npmname=lerna
_npmver=2.0.0-beta.34
pkgname=lerna # All lowercase
pkgver=2.0.0beta.34
pkgrel=1
pkgdesc="Tool for managing JavaScript projects with multiple packages"
arch=(any)
url="https://github.com/sebmck/lerna#readme"
license=('MIT')
depends=('nodejs' 'npm')
optdepends=()
source=(https://github.com/$_npmname/$_npmname/archive/v$_npmver.tar.gz)
noextract=($_npmname-$_npmver.tgz)
sha1sums=('da24ea62b8ff61cb9b661dc4239f17b89753edcf')

package() {
  cd $srcdir
  local _npmdir="$pkgdir/usr/lib/node_modules/"
  mkdir -p $_npmdir
  cd $_npmdir
  npm install -g --prefix "$pkgdir/usr" $_npmname@$_npmver
}

# vim:set ts=2 sw=2 et:
