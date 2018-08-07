# Maintainer: Astro Benzene <universebenzene at sina dot com>
#pkgbase=python-asdf
#pkgname=('python-asdf')
pkgname=python-asdf
#'python-asdf-doc')
pkgver=2.0.2
pkgrel=2
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
             'python-astropy-helpers'
             'python-semantic-version>=2.3.1')
#            'python-sphinx')
#checkdepends=('python-pytest')
source=("https://files.pythonhosted.org/packages/source/a/asdf/asdf-${pkgver}.tar.gz")
md5sums=('ca2995781aac6101034076a58f0986fa')

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
                'python-lz4: Support for lz4 compression'
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
