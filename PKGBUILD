# Maintainer: Carlos Aznarán <caznaranl@uni.pe>
# Contributor: Markus Kaiser <markus dot kaiser at in dot tum dot de>
_base=panel
pkgname=python-${_base}
pkgver=0.12.5
pkgrel=1
pkgdesc="A high-level app and dashboarding solution for Python"
arch=('any')
url="https://${_base}.holoviz.org"
license=('custom:BSD-3-clause')
depends=(python-bokeh python-pyviz_comms python-markdown python-tqdm python-pyct python-bleach)
makedepends=(python-setuptools npm)
source=(${_base}-${pkgver}::https://github.com/holoviz/${_base}/archive/v${pkgver}.tar.gz)
sha512sums=('3cc26bc4a26c805685fcd9ff23945f7026da12bcd7d1d3e57ad8e398571a4544c45ab1559c0d86d021b04abd31422bf04f45710a0980ed918385bc5a92ce0274')

build() {
  cd "${_base}-${pkgver}"
  python setup.py build
}

package() {
  cd "${_base}-${pkgver}"
  PYTHONPYCACHEPREFIX="${PWD}/.cache/cpython/" python setup.py install --prefix=/usr --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm 644 LICENSE.txt -t "${pkgdir}/usr/share/licenses/${pkgname}"
  install -Dm 644 README.md -t "${pkgdir}/usr/share/doc/${pkgname}"
}
