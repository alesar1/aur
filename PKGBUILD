# Maintainer: Gu1ll0me <michaudg@gmail.com>
# Contributor: aimileus <me at aimileus dot nl>

pkgname=firefox-ubuntu-bin
_pkgname=firefox
pkgver=72.0.1
pkgrel=1
_ubuntuver="$pkgver+build1-0ubuntu0.19.10.1_amd64"
pkgdesc="Standalone web browser from mozilla.org with Ubuntu patches (binary)"
arch=("x86_64")
url="https://www.mozilla.org/firefox/"
license=('GPL' 'LGPL' 'MPL')
depends=('mozilla-common' 'libxt' 'startup-notification' 'mime-types'
         'dbus-glib' 'hicolor-icon-theme'
	 'libvpx' 'icu'  'libevent' 'nss>=3.28.3' 'nspr>=4.10.6' 'hunspell'
	 'sqlite' 'libnotify' 'ffmpeg' 'gtk3'
         # system av1
         'dav1d' 'aom'
         # system harfbuzz
         'harfbuzz'
         # system graphite
         'graphite'
         # system webp
         'libwebp'
         # system libevent
         'libevent'
        )
optdepends=('networkmanager: Location detection via available WiFi networks'
            'speech-dispatcher: Text-to-Speech'
            'pulseaudio: Audio support')
provides=('firefox' 'firefox-ubuntu')
conflicts=('firefox' 'firefox-ubuntu')

source=("http://security.ubuntu.com/ubuntu/pool/main/f/firefox/firefox_$_ubuntuver.deb")
sha256sums=('9b965a938d7b02a6b6afdbea43a430f200d1e60fc05f4bb7580d2f337e4be87f')

prepare() {
	# Don't extract copyright files, which are included in the licenses package
	tar -xvf data.tar.xz --exclude=usr/share/doc
}

package() {
	cp -r etc "$pkgdir/"
	cp -r usr "$pkgdir/"
}
