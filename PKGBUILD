# $Id$
# Maintainer: Mohammadreza Abdollahzadeh <morealaz at gmail dot com>
# Contributer: Radu Potop <radu at wooptoo com>

pkgname=nodejs-docs
pkgver=11.2.0
pkgrel=1
pkgdesc="Node.js API documentation."
arch=(any)
url="https://nodejs.org/en/docs/"
license=('MIT')
options=('docs')
source=("https://nodejs.org/dist/v$pkgver/node-v$pkgver.tar.gz")
sha256sums=('2766fea693bc7a4750feef16d3c109df44d4319d4763678d60a5e8f177d0fa9e')

package() {
	cd "node-v$pkgver"
	install -d $pkgdir/usr/share/doc/nodejs
	cp -ar ./doc/api $pkgdir/usr/share/doc/nodejs/
}
# vim:set ts=2 sw=2 et:
