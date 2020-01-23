### Original firefox from extra ###
# Maintainer: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Jakub Schmidtke <sjakub@gmail.com>

### Appmenu patching ###
# PKGBUILD: Nikita Tarasov <nikatar@disroot.org>
# Building: Arne Fahrenwalde <macgeneral@macgeneral.de>

pkgname=firefox-appmenu-bin
_pkgname=firefox
pkgver=72.0.2
_pkgrel=1
pkgrel=${_pkgrel}
pkgdesc="Firefox-appmenu, binary version"
arch=(x86_64)
license=(MPL GPL LGPL)
url="https://aur.archlinux.org/packages/firefox-appmenu/"
depends=(gtk3 mozilla-common libxt startup-notification mime-types dbus-glib
         ffmpeg nss ttf-font libpulse)
makedepends=(unzip zip diffutils python2-setuptools yasm mesa imake inetutils
             xorg-server-xvfb autoconf2.13 rust clang llvm jack gtk2
             python nodejs python2-psutil cbindgen nasm)
optdepends=('networkmanager: Location detection via available WiFi networks'
            'libnotify: Notification integration'
            'pulseaudio: Audio support'
            'speech-dispatcher: Text-to-Speech'
            'hunspell-en_US: Spell checking, American English')
provides=("firefox=$pkgver")
conflict=("firefox")
options=(!emptydirs !makeflags !strip)
source=(https://github.com/nikatar/AUR/raw/master/firefox-appmenu-bin/firefox-appmenu-${pkgver}-${_pkgrel}-x86_64.pkg.tar.xz{,.sig})
noextract=(firefox-appmenu-${pkgver}-${_pkgrel}-x86_64.pkg.tar.xz)
validpgpkeys=(85F86E317555BECC1C2184BF2C45BA09ABC5D7DA)
sha256sums=(
	'61b46db512efd6a15d533eb1c8b85fda29c92b864b4e7ea48f0042456e933c36'
	'SKIP'
)

package() {
	tar -xf $srcdir/firefox-appmenu-${pkgver}-${_pkgrel}-x86_64.pkg.tar.xz -C $pkgdir --exclude=".*"
}
