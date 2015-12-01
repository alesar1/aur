# Maintainer : Florent H. CARRÉ <colundrum@gmail.com>

_npmname=generator-gulp-angular
_npmversion=1.0.2
pkgname=nodejs-$_npmname
pkgver=1.0.2
pkgrel=1
pkgdesc="Yeoman generator for Gulp & Angular"
arch=('any')
url="https://github.com/Swiip/generator-gulp-angular"
license=('MIT')
depends=('nodejs-yeoman' 'gulp' 'bower')
optdepends=('ruby-sass: needed to build ruby sass preprocessed projects'
            'java-runtime: needed to do e2e protractor tests')
source=(https://registry.npmjs.org/$_npmname/-/$_npmname-$_npmversion.tgz)
noextract=($_npmname-$_npmversion.tgz)
sha1sums=('07b172528b31e35f2b5d5aec2cdfad7df1d15f18')
install=${pkgname}.install

package() {
  cd "$srcdir"
  local _npmdir="$pkgdir/usr/lib/node_modules/"
  mkdir -p "$_npmdir"
  cd "$_npmdir"
  npm install --user root -g --prefix "$pkgdir/usr" $_npmname@$pkgver
  rm -rf "$pkgdir"/usr/bin
  rm -rf "$pkgdir"/usr/lib/node_modules/yo
}

# vim:set ts=2 sw=2 et:

