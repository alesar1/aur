# Maintainer: Astro Benzene <universebenzene at sina dot com>

pkgbase=python-sphinx-automodapi
_pyname=${pkgbase#python-}
pkgname=("python-${_pyname}")
#"python-${_pyname}-doc")
pkgver=0.13
pkgrel=1
pkgdesc="Sphinx extension for generating API documentation."
arch=('any')
url="https://sphinx-automodapi.readthedocs.io"
license=('BSD')
makedepends=('python-setuptools')
#'python-sphinx' 'python-sphinx_rtd_theme')
checkdepends=('python-pytest' 'python-sphinx' 'graphviz')
source=("https://files.pythonhosted.org/packages/source/${_pyname:0:1}/${_pyname}/${_pyname}-${pkgver}.tar.gz")
sha256sums=('e1019336df7f7f0bcbf848eff7b84e7bef71691a57d8b5bda9107a2a046a226a')

build() {
    cd ${srcdir}/${_pyname}-${pkgver}
    python setup.py build

#   msg "Building Docs"
#   python setup.py build_sphinx
}

check() {
    cd ${srcdir}/${_pyname}-${pkgver}

    pytest || warning "Tests failed"
}

package_python-sphinx-automodapi() {
    depends=('python-sphinx>=1.7')
    optdepends=('python-sphinx-automodapi-doc: Documentation for sphinx-automodapi')
    cd ${srcdir}/${_pyname}-${pkgver}

    install -D -m644 LICENSE.rst -t "${pkgdir}/usr/share/licenses/${pkgname}"
    install -D -m644 README.rst -t "${pkgdir}/usr/share/doc/${pkgname}"
    python setup.py install --root=${pkgdir} --prefix=/usr --optimize=1
}

#package_python-sphinx-automodapi-doc() {
#    pkgdesc="Documentation for sphinx-automodapi"
#    cd ${srcdir}/${_pyname}-${pkgver}/build/sphinx
#
#    install -D -m644 -t "${pkgdir}/usr/share/licenses/${pkgname}" ../../LICENSE.rst
#    install -d -m755 "${pkgdir}/usr/share/doc/${pkgbase}"
#    cp -a html "${pkgdir}/usr/share/doc/${pkgbase}"
#}
