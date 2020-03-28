# Maintainer: Astro Benzene <universebenzene at sina dot com>
pkgbase=python-sphinx-gallery
_pyname=${pkgbase#python-}
pkgname=("python-${_pyname}")
#"python-${_pyname}-doc")
pkgver=0.6.0
pkgrel=1
pkgdesc="Sphinx extension to automatically generate an examples gallery"
arch=('i686' 'x86_64')
url="http://sphinx-gallery.readthedocs.io/"
license=('BSD')
makedepends=('python-setuptools')
#'python-sphinx' 'python-pillow' 'python-scipy' 'python-seaborn')
checkdepends=('python-pytest-cov' 'python-matplotlib' 'python-pillow' 'python-sphinx')
source=("https://files.pythonhosted.org/packages/source/${_pyname:0:1}/${_pyname}/${_pyname}-${pkgver}.tar.gz")
md5sums=('ba828b9592350147755bdc423e416f89')

build() {
    cd ${srcdir}/${_pyname}-${pkgver}
    python setup.py build

#   msg "Building Docs"
#   python setup.py build_sphinx
}

check() {
    cd ${srcdir}/${_pyname}-${pkgver}

    python setup.py test
#   pytest
}

package_python-sphinx-gallery() {
    depends=('python-sphinx>=1.8.3' 'python-matplotlib' 'python-pillow')
    optdepends=('python-seaborn'
                'mayavi')
#               'python-sphinx-gallery-doc: Documentation of Sphinx-Gallery')
    cd ${srcdir}/${_pyname}-${pkgver}

    install -D -m644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
    install -D -m644 README.rst -t "${pkgdir}/usr/share/doc/${pkgname}"
    python setup.py install --root=${pkgdir} --prefix=/usr --optimize=1
}

#package_python-sphinx-gallery-doc() {
#    pkgdesc="Documentation for Sphinx-Gallery extension"
#    cd ${srcdir}/${_pyname}-${pkgver}/doc/_build
#
#    install -d -m755 "${pkgdir}/usr/share/doc/${pkgbase}"
#    cp -a html "${pkgdir}/usr/share/doc/${pkgbase}"
#}
