# Maintainer: mark.blakeney at bullet-systems dot net
pkgname=encfsui
pkgver=1.1
pkgrel=1
pkgdesc="Encrypted filesystem encfs GUI wrapper"
url="https://github.com/bulletmark/$pkgname"
license=("GPL3")
arch=("any")
depends=("encfs" "fuse2" "zenity" "xdg-utils")
source=("$url/archive/$pkgver.tar.gz")
md5sums=('20e4596c8925a869cfa52e5b61a668e1')

package() {
  cd "$pkgname-$pkgver"
  make DESTDIR="$pkgdir/" install
}

# vim:set ts=2 sw=2 et:
