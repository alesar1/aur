# Maintainer: mark.blakeney at bullet-systems dot net
pkgname=edir
pkgver=2.2
pkgrel=1
pkgdesc="Program to rename and remove files and directories using your editor"
url="https://github.com/bulletmark/$pkgname"
license=("GPL3")
arch=("any")
depends=("python>=3.5")
makedepends=("python-setuptools")
source=("$pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz")
sha1sums=('c3af2114d02572dd33106d8d9124ded0d6fcec2d')

package() {
  cd "$pkgname-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:
