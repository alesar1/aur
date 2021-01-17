# Maintainer: Martin Scholz <scholz.m82@gmail.com>
pkgname=python-trytond_party
_name=trytond_party
pkgver=5.8.1
_pkgdir=5.8
pkgrel=1
pkgbase=python-$_name
pkgdesc="Tryton module with parties and addresses"
arch=('any')
url="http://www.tryton.org/"
license=('GPL3')
depends=('python>=3.5')
makedepends=('python-distribute')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('0cbe658ed6e9b4f74817dfba7ad34d67588201a941e59e2e263aa51b0f7657c1')
b2sums=('8391904b2df920e35d016671504f920ffd5fc9943c65a096545a55162f1cf6a5cd1938072ac2821c1065978ff4e47fb2aa856bcff42b5e46698d7572bee40ad5')

build() {
  cd $srcdir/$_name-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_name-$pkgver
  python setup.py install --root=$pkgdir --optimize=1 --skip-build
}
