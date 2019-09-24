# Maintainer: Alexandre Petitjean <alpetitjean at gmail dot com>

pkgname=python2-ws4py
_ghname=WebSocket-for-Python
pkgver=0.5.1
pkgrel=1
pkgdesc="WebSocket library for Python"
arch=('any')
url="https://github.com/Lawouach/${_ghname}"
license=('BSD')
depends=('python2')
makedepends=('python2')
optdepends=('python2-cherrypy: CherryPy server'
            'python2-gevent: gevent server'
            'python2-tornado: Tornado client')
conflicts=('python2-ws4py-git')
provides=('python2-ws4py')
source=("https://github.com/Lawouach/${_ghname}/archive/${pkgver}.tar.gz")
md5sums=('7fe98bebe2f86ce461805b04b29bf1da')

package() {
  cd "$srcdir/${_ghname}-${pkgver}"
  python2 setup.py install --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:
