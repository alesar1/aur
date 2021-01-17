# Maintainer: Martin Scholz <scholz.m82@gmail.com>
pkgname=python-trytond_sale
_name=trytond_sale
pkgver=5.8.1
_pkgdir=5.8
pkgrel=1
pkgbase=python-$_name
pkgdesc="Tryton module for sale"
arch=('any')
url="http://www.tryton.org/"
license=('GPL3')
depends=('python>=3.5')
makedepends=('python-distribute')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('a9ae62bb5b221392011da4a01f762938b765465745f705a384b969f87b6cf51d')
b2sums=('58fdb4412e7a764cbbd31c58c80799a1b4acbdad7a805b788ff8860841a1fc0ea84edaecd2d4078defec20ac6b3485132c0c58bfc2892ab2e6ec729b6aa0763c')

build() {
  cd $srcdir/$_name-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_name-$pkgver
  python setup.py install --root=$pkgdir --optimize=1 --skip-build
}
