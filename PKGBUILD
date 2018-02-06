# Maintainer: Josip Ponjavic <josipponjavic at gmail dot com>

pkgbase=python-pyprind
pkgname=('python-pyprind' 'python2-pyprind')
_name=PyPrind
pkgver=2.11.2
pkgrel=1
pkgdesc='Python Progress Bar and Percent Indicator Utility'
arch=('any')
url='https://pypi.python.org/pypi/PyPrind/'
license=('BSD')
makedepends=('python-setuptools' 'python2-setuptools')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz")
sha256sums=('c46cab453b805852853dfe29fd933aa88a2a516153909c695b098e9161a9e675')

prepare() {
  cp -a "${_name}-${pkgver}"{,-python2}
}

build() {
  cd "$srcdir/${_name}-${pkgver}"
  python setup.py build

  cd "$srcdir/${_name}-${pkgver}-python2"
  python2 setup.py build
}

check() {
  cd "$srcdir/${_name}-${pkgver}"
  python setup.py test || warning "Tests failed"

  cd "$srcdir/${_name}-${pkgver}-python2"
  python2 setup.py test || warning "Tests failed"
}

package_python-pyprind() {
  depends=('python')
  optdepends=('python-psutil: improved system information')
  cd "${_name}-${pkgver}"
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

package_python2-pyprind() {
  depends=('python2')
  optdepends=('python2-psutil: improved system information')
  cd "${_name}-${pkgver}-python2"
  python2 setup.py install --root="$pkgdir" --optimize=1 --skip-build
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
