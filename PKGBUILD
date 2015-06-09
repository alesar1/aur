# Maintainer: Colin Keenan <colinnkeenan at gmail dot com>

pkgname=silentcast
pkgver=2.0
pkgrel=3
pkgdesc="Silent Screencast: video record your screen and make it into an animated gif"
arch=('any')
url="https://github.com/colinkeenan/silentcast"
license=('GPL')
depends=('bash' 'ffmpeg' 'imagemagick' 'xdotool' 'xorg-xrandr' 'xorg-xwininfo' 'wmctrl' 'python-gobject' 'python-cairo' 'xdg-utils' 'yad')
install=${pkgname}.install

source=($url"/archive/v"$pkgver".tar.gz")
md5sums=('4638cb6349efd807050df35e1f0a192f')

package() {
  cd "$pkgname-$pkgver"
  install -D -m755 silentcast "$pkgdir/usr/bin/silentcast"
  install -D -m755 genffcom "$pkgdir/usr/bin/genffcom"
  install -D -m755 temptoanim "$pkgdir/usr/bin/temptoanim"
  install -D -m755 transparent_window.py "$pkgdir/usr/share/silentcast/transparent_window.py"
  install -m755 unity_indicator.py "$pkgdir/usr/share/silentcast"
  install -m644 stop?.png "$pkgdir/usr/share/silentcast"
  install -D -m644 silentcast.png "$pkgdir/usr/share/pixmaps/silentcast.png"
  install -D -m644 silentcast.desktop "$pkgdir/usr/share/applications/silentcast.desktop"
  install -D -m644 README.md "$pkgdir/usr/share/doc/silentcast/README.md"
  install -m644 *png "$pkgdir/usr/share/doc/silentcast"
  install -m644 *gif "$pkgdir/usr/share/doc/silentcast"
}
