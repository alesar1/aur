# Maintainer: Astro Benzene <universebenzene at sina dot com>
pkgbase=python-pydata-sphinx-theme
_pyname=${pkgbase#python-}
pkgname=("python-${_pyname}")
#"python-${_pyname}-doc")
pkgver=0.7.2
pkgrel=1
pkgdesc="Bootstrap-based Sphinx theme from the PyData community"
arch=('any')
url="https://pydata-sphinx-theme.readthedocs.io"
license=('BSD')
makedepends=('python-setuptools')
#'python-recommonmark' 'python-numpydoc' 'python-jupyter_sphinx' 'python-sphinx-sitemap' 'python-pandas' 'python-plotly' 'python-tenacity' 'python-xarray')
#checkdepends=('python-sphinx' 'python-beautifulsoup4' 'python-docutils')
checkdepends=('python-pytest' 'python-sphinx' 'python-beautifulsoup4' 'python-pytest-regressions')
source=("https://files.pythonhosted.org/packages/source/${_pyname:0:1}/${_pyname}/${_pyname}-${pkgver}.tar.gz")
#source=("${_pyname}-${pkgver}.tar.gz::https://github.com/pydata/pydata-sphinx-theme/archive/refs/tags/v${pkgver}.tar.gz")
md5sums=('674a87a53cc5df81efe320a2c5e3ea56')

prepare() {
    export _pyver=$(python -c 'import sys; print("%d.%d" % sys.version_info[:2])')
}

build() {
    cd ${srcdir}/${_pyname}-${pkgver}
    python setup.py build

    #msg "Building Docs"
    #python setup.py build_sphinx
}

check() {
    cd ${srcdir}/${_pyname}-${pkgver}

    export _pyver=$(python -c 'import sys; print("%d.%d" % sys.version_info[:2])')
#   python setup.py test || warning "Tests failed"
    ln -rs ${srcdir}/${_pyname}-${pkgver}/${_pyname//-/_}*egg-info \
        build/lib/${_pyname//-/_}-${pkgver}-py${_pyver}.egg-info
    PYTHONPATH="build/lib" pytest
}

package_python-pydata-sphinx-theme() {
    depends=('python-sphinx' 'python-beautifulsoup4' 'python-docutils>0.17.0')
    cd ${srcdir}/${_pyname}-${pkgver}

    install -D -m644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
    install -D -m644 README.md -t "${pkgdir}/usr/share/doc/${pkgname}"
    python setup.py install --root=${pkgdir} --prefix=/usr --optimize=1
}

#package_python-pydata-sphinx-theme-doc() {
#    pkgdesc="Documentation for PyData Sphinx Theme"
#    cd ${srcdir}/${_pyname}-${pkgver}/doc/_build
#
#    install -d -m755 "${pkgdir}/usr/share/doc/${pkgbase}"
#    cp -a html "${pkgdir}/usr/share/doc/${pkgbase}"
#}
