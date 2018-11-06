# Maintainer: Felix Höffken <felix at ctrl.alt.coop>
# Contributor: Juraj Fiala <doctorjellyface at riseup dot net
_srcname=srp

pkgname=(python-$_srcname python2-$_srcname)
pkgbase=python-srp
pkgver=1.0.14
pkgrel=2
pkgdesc='Python implementation of the Secure Remote Password protocol (SRP)'
arch=('any')
url="https://github.com/cocagne/py$_srcname"
license=('MIT')
makedepends=('python' 'python2')
source=("$url/archive/$pkgver.tar.gz")
sha256sums=('fc153f73a71546774234ada90128376087110db5ed99b0455e26231df307926d')

prepare() {
  cd "$srcdir"

  cp -a "py$_srcname-$pkgver"{,-py2}
}

build() {
  cd "$srcdir/py$_srcname-$pkgver"
  python setup.py build

  cd "$srcdir/py$_srcname-$pkgver-py2"
  python2 setup.py build
}

check() {
  # Test script isn’t compatible with Python 3 by the looks of it
  # cd "$srcdir/py$_srcname-$pkgver"
  # python srp/test_srp.py

  cd "$srcdir/py$_srcname-$pkgver-py2"
  python2 srp/test_srp.py
}

package_python-srp() {
  depends=('python' 'openssl-1.0')

  cd "$srcdir/py$_srcname-$pkgver"
  python setup.py install --skip-build --root="$pkgdir" --optimize=1
  install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

package_python2-srp() {
  depends=('python2' 'openssl-1.0')

  cd "$srcdir/py$_srcname-$pkgver-py2"
  python2 setup.py install --skip-build --root="$pkgdir" --optimize=1
  install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

