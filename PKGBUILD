# Maintainer: Dennis Fink <metalgamer@c3l.lu>
# Maintainer: Tobias Frilling <tobias@frilling-online.de>

pkgname=ttf-monaco
pkgver=6.1
pkgrel=2
pkgdesc="A monospaced sans-serif typeface by Apple Inc."
arch=('any')
license=('unknown')
url="http://www.apple.com/"
depends=('fontconfig')
replaces=('monaco_linux' 'monaco-linux-font')
conflicts=('monaco_linux' 'monaco-linux-font')
install=ttf-monaco.install
source=("https://github.com/cstrap/monaco-font/raw/master/Monaco_Linux.ttf")
sha1sums=('9dffe0d0a187238b324182bf7fa86a077c9450c4')

package() {
  install -d "$pkgdir/usr/share/fonts/TTF/"
  install -m644 Monaco_Linux.ttf "$pkgdir/usr/share/fonts/TTF/"
}
