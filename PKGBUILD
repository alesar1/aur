# Maintainer: Benjamin Copeland <ben@copeland.me.uk>

pkgname=python2-cli53
pkgver=0.5.0
pkgrel=2
pkgdesc="Command line script to administer the Amazon Route 53 DNS service"
arch=(any)
url='https://github.com/barnybug/cli53'
license=('BSD')
depends=('python2' 'python2-boto' 'python2-dnspython')
makedepends=('python2-setuptools')
source=("https://pypi.python.org/packages/source/c/cli53/cli53-${pkgver}.tar.gz")
md5sums=('9ff8a47279b62e44bbe4ed2129705c99')

package () {
    cd "${srcdir}/cli53-${pkgver}"

    /usr/bin/python2 setup.py install --root=${pkgdir}
    install -D -m0664 "${srcdir}/cli53-${pkgver}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
