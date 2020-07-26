# Maintainer: Michael Schubert <mschu.dev at gmail>
# Contributor: Maxim Andersson <thesilentboatman@gmail.com>
_pkgname=pixel-saver
pkgname=gnome-shell-extension-$_pkgname
pkgver=1.20.r7.g9ba4425
pkgrel=1
pkgdesc="Saves pixels by fusing activity bar and title bar in a natural way"
arch=('any')
url="https://github.com/deadalnix/pixel-saver"
license=('MIT')
depends=('gnome-shell' 'xorg-xprop')
install=$_pkgname.install
source=(git+https://github.com/deadalnix/pixel-saver)
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir"/$_pkgname
  git describe --long --tags | sed -r 's/([^-]*-g)/r\1/;s/-/./g'
}

package() {
  cd "$srcdir"/$_pkgname

  install -Dm644 LICENSE -t "$pkgdir"/usr/share/licenses/$pkgname
  install -d "$pkgdir"/usr/share/gnome-shell/extensions
  cp -af pixel-saver@deadalnix.me "$pkgdir"/usr/share/gnome-shell/extensions/
}
