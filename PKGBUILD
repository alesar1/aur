# Maintainer: Steffen Hansen <steffengrundsoe@gmail.com>
_pkgname=quickgui
pkgname=$_pkgname-bin
pkgver=1.1.3
pkgrel=1
pkgdesc="A Flutter frontend for quickget and quickemu"
arch=(any)
url="https://github.com/quickgui/quickgui"
license=('unknown')
depends=('quickemu')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("$_pkgname-$pkgver.tar.xz"::"https://github.com/quickgui/quickgui/releases/download/v$pkgver/quickgui-$pkgver.tar.xz")
md5sums=('b1f772e090a520992f5726eaa534f4e4')

package() {
  cd "$_pkgname-$pkgver"

  install -Dm755 quickgui "$pkgdir/opt/$_pkgname/quickgui"

  cp -R data "$pkgdir/opt/$_pkgname"
  cp -R lib "$pkgdir/opt/$_pkgname"

  install -d "$pkgdir/usr/bin/"
  ln -s /opt/$_pkgname/quickgui "$pkgdir/usr/bin/quickgui"
}
