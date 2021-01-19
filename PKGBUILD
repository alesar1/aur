# Maintainer: Martin Scholz <scholz.m82@gmail.com>
pkgname=python-trytond_production_work_timesheet
_name=trytond_production_work_timesheet
pkgver=5.8.1
_pkgdir=5.8
pkgrel=1
pkgbase=python-$_name
pkgdesc="Tryton module for timesheet on production work"
arch=('any')
url="http://www.tryton.org/"
license=('GPL3')
depends=('python>=3.5')
makedepends=('python-distribute')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('cf641f2d4cc4d3e6438f21c8f72fbbfcad1f72d44d7251820daf1e7b5b5b2b76')
b2sums=('73efe094f27800aaff40780d4e51a071d7a3c75b5410c24a33735df36c828e1583a72d2e76f4d504429d8e677b897ad0f6bdb5cc8d8423d2efae9be9e4dfefd2')

build() {
  cd $srcdir/$_name-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_name-$pkgver
  python setup.py install --root=$pkgdir --optimize=1 --skip-build
}
