# Maintainer: Quentin Retornaz <quentin dot retornaz at yahoo dot fr>
# Contributor: Bernhard Landauer <oberon@manjaro.org>
# Contributor: WorMzy Tykashi <wormzy.tykashi@gmail.com>
# Contributor: korrode <korrode at gmail>
# Contributor: sumt <sumt at sci dot fi>

pkgname=palemoon-bin-gtk2
pkgver=29.2.1
pkgrel=1
pkgdesc="Open source web browser based on Firefox focusing on efficiency."
arch=('x86_64')
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
conflicts=('palemoon' 'palemoon-bin')
options=('!strip')
source=(palemoon.desktop)
source_x86_64=("https://linux.palemoon.org/datastore/release/palemoon-$pkgver.linux-x86_64-gtk2.tar.xz"{,.sig})
# link to latest tarball: http://linux.palemoon.org/download/mainline/
sha256sums=('6fa2786e1828684a6783d340690f75382d1dcd02ce8533dad4f3f4f8b076dad7')
sha256sums_x86_64=('2f91434b7b6f915e024d6e4ac7efcabb1cc21c50a5d1dbcdc072f34c77e6802e'
                   'SKIP')
validpgpkeys=('439F46F42C6AE3D23CF52E70865E6C87C65285EC' # T. Wine
              '3DAD8CD107197488D2A2A0BD40481E7B8FCF9CEC') # Moonchild, see https://forum.palemoon.org/viewtopic.php?f=1&t=7176

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
