_npmname=vtop
_npmver=0.5.5
pkgname=vtop # All lowercase
pkgver=0.5.5
pkgrel=1
pkgdesc="Wow such top. So stats"
arch=(any)
url="http://parall.ax/vtop"
license=()
depends=('nodejs')
makedepends=('npm')
source=(http://registry.npmjs.org/$_npmname/-/$_npmname-$_npmver.tgz)
noextract=($_npmname-$_npmver.tgz)
sha1sums=(286bd962e0ffa454a852989d751fd70d73e26e73)

package() {
  cd $srcdir
  local _npmdir="$pkgdir/usr/lib/node_modules/"
  mkdir -p $_npmdir
  cd $_npmdir
  npm install -g --prefix "$pkgdir/usr" $_npmname@$_npmver
}

# vim:set ts=2 sw=2 et:
