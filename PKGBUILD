# Maintainer: Astro Benzene <universebenzene at sina dot com>
#pkgbase=python-asdf
#pkgname=('python-asdf')
pkgname=python-asdf
#'python-asdf-doc')
pkgver=2.0.0
pkgrel=1
pkgdesc="A Python tool for reading and writing Advanced Scientific Data Format (ASDF) files"
arch=('i686' 'x86_64')
url="https://asdf.readthedocs.io/en/latest/"
license=('BSD')
makedepends=('python>=3.3'
             'cython'
             'python-numpy>=1.8'
             'python-jsonschema>=2.3.0'
             'python-yaml>=3.10'
             'python-six>=1.9.0'
             'python-matplotlib'
             'python-astropy>=1.1'
             'python-astropy-helpers'
             'python2-astropy-helpers'
             'python-semantic-version>=2.3.1')
#            'python-sphinx')
#checkdepends=('python-pytest')
source=("https://files.pythonhosted.org/packages/source/a/asdf/asdf-${pkgver}.tar.gz")
md5sums=('137daf89522a43ff6d06553f8d644293')

prepare() {
    cd ${srcdir}/asdf-${pkgver}
    sed -i -e '/auto_use/s/True/False/' setup.cfg
}

build () {
    cd ${srcdir}/asdf-${pkgver}
    python setup.py build --use-system-libraries --offline

#   msg "Building Docs"
#   python setup.py build_docs
}

#check(){
#    cd ${srcdir}/asdf-${pkgver}
#    python setup.py test
#}

package() {
    depends=('python>=3.3' 'python-numpy>=1.8' 'python-jsonschema>=2.3.0' 'python-yaml>=3.10' 'python-six>=1.9.0' 'python-semantic-version>=2.3.1')
    optdepends=('python-astropy>=3.0: Support for units, time, transform, wcs, or running the tests'
                'python-pytest: For testing'
                'python-pytest-astropy: For testing')
#               'python-asdf-doc: Documentation for Python-ASDF'
    cd ${srcdir}/asdf-${pkgver}

    install -d -m755 "${pkgdir}/usr/share/licenses/${pkgname}/"
    install -m644 -t "${pkgdir}/usr/share/licenses/${pkgname}/" licenses/*
    python setup.py install --root=${pkgdir} --prefix=/usr --optimize=1 --use-system-libraries --offline
}

#package_python-asdf-doc() {
#    pkgdesc="Documentation for Python ASDF module"
#    cd ${srcdir}/asdf-${pkgver}/build/sphinx
#
#    install -d -m755 "${pkgdir}/usr/share/doc/${pkgbase}"
#    cp -a html "${pkgdir}/usr/share/doc/${pkgbase}"
#}
