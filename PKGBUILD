# Maintainer: Astro Benzene <universebenzene at sina dot com>
pkgbase=python-iminuit
_pyname=${pkgbase#python-}
pkgname=("python-${_pyname}")
pkgver=2.4.0
pkgrel=1
pkgdesc="Python interface for MINUIT, a physics analysis tool for function minimization."
arch=('i686' 'x86_64')
url="https://iminuit.readthedocs.io"
license=('GPL' 'MIT')
makedepends=('python-setuptools' 'python-numpy' 'cmake')
checkdepends=('python-pytest'
              'python-scipy'
#             'python-numba'
              'python-matplotlib')
options=(!emptydirs)
source=("https://files.pythonhosted.org/packages/source/${_pyname:0:1}/${_pyname}/${_pyname}-${pkgver}.tar.gz")
md5sums=('79affb06d9c96558ccc781e6a938e7e2')

prepare() {
    export _pyver=$(python -c 'import sys; print("%d.%d" % sys.version_info[:2])')
}

build() {
    cd ${srcdir}/${_pyname}-${pkgver}

    python setup.py build
}

check() {
#   cd ${srcdir}/${_pyname}-${pkgver}/build/lib.linux-${CARCH}-${_pyver}
    cd ${srcdir}/${_pyname}-${pkgver}

    PYTHONPATH="build/lib.linux-${CARCH}-${_pyver}" pytest || warning "Tests failed"
}

package_python-iminuit() {
    depends=('python>=3.6' 'python-numpy')
    optdepends=('ipython'
                'python-matplotlib'
                'python-pytest-cov: For testing and get a coverage report'
                'cython'
                'python-sphinx: For docs building'
                'python-iminuit-doc: Documentation for python-iminuit')
    cd ${srcdir}/${_pyname}-${pkgver}

    install -D -m644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
    install -D -m644 README.rst -t "${pkgdir}/usr/share/doc/${pkgname}"
    python setup.py install --root=${pkgdir} --prefix=/usr --optimize=1
}
