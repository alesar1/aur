# Maintainer: Astro Benzene <universebenzene at sina dot com>
pkgbase=python-fitsblender
_pyname=${pkgbase#python-}
pkgname=("python-${_pyname}" "python-${_pyname}-doc")
pkgver=0.3.6
pkgrel=1
pkgdesc="FITS header merging from multiple images"
arch=('i686' 'x86_64')
url="https://github.com/spacetelescope/fitsblender"
license=('BSD')
makedepends=('python-setuptools' 'python-astropy' 'python-sphinx' 'python-stsci.tools')
checkdepends=('python-pytest')
source=("https://files.pythonhosted.org/packages/source/${_pyname:0:1}/${_pyname}/${_pyname}-${pkgver}.tar.gz")
md5sums=('79314597bf568f7bf1bff96fcaee60b4')

build() {
    cd ${srcdir}/${_pyname}-${pkgver}
    python setup.py build

    msg "Building Docs"
    python setup.py build_sphinx
}

check() {
    cd ${srcdir}/${_pyname}-${pkgver}

    pytest
}

package_python-fitsblender() {
    depends=('python-astropy' 'python-stsci.tools')
    optdepends=('python-fitsblender-doc: Documentation for Python FITS blender')
    cd ${srcdir}/${_pyname}-${pkgver}

    install -D -m644 -t "${pkgdir}/usr/share/licenses/${pkgname}" LICENSE.txt
    install -D -m644 -t "${pkgdir}/usr/share/doc/${pkgname}" README.md
    python setup.py install --root=${pkgdir} --prefix=/usr --optimize=1
}

package_python-fitsblender-doc() {
    pkgdesc="Documentation for Python FITS blender"
    cd ${srcdir}/${_pyname}-${pkgver}/build/sphinx

    install -d -m755 "${pkgdir}/usr/share/doc/${pkgbase}"
    cp -a html "${pkgdir}/usr/share/doc/${pkgbase}"
}
