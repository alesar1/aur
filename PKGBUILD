# Maintainer: Yen Chi Hsuan <yan12125 at gmail dot com>

_npmname=web-ext
pkgname=nodejs-$_npmname # All lowercase
pkgver=2.4.0
pkgrel=1
pkgdesc='A command line tool to help build, run, and test web extensions'
arch=(any)
url='https://developer.mozilla.org/en-US/Add-ons/WebExtensions'
license=('MPL2')
depends=('nodejs')
makedepends=('npm' 'python2')
source=(https://registry.npmjs.org/$_npmname/-/$_npmname-$pkgver.tgz)
sha256sums=('ca8d1dcda724385b7ce968ac60bcfa3cec8a77d2819607d835cb7a754f8197ac')

package() {
  local _npmdir="$pkgdir/usr/lib/node_modules/"

  cd "$srcdir"

  mkdir -p $_npmdir
  cp -r --no-preserve=ownership package "$_npmdir/$_npmname"

  cd "$_npmdir/$_npmname"
  PYTHON=python2 npm install --production

  mkdir -p "$pkgdir/usr/bin"
  ln -s "/usr/lib/node_modules/$_npmname/bin/$_npmname" "$pkgdir/usr/bin/$_npmname"
}

# vim:set ts=2 sw=2 et:
