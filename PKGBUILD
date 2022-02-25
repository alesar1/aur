# Maintainer: Miguel de Val-Borro <miguel dot deval at gmail dot com>
pkgname=('python-sphinx-bootstrap-theme' 'python2-sphinx-bootstrap-theme')
pkgver=0.8.1
pkgrel=2
pkgdesc="Sphinx documentation theme that integrates the Bootstrap framework"
arch=('any')
url="http://ryan-roemer.github.io/sphinx-bootstrap-theme/"
license=('MIT')
makedepends=('python-setuptools' 'python2-setuptools')
source=("$pkgbase-$pkgver.tar.gz::https://github.com/ryan-roemer/sphinx-bootstrap-theme/archive/v${pkgver}.tar.gz")
md5sums=('85672be189293cdf7dd7fb742958c4f7')

build() {
  cp -r ${srcdir}/sphinx-bootstrap-theme-${pkgver} ${srcdir}/sphinx-bootstrap-theme-${pkgver}-py2

  cd ${srcdir}/sphinx-bootstrap-theme-${pkgver}
  python setup.py build

  cd ${srcdir}/sphinx-bootstrap-theme-${pkgver}-py2
  python2 setup.py build
}

package_python-sphinx-bootstrap-theme() {
  cd ${srcdir}/sphinx-bootstrap-theme-${pkgver}
  install -D -m644 LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.txt"
  python setup.py install --prefix=/usr --root=${pkgdir}
}

package_python2-sphinx-bootstrap-theme() {
  cd ${srcdir}/sphinx-bootstrap-theme-${pkgver}-py2
  install -D -m644 LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.txt"
  python2 setup.py install --prefix=/usr --root=${pkgdir}
}
