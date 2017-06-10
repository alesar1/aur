# Maintainer: Oliver Rümpelein <arch@pheerai.de>
# Contributor: Doug Newgard <scimmia at archlinux dot info>

pkgname=vivaldi-widevine
pkgdesc='A browser plugin designed for the viewing of premium video content, standalone for vivaldi'
pkgver=1.4.8.977
pkgrel=1
epoch=1
arch=('i686' 'x86_64')
url='http://www.google.com/chrome'
license=('custom:chrome')
options=('!strip')
_chrome_ver=59.0.3071.86
depends=('vivaldi-ffmpeg-codecs' 'glib2')
source=('chrome-eula_text.html::https://www.google.com/intl/en/chrome/browser/privacy/eula_text.html')
source_i686=("http://mirror.retrosnub.co.uk/apt/google/pool/main/g/google-chrome-stable/google-chrome-stable_48.0.2564.116-1_i386.deb")
source_x86_64=("https://dl.google.com/linux/deb/pool/main/g/google-chrome-stable/google-chrome-stable_${_chrome_ver}-1_amd64.deb")
sha256sums=('e93c01576427cad9099f2cf0df0be70d0a2cc0a3a66c743318b2138aa7c4ed93')
sha256sums_i686=('7401ad3698a28bf2b45e350fd2b941c44cb51dbb3f87b0e7dd1a2da72c42f594')
sha256sums_x86_64=('895bbda9a3d049daf2b92e1df76ca9196265ad67e77442e0fa9ab5bee18a73af')

prepare() {
  bsdtar -xf data.tar.xz opt/google/chrome/{chrome,libwidevinecdm.so}
}

pkgver() {
  awk 'match($0,/\(version: \0?([0-9.]+)/,a) {print a[1];}' opt/google/chrome/chrome
}

package() {
  install -Dm644 opt/google/chrome/libwidevinecdm.so -t "$pkgdir/opt/google/chrome/"
  install -Dm644 chrome-eula_text.html "$pkgdir/usr/share/licenses/$pkgname/eula_text.html"
}
