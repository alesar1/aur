_pypiname=jsmin
pkgname=('python-jsmin' 'python2-jsmin')
pkgbase=python-$_pypiname
pkgver=2.2.1
pkgrel=1
pkgdesc="JavaScript minifier"
arch=(any)
url="https://pypi.python.org/pypi/jsmin"
license=('MIT')
makedepends=('python' 'python2')
options=(!emptydirs)
source=(https://pypi.python.org/packages/source/j/$_pypiname/$_pypiname-$pkgver.tar.gz)
md5sums=('89a45a14ed76d1113f1ccd0bcc4b6f4a')

prepare() {
  cp -a $_pypiname-$pkgver{,-py2}
}

build() {
  cd "$srcdir/$_pypiname-$pkgver"
  python setup.py build

  cd "$srcdir/$_pypiname-$pkgver-py2"
  python2 setup.py build
}

package_python-jsmin() {
  depends=('python')
  cd "$srcdir/$_pypiname-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
  install -Dm644 LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE.txt"
}

package_python2-jsmin() {
  depends=('python2')
  cd "$srcdir/$_pypiname-$pkgver-py2"
  python2 setup.py install --root="$pkgdir/" --optimize=1 --skip-build
  install -Dm644 LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE.txt"
}

# vim:set ts=2 sw=2 et:
