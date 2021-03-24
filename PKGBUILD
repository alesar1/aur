# Maintainer: Marcus Hoffmann <bubu@bubu1.eu>

_pkgname=mypy-zope
pkgname=python-mypy-zope
pkgver=0.2.13
pkgrel=1
pkgdesc="Plugin for mypy to support zope.interface"
arch=('any')
url="https://pypi.org/project/mypy-zope/"
license=('MIT')
depends=('python' 'python-setuptools' 'mypy' 'python-zope-interface' 'python-zope-schema')
checkdepends=('python-pytest' 'python-lxml')
source=("https://files.pythonhosted.org/packages/source/${_pkgname::1}/$_pkgname/$_pkgname-$pkgver.tar.gz")
sha256sums=('3700f7136f9533b8fed14f93bdf2bb79a0611af94638734ff01a174773bc52b7')

# Tests only work with installed package:
# https://github.com/Shoobx/mypy-zope/issues/25
#check() {
#  cd $srcdir/${_pkgname}-${pkgver}
#  PYTHONPATH=./build/lib pytest
#  # No idea how to get that to work...
#  #mypy ./src/mypy_zope --strict
#}

build() {
  cd $srcdir/${_pkgname}-${pkgver}
  python setup.py build
}

package() {
  cd "$srcdir/${_pkgname}-${pkgver}"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  python3 setup.py install --root "${pkgdir}" --optimize=1 --skip-build
}
