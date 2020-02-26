# Submitter: Jochum Döring <jooch at gmx dot com>
# Maintainer: Jochum Döring <jooch at gmx dot com>

pkgname=interlink-bin
pkgver=52.9.7354
pkgrel=1
pkgdesc="Interlink is a Mail, RSS, and Newsgroups client based on Mozilla-sourced Community Code and built on the Unified XUL Platform."
arch=('x86_64')
url="http://binaryoutcast.com/projects/interlink/"
license=('MPL' 'GPL' 'LGPL')
depends=('alsa-lib'
    'dbus-glib'
    'desktop-file-utils'
    'gtk3'
    'libxt'
    'mime-types'
    'nss')
optdepends=('')
provides=("interlink=$pkgver")
conflicts=('interlink-gtk2-bin')
options=('!strip')
source=(interlink.desktop)
source_x86_64=("http://repository.binaryoutcast.com/projects/interlink/releases/latest/interlink-$pkgver.linux-x86_64-gtk3.tar.xz")

sha256sums=('df4404ee7715b5686143223690ac7a5562fd285cf0d3f3957b72b78878f30649')

sha256sums_x86_64=('0f6b0a973ce7d8f22120d38cde112ee72493331cb6f23bf7d602a602249edfea')

package() {
  install -d "$pkgdir"/usr/{bin,lib}
  cp -r interlink/ "$pkgdir/usr/lib/interlink"
  ln -s ../lib/interlink/interlink "$pkgdir/usr/bin/interlink"
  install -Dm644 interlink.desktop "$pkgdir/usr/share/applications/interlink.desktop"

  # icons
  install -Dm644 interlink/chrome/icons/default/default16.png \
    "$pkgdir/usr/share/icons/hicolor/16x16/apps/interlink.png"
  install -Dm644 interlink/chrome/icons/default/default32.png \
    "$pkgdir/usr/share/icons/hicolor/32x32/apps/interlink.png"
  install -Dm644 interlink/chrome/icons/default/default48.png \
    "$pkgdir/usr/share/icons/hicolor/48x48/apps/interlink.png"
  install -Dm644 interlink/chrome/icons/default/default256.png \
    "$pkgdir/usr/share/icons/hicolor/256x256/apps/interlink.png"
}
