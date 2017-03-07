# Maintainer: mark.blakeney at bullet-systems dot net
pkgname=arch-upgrade
pkgver=1.6
pkgrel=1
pkgdesc="Desktop app to upgrade your Arch Linux system"
url="https://github.com/bulletmark/$pkgname"
license=("GPL3")
arch=("any")
depends=("python-html2text")
backup=("etc/$pkgname.conf")
source=("$url/archive/$pkgver.tar.gz")
install=install.sh
md5sums=('5314e4a685a44288f13c8e08e64409f4')

package() {
  cd "$pkgname-$pkgver"
  make DESTDIR="$pkgdir/" install
}

# vim:set ts=2 sw=2 et:
