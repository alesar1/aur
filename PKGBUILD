# Maintainer: Astro Benzene <universebenzene at sina dot com>
pkgbase=python-gammapy
_pyname=${pkgbase#python-}
pkgname=("python-${_pyname}")
#"python-${_pyname}-doc")
pkgver=0.11
pkgrel=1
pkgdesc="A Python package for gamma-ray astronomy"
arch=('i686' 'x86_64')
url="https://gammapy.org/"
license=('BSD')
makedepends=('python-setuptools' 'python-numpy' 'python-astropy-helpers>=3.1')
#'python-sphinx-astropy' 'python-nbsphinx' 'python-sphinx-click' 'python-click' 'python-regions')
#checkdepends=('python-pytest-astropy'
#              'python-astropy'
#              'python-yaml'
#              'python-click'
#              'python-regions'
#              'python-astropy-healpix')
source=("https://files.pythonhosted.org/packages/source/${_pyname:0:1}/${_pyname}/${_pyname}-${pkgver}.tar.gz")
md5sums=('58d306240bac03ecb0c6cabad03073d7')

prepare() {
    cd ${srcdir}/${_pyname}-${pkgver}

    sed -i -e '/auto_use/s/True/False/' setup.cfg
}

build() {
    cd ${srcdir}/${_pyname}-${pkgver}
    python setup.py build --use-system-libraries --offline

#   msg "Building Docs"
#   python setup.py build_docs
}

#check() {
#    cd ${srcdir}/${_pyname}-${pkgver}
#
#    python setup.py test
#}

package() {
    depends=('python>=3.5' 'python-yaml' 'python-astropy>=1.0.2' 'python-regions' 'python-click' 'python-astropy-healpix')
    optdepends=('python-reproject: For numerical methods'
#               'python-yaml: For YAML data handling (config and results files)'
                'python-iminuit: For fitting by optimization'
                'python-uncertainties: For linear error propagation'
                'python-matplotlib: For plotting'
                'python-emcee: For fitting by MCMC sampling'
                'python-healpy: For HEALPIX data handling'
                'python-naima: For SED modeling'
#               'python-gammapy-doc: Documentation for Gammapy'
#               'python-pytest-astropy: For testing'
                'python-sherpa: For modelling and fitting')
    cd ${srcdir}/${_pyname}-${pkgver}

    install -D -m644 licenses/* -t "${pkgdir}/usr/share/licenses/${pkgname}"
    install -D -m644 README.rst -t "${pkgdir}/usr/share/doc/${pkgname}"
    python setup.py install --root=${pkgdir} --prefix=/usr --optimize=1 --use-system-libraries --offline
}

#package_python-gammapy-doc() {
#    pkgdesc="Documentation for Gammapy"
#    cd ${srcdir}/${_pyname}-${pkgver}/docs/_build
#
#    install -d -m755 "${pkgdir}/usr/share/doc/${pkgbase}"
#    cp -a html "${pkgdir}/usr/share/doc/${pkgbase}"
#}
