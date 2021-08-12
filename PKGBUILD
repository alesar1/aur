# Maintainer: Astro Benzene <universebenzene at sina dot com>
pkgbase=python-stsci.tools
_pyname=${pkgbase#python-}
pkgname=("python-${_pyname}")
pkgver=4.0.0
pkgrel=1
pkgdesc="Collection of STScI utility functions"
arch=('i686' 'x86_64')
url="https://stscitools.readthedocs.io"
license=('BSD')
makedepends=('python-setuptools-scm')
checkdepends=('python-pytest-doctestplus' 'python-astropy' 'tk')
source=("https://files.pythonhosted.org/packages/source/${_pyname:0:1}/${_pyname}/${_pyname}-${pkgver}.tar.gz")
md5sums=('75f693cc113cff00a59d7432cc44eaf2')

build() {
    cd ${srcdir}/${_pyname}-${pkgver}

    python setup.py build
}

check() {
    cd ${srcdir}/${_pyname}-${pkgver}

    pytest
}

package_python-stsci.tools() {
    depends=('python-astropy')
    optdepends=('python-stsci.tools-doc: Documentation for STScI Tools')
    provides=("python-stscitools=${pkgver}")
    conflicts=('python-stscitools')
    cd ${srcdir}/${_pyname}-${pkgver}

    install -D -m644 -t "${pkgdir}/usr/share/licenses/${pkgname}" LICENSE.md
    install -D -m644 -t "${pkgdir}/usr/share/doc/${pkgname}" README.md
    python setup.py install --root=${pkgdir} --prefix=/usr --optimize=1
}
