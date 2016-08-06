# Maintainer: Mikkel Oscar Lyderik <mikkeloscar at gmail dot com>

_py=python2

pkgname=websockify
pkgver=0.8.0
pkgrel=1
pkgdesc="WebSocket to TCP proxy/bridge."
license=('LGPL3')
arch=('any')
url="http://github.com/kanaka/websockify"
makedepends=($_py "$_py-distribute")
depends=($_py "$_py-numpy")
source=("https://github.com/kanaka/$pkgname/archive/v${pkgver}.tar.gz")
sha1sums=('7efae9ab9fcf56d105f26038dc1f51ac9b6882a3')

package() {
  cd "$srcdir/$pkgname-$pkgver"
  $_py setup.py install --root="$pkgdir/" --optimize=1
}

# vim:set sw=2 sts=2 ft=sh et:
