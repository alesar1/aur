# Maintainer: Butui Hu <hot123tea123@gmail.com>

_pkgname=expiring-dict
pkgname=python-expiring-dict
pkgver=1.1.0
pkgrel=1
pkgdesc='Python dict with TTL support for auto-expiring caches'
arch=('any')
url='https://pypi.org/project/expiring-dict'
license=('MIT')
depends=(
  python
)
makedepends=(
  python-setuptools
)
source=("${_pkgname}-${pkgver}.tar.gz::https://files.pythonhosted.org/packages/source/${_pkgname::1}/${_pkgname}/${_pkgname}-${pkgver}.tar.gz"
        "https://github.com/dparker2/py-expiring-dict/raw/master/LICENSE"
)
sha512sums=('94ef75ab79adef1f413bf22c0ad1ff8e3d1ad1ca5d0b620b6244eb4a1f19ee8c9a9c7b8c6109288d6c114dd7cb79881b550c6de2fd5b81e7d912f3d97d667f89'
            '10febcc48b9f8d7210144cf00edbac8b82482f7ebefb0a1af05125fb3672acff765499f1627f9b80afe24cc926751b104e205b48a414c92c28d9c2d2b7c99814')

build() {
  cd "${_pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 "${srcdir}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
