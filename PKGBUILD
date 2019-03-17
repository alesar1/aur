# Maintainer: Rafael Fontenelle <rafaelff@gnome.org>
_name=pytest-pylint
pkgname=('python-pytest-pylint' 'python2-pytest-pylint')
pkgbase=python-$_name
pkgver=0.14.0
pkgrel=1
pkgdesc="pytest plugin to check source code with pylint"
arch=(any)
url="https://github.com/carsongee/pytest-pylint"
license=('MIT')
makedepends=(python-pytest python-pylint python2-pytest python2-pylint)
source=("https://pypi.org/packages/source/${_name:0:1}/$_name/$_name-$pkgver.tar.gz"
        'https://raw.githubusercontent.com/carsongee/pytest-pylint/master/LICENSE')
sha256sums=('7bfbb66fc6dc160193a9e813a7c55e5ae32028f18660deeb90e1cb7e980cbbac'
            '25b3eef02225972bdfe2c043ab26eabb5c0ce9730a9b8ce366855d9da36c8995')

prepare() {
  cp -a $_name-$pkgver{,-py2}
}

build() {
  cd "$srcdir/$_name-$pkgver"
  python setup.py build

  cd "$srcdir/$_name-$pkgver-py2"
  python2 setup.py build
}

package_python-pytest-pylint() {
  depends=(python-pytest python-pylint)
  cd "$srcdir/$_name-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
  install -Dvm644 "$srcdir/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

package_python2-pytest-pylint() {
  depends=(python2-pytest python2-pylint)
  cd "$srcdir/$_name-$pkgver-py2"
  python2 setup.py install --root="$pkgdir/" --optimize=1 --skip-build
  install -Dvm644 "$srcdir/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
