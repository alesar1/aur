# $Id$
# Maintainer: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Jakub Schmidtke <sjakub@gmail.com>

pkgname=firefox-beta
name=firefox-beta
pkgver=60.15
pkgrel=1
meme=FIREFOX_60_0b15_RELEASE
meme2=DEVEDITION_61_0b1_RELEASE
pkgdesc="Standalone web browser from mozilla.org, with telemetry and signing disabled"
arch=(i686 x86_64)
license=(MPL GPL LGPL)
url="https://www.mozilla.org/firefox/"
depends=(gtk3 gtk2 mozilla-common libxt startup-notification mime-types dbus-glib ffmpeg
         nss hunspell sqlite ttf-font libpulse)
makedepends=(unzip zip diffutils python2 yasm mesa imake gconf inetutils xorg-server-xvfb
             autoconf2.13 rust mercurial clang llvm jack)
optdepends=('networkmanager: Location detection via available WiFi networks'
            'libnotify: Notification integration'
            'pulseaudio: Audio support'
            'speech-dispatcher: Text-to-Speech')
options=(!emptydirs !makeflags !strip)
source=("https://hg.mozilla.org/mozilla-unified/archive/$meme.tar.gz"
        https://raw.githubusercontent.com/bn0785ac/firefox-beta/master/$name.desktop 
https://raw.githubusercontent.com/bn0785ac/firefox-beta/master/firefox-symbolic.svg 
https://raw.githubusercontent.com/bn0785ac/firefox-beta/master/firefox-52-disable-data-sharing-infobar.patch
https://raw.githubusercontent.com/bn0785ac/firefox-beta/master/firefox-52-disable-location.services.mozilla.com.patch
https://raw.githubusercontent.com/bn0785ac/firefox-beta/master/firefox-52-disable-telemetry.patch
https://raw.githubusercontent.com/bn0785ac/firefox-beta/master/id.patch
https://raw.githubusercontent.com/bn0785ac/firefox-beta/master/fix.patch
https://raw.githubusercontent.com/bn0785ac/firefox-beta/master/fix2.patch
)

sha256sums=('8a9965b323f1944f9fd2ecdbc0a5ce09390bfc843efe8fdcb3f7dd024b8dbd05'
            'd6b4c91a7fe77f9a335b44b943e120ce44511e46bbb16ae305cc82b4c3db66cd'
            'a2474b32b9b2d7e0fb53a4c89715507ad1c194bef77713d798fa39d507def9e9'
            'bdad68eafe110b9f94a0e025635e32a6ab53e2f9adcd594c8dd2e3225f6453ab'
            '8d9afa1f940a9dac689ead40a57990d1491f34a1787b2222f8f5b5e485d54103'
            '24019d3d7e6b169087d4515db9d3a179239d1e4fe726f0906f6f26877c726040'
            '7e44bd2eb4ce243ef47451e64e793203c8d637f900c86889106eb7f8adf79296'
            '7e44dc0dc836a31c6f8e3e3461aeb636de210fb5a238e58a0eb10787ca4ad958'
            '32d04bf9c5c76ec3803aa7e1f82ca11dc5ea3d32b86d054168f4cc1e1ef9960c')


# Google API keys (see http://www.chromium.org/developers/how-tos/api-keys)
# Note: These are for Arch Linux use ONLY. For your own distribution, please
# get your own set of keys. Feel free to contact foutrelis@archlinux.org for
# more information.


# Mozilla API keys (see https://location.services.mozilla.com/api)
# Note: These are for Arch Linux use ONLY. For your own distribution, please
# get your own set of keys. Feel free to contact heftig@archlinux.org for
# more information.


prepare() {
  mkdir path
  ln -s /usr/bin/python2 path/python

  cd mozilla-unified-$meme
  patch -Np1 -i ../id.patch



patch -Np1 -i ../firefox-52-disable-data-sharing-infobar.patch
patch -Np1 -i ../firefox-52-disable-location.services.mozilla.com.patch
patch -Np1 -i ../firefox-52-disable-telemetry.patch
patch -Np1 -i ../fix.patch
patch -Np1 -i ../fix2.patch


  cat >.mozconfig <<END
ac_add_options --enable-application=browser

ac_add_options --prefix=/usr
ac_add_options --enable-release
ac_add_options --enable-gold
ac_add_options --enable-pie
ac_add_options --enable-optimize="-O2"


# Branding
ac_add_options --with-branding=browser/branding/aurora
ac_add_options --enable-update-channel=aurora
ac_add_options --with-distribution-id=org.archlinux
export MOZILLA_OFFICIAL=1
export MOZ_TELEMETRY_REPORTING=0
export MOZ_ADDON_SIGNING=1
export MOZ_REQUIRE_SIGNING=0

# Keys
# System libraries
ac_add_options --with-system-zlib
ac_add_options --with-system-bz2
ac_add_options --enable-system-hunspell
ac_add_options --enable-system-sqlite
ac_add_options --enable-system-ffi
ac_add_options --disable-gamepad
ac_add_options --disable-necko-wifi 
ac_add_options --disable-webspeech


# Features
ac_add_options --enable-alsa
ac_add_options --enable-jack
ac_add_options --enable-startup-notification
ac_add_options --enable-crashreporter
ac_add_options --disable-updater

ac_add_options --disable-debug
ac_add_options --disable-debug-symbols
ac_add_options --disable-tests
ac_add_options --disable-parental-controls
ac_add_options --disable-accessibility


# faster build 
ac_add_options --disable-tests

ac_add_options --enable-rust-simd
# please put 1.25 times your number of threads

mk_add_options MOZ_MAKE_FLAGS="-j10"

END
}

build() {
  cd mozilla-unified-$meme

  # _FORTIFY_SOURCE causes configure failures
  CPPFLAGS+=" -O2"

  export PATH="$srcdir/path:$PATH"
  export MOZ_SOURCE_REPO="$_repo"

  # Do PGO
  #xvfb-run -a -n 95 -s "-extension GLX -screen 0 1280x1024x24" \
  #  MOZ_PGO=1 ./mach build
  ./mach build
  ./mach buildsymbols
}

package() {
  cd mozilla-unified-$meme
  DESTDIR="$pkgdir" ./mach install
  find . -name '*crashreporter-symbols-full.zip' -exec cp -fvt "$startdir" {} +

  _vendorjs="$pkgdir/usr/lib/$name/browser/defaults/preferences/vendor.js"
  install -Dm644 /dev/stdin "$_vendorjs" <<END
// Use LANG environment variable to choose locale
pref("intl.locale.matchOS", true);

// Disable default browser checking.
pref("browser.shell.checkDefaultBrowser", false);

// Don't disable our bundled extensions in the application directory
pref("extensions.autoDisableScopes", 11);
pref("extensions.shownSelectionUI", true);

// Opt all of us into e10s, instead of just 50%
pref("browser.tabs.remote.autostart", true);
END

  _distini="$pkgdir/usr/lib/$name/distribution/distribution.ini"
  install -Dm644 /dev/stdin "$_distini" <<END
[Global]
id=archlinux
version=1.0
about=Mozilla Firefox for Arch Linux

[Preferences]
app.distributor=archlinux
app.distributor.channel=$name
app.partner.archlinux=archlinux
END

  for i in 16 32 48 64 128; do
    install -Dm644 browser/branding/aurora/default$i.png \
      "$pkgdir/usr/share/icons/hicolor/${i}x${i}/apps/$pkgname.png"
  done
  install -Dm644 browser/branding/aurora/content/about-logo.png \
    "$pkgdir/usr/share/icons/hicolor/192x192/apps/$pkgname.png"
  install -Dm644 browser/branding/aurora/content/about-logo@2x.png \
    "$pkgdir/usr/share/icons/hicolor/384x384/apps/$pkgname.png"
  install -Dm644 ../firefox-symbolic.svg \
    "$pkgdir/usr/share/icons/hicolor/symbolic/apps/$pkgname-symbolic.svg"

  install -Dm644 ../$pkgname.desktop \
    "$pkgdir/usr/share/applications/$pkgname.desktop"

  # Use system-provided dictionaries


  # Install a wrapper to avoid confusion about binary path

  # Replace duplicate binary with wrapper
  # https://bugzilla.mozilla.org/show_bug.cgi?id=658850


  # Use system certificates
  ln -srf "$pkgdir/usr/lib/libnssckbi.so" \
    "$pkgdir/usr/lib/$name/libnssckbi.so"



msg2 'renaming'

  ln -s "/usr/lib/firefox-beta/firefox-bin"  "$pkgdir/usr/bin/firefox-beta"


rm "$pkgdir/usr/bin/firefox"
}
