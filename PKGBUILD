# $Id: PKGBUILD 239402 2015-05-15 12:36:25Z foutrelis $
# Maintainer : Figue <ffigue@gmail.com>
# Contributor : Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Contributor : Ionut Biru <ibiru@archlinux.org>
# Contributor: Jakub Schmidtke <sjakub@gmail.com>

pkgname=firefox-esr
pkgver=45.5.1
pkgrel=1
pkgdesc="Standalone web browser from mozilla.org, Extended Support Release"
arch=('i686' 'x86_64')
license=('MPL' 'GPL' 'LGPL')
url="https://www.mozilla.org/en-US/firefox/organizations/"
depends=('gtk3' 'gtk2' 'mozilla-common' 'libxt' 'startup-notification' 'mime-types'
         'dbus-glib' 'alsa-lib' 'ffmpeg' 'libvpx' 'libevent' 'nss' 'hunspell'
         'sqlite' 'ttf-font' 'icu')
makedepends=('unzip' 'zip' 'diffutils' 'python2' 'yasm' 'mesa' 'imake' 'gconf'
             'libpulse' 'inetutils' 'xorg-server-xvfb' 'autoconf2.13')
optdepends=('networkmanager: Location detection via available WiFi networks'
            'upower: Battery API')
provides=(firefox)
conflicts=(firefox)
options=('!emptydirs' '!makeflags')
source=(https://ftp.mozilla.org/pub/firefox/releases/${pkgver}esr/source/firefox-${pkgver}esr.source.tar.xz
        mozconfig firefox.desktop firefox-install-dir.patch vendor.js
        mozilla-1245076-1.patch
        no-libnotify.patch
        harfbuzz-1.1.3-fixed.patch.gz)
sha256sums=('2796c22ab04fdd8529192118ce6cd9dee7ae88de0ed9317b4192da6eefac9db8'
            '21ef71942681206c650862215543f35fd0ceaed362d93d6f9c30f7a24fb204b4'
            'c202e5e18da1eeddd2e1d81cb3436813f11e44585ca7357c4c5f1bddd4bec826'
            'd86e41d87363656ee62e12543e2f5181aadcff448e406ef3218e91865ae775cd'
            '4b50e9aec03432e21b44d18c4c97b2630bace606b033f7d556c9d3e3eb0f4fa4'
            '6e7cba25c52b246da183b8309e7b56208bd991d1a7adb40063c5702a6f3722ea'
            'e4ebdd14096d177d264a7993dbd5df46463605ff45f783732c26d30b9caa53a7'
            '899c19ee98b0eab3d98383d70220ab26c912eeec8b04c8dd37f05d0ab389e574')
validpgpkeys=('2B90598A745E992F315E22C58AB132963A06537A')

# Google API keys (see http://www.chromium.org/developers/how-tos/api-keys)
# Note: These are for Arch Linux use ONLY. For your own distribution, please
# get your own set of keys. Feel free to contact foutrelis@archlinux.org for
# more information.
_google_api_key=AIzaSyDwr302FpOSkGRpLlUpPThNTDPbXcIn_FM

prepare() {
  cd firefox-${pkgver}esr

  cp ../mozconfig .mozconfig
  patch -Np1 -i ../firefox-install-dir.patch

  # GCC 6
  patch -Np1 -i ../mozilla-1245076-1.patch

  # Notifications with libnotify are broken
  # https://bugzilla.mozilla.org/show_bug.cgi?id=1236150
  patch -Np1 -i ../no-libnotify.patch

  # Harfbuzz patch to v1.1.3
  patch -Np1 -i ../harfbuzz-1.1.3-fixed.patch

  echo -n "$_google_api_key" >google-api-key
  echo "ac_add_options --with-google-api-keyfile=\"$PWD/google-api-key\"" >>.mozconfig

  mkdir "$srcdir/path"
  ln -s /usr/bin/python2 "$srcdir/path/python"

}

build() {
  cd firefox-${pkgver}esr

  export PATH="$srcdir/path:$PATH"

  # _FORTIFY_SOURCE causes configure failures
  CPPFLAGS+=" -O2"

  # Hardening
  LDFLAGS+=" -Wl,-z,now"

  # GCC 6
  CFLAGS+=" -fno-delete-null-pointer-checks -fno-lifetime-dse -fno-schedule-insns2"
  CXXFLAGS+=" -fno-delete-null-pointer-checks -fno-lifetime-dse -fno-schedule-insns2"

  # Do PGO
#  xvfb-run -a -s "-extension GLX -screen 0 1280x1024x24" \
#    make -f client.mk build MOZ_PGO=1
  make -f client.mk build
}

package() {
  cd firefox-${pkgver}esr
  make -f client.mk DESTDIR="$pkgdir" INSTALL_SDK= install

  install -Dm644 ../vendor.js "$pkgdir/usr/lib/firefox-esr/browser/defaults/preferences/vendor.js"

  for i in 16 22 24 32 48 256; do
      install -Dm644 browser/branding/official/default$i.png \
        "$pkgdir/usr/share/icons/hicolor/${i}x${i}/apps/firefox.png"
  done
  install -Dm644 browser/branding/official/content/icon64.png \
    "$pkgdir/usr/share/icons/hicolor/64x64/apps/firefox.png"
  install -Dm644 browser/branding/official/mozicon128.png \
    "$pkgdir/usr/share/icons/hicolor/128x128/apps/firefox.png"
  install -Dm644 browser/branding/official/content/about-logo.png \
    "$pkgdir/usr/share/icons/hicolor/192x192/apps/firefox.png"
  install -Dm644 browser/branding/official/content/about-logo@2x.png \
    "$pkgdir/usr/share/icons/hicolor/384x384/apps/firefox.png"

  install -Dm644 ../firefox.desktop \
    "$pkgdir/usr/share/applications/firefox.desktop"

  # Use system-provided dictionaries
  rm -rf "$pkgdir"/usr/lib/firefox/{dictionaries,hyphenation}
  ln -s /usr/share/hunspell "$pkgdir/usr/lib/firefox/dictionaries"
  ln -s /usr/share/hyphen "$pkgdir/usr/lib/firefox/hyphenation"

  # Replace duplicate binary with symlink
  # https://bugzilla.mozilla.org/show_bug.cgi?id=658850
  ln -sf firefox "$pkgdir/usr/lib/firefox/firefox-bin"
}
