# Maintainer: Hsiu-Ming Chang <cges30901 at gmail dot com>
# Contributor: Ruikai Liu <lrk700 at gmail dot com>
# Contributor: Alexander Kobel <a-kobel at a-kobel dot de>

pkgname=('python2-pymupdf' 'python-pymupdf')
_name='PyMuPDF'
pkgver=1.16.6
pkgrel=1
pkgdesc='Python bindings for MuPDF'
arch=('x86_64')
url='https://github.com/pymupdf/PyMuPDF'
license=('AGPL3')
depends=('libjpeg-turbo' 'jbig2dec' 'openjpeg2'  'freetype2' 'harfbuzz')
makedepends=('python2-setuptools' 'python-setuptools' 'libmupdf>=1.16' 'libmupdf<1.17')

source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-${pkgver}.tar.gz")
sha256sums=('7d938cf23a95cd999d236f249881a4e6748b474fed67f3fff836ef36e2659054')

prepare() {
    cd "${_name}-${pkgver}"
    sed -i "s:# 'jbig2dec', 'openjp2', 'jpeg', 'freetype',:'jbig2dec', 'openjp2', 'jpeg', 'freetype', 'harfbuzz',:g" setup.py
}

build() {
    cd "${_name}-${pkgver}"
    python2 setup.py build
    python setup.py build
}

package_python2-pymupdf() {
  depends+=('python2')
  cd "${_name}-${pkgver}"
  python2 setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}

package_python-pymupdf() {
  depends+=('python')
  cd "${_name}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
