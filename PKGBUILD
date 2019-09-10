# Maintainer: Astro Benzene <universebenzene at sina dot com>
pkgname=python-healpy
pkgver=1.12.10
pkgrel=1
pkgdesc="Python package to manipulate healpix maps"
arch=('i686' 'x86_64')
url="http://healpy.readthedocs.io"
license=('GPL')
depends=('python>=3.4' 'python-numpy>=1.5' 'python-matplotlib' 'python-astropy' 'cfitsio' 'healpix')
makedepends=('cython>=0.16')
optdepends=('python-healpy-doc: Documentation for healpy')
source=("https://files.pythonhosted.org/packages/source/h/healpy/healpy-${pkgver}.tar.gz")
md5sums=('9293b2e0bbcfaae1eedf0fd21399ef95')

package() {
    cd ${srcdir}/healpy-${pkgver}

    install -D -m644 README.rst -t "${pkgdir}/usr/share/doc/${pkgname}"
    python setup.py install --root=${pkgdir} --prefix=/usr --optimize=1
}
