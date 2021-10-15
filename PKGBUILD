# Maintainer: Hu Butui <hot123tea123@gmail.com>

_pkgname=remi
pkgname=python-remi
pkgver=2021.03.02
pkgrel=2
pkgdesc='Cross-platform GUI library which renders in a web browser'
arch=('any')
url='https://github.com/dddomodossola/remi'
license=('Apache')
depends=(
  python
)
makedepends=(
  python-setuptools
)
optdepends=(
  'python-pywebview: for standalone app'
)
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/dddomodossola/remi/archive/refs/tags/${pkgver}.tar.gz")
sha256sums=('b765e66f8d0554fb345737ef01164cfe529123591abb75360112b4419cf49a0a')

get_pyver() {
  python -c 'import sys; print(str(sys.version_info[0]) + "." + str(sys.version_info[1]))'
}

build() {
  cd "${_pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  rm -rf "${pkgdir}/usr/lib/python$(get_pyver)/site-packages/test"
  mkdir -p "${pkgdir}/usr/share/doc/${pkgname}"
  mv -vf "examples" "${pkgdir}/usr/share/doc/${pkgname}"
}
# vim:set ts=2 sw=2 et:
