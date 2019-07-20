# Maintainer: Astro Benzene <universebenzene at sina dot com>
pkgname=python-pytest-openfiles
_pyname=${pkgname#python-}
pkgver=0.4.0
pkgrel=1
pkgdesc="Pytest plugin for detecting file handles that were inadvertently left open at the end of unit tests"
arch=('i686' 'x86_64')
url="https://github.com/astropy/pytest-openfiles"
license=('BSD')
depends=('python-pytest>=2.8.0' 'python-psutil' 'python-six')
makedepends=('python-setuptools')
source=("https://files.pythonhosted.org/packages/source/${_pyname:0:1}/${_pyname}/${_pyname}-${pkgver}.tar.gz")
md5sums=('23fcf695c3d0245cb3f9d69952f189e6')

package() {
    cd ${srcdir}/${_pyname}-${pkgver}

    install -D -m644 LICENSE.rst -t "${pkgdir}/usr/share/licenses/${pkgname}"
    install -D -m644 README.rst -t "${pkgdir}/usr/share/doc/${pkgname}"
    python setup.py install --root=${pkgdir} --prefix=/usr --optimize=1
}
