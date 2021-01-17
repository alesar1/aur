# Maintainer: Martin Scholz <scholz.m82@gmail.com>
pkgname=python-trytond_account_fr_chorus
_name=trytond_account_fr_chorus
pkgver=5.8.1
_pkgdir=5.8
pkgrel=1
pkgbase=python-$_name
pkgdesc="Tryton module to communicate with Chorus"
arch=('any')
url="http://www.tryton.org/"
license=('GPL3')
depends=('python>=3.5')
makedepends=('python-distribute')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('9b07a72a602c718c761bd345f642a2427fd74bb2480513a3507d55ef5a67f99c')
b2sums=('2ae8e2512afe0b1cfee91aa613770d00371558c87271c014f8cb4fdc6053cc656f2ae061ac95e5858d8d14bba3aa3da819158a66faa407d402b03090573a2ee0')

build() {
  cd $srcdir/$_name-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_name-$pkgver
  python setup.py install --root=$pkgdir --optimize=1 --skip-build
}
