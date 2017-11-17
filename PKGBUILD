_name=hexo-cli
pkgname=nodejs-$_name
pkgver=1.0.4
pkgrel=1
pkgdesc="Command line interface for Hexo: a fast, simple & powerful blog framework."
arch=('any')
url="https://hexo.io"
license=('MIT')
depends=('nodejs')
makedepends=('npm')
conflicts=('nodejs-hexo')
noextract=($_name-$pkgver.tgz)
source=(https://registry.npmjs.org/$_name/-/$_name-$pkgver.tgz)
sha1sums=('c8f1421ec24209d8ffc7bfeea496ab99f34191e1')

package() {
  cd "$srcdir"
  local _npmdir="$pkgdir/usr/lib/node_modules/"
  mkdir -p "$_npmdir"
  cd "$_npmdir"
  npm install --user root -g --prefix "$pkgdir/usr" $_name@$pkgver
}
