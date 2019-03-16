# Maintainer: Razer <razer@neuf.fr>
pkgname=python-pylint-django
_pypi_pkgname=pylint-django
pkgver=2.0.6
pkgrel=0
pkgdesc="A Pylint plugin to help Pylint understand the Django web framework"
arch=('any')
url="https://github.com/landscapeio/pylint-django"
license=('GPL2')
depends=('python')
makedepends=('python-setuptools' 'python-pylint-plugin-utils')
source=("https://pypi.io/packages/source/p/${_pypi_pkgname}/${_pypi_pkgname}-${pkgver}.tar.gz")
sha256sums=('e313047ca5c2ce0abd17da75ce8c97227cb3411c1d449ade948a485d6dc4bfdd')

build() {
  cd "${_pypi_pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${_pypi_pkgname}-${pkgver}"
  python setup.py install --prefix="/usr" --root="${pkgdir}" --optimize=1
  install -Dm755 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}"/LICENSE
}
# vim:set ts=2 sw=2 et:
