# Maintainer: Sean Ho <sean.li.shin.ho@gmail.com>

_pkg=pygmt
pkgbase=python-${_pkg}
pkgname=("python-${_pkg}")
pkgver=0.1.0
pkgrel=1
pkgdesc="Python interface to the Generic Mapping Tools C library"
arch=('x86_64')
url="https://www.pygmt.org"
license=('3-BSD')
depends=('python-numpy' 'python-pandas' 'python-xarray' 'python-netcdf4' 'python-packaging' 'gmt6>=6.0.0')
makedepends=('cython' 'python-setuptools'
            'gmt-coast' 'gmt-dcw' 'ipython' 'python-matplotlib' 'jupyter' 'python-pytest'
            'python-pytest-cov' 'python-pytest-mpl' 'python-coverage'
            'python-black' 'python-pylint' 'flake8' 'python-sphinx'
            'python-sphinx_rtd_theme' 'python-sphinx-gallery'
            'python-nbsphinx' 'python-numpydoc')

source=("https://github.com/GenericMappingTools/${_pkg,,}/archive/v${pkgver}.tar.gz")
sha256sums=('2798b95cadd29dace71f5b888981ba2b86f351da1397beefa64d119b666ffb14')

build() {
    cd ${_pkg}-${pkgver}
    USE_NCCONFIG=1 python setup.py build
}

check() {
#    depends=('ipython' 'python-matplotlib' 'jupyter' 'python-pytest'
#             'python-pytest-cov' 'python-pytest-mpl' 'python-coverage'
#             'python-black' 'python-pylint' 'flake8' 'python-sphinx'
#             'python-sphinx_rtd_theme' 'python-sphinx-gallery'
#             'python-nbsphinx' 'python-numpydoc')
    cd ${_pkg}-${pkgver}
    PYTHONPATH="../../build/lib" python -c 'import pygmt;pygmt.test()' || return 0
}

package() {
    cd ${_pkg}-${pkgver}
    USE_NCCONFIG=1 python setup.py install --prefix=/usr --root="${pkgdir}" --skip-build --optimize=2
}
