# Maintainer: Jingbei Li <i@jingbei.li>
# Contributor: Benjamin Chretien <chretien at lirmm dot fr>
# Contributor: Sebastien Binet <binet@lblbox>
pkgbase=python-pybindgen
#pkgname=('python-pybindgen' 'python2-pybindgen')
pkgname='python-pybindgen'
_pkgname='PyBindGen'
pkgver=0.20.0
pkgrel=1
pkgdesc="A tool to generate Python bindings for C/C++ code"
url='https://github.com/gjcarneiro/pybindgen'
arch=('i686' 'x86_64')
license=('LGPL')
makedepends=('python-setuptools' 'python2-setuptools')
# Note: pygccxml does not support Python 3 yet
#optdepends=('gccxml' 'pygccxml')
source=("https://pypi.python.org/packages/source/P/PyBindGen/PyBindGen-${pkgver}.tar.gz")
md5sums=('776a22dc2dd7edb66a0887c98d2fdc24')

prepare() {
  cd "$srcdir/"
  cp -a "${_pkgname}-${pkgver}" "${_pkgname}-${pkgver}-py2"
  cd "${_pkgname}-${pkgver}-py2"
  sed -e "s|#![ ]*/usr/bin/python$|#!/usr/bin/python2|" \
    -e "s|#![ ]*/usr/bin/env python$|#!/usr/bin/env python2|" \
    -e "s|#![ ]*/bin/env python$|#!/usr/bin/env python2|" \
    -i $(find . -name '*.py')
}

build() {
  msg "Building Python 2"
  cd "$srcdir/${_pkgname}-${pkgver}-py2"
  python2 setup.py build

  msg "Building Python 3"
  cd ${srcdir}/${_pkgname}-$pkgver
  python setup.py build
}

package_python2-pybindgen() {
  depends=('python2')
  cd ${srcdir}/${_pkgname}-$pkgver-py2
  python2 setup.py install --root="$pkgdir"/ --optimize=1
}

package_python-pybindgen() {
  depends=('python')
  cd ${srcdir}/${_pkgname}-$pkgver
  python setup.py install --root="$pkgdir"/ --optimize=1
}
