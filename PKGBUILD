_npmname=nativefier
_npmver=6.8.0
pkgname=nodejs-nativefier # All lowercase
pkgver=6.8.0
pkgrel=1
pkgdesc="Wrap web apps natively"
arch=(any)
url="https://github.com/jiahaog/nativefier#readme"
license=()
depends=('nodejs' 'npm' )
optdepends=()
source=(http://registry.npmjs.org/$_npmname/-/$_npmname-$_npmver.tgz)
noextract=($_npmname-$_npmver.tgz)
sha1sums=(f78ea3c463826ab5c238cfcfa50a13083caa68ab)

package() {
  cd $srcdir
  local _npmdir="$pkgdir/usr/lib/node_modules/"
  mkdir -p $_npmdir
  cd $_npmdir
  npm install -g --prefix "$pkgdir/usr" $_npmname@$_npmver
}

# vim:set ts=2 sw=2 et:
