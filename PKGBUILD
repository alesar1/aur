# Maintainer: Martin Scholz <scholz.m82@gmail.com>
pkgname=python-trytond_ldap_authentication
_name=trytond_ldap_authentication
pkgver=5.8.1
_pkgdir=5.8
pkgrel=1
pkgbase=python-$_name
pkgdesc="Tryton module to authenticate users through LDAP"
arch=('any')
url="http://www.tryton.org/"
license=('GPL3')
depends=('python>=3.5')
makedepends=('python-distribute')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=('096beb96103f2ff6a2e0f8b6e93a480fb689f274a5ad9c9d2a190283b07d3330')
b2sums=('8f13ffad6340d71bc3bdec2f285050acb1968fa02765cbb273816c8375708dec5792bfe460bc1ebb00bf944715c34a1f7d98b8d8ba944ab3ca254963f511f982')

build() {
  cd $srcdir/$_name-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$_name-$pkgver
  python setup.py install --root=$pkgdir --optimize=1 --skip-build
}
