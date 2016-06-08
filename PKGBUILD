# Maintainer: Guillaume Brogi <gui-gui@netcourrier.com>
# Based on python2-pywinrm package by: Kevin Houdebert <kevin@qwazerty.eu>

pkgname=python-pywinrm
_realname=pywinrm
pkgver=0.2.0
pkgrel=1
pkgdesc="Python library for Windows Remote Management"
arch=(any)
url="https://pypi.python.org/pypi/pywinrm"
license=('MIT')
depends=('python' 'python-isodate' 'python-xmltodict')
source=("https://github.com/diyan/pywinrm/archive/v${pkgver}.zip")
md5sums=('58c439f96aeb79ee4b5b23b8a0f22e79')

package() {
    cd ${srcdir}/${_realname}-${pkgver}
    python setup.py install --root=${pkgdir}/ --optimize=1
}

# vim:set ts=4 sw=4 et:
