# Maintainer: Konstantin Gizdov <arch at kge dot pw>

pkgbase=python-uproot
_pkgbase=uproot
pkgname=('python2-uproot' 'python-uproot')
pkgver=3.8.0
pkgrel=1
pkgdesc="Minimalist CERN ROOT I/O in pure Python and Numpy"
arch=('any')
makedepends=('python2-cachetools' 'python2-setuptools' 'python2-pytest-runner'
             'python-cachetools' 'python-setuptools' 'python-pytest-runner')
checkdepends=('python2-mock' 'python2-pandas' 'python2-pkgconfig' 'python2-uproot-methods' 'python2-xxhash'
              'python-mock' 'python-pandas' 'python-pkgconfig' 'python-uproot-methods' 'python-xxhash')
url="https://github.com/scikit-hep/uproot"
license=('BSD')

source=("${url}/archive/${pkgver}.zip")
sha256sums=('166e9eab5a58f0652ff2aecb19099f4597b79f6622756dc382087f4d1e166657')

prepare() {
    cd "${srcdir}"
    cp -a "${_pkgbase}-${pkgver}" "${_pkgbase}-py2-${pkgver}"
    cd "${_pkgbase}-py2-${pkgver}"

    find . -name '*.py' -type f -exec \
        sed -e "s|#![ ]*/usr/bin/python$|#!/usr/bin/python2|" \
            -e "s|#![ ]*/usr/bin/env python$|#!/usr/bin/env python2|" \
            -e "s|#![ ]*/bin/env python$|#!/usr/bin/env python2|" \
            -i '{}' \; -print
}

build() {
    cd "${srcdir}/${_pkgbase}-${pkgver}"
    python setup.py build

    cd "${srcdir}/${_pkgbase}-py2-${pkgver}"
    python2 setup.py build
}

check() {
    cd "${srcdir}/${_pkgbase}-${pkgver}"
    python setup.py pytest

    cd "${srcdir}/${_pkgbase}-py2-${pkgver}"
    python2 setup.py pytest
}

package_python2-uproot() {
    depends=('python2-awkward'
             'python2-cachetools'
             'python2-lz4'
             'python2-numpy'
             'python2-uproot-methods')
    optdepends=('python2-futures: Python2 parallel processing'
                'python2-backports.lzma: LZMA compression used by some ROOT files'
                'xrootd: access remote files over XRootD')
    cd "${srcdir}/${_pkgbase}-py2-${pkgver}"

    python2 setup.py install --root="${pkgdir}/" --optimize=1

    install -D LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

    install -D README.rst "${pkgdir}/usr/share/${pkgname}/README.rst"

    install -d "${pkgdir}/usr/share/doc/${pkgname}"
    cp -r docs "${pkgdir}/usr/share/doc/${pkgname}/"
}

package_python-uproot() {
    depends=('python-awkward'
             'python-cachetools'
             'python-lz4'
             'python-numpy'
             'python-uproot-methods')
    optdepends=('xrootd: access remote files over XRootD')
    cd "${srcdir}/${_pkgbase}-${pkgver}"

    python setup.py install --root="${pkgdir}/" --optimize=1

    install -D LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

    install -D README.rst "${pkgdir}/usr/share/${pkgname}/README.rst"

    install -d "${pkgdir}/usr/share/doc/${pkgname}"
    cp -r docs "${pkgdir}/usr/share/doc/${pkgname}/"
}
