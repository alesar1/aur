# Maintainer: sumt <sumt at sci dot fi>
pkgname=palemoon-bin
pkgver=26.2.0
pkgrel=2
pkgdesc="Open source web browser based on Firefox focusing on efficiency."
arch=('i686' 'x86_64')
url="http://linux.palemoon.org/"
license=('MPL' 'GPL' 'LGPL')
depends=('gtk2' 'dbus-glib' 'desktop-file-utils' 'libxt' 'mime-types' 'nss' 'alsa-lib')
optdepends=('palemoon-i18n-default: language pack for system active language'
            'gst-plugins-bad: aac and mp3 audio playback'
            'gst-plugins-good: h.264 video playback'
            'gst-libav: h.264 video playback'
            'hunspell: spell checker and morphological analyzer'
            'hyphen: library for hyphenation and justification')
provides=("palemoon=$pkgver")
conflicts=('palemoon')
install=palemoon.install
options=('!strip')
source=(palemoon.desktop)
source_i686=("palemoon-$pkgver.en-US.linux-i686.tar.bz2::http://linux.palemoon.org/installer/download.php?v=$pkgver&a=i686")
source_x86_64=("palemoon-$pkgver.en-US.linux-x86_64.tar.bz2::http://linux.palemoon.org/installer/download.php?v=$pkgver&a=x86_64")
sha1sums=('e8d4cbcd51326c337a2c901e7aff7b6c54043dec')
sha1sums_i686=('07402dba250ab634f0f39d733044e02819137877')
sha1sums_x86_64=('5a19756ccf911f43f999010def48caa0d2f8a48b')

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

  # use system-provided dictionaries
  rm -rf "$pkgdir"/usr/lib/palemoon/{dictionaries,hyphenation}
  ln -s /usr/share/hunspell "$pkgdir/usr/lib/palemoon/dictionaries"
  ln -s /usr/share/hyphen "$pkgdir/usr/lib/palemoon/hyphenation"

  # avoid duplicate binaries
  # https://bugzilla.mozilla.org/show_bug.cgi?id=658850
  ln -sf palemoon "$pkgdir/usr/lib/palemoon/palemoon-bin"
}
