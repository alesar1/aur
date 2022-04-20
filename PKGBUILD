# Maintainer: Butui Hu <hot123tea123@gmail.com>

_pkgname=jsonargparse
pkgname=python-jsonargparse
pkgver=4.7.0
pkgrel=1
pkgdesc='Parsing of command line options, yaml/jsonnet config files and/or environment variables based on argparse'
arch=('any')
url='https://github.com/omni-us/jsonargparse'
license=('MIT')
depends=(
  python-yaml
)
makedepends=(
  python-setuptools
)
source=("${_pkgname}-${pkgver}.tar.gz::https://github.com/omni-us/jsonargparse/archive/refs/tags/v${pkgver}.tar.gz")
sha512sums=('60a437f580efc3bd00e631998e0b1536dcb86d0580b1c6757cefc9a435ec7599fcc49b41567e3ec9d8e049f9996763db3d55144e06579987e64587e7d0bb01be')

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
  install -Dm644 LICENSE.rst -t "${pkgdir}/usr/share/licenses/${pkgname}"
  rm -rf "${pkgdir}/usr/lib/python$(get_pyver)/site-packages/jsonargparse_tests"
}
# vim:set ts=2 sw=2 et:
