# Maintainer: Butui Hu <hot123tea123@gmail.com>

pkgname=python-nvidia-ml-py
_name=nvidia-ml-py
pkgver=11.515.75
pkgrel=1
pkgdesc='Python Bindings for the NVIDIA Management Library'
arch=('any')
url='https://pypi.org/project/nvidia-ml-py'
license=('BSD')
depends=(
  cuda
)
makedepends=(
  python-setuptools
)
source=(
  "${_name}-${pkgver}.tar.gz::https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz"
)
sha512sums=('213d6939268e910c9abe88c336364f4e1bb268954c794480c41daced988b3e796ed4236a6b383df571ea98b9eed661e5019473507574847d0a6cdd084ed7c92f')

build() {
  cd "${srcdir}/${_name}-${pkgver}"
  python setup.py build
}

package() {
  cd "${srcdir}/${_name}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
# vim:set ts=2 sw=2 et:
