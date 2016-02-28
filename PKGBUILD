# Maintainer: Antony Lee <anntzer dot lee at gmail dot com>

_pyname=cysignals
pkgname=python-$_pyname
pkgver=1.0
pkgrel=1
pkgdesc='Handle interrupts (and other signals and errors) in Cython code'
url="https://pypi.python.org/pypi/$_pyname/"
depends=('cython')
license=('LGPL3')
arch=('i686' 'x86_64')
source=("https://pypi.python.org/packages/source/${_pyname:0:1}/$_pyname/$_pyname-$pkgver.tar.bz2")
md5sums=('51b5d6d8cb2e3f0cd79fe6e4072fa80a')

build() {
  cd $srcdir/$_pyname-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_pyname-$pkgver
  python setup.py install --root="$pkgdir" --optimize=1
}
