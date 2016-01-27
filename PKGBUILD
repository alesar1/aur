# Maintainer: Quentin Retornaz <quentin dot retornaz at yahoo dot fr>
# Contributor: Brian Bidulock <bidulock@openss7.org>
# Contributor : Ionut Biru <ibiru@archlinux.org>
# Contributor: Jakub Schmidtke <sjakub@gmail.com>

pkgname=firefox-gtk2-bin
_pkgname=firefox
pkgver=44.0
pkgrel=1
pkgdesc="Standalone web browser from mozilla.org"
arch=('i686' 'x86_64')
license=('MPL' 'GPL' 'LGPL')
url="https://www.mozilla.org/firefox/"
depends=('gtk2' 'mozilla-common' 'libxt' 'startup-notification' 'mime-types'
         'dbus-glib' 'alsa-lib' 'desktop-file-utils' 'hicolor-icon-theme'
         'libvpx' 'icu' 'libevent' 'nss' 'hunspell' 'sqlite' 'ttf-font')
optdepends=('networkmanager: Location detection via available WiFi networks'
            'ffmpeg: H264/AAC decoding'
            'gst-plugins-good: MP3 playback'
            'gst-plugins-ugly: MP3 playback'
            'upower: Battery API')
install=firefox.install
options=('!emptydirs' '!makeflags')
provides=("firefox=${pkgver}-${pkgrel}")
conflicts=("firefox")
source=(firefox.desktop
        vendor.js)
source_i686=(https://github.com/iPotable/firefox-gtk2-bin-archlinux/raw/master/firefox-${pkgver}.en-US.linux-i686.tar.bz2)
source_x86_64=(https://github.com/iPotable/firefox-gtk2-bin-archlinux/raw/master/firefox-${pkgver}.en-US.linux-x86_64.tar.bz2)
sha256sums=('c202e5e18da1eeddd2e1d81cb3436813f11e44585ca7357c4c5f1bddd4bec826'
            '4b50e9aec03432e21b44d18c4c97b2630bace606b033f7d556c9d3e3eb0f4fa4')
sha256sums_i686=('9c06ebfcdfc9f1c97f4078b5d8ee1fe67262f2362cddf1517d8e51b281d18128')
sha256sums_x86_64=('5c2a041bf4cdd94222c6d7576a8b25ca7880e24aa8f26ac04f0c2cd243af7cf7')
validpgpkeys=('2B90598A745E992F315E22C58AB132963A06537A')

package() {
  install -d "$pkgdir"/usr/{bin,lib}
  cp -r firefox/ "$pkgdir/usr/lib/firefox"
  ln -s ../lib/firefox/firefox "$pkgdir/usr/bin/firefox"

  install -Dm644 ../vendor.js "$pkgdir/usr/lib/firefox/browser/defaults/preferences/vendor.js"

  for i in 16 32 48; do
      install -Dm644 "$srcdir/firefox/browser/chrome/icons/default/default$i.png" \
        "$pkgdir/usr/share/icons/hicolor/${i}x${i}/apps/firefox.png"
  done
  install -Dm644 "$srcdir/firefox/browser/icons/mozicon128.png" \
    "$pkgdir/usr/share/icons/hicolor/128x128/apps/firefox.png"

  install -Dm644 firefox.desktop \
    "$pkgdir/usr/share/applications/firefox.desktop"

  # Use system-provided dictionaries
  rm -rf "$pkgdir"/usr/lib/firefox/{dictionaries,hyphenation}
  ln -s /usr/share/hunspell "$pkgdir/usr/lib/firefox/dictionaries"
  ln -s /usr/share/hyphen "$pkgdir/usr/lib/firefox/hyphenation"

  #workaround for now
  #https://bugzilla.mozilla.org/show_bug.cgi?id=658850
  ln -sf firefox "$pkgdir/usr/lib/firefox/firefox-bin"
}
