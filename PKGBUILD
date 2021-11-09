# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Contributor: Chris Lane <aur at chrislane dot com>
# Contributor: American_Jesus <american.jesus.pt AT gmail DOT com>
# Contributor: Federico Damián <federicodamians@gmail.com>
pkgname=vimix-icon-theme
_pkgver=2021-11-09
pkgver=${_pkgver//-/.}
pkgrel=1
pkgdesc="A Material Design icon theme based on Paper Icon Theme"
arch=('any')
url="https://github.com/vinceliuice/vimix-icon-theme"
license=('CC BY-SA 4.0')
depends=('hicolor-icon-theme' 'gtk-update-icon-cache')
options=('!strip')
source=("$pkgname-$_pkgver.tar.gz::$url/archive/$_pkgver.tar.gz")
sha256sums=('2f70825717a0414a441c5bc75f0a5417c97c9fe775ac0b0d2db618cafb2a2a89')

package() {
  cd "$pkgname-$_pkgver"
  install -d "$pkgdir/usr/share/icons"
  ./install.sh -a -d "$pkgdir/usr/share/icons"

  install -Dm644 COPYING -t "$pkgdir/usr/share/licenses/$pkgname"
}
