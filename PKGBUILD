# Maintainer: Miguel de Val-Borro <miguel.deval at gmail dot com>
# Contributor: Universebenzene <universebenzene at sina dot com>
pkgname=('python2-astropy-helpers')
pkgver=2.0.7
pkgrel=1
pkgdesc="Utilities used for building the Astropy python library for astronomy"
arch=('any')
url="https://github.com/astropy/astropy-helpers"
license=('BSD')
makedepends=('python2-setuptools')
source=("https://files.pythonhosted.org/packages/source/a/astropy-helpers/astropy-helpers-${pkgver}.tar.gz")
md5sums=('835236d48ad315f485a8f0567b4c2686')

build() {
  cd ${srcdir}/astropy-helpers-${pkgver}
  patch -p1 -i ../../astropy_helpers.patch
  python2 setup.py build --use-system-libraries
}

package() {
  cd ${srcdir}/astropy-helpers-${pkgver}
  install -D -m644 LICENSE.rst "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.rst"
  python2 setup.py install --prefix=/usr --root=${pkgdir}
}
