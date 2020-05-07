# Maintainer: Juliette Monsel <j_4321 at protonmail dot com>
# based on the python2-wadllib PKGBUILD by ValHue <vhuelamo at gmail dot com>

_pkgname="wadllib"
pkgname=("python-wadllib")
pkgver="1.3.4"
pkgrel="1"
pkgdesc="Python 3 library for navigating WADL files. The Web Application Description Language is an XML vocabulary for describing the capabilities of HTTP resources."
arch=('any')
url="https://launchpad.net/wadllib"
license=('LGPL3')
makedepends=('python-setuptools')
depends=('python-lazr-uri' 'python-setuptools' 'python-simplejson')
source=("${pkgname}-${pkgver}.tar.gz::https://launchpad.net/$_pkgname/trunk/$pkgver/+download/$_pkgname-$pkgver.tar.gz"
        "${pkgname}-${pkgver}.tar.gz.asc::https://launchpad.net/$_pkgname/trunk/$pkgver/+download/$_pkgname-$pkgver.tar.gz.asc")
sha256sums=('e995691713d3c795d2b36278de8e212241870f46bec6ecba91794ea3cc5bd67d'
            'SKIP')
validpgpkeys=('AC0A4FF12611B6FCCF01C111393587D97D86500B')  # Colin Watson 

build() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    python setup.py build
}

package() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
