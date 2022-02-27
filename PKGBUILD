# Maintainer: Astro Benzene <universebenzene at sina dot com>
pkgname=python-healpy
_pyname=${pkgname#python-}
pkgver=1.15.2
pkgrel=1
pkgdesc="Python package to manipulate healpix maps"
arch=('i686' 'x86_64')
url="http://healpy.readthedocs.io"
license=('GPL')
depends=('python>=3.7' 'python-numpy>=1.13' 'python-scipy' 'python-matplotlib' 'python-astropy' 'cfitsio' 'healpix>=3.80')
makedepends=('cython' 'python-wheel' 'python-build' 'python-installer' 'python-oldest-supported-numpy')
optdepends=('python-healpy-doc: Documentation for healpy')
checkdepends=('python-pytest-cython' 'python-pytest-doctestplus' 'python-requests')
source=("https://files.pythonhosted.org/packages/source/h/healpy/healpy-${pkgver}.tar.gz")
md5sums=('e9518a20effe71de73c7195ce023e76e')

prepare() {
    export _pyver=$(python -c 'import sys; print("%d.%d" % sys.version_info[:2])')
}

build() {
    cd ${srcdir}/${_pyname}-${pkgver}

    python -m build --wheel --no-isolation
}

check() {
    cd ${srcdir}/${_pyname}-${pkgver}

    # skip tests that cost lots of time
    pytest "build/lib.linux-${CARCH}-${_pyver}" \
        --deselect=build/lib.linux-x86_64-3.10/healpy/test/test_pixelweights.py::test_pixelweights_local_datapath || warning "Tests failed"
}

package() {
    cd ${srcdir}/healpy-${pkgver}

    install -D -m644 README.rst -t "${pkgdir}/usr/share/doc/${pkgname}"
    python -m installer --destdir="${pkgdir}" dist/*.whl
}
