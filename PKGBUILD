# Maintainer: Butui Hu <hot123tea123@gmail.com>

_pkgname=pydeck
pkgname=python-pydeck
pkgver=0.8.0
pkgrel=1
pkgdesc='Widget for deck.gl maps'
arch=('any')
url='https://pypi.org/project/pydeck'
license=('Apache')
depends=(
  ipython
  python-ipykernel
  python-ipywidgets
  python-jinja
  python-numpy
  python-traitlets
)
makedepends=(
  python-build
  python-installer
  python-setuptools
  python-wheel
)

source=("${_pkgname}-${pkgver}.tar.gz::https://files.pythonhosted.org/packages/source/${_pkgname::1}/${_pkgname}/${_pkgname}-${pkgver}.tar.gz"
)
sha512sums=('117ba93c3338ab53b34afd9974b4b6408f4287d2f2db340ffa63a6bbe1ca6632939ea50dd5e81d04d76c69634b486a4d34a119eb3a3ad3fa7cb4087c87f8c932')

build() {
  cd "${_pkgname}-${pkgver}"
  python -m build --wheel --no-isolation -x
}

package() {
  cd "${_pkgname}-${pkgver}"
  python -m installer --destdir="${pkgdir}" dist/*.whl
  mv -vf "${pkgdir}/usr/etc" "${pkgdir}"
}
# vim:set ts=2 sw=2 et:
