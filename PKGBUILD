# Maintainer: Bernhard Landauer <oberon@mnajaro.org>
# Co-Maintainer: WorMzy Tykashi <wormzy.tykashi@gmail.com>
# Contributor: korrode <korrode at gmail>
# Contributor: sumt <sumt at sci dot fi>

pkgname=palemoon-bin
pkgver=28.0.0
pkgrel=1
pkgdesc="Open source web browser based on Firefox focusing on efficiency."
arch=('i686' 'x86_64')
url="http://linux.palemoon.org/"
license=('MPL' 'GPL' 'LGPL')
depends=('alsa-lib'
    'dbus-glib'
    'desktop-file-utils'
    'gtk2'
    'libxt'
    'mime-types'
    'nss')
optdepends=('ffmpeg: record, convert, and stream audio and video')
provides=("palemoon=$pkgver")
conflicts=('palemoon')
options=('!strip')
source=(palemoon.desktop)
source_i686=("http://linux.palemoon.org/datastore/release/palemoon-$pkgver.linux-i686.tar.bz2"{,.sig})
source_x86_64=("http://linux.palemoon.org/datastore/release/palemoon-$pkgver.linux-x86_64.tar.bz2"{,.sig})
validpgpkeys=('439F46F42C6AE3D23CF52E70865E6C87C65285EC') # T. Wine
sha256sums=('c6cae1c0de6b59da1d846cb2092ca2725ba2baa4d554223f747a4a71ee63002e')
sha256sums_i686=('47a8c1c5040b4793a9e04763388a24e49d9f3e2e1efacc11bea44c155462eec6'
                 'SKIP')
sha256sums_x86_64=('25605ab52c327f047f79298510bf4ae00f69bb3acc86086289d07b2c53167cd3'
                   'SKIP')

package() {
  install -d "$pkgdir"/usr/{bin,lib}
  cp -r palemoon/ "$pkgdir/usr/lib/palemoon"
  ln -s ../lib/palemoon/palemoon "$pkgdir/usr/bin/palemoon"
  install -Dm644 palemoon.desktop "$pkgdir/usr/share/applications/palemoon.desktop"

  # icons
  install -Dm644 palemoon/browser/chrome/icons/default/default16.png \
    "$pkgdir/usr/share/icons/hicolor/16x16/apps/palemoon.png"
  install -Dm644 palemoon/browser/chrome/icons/default/default32.png \
    "$pkgdir/usr/share/icons/hicolor/32x32/apps/palemoon.png"
  install -Dm644 palemoon/browser/chrome/icons/default/default48.png \
    "$pkgdir/usr/share/icons/hicolor/48x48/apps/palemoon.png"
  install -Dm644 palemoon/browser/icons/mozicon128.png \
    "$pkgdir/usr/share/icons/hicolor/128x128/apps/palemoon.png"
}
