# Maintainer: Musikolo <musikolo {at} hotmail [dot] com>
# Contributor Oliver Rümpelein <arch@pheerai.de>
# Contributor/Base PKGBUILD: Doug Newgard <scimmia at archlinux dot info>

pkgname=vivaldi-widevine
pkgdesc="A browser plugin designed for the viewing of premium video content, standalone for vivaldi"
pkgver=4.10.1196.0
_chrome_ver=70.0.3538.110
_channel=stable
pkgrel=2
epoch=1
arch=('x86_64')
url='https://www.widevine.com/'
source=('chrome-eula_text.html::https://www.google.com/intl/en/chrome/privacy/eula_text.html'
# Try using chrome version-specific version. It only seems to work for the latests chrome version.
# 	"google-chrome-${_channel}_${pkgver}_amd64.deb::https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb"
	"https://dl.google.com/linux/deb/pool/main/g/google-chrome-${_channel}/google-chrome-${_channel}_${_chrome_ver}-1_amd64.deb")
options=("!strip")
license=('custom')
depends=('vivaldi-ffmpeg-codecs' 'glib2')
conflicts=('chromium-widevine' 'google-chrome')
sha256sums=('22e323091aab9730fc9431376e63d95fe03e3df08a1ab7d913b67bd16a6c159b'
            'efd6aa29f5d1ce80a3908ee40b0c6e71aa354ad8fcd9788b1ff6893bef92d0be')

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

