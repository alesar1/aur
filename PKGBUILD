# Maintainer: Astro Benzene <universebenzene at sina dot com>
pkgname=python-pytest-remotedata
pkgver=0.2.1
pkgrel=1
pkgdesc="Pytest plugin used for controlling access to data files hosted online"
arch=('i686' 'x86_64')
url="https://github.com/astropy/pytest-remotedata"
license=('BSD')
depends=('python-pytest>=3.1' 'python-six')
makedepends=('python-setuptools')
source=("https://files.pythonhosted.org/packages/source/p/pytest-remotedata/pytest-remotedata-${pkgver}.tar.gz")
md5sums=('f9ba2c150c2bdb8da6d90da5f3fa447f')

package() {
    cd ${srcdir}/pytest-remotedata-${pkgver}

    install -D -m644 LICENSE.rst -t "${pkgdir}/usr/share/licenses/${pkgname}"
    install -D -m644 README.rst -t "${pkgdir}/usr/share/doc/${pkgname}"
    python setup.py install --root=${pkgdir} --prefix=/usr --optimize=1
    rm -rf ${pkgdir}/usr/lib/python3.6/site-packages/tests
}
