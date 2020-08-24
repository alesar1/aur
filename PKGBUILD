# Maintainer: Astro Benzene <universebenzene at sina dot com>
_pyname=gwcs
pkgname=python-${_pyname}-doc
pkgver=0.14.0
pkgrel=1
pkgdesc="Documentation for Python GWCS module"
arch=('i686' 'x86_64')
url="http://gwcs.readthedocs.io"
license=('BSD')
makedepends=("python-${_pyname}=${pkgver}" 'python-sphinx-astropy' 'python-sphinx-asdf' 'graphviz')
source=("https://files.pythonhosted.org/packages/source/${_pyname:0:1}/${_pyname}/${_pyname}-${pkgver}.tar.gz")
md5sums=('2f6fb0a88a6c67081925ddbd7e8f1d0d')

build() {
    cd ${srcdir}/${_pyname}-${pkgver}/docs

    make html
}

package() {
    cd ${srcdir}/${_pyname}-${pkgver}/docs/_build

    install -d -m755 "${pkgdir}/usr/share/doc/${pkgname%-doc}"
    cp -a html "${pkgdir}/usr/share/doc/${pkgname%-doc}"
    install -D -m644 -t "${pkgdir}/usr/share/licenses/${pkgname}" ../../licenses/*
}
