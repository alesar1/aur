# Maintainer: Astro Benzene <universebenzene at sina dot com>
pkgbase=python-astroscrappy
pkgname=('python-astroscrappy' 'python2-astroscrappy' 'python-astroscrappy-doc')
pkgver=1.0.5
pkgrel=2
pkgdesc="Speedy Cosmic Ray Annihilation Package in Python"
arch=('i686' 'x86_64')
url="https://github.com/astropy/astroscrappy"
license=('BSD')
makedepends=('python-astropy-helpers' 'python2-astropy-helpers' 'python-sphinx')
checkdepends=('python-pytest' 'python2-pytest')
source=("https://files.pythonhosted.org/packages/source/a/astroscrappy/astroscrappy-${pkgver}.tar.gz")
md5sums=('e7ec5d829191226e6092b08e1d8f4cd4')

prepare() {
    cd ${srcdir}/astroscrappy-${pkgver}
    sed -i -e '/auto_use/s/True/False/' setup.cfg

    cp -a ${srcdir}/astroscrappy-${pkgver}{,-py2}
}

build () {
    msg "Building Python2"
    cd ${srcdir}/astroscrappy-${pkgver}-py2
    python2 setup.py build --use-system-libraries --offline

    msg "Building Python3"
    cd ${srcdir}/astroscrappy-${pkgver}
    python setup.py build --use-system-libraries --offline

    msg "Building Docs"
    python setup.py build_docs
}

check(){
    cd $srcdir/astroscrappy-${pkgver}
    python setup.py test

    cd $srcdir/astroscrappy-${pkgver}-py2
    python2 setup.py test
}

package_python2-astroscrappy() {
    depends=('python2' 'python2-numpy' 'python2-astropy' 'cython2>=0.21')
    optdepends=('python-astroscrappy-doc: Documentation for Astro-SCRAPPY')
    cd ${srcdir}/astroscrappy-${pkgver}-py2

    install -d -m755 "${pkgdir}/usr/share/licenses/${pkgname}/"
    install -m644 -t "${pkgdir}/usr/share/licenses/${pkgname}/" licenses/*
    install -D -m644 README.rst -t "${pkgdir}/usr/share/doc/${pkgname}"
    python2 setup.py install --root=${pkgdir} --prefix=/usr --optimize=1 --use-system-libraries --offline
}

package_python-astroscrappy() {
    depends=('python' 'python-numpy' 'python-astropy' 'cython>=0.21')
    optdepends=('python-astroscrappy-doc: Documentation for Astro-SCRAPPY')
    cd ${srcdir}/astroscrappy-${pkgver}

    install -d -m755 "${pkgdir}/usr/share/licenses/${pkgname}/"
    install -m644 -t "${pkgdir}/usr/share/licenses/${pkgname}/" licenses/*
    install -D -m644 README.rst -t "${pkgdir}/usr/share/doc/${pkgname}"
    python setup.py install --root=${pkgdir} --prefix=/usr --optimize=1 --use-system-libraries --offline
}

package_python-astroscrappy-doc() {
    pkgdesc="Documentation for Astro-SCRAPPY"
    cd ${srcdir}/astroscrappy-${pkgver}/build/sphinx

    install -d -m755 "${pkgdir}/usr/share/doc/${pkgbase}"
    cp -a html "${pkgdir}/usr/share/doc/${pkgbase}"
}
