# Maintainer: Alexander Bruegmann <mail[at]abruegmann[dot]eu>
# Contributor: Christian Rebischke <chris.rebischke[at]archlinux[dot]org>
pkgbase=python-pymisp
_pyname=PyMISP
pkgname=('python-pymisp' 'python2-pymisp')
makedepends=('python' 'python2' 'python-setuptools' 'python2-setuptools')
pkgver=2.4.119
pkgrel=1
pkgdesc="Python library to access MISP platforms via their REST API"
arch=('any')
url="https://github.com/MISP/PyMISP/"
license=('custom')
source=("${_pyname}-${pkgver}.tar.gz::https://github.com/MISP/PyMISP/archive/v${pkgver}.tar.gz")
sha512sums=('02859e31c47689aac8416e36c6ce06d4599b58ea9c60ee8bebff7d445249819e09cd02246da0951b7d779b37f1d2773e270cb9da01b8991a16b9ce1280653f6b')

package_python-pymisp() {
  depends=('python' 'python-jsonschema' 'python-requests' 'python-dateutil' 'python-deprecated' 'python-cachetools')
  cd "${srcdir}/${_pyname}-${pkgver}"
  python setup.py install -O1 --root="${pkgdir}"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

package_python2-pymisp() {
  depends=('python2' 'python2-jsonschema' 'python2-requests' 'python2-dateutil' 'python2-deprecated' 'python2-enum34' 'python2-functools32' 'python2-cachetools')
  cd "${srcdir}/${_pyname}-${pkgver}"
  python2 setup.py install -O1 --root="${pkgdir}"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
