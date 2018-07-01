# Maintainer: Filipe Laíns (FFY00) <filipe.lains@gmail.com>
pkgname=python2-keyring
_pkgname=${pkgname#python2-}
pkgver=13.1.0
pkgrel=1
pkgdesc="The Python keyring lib provides an easy way to access the system keyring service from python. It can be used in any application that needs safe password storage."
arch=('any')
url="https://github.com/jaraco/keyring"
license=('MIT')
depends=('python2-entrypoints' 'python2-secretstorage')
makedepends=('python2-pip')
provides=('python2-keyring')
conflicts=('python2-keyring')
_csum='0b90a69cd0d06e783d0b8b2951050839af7da2d3d153a5a7eaf605e9fb2c'
source=("https://files.pythonhosted.org/packages/33/f4/$_csum/$_pkgname-$pkgver-py2.py3-none-any.whl")
sha256sums=('fb6ad22365c2e4cbec065fd26551646405d0eed651be929e5d826dec78049dcb')

package() {
  PIP_CONFIG_FILE=/dev/null pip2 install --isolated --root=$pkgdir --ignore-installed --no-deps --no-warn-script-location *.whl
  python2 -O -m compileall $pkgdir/lib/python2.7/site-packages/keyring

  mv $pkgdir/usr/bin/keyring2 $pkgdir/usr/bin/keyring2
}
