# Maintainer: Musikolo <musikolo {at} hotmail [dot] com>
# Contributor Oliver Rümpelein <arch@pheerai.de>
# Contributor/Base PKGBUILD: Doug Newgard <scimmia at archlinux dot info>

pkgname=vivaldi-widevine
pkgdesc="A browser plugin designed for the viewing of premium video content, standalone for vivaldi"
pkgver=1.4.9.1088
_chrome_ver=67.0.3396.99
pkgrel=5
epoch=1
arch=('x86_64')
url='https://www.widevine.com/'
source=('chrome-eula_text.html::https://www.google.com/intl/en/chrome/browser/privacy/eula_text.html'
# Temporary link while Vivaldi stable doesn't support Chromium 68. Checksum is still the same as the original link.
#        "https://dl.google.com/linux/deb/pool/main/g/google-chrome-stable/google-chrome-stable_${_chrome_ver}-1_amd64.deb")
	"https://confuzer.cloud/mirror/dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_${_chrome_ver}-1_amd64.deb")
options=("!strip")
license=('custom')
depends=('vivaldi-ffmpeg-codecs' 'glib2')
conflicts=('chromium-widevine' 'google-chrome')
sha256sums=('806db9427ed40fe5aa73944e7ead0b7d1c2c5867f4e005fe789b18fb1d370e81'
            'a3e1b3a1e867a486518fa6885c9fdcc1b4dec855d0ed7178bd1921c7098c6a19')

prepare() {
  bsdtar -xf data.tar.xz opt/google/chrome/libwidevinecdm.so
}

pkgver() {
  strings opt/google/chrome/libwidevinecdm.so | grep -P "1\.\d+\.\d+\.\d+"
}

package() {
  install -Dm644 opt/google/chrome/libwidevinecdm.so -t "$pkgdir/opt/google/chrome/"
  install -Dm644 chrome-eula_text.html -t "$pkgdir/usr/share/licenses/$pkgname/"
}

