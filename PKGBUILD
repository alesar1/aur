# Maintainer: Thaodan <theodorstormgrade@gmail.com>
# Contributor: Weng Xuetian <wengxt@gmail.com>
# Maintainer (bin-version): Marc Mettke <marc@itmettke.de>

pkgname=firefox-kde-opensuse-bin
pkgver=72.0.1
_pkgrel=1
pkgrel=${_pkgrel}
pkgdesc="Standalone web browser from mozilla.org with OpenSUSE patch, integrate better with KDE"
arch=('x86_64')
license=('MPL' 'GPL' 'LGPL')
url="https://build.opensuse.org/package/show/mozilla:Factory/MozillaFirefox"
depends=('mozilla-common' 'libxt' 'startup-notification' 'mime-types'
         'dbus-glib' 'hicolor-icon-theme'
	 'libvpx' 'icu'  'libevent' 'nss>=3.28.3' 'nspr>=4.10.6' 'hunspell'
	 'sqlite' 'libnotify' 'kmozillahelper' 'ffmpeg' 'gtk3'
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
            'speech-dispatcher: Text-to-Speech')
provides=("firefox=${pkgver}")
conflicts=('firefox' 'firefox-kde-opensuse')
options=('!emptydirs' 'debug' 'strip')

source=(https://repo.itmettke.de/firefox-kde-opensuse-${pkgver}-${_pkgrel}-x86_64.pkg.tar.xz{,.sig})
noextract=(firefox-kde-opensuse-${pkgver}-${_pkgrel}-x86_64.pkg.tar.xz)
validpgpkeys=(
	81E604C18BFD3FA9986E32D91E74416BECD445A4
	A5A10C4B2F5A417A106DACB8449D5E71988FE637
)

sha256sums=(
	'a129aad8b5fca6c23b31e64cce37b74fa6b95c6e5c4bbaf672d22880e79e243a'
	'SKIP'
)

package() {
	tar -xf $srcdir/firefox-kde-opensuse-${pkgver}-${_pkgrel}-x86_64.pkg.tar.xz -C $pkgdir --exclude=".*"
}
