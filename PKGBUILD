# Maintainer: Astro Benzene <universebenzene at sina dot com>
pkgbase=python-astroplan
_pyname=${pkgbase#python-}
pkgname=("python-${_pyname}" "python-${_pyname}-doc")
pkgver=0.7
pkgrel=1
pkgdesc="A python package to help astronomers plan observations"
arch=('i686' 'x86_64')
url="https://astroplan.readthedocs.io"
license=('BSD')
makedepends=('python-setuptools'
             'python-astropy>=1.3'
             'python-pytz'
             'python-astropy-helpers'
             'python-sphinx-astropy'
             'python-astroquery'
             'graphviz')
checkdepends=('python-pytest-astropy' 'python-pytest-mpl')
source=("https://files.pythonhosted.org/packages/source/${_pyname:0:1}/${_pyname}/${_pyname}-${pkgver}.tar.gz"
        'fix_doc_index_astropy_link.patch')
md5sums=('ae8acf8eb51daeff0bbccb7f8626587c'
         'be56be5926b43589b273c16544c5241a')

prepare() {
    cd ${srcdir}/${_pyname}-${pkgver}

    sed -i -e '/auto_use/s/True/False/' setup.cfg
    patch -Np1 -i "${srcdir}/fix_doc_index_astropy_link.patch"
}

build() {
    cd ${srcdir}/${_pyname}-${pkgver}
    python setup.py build --use-system-libraries --offline

    msg "Building Docs"
    python -c "from astroplan import download_IERS_A; download_IERS_A()"
    python setup.py build_docs
}

check() {
    cd ${srcdir}/${_pyname}-${pkgver}

    python setup.py test || warning "Tests failed"
}

package_python-astroplan() {
    depends=('python>=3.5' 'python-numpy>=1.10' 'python-astropy>=1.3' 'python-pytz' 'python-six')
    optdepends=('python-matplotlib: Plotting support'
#               'python-pytest-mpl: Testing the plot function'
                'python-astroquery: Astroquery support'
                'python-astroplan-doc: Documentation for astroplan')
    cd ${srcdir}/${_pyname}-${pkgver}

    install -D -m644 LICENSE.rst -t "${pkgdir}/usr/share/licenses/${pkgname}"
#   install -m644 -t "${pkgdir}/usr/share/licenses/${pkgname}/" licenses/*
    install -D -m644 README.rst -t "${pkgdir}/usr/share/doc/${pkgname}"
    python setup.py install --root=${pkgdir} --prefix=/usr --optimize=1 --use-system-libraries --offline
}

package_python-astroplan-doc() {
    pkgdesc="Documentation for Python astroplan module"
    cd ${srcdir}/${_pyname}-${pkgver}/docs/_build

    install -D -m644 -t "${pkgdir}/usr/share/licenses/${pkgname}" ../../LICENSE.rst
    install -d -m755 "${pkgdir}/usr/share/doc/${pkgbase}"
    cp -a html "${pkgdir}/usr/share/doc/${pkgbase}"
}
