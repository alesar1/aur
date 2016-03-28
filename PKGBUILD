# Maintainer: Anton Grensjö <anton@grensjo.se>
# Contributor: Vlad M. <vlad@archlinux.net>

_npmname=tiddlywiki
pkgname=nodejs-$_npmname
pkgver=5.1.11
pkgrel=1
pkgdesc="A non-linear personal web notebook"
url="http://tiddlywiki.com/"
arch=('any')
license=('BSD')
depends=('nodejs' 'npm')
source=(https://registry.npmjs.org/$_npmname/-/$_npmname-$pkgver.tgz)
noextract=($_npmname-$pkgver.tgz)
sha256sums=('a0bb1adb0ab83e0b771ed2dee2c0472c1f1562ef735de44b5dd5ef4f7b115d85')

package() {
  cd "$srcdir"
  local _npmdir="$pkgdir/usr/lib/node_modules/"
  mkdir -p "$_npmdir"
  cd "$_npmdir"
  npm install --user root -g --prefix "$pkgdir/usr" $_npmname@$pkgver
}
