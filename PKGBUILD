# Maintainer: Sebastian Lau <lauseb644 _at_ gmail _dot_ com>

pkgbase='flask-table'
pkgname=('python-flask-table' 'python2-flask-table')
_module='flask_table'
pkgver=0.5.1
pkgrel=4
pkgdesc='HTML tables for use with the Flask micro-framework'
arch=('any')
url='http://pypi.python.org/pypi/Flask-Table/'
license=('BSD')
makedepends=('python-setuptools' 'python2-setuptools')
source=("$pkgbase-$pkgver.tar.gz::https://github.com/nullptrT/flask_table/archive/v$pkgver.tar.gz")
sha1sums=('f7bc8047150fa201002063fa87295d1329ceb301')

prepare() {
  cp -a "${srcdir}/${_module}-${pkgver}"{,-python2}
}

build() {
  cd "${srcdir}/${_module}-${pkgver}"
  python setup.py build

  cd "${srcdir}/${_module}-${pkgver}-python2"
  python2 setup.py build
}

package_python2-flask-table() {
  depends+=('python2' 'python2-flask' 'python2-flask-babelex')
  cd "${srcdir}/${_module}-${pkgver}-python2"

  python2 setup.py install --root="${pkgdir}" --optimize=1 --skip-build --prefix="/usr"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

package_python-flask-table() {
  depends+=('python' 'python-flask' 'python-flask-babelex')
  cd "${srcdir}/${_module}-${pkgver}"

  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build --prefix="/usr"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim:set ts=2 sw=2 et:
