# Maintainer: Oliver Rümpelein <arch@pheerai.de>
# Contributor/Base PKGBUILD: Doug Newgard <scimmia at archlinux dot info>

pkgname=vivaldi-widevine
pkgdesc="A browser plugin designed for the viewing of premium video content, standalone for vivaldi"
pkgver=1.4.8.1029
pkgrel=2
_chrome_ver=62.0.3202.94
epoch=1
arch=('x86_64')
url='https://www.widevine.com/'
source=('chrome-eula_text.html::https://www.google.com/intl/en/chrome/browser/privacy/eula_text.html'
        "https://dl.google.com/linux/deb/pool/main/g/google-chrome-stable/google-chrome-stable_${_chrome_ver}-1_amd64.deb")
options=("!strip")
license=('custom')
depends=('vivaldi-ffmpeg-codecs' 'glib2')
conflicts=('chromium-widevine' 'google-chrome')
sha512sums=('a225555c06b7c32f9f2657004558e3f996c981481dbb0d3cd79b1d59fa3f05d591af88399422d3ab29d9446c103e98d567aeafe061d9550817ab6e7eb0498396'
            '9333c7740250d5f1b4eb1cacaca699ab0bfdb15345317f5cfc883c6996236931789c1ed77770c518f8450ffa48792386ba577b8eed593d38bc4e3e22a14cd387')

prepare() {
  bsdtar -xf data.tar.xz opt/google/chrome/{chrome,libwidevinecdm.so}
}

pkgver() {
  awk 'match($0,/\(version: \0?([0-9.]+)/,a) {print a[1];}' opt/google/chrome/chrome
}

package() {
  install -Dm644 opt/google/chrome/libwidevinecdm.so -t "$pkgdir/opt/google/chrome/"
  install -Dm644 chrome-eula_text.html -t "$pkgdir/usr/share/licenses/vivaldi-widevine/"
}

