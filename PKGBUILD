# Maintainer: Hsiu-Ming Chang <cges30901 at gmail dot com>
# Contributor: Ruikai Liu <lrk700 at gmail dot com>
# Contributor: Alexander Kobel <a-kobel at a-kobel dot de>

pkgname=('python-pymupdf')
_name='PyMuPDF'
pkgver=1.18.14
pkgrel=1
pkgdesc='Python bindings for MuPDF'
arch=('x86_64')
url='https://github.com/pymupdf/PyMuPDF'
license=('AGPL3')
depends=('python' 'libjpeg-turbo' 'jbig2dec' 'openjpeg2'  'freetype2' 'gumbo-parser')
makedepends=('python-setuptools' 'libmupdf>=1.18' 'libmupdf<1.19' 'swig' 'python-sphinx' 'python-sphinx_rtd_theme')

source=("${_name}-${pkgver}.tar.gz::https://github.com/pymupdf/PyMuPDF/archive/${pkgver}.tar.gz")
sha256sums=('e6889d0bd5c9ac379e01a86cff021c7c8017ad341b8dcababd7533d2f0e5ff0a')

prepare() {
  cd "${_name}-${pkgver}"
}

build() {
  cd "${_name}-${pkgver}"
  python setup.py build
  sphinx-build docs docs_built
}

check() {
  cd "${_name}-${pkgver}"
  local python_version=$(python -c 'import sys; print(".".join(map(str, sys.version_info[:2])))')
  PYTHONPATH="$PWD/build/lib.linux-$CARCH-${python_version}" python -c 'import sys; sys.path.remove(""); import fitz'
}

package() {
  cd "${_name}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -D COPYING -t "$pkgdir/usr/share/licenses/$pkgname"
  mkdir -p "$pkgdir/usr/share/doc"
  cp -r docs_built "$pkgdir/usr/share/doc/$pkgname"
  rm -rf "$pkgdir/usr/share/doc/$pkgname/.doctrees"
}
