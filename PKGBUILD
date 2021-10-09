# Maintainer: Astro Benzene <universebenzene at sina dot com>
pkgbase=python-crds
_pyname=${pkgbase#python-}
pkgname=("python-${_pyname}")
pkgver=11.4.4
pkgrel=1
pkgdesc="Calibration Reference Data System for HST and JWST"
arch=('any')
url="https://hst-crds.stsci.edu/static/users_guide/index.html"
license=('BSD')
makedepends=('python-setuptools-scm')
checkdepends=('python-pytest' 'python-lockfile' 'python-filelock' 'python-mock' 'python-astropy' 'python-nose' 'python-pylint' 'python-yaml' 'python-asdf')
source=("https://files.pythonhosted.org/packages/source/${_pyname:0:1}/${_pyname}/${_pyname}-${pkgver}.tar.gz")
md5sums=('c475a69a5ef6769cc307b54fc848869d')

build() {
    cd ${srcdir}/${_pyname}-${pkgver}

    python setup.py build
}

check() {
    cd ${srcdir}/${_pyname}-${pkgver}

    pytest || warning "Tests failed"
}

package_python-crds() {
    depends=('python-filelock' 'python-astropy' 'python-asdf' 'python-requests' 'python-lxml' 'python-parsley')
    optdepends=('python-crds-doc: Documentation for CRDS')
    cd ${srcdir}/${_pyname}-${pkgver}

    install -D -m644 -t "${pkgdir}/usr/share/licenses/${pkgname}" LICENSE
    install -D -m644 -t "${pkgdir}/usr/share/doc/${pkgname}" README.rst
    python setup.py install --root=${pkgdir} --prefix=/usr --optimize=1
}
