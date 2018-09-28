# Maintainer: Musikolo <musikolo {at} hotmail [dot] com>
# Contributor Oliver Rümpelein <arch@pheerai.de>
# Contributor/Base PKGBUILD: Doug Newgard <scimmia at archlinux dot info>

pkgname=vivaldi-widevine
pkgdesc="A browser plugin designed for the viewing of premium video content, standalone for vivaldi"
pkgver=4.10.1192.0
_chrome_ver=69.0.3497.100
pkgrel=1
epoch=1
arch=('x86_64')
url='https://www.widevine.com/'
source=('chrome-eula_text.html::https://www.google.com/intl/en/chrome/privacy/eula_text.html'
        "https://dl.google.com/linux/deb/pool/main/g/google-chrome-stable/google-chrome-stable_${_chrome_ver}-1_amd64.deb")
options=("!strip")
license=('custom')
depends=('vivaldi-ffmpeg-codecs' 'glib2')
conflicts=('chromium-widevine' 'google-chrome')
sha256sums=('656506e67bdff435a959aeeb8aec3d3471cee4779e1a8f892355718162ea3a89'
            '180cbc8dc9f36bc3022556c046c5ac723607beaf6d1ec395b433c556e199a670')

prepare() {
  bsdtar -xf data.tar.xz opt/google/chrome/libwidevinecdm.so
}

pkgver() {
  strings opt/google/chrome/libwidevinecdm.so | grep -A1 "ChromeCDM" | grep -P "^\d+"
}

package() {
  install -Dm644 opt/google/chrome/libwidevinecdm.so -t "$pkgdir/opt/google/chrome/"
  install -Dm644 chrome-eula_text.html -t "$pkgdir/usr/share/licenses/$pkgname/"
}

