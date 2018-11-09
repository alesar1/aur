pkgbase=python-flask-testing
pkgname=('python-flask-testing' 'python2-flask-testing')
pkgver=0.7.1
pkgrel=2
pkgdesc="Flask unittest integration"
url="https://github.com/jarus/flask-testing"
arch=(any)
license=('BSD')
makedepends=('python-setuptools' 'python2-setuptools' 'python-flask' 'python2-flask')
source=("https://github.com/jarus/flask-testing/archive/v${pkgver}.tar.gz")
md5sums=('8f8a9ec996ca7be8b2317d3962a656b0')

prepare() {
  cd "${srcdir}"/flask-testing-$pkgver
}

build() {
  cp -r "${srcdir}"/flask-testing-$pkgver "${srcdir}"/flask-testing-$pkgver-py2

  cd "${srcdir}"/flask-testing-$pkgver
  python setup.py build

  cd "${srcdir}"/flask-testing-$pkgver-py2
  python2 setup.py build
}

package_python-flask-testing() {
  depends=('python-flask')

  cd "${srcdir}/flask-testing-$pkgver"
  python setup.py install --root=${pkgdir} --optimize=1
}

package_python2-flask-testing() {
  depends=('python2-flask')

  cd "${srcdir}/flask-testing-$pkgver"
  python2 setup.py install --root=${pkgdir} --optimize=1
}

