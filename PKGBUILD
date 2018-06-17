# Maintainer: Astro Benzene <universebenzene at sina dot com>
pkgname=python2-healpy
pkgver=1.12.0
pkgrel=1
pkgdesc="Python package to manipulate healpix maps"
arch=('i686' 'x86_64')
url="http://healpy.readthedocs.io"
license=('GPL')
depends=('python2>=2.7' 'python2-numpy>=1.5' 'python2-matplotlib' 'python2-astropy' 'cfitsio')
source=("https://files.pythonhosted.org/packages/source/h/healpy/healpy-${pkgver}.tar.gz")
md5sums=('5d0ab5cf025ce4f21d5c767db84fb522')

package() {
    cd ${srcdir}/healpy-${pkgver}

    install -D -m644 README.rst -t "${pkgdir}/usr/share/doc/${pkgname}"
    python2 setup.py install --root=${pkgdir} --prefix=/usr --optimize=1
}
