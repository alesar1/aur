# Maintainer: Astro Benzene <universebenzene at sina dot com>
pkgbase=python-asdf
_pyname=${pkgbase#python-}
pkgname=("python-${_pyname}" "python-${_pyname}-doc")
pkgver=2.7.2
pkgrel=1
pkgdesc="A Python tool for reading and writing Advanced Scientific Data Format (ASDF) files"
arch=('i686' 'x86_64')
url="https://asdf.readthedocs.io"
license=('BSD')
makedepends=('python>=3.5'
             'python-setuptools-scm'
             'python-numpy>=1.10'
             'python-jsonschema<4'
             'python-yaml>=3.10'
             'python-semantic-version>=2.8'
             'python-astropy'
             'python-sphinx-astropy'
             'graphviz')
checkdepends=('python-pytest-doctestplus' 'python-pytest-remotedata' 'python-pytest-openfiles' 'python-lz4')
source=("https://files.pythonhosted.org/packages/source/${_pyname:0:1}/${_pyname}/${_pyname}-${pkgver}.tar.gz")
md5sums=('e9217acd9cb1385e74e0747b6e38f751')

build() {
    cd ${srcdir}/${_pyname}-${pkgver}
    python setup.py build

    msg "Building Docs"
    python setup.py build_sphinx
}

check() {
    cd ${srcdir}/${_pyname}-${pkgver}

    PYTHONPATH="build/lib:${PYTHONPATH}" pytest "build/lib" || warning "Tests failed"
}

package_python-asdf() {
    depends=('python>=3.6' 'python-numpy>=1.10' 'python-jsonschema<4' 'python-yaml>=3.10' 'python-semantic-version>=2.8')
    optdepends=('python-astropy>=3.0: Support for units, time, transform, wcs, or running the tests'
                'python-lz4>=0.10: Support for lz4 compression'
                'python-asdf-doc: Documentation for Python-ASDF'
                'python-pytest-astropy: For testing')
    cd ${srcdir}/${_pyname}-${pkgver}

    install -D -m644 -t "${pkgdir}/usr/share/licenses/${pkgname}" licenses/*
    install -D -m644 -t "${pkgdir}/usr/share/doc/${pkgname}" README.rst
    python setup.py install --root=${pkgdir} --prefix=/usr --optimize=1
}

package_python-asdf-doc() {
    pkgdesc="Documentation for Python ASDF module"
    cd ${srcdir}/${_pyname}-${pkgver}/docs/_build

    install -D -m644 -t "${pkgdir}/usr/share/licenses/${pkgname}" ../../licenses/*
    install -d -m755 "${pkgdir}/usr/share/doc/${pkgbase}"
    cp -a html "${pkgdir}/usr/share/doc/${pkgbase}"
}
