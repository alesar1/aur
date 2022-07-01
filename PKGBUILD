# Maintainer: Lorenzo Gaifas <brisvag at gmail dot com>

_name='pytomlpp'
_author='bobfang1992'
_framework='python'
pkgname="${_framework}-${_name}"
pkgver=1.0.11
pkgrel=1
pkgdesc='A python wrapper for toml++.'
arch=('any')
url="https://github.com/${_author}/${_name}"
license=('BSD')
makedepends=(
  'python-setuptools-scm'
)
depends=(
  'python'
  'pybind11'
)
source=("https://files.pythonhosted.org/packages/source/${_name:0:1}/${_name}/${_name}-${pkgver}.tar.gz")
sha256sums=('90021866ee72c16475692ec8b0ecc69ec530d2b8ce27a63a4cc39c1907f4b37a')
provides=("${_framework}-${_name}")

build() {
  cd "${srcdir}/${_name}-${pkgver}"
  python setup.py build
}

package() {
  cd "${srcdir}/${_name}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build

  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
  install -Dm644 README.md -t "${pkgdir}/usr/share/doc/${pkgname}"
}

# vim:set ts=2 sw=2 et:<Paste>
