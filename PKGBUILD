# Maintainer: Jonian Guveli <https://github.com/jonian/>
pkgname=keeweb-desktop-bin
pkgver=1.10.0
pkgrel=1
pkgdesc="Free cross-platform password manager compatible with KeePass"
arch=("x86_64")
url="https://github.com/keeweb/keeweb"
license=("MIT")
depends=("gconf" "libxss" "libappindicator-gtk2")
optdepends=("xdotool: for Auto-type feature")
provides=("keeweb-desktop")
conflicts=("keeweb-desktop" "keeweb" "keeweb-bin" "keeweb-git")
source=("$pkgname-$pkgver.deb::$url/releases/download/v$pkgver/KeeWeb-$pkgver.linux.x64.deb")
md5sums=("ced76be8cb0ea262a3d727b8ee0e327d")

prepare() {
  bsdtar xf data.tar.gz
}

package() {
  mv opt "$pkgdir"
  mv usr "$pkgdir"
}
