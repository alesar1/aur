# Maintainer: Thaodan <theodorstormgrade@gmail.com>
# Contributor: Weng Xuetian <wengxt@gmail.com>
# Contributor: Marc Mettke <marc@itmettke.de>

pkgname=firefox-kde-opensuse-bin
pkgver=83.0
_pkgrel=2
pkgrel=2
pkgdesc="Standalone web browser from mozilla.org with OpenSUSE patch, integrate better with KDE"
arch=('x86_64')
license=('MPL' 'GPL' 'LGPL')
url="https://build.opensuse.org/package/show/mozilla:Factory/MozillaFirefox"
depends=('mozilla-common' 'libxt' 'mime-types'
         'dbus-glib' 'hicolor-icon-theme'
         'libvpx' 'icu'  'libevent' 'nss>=3.28.3' 'nspr>=4.10.6' 'hunspell'
         'sqlite' 'libnotify' 'kmozillahelper' 'ffmpeg' 'gtk3'
         # system av1
         'dav1d' 'aom'
         # system harfbuzz
         'harfbuzz'
         # system graphite
         'graphite-mozilla'
         # system webp
         'libwebp'
         # system libevent
         'libevent'
        )
optdepends=('networkmanager: Location detection via available WiFi networks'
            'speech-dispatcher: Text-to-Speech')
provides=("firefox=${pkgver}")
conflicts=('firefox' 'firefox-kde-opensuse')
options=('!emptydirs' 'debug' 'strip')

source=(https://thaodan.de/public/archlinux/home-thaodan/x86_64/firefox-kde-opensuse-${pkgver}-${_pkgrel}-x86_64.pkg.tar.xz{,.sig})
noextract=(firefox-kde-opensuse-${pkgver}-${_pkgrel}-x86_64.pkg.tar.xz)
validpgpkeys=(
        BBFE2FD421597395E4FC8C8DF6C85FEE79D661A4 # Björn "Thaodan" Bidar <theodorstormgrade@gmail.com>
)

sha256sums=('3390abcd92325f55ba1d2fa034c45bca70b94f0d0060958a26705cca8289c8e8'
            'SKIP')

package() {
	tar -xf $srcdir/firefox-kde-opensuse-${pkgver}-${_pkgrel}-x86_64.pkg.tar.xz -C $pkgdir --exclude=".*"
}

