pkgname=python2-leveldb
_pkgname=leveldb
pkgver=0.193
pkgrel=1
pkgdesc="Python bindings for leveldb database library"
url="https://pypi.python.org/pypi/leveldb"
arch=('any')
license=('BSD')
depends=('snappy' 'leveldb' 'gperftools')
source=("https://pypi.python.org/packages/source/l/$_pkgname/$_pkgname-$pkgver.tar.gz")
md5sums=('2952434f2a0ce10c44f58542cc561589')

build() {
  cd "$srcdir/$_pkgname-$pkgver"
  python2 setup.py build
}

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  python2 setup.py install --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:
