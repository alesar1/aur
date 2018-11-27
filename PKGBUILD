# Maintainer: Grey Christoforo <first name at last name dot net>

pkgbase=python-tesserocr
pkgname=('python-tesserocr' 'python2-tesserocr')
_module='tesserocr'
pkgver=2.3.1
pkgrel=1
pkgdesc="A simple, Pillow-friendly, Python wrapper around tesseract-ocr API using Cython"
url="https://github.com/sirfz/tesserocr"
depends=()
makedepends=('python-setuptools' 'python2-setuptools')
license=('MIT')
arch=('any')
source=("https://files.pythonhosted.org/packages/source/t/tesserocr/tesserocr-${pkgver}.tar.gz")
md5sums=('99e2001affe861ae3a5aa2e9f233e2d7')

prepare() {
    cp -a "${srcdir}/${_module}-${pkgver}"{,-python2}
}

build() {
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py build

    cd "${srcdir}/${_module}-${pkgver}-python2"
    python2 setup.py build
}

package_python-tesserocr() {
    depends+=('python')
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}

package_python2-tesserocr() {
    depends+=('python2')
    cd "${srcdir}/${_module}-${pkgver}-python2"
    python2 setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
