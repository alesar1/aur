# Maintainer: Benjamin A. Shelton <zancarius@gmail.com>
# Contributor: Andy Weidenbaum <archbaum@gmail.com>
# Source: https://github.com/zancarius/archlinux-pkgbuilds

pkgname=python2-gevent-websocket
pkgver=0.9.5
pkgrel=1
pkgdesc="Websocket handler for the gevent pywsgi server, a Python network library."
arch=(any)
url="http://pypi.python.org/pypi/gevent-websocket"
license=(Apache)
depends=(python2 python2-gevent)
makedepends=(cython2 python2-setuptools)
source=("https://pypi.python.org/packages/source/g/gevent-websocket/gevent-websocket-${pkgver}.tar.gz")
md5sums=(03a8473b9a61426b0ef6094319141389)
optdepends=(
    'python2-ujson: Ultra-fast JSON encoder and decoder for Python.'
)

package () {
    
    cd "${srcdir}/gevent-websocket-${pkgver}"
    python2 setup.py install --root="${pkgdir}/" --optimize=1

    install -Dm0644 "${srcdir}/gevent-websocket-${pkgver}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

}
