# Maintainer: Josip Ponjavic <josipponjavic at gmail dot com>

pkgbase=python-pyprind
pkgname=('python-pyprind' 'python2-pyprind')
pkgver=2.11.0
pkgrel=1
pkgdesc='Python Progress Bar and Percent Indicator Utility'
arch=('any')
url='https://github.com/rasbt/pyprind'
license=('BSD')
makedepends=('python-setuptools' 'python2-setuptools')
source=("pyprind-${pkgver}.tar.gz::https://github.com/rasbt/pyprind/archive/${pkgver}.tar.gz")
sha256sums=('3e7646c6b043b50766d63c1c14e081bcda4ac6a1394902e7fec35ad386c91b1a')

prepare() {
  cp -a "pyprind-$pkgver"{,-python2}
}

build() {
  cd "$srcdir/pyprind-$pkgver"
  python setup.py build

  cd "$srcdir/pyprind-$pkgver-python2"
  python2 setup.py build
}

check() {
  cd "$srcdir/pyprind-$pkgver"
  python setup.py test || warning "Tests failed"

  cd "$srcdir/pyprind-$pkgver-python2"
  python2 setup.py test || warning "Tests failed"
}

package_python-pyprind() {
  depends=('python')
  optdepends=('python-psutil: improved system information')
  cd "pyprind-$pkgver"
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

package_python2-pyprind() {
  depends=('python2')
  optdepends=('python2-psutil: improved system information')
  cd "pyprind-$pkgver-python2"
  python2 setup.py install --root="$pkgdir" --optimize=1 --skip-build
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
