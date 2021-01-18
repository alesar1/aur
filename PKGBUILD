# Maintainer: Martin Scholz <scholz.m82@gmail.com>
pkgname=python-trytond_account_invoice_line_standalone
_name=trytond_account_invoice_line_standalone
pkgver=5.8.1
_pkgdir=5.8
pkgrel=1
pkgbase=python-$_name
pkgdesc="Tryton module to have standalone invoice lines"
arch=('any')
url="http://www.tryton.org/"
license=('GPL3')
depends=('python>=3.5')
makedepends=('python-distribute')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('a1184142b15e744dc3783af9dde2906f10dc0b37229356fb84a7547688338542')
b2sums=('2f226453af17978609c488a736fd9cf26dc55e8eb2db8e18b246b601903130e5f3d3cbab9639de23c0a36fde8b7e510fbc542c9a3ca13d4b04c70b5255b50949')

build() {
  cd $srcdir/$_name-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_name-$pkgver
  python setup.py install --root=$pkgdir --optimize=1 --skip-build
}
