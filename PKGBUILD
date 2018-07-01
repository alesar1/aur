# Maintainer: Filipe Laíns (FFY00) <filipe.lains@gmail.com>
pkgname=python2-keyring
_pkgname=${pkgname#python2-}
pkgver=13.1.0
pkgrel=2
pkgdesc="Provides an easy way to access the system keyring service from python."
arch=('any')
url="https://github.com/jaraco/keyring"
license=('MIT')
depends=('python2-entrypoints' 'python2-secretstorage')
makedepends=('python2-setuptools-scm')
provides=('python2-keyring')
conflicts=('python2-keyring')
source=("https://pypi.io/packages/source/${_pkgname:0:1}/$_pkgname/$_pkgname-$pkgver.tar.gz")
sha256sums=('971699318f8a882da4193f0c2f87ae974e34c777fdfb59f89b50105cd678f4d9')

build() {
  cd $_pkgname-$pkgver
  python2 setup.py build
}

package() {
  cd $_pkgname-$pkgver
  python2 setup.py install --root=$pkgdir --optimize=1

  mv $pkgdir/usr/bin/keyring $pkgdir/usr/bin/keyring2
}
