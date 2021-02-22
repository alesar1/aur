# Maintainer: Butui Hu <hot123tea123@gmail.com>

_pkgname=mars
pkgname=python-mars
pkgver=0.6.4
pkgrel=1
pkgdesc='A tensor-based unified framework for large-scale data computation which scales Numpy, pandas, Scikit-learn and Python functions'
arch=('x86_64')
url='https://github.com/mars-project/mars'
license=(BSD)
depends=(
  python-arrow
  python-cloudpickle
  python-gevent
  python-jinja
  python-lz4
  python-numexpr
  python-numpy
  python-pandas
  python-protobuf
  python-psutil
  python-requests
  python-scikit-learn
  python-scipy
  python-sqlalchemy
)
makedepends=(
  cython
  python-setuptools
)
source=("${_pkgname}-${pkgver}.tar.gz::https://github.com/mars-project/mars/archive/v${pkgver}.tar.gz")
sha512sums=('8b734b6501b464d74d9887c86973a343e2f5047d2c76fa04fe49b3dd0164a04007290f15dfab002d63009a9d5290474c2d708c50238866802c2023c2e00d1075')

build() {
  cd "${_pkgname}-${pkgver}"
  python setup.py build
  python setup.py build_ext --inplace
}

package() {
  cd "${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
