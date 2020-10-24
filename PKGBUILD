# Maintainer: Astro Benzene <universebenzene at sina dot com>
pkgbase=python-baseband
_pyname=${pkgbase#python-}
pkgname=("python-${_pyname}" "python-${_pyname}-doc")
pkgver=4.0.2
pkgrel=1
pkgdesc="Package to read and write radio baseband data"
arch=('i686' 'x86_64')
url="https://baseband.readthedocs.io"
license=('GPL')
makedepends=('python-setuptools-scm' 'python-astropy' 'python-entrypoints' 'python-sphinx-astropy' 'graphviz')
checkdepends=('python-pytest-astropy')
source=("https://files.pythonhosted.org/packages/source/${_pyname:0:1}/${_pyname}/${_pyname}-${pkgver}.tar.gz")
md5sums=('9e2f81f6c39825a3f4d9fcea9eaf4fb7')

build() {
    cd ${srcdir}/${_pyname}-${pkgver}
    python setup.py build

    msg "Building Docs"
    cd ${srcdir}/${_pyname}-${pkgver}/docs
    PYTHONPATH="../build/lib" make html
}

check() {
    cd ${srcdir}/${_pyname}-${pkgver}

    pytest
}

package_python-baseband() {
    depends=('python-numpy>=1.17' 'python-astropy>=4.0' 'python-entrypoints')
    optdepends=('python-baseband-doc: Documentation for Baseband')
    cd ${srcdir}/${_pyname}-${pkgver}

    install -D -m644 README.rst -t "${pkgdir}/usr/share/doc/${pkgname}"
    python setup.py install --root=${pkgdir} --prefix=/usr --optimize=1
}

package_python-baseband-doc() {
    pkgdesc="Documentation for Python Baseband"
    cd ${srcdir}/${_pyname}-${pkgver}/docs/_build

    install -d -m755 "${pkgdir}/usr/share/doc/${pkgbase}"
    cp -a html "${pkgdir}/usr/share/doc/${pkgbase}"
}
