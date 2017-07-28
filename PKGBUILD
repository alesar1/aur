# Maintainer: Jesse McClure aka "Trilby" <jesse dot mcclure at umassmed dot edu>
# Contributor: Doug Newgard <scimmia at archlinux dot info>

pkgname=qt5-webengine-widevine
pkgdesc='A browser plugin designed for the viewing of premium video content'
pkgver=60.0.3112.78
pkgrel=1
epoch=1
arch=('i686' 'x86_64')
url='http://www.google.com/chrome'
license=('custom:chrome')
options=('!strip')
depends=('qt5-webengine')
source=('chrome-eula_text.html::https://www.google.com/intl/en/chrome/browser/privacy/eula_text.html')
source_i686=("http://mirror.retrosnub.co.uk/apt/google/pool/main/g/google-chrome-stable/google-chrome-stable_48.0.2564.116-1_i386.deb")
source_x86_64=("https://dl.google.com/linux/deb/pool/main/g/google-chrome-stable/google-chrome-stable_${pkgver}-1_amd64.deb")
sha256sums=('e93c01576427cad9099f2cf0df0be70d0a2cc0a3a66c743318b2138aa7c4ed93')
sha256sums_i686=('7401ad3698a28bf2b45e350fd2b941c44cb51dbb3f87b0e7dd1a2da72c42f594')
sha256sums_x86_64=('9a64c54d87724b58ea5cff53b05a48583e1c26b48108d9e5723ff69ff05a7871')

prepare() {
  bsdtar -xf data.tar.xz opt/google/chrome/{chrome,libwidevinecdm.so,libwidevinecdmadapter.so}
}

package() {
  install -Dm644 opt/google/chrome/libwidevinecdm.so -t "$pkgdir/usr/lib/qt/plugins/ppapi/"
  install -Dm644 opt/google/chrome/libwidevinecdmadapter.so -t "$pkgdir/usr/lib/qt/plugins/ppapi/"
  install -Dm644 chrome-eula_text.html "$pkgdir/usr/share/licenses/$pkgname/eula_text.html"
}
