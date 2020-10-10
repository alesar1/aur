# Maintainer: Michael Schubert <mschu.dev at gmail>
# Contributor: Maxim Andersson <thesilentboatman@gmail.com>
_pkgname=pixel-saver
pkgname=gnome-shell-extension-$_pkgname
pkgver=1.24
pkgrel=1
pkgdesc="Saves pixels by fusing activity bar and title bar in a natural way"
arch=('any')
url="https://github.com/deadalnix/pixel-saver"
license=('MIT')
depends=('gnome-shell' 'xorg-xprop' 'xorg-xwininfo')
install=$_pkgname.install
source=($_pkgname-$pkgver.tar.gz::https://github.com/deadalnix/pixel-saver/archive/$pkgver.tar.gz)
sha256sums=('d571a46f7c84085692f1066fb1c4aafb6cfb252a456531f555540024ba62c9f9')

package() {
  cd "$srcdir"/pixel-saver-$pkgver

  install -Dm644 LICENSE -t "$pkgdir"/usr/share/licenses/$pkgname
  install -d "$pkgdir"/usr/share/gnome-shell/extensions
  cp -af pixel-saver@deadalnix.me "$pkgdir"/usr/share/gnome-shell/extensions/
}
