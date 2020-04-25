# Maintainer: Hsiu-Ming Chang <cges30901 at gmail dot com>
# Contributor: Ruikai Liu <lrk700 at gmail dot com>
# Contributor: Alexander Kobel <a-kobel at a-kobel dot de>

pkgname=('python-pymupdf')
_name='PyMuPDF'
pkgver=1.16.18
pkgrel=1
pkgdesc='Python bindings for MuPDF'
arch=('x86_64')
url='https://github.com/pymupdf/PyMuPDF'
license=('AGPL3')
depends=('python' 'libjpeg-turbo' 'jbig2dec' 'openjpeg2'  'freetype2')
makedepends=('python-setuptools' 'libmupdf>=1.16' 'libmupdf<1.17')

source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-${pkgver}.tar.gz")
sha256sums=('334747e49fe79f0814ea826ba86c52773619e354a35a6333e986f12759adec3e')

prepare() {
  cd "${_name}-${pkgver}"
  sed -i "s:# 'jbig2dec', 'openjp2', 'jpeg', 'freetype',:'jbig2dec', 'openjp2', 'jpeg', 'freetype',:g" setup.py
}

build() {
  cd "${_name}-${pkgver}"
  python setup.py build
}

check() {
  cd "${_name}-${pkgver}"
  local python_version=$(python -c 'import sys; print(".".join(map(str, sys.version_info[:2])))')
  PYTHONPATH="$PWD/build/lib.linux-$CARCH-${python_version}" python -c 'import sys; sys.path.remove(""); import fitz'
}

package() {
  cd "${_name}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
