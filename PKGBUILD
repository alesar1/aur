# Maintainer: Det <nimetonmaili g-mail>
# Contributors: Achilleas Pipinellis, speed145a, Schnouki

pkgname=firefox-beta-bin
_pkgname=firefox-beta
pkgver=59.0b4
_major=${pkgver/rc*}
_build=${pkgver/*rc}
pkgrel=1
pkgdesc="Standalone web browser from mozilla.org - Beta"
arch=('x86_64')
url="https://www.mozilla.org/en-US/firefox/channel/#beta"
license=('MPL' 'GPL' 'LGPL')
depends=('dbus-glib' 'gtk3' 'libxt' 'nss')
optdepends=('ffmpeg: H264/AAC/MP3 decoding'
            'hunspell: Spell checking'
            'hyphen: Hyphenation'
            'libnotify: Notification integration'
            'networkmanager: Location detection via available WiFi networks'
            'pulseaudio: Sound'
            'upower: Battery API')
provides=("firefox=$pkgver")
install=$pkgname.install
source=("https://ftp.mozilla.org/pub/firefox/releases/$pkgver/linux-x86_64/en-US/firefox-$pkgver.tar.bz2"
        "$_pkgname.sh"
        "$pkgname.desktop")
# RC
if [[ $_build = ? ]]; then
  source[0]="firefox-$pkgver.tar.bz2::https://ftp.mozilla.org/pub/firefox/candidates/$_major-candidates/build$_build/linux-x86_64/en-US/firefox-$_major.tar.bz2"
fi
sha256sums=('600b82de34eed0cc2c7d16e32c554d89a47c65ec439087a8f6fcfbc69ce95c1a'
            '367100e5f66523a90c3792e2e0d0e2fe8a3c28748b905ce9f5f6b121343d7842'
            '92f58532757365f38382e016d250836e4faf8415599cefb6ddace0de77486658')

package() {
  # Create directories
  msg2 "Creating directory structure..."
  mkdir -p "$pkgdir"/usr/bin
  mkdir -p "$pkgdir"/usr/share/applications
  mkdir -p "$pkgdir"/opt

  msg2 "Moving stuff in place..."
  # Install
  cp -r firefox/ "$pkgdir"/opt/$_pkgname

  # Launchers
  install -m755 $_pkgname.sh "$pkgdir"/usr/bin/$_pkgname
  ln -s $_pkgname "$pkgdir"/usr/bin/$pkgname  # compatibility
  ln -sf firefox "$pkgdir"/opt/$_pkgname/firefox-bin

  # Desktops
  install -m644 *.desktop "$pkgdir"/usr/share/applications/

  # Icons
  for i in 16x16 22x22 24x24 32x32 48x48 256x256; do
    install -d "$pkgdir"/usr/share/icons/hicolor/$i/apps/
    ln -s /opt/$_pkgname/browser/chrome/icons/default/default${i/x*}.png \
          "$pkgdir"/usr/share/icons/hicolor/$i/apps/$_pkgname.png
  done

  # 128x128
  install -d "$pkgdir"/usr/share/icons/hicolor/128x128/apps/
  ln -s /opt/$_pkgname/browser/icons/mozicon128.png \
        "$pkgdir"/usr/share/icons/hicolor/128x128/apps/$_pkgname.png

  # Use system-provided dictionaries
  rm -r "$pkgdir"/opt/$_pkgname/dictionaries
  ln -Ts /usr/share/hunspell "$pkgdir"/opt/$_pkgname/dictionaries
  ln -Ts /usr/share/hyphen "$pkgdir"/opt/$_pkgname/hyphenation

  # Use system certificates
  ln -sf /usr/lib/libnssckbi.so "$pkgdir"/opt/$_pkgname/libnssckbi.so
}
