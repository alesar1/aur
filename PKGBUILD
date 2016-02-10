# Maintainer: argymeg <argymeg at gmail dot com>

pkgname=firefox-beta
pkgver=45.0b4
pkgrel=1
pkgdesc="Standalone web browser from mozilla.org - Beta (build from source)"
arch=('i686' 'x86_64')
license=('MPL' 'GPL' 'LGPL')
url="https://www.mozilla.org/firefox/"
depends=('gtk2' 'gtk3' 'mozilla-common' 'libxt' 'startup-notification' 'mime-types'
         'dbus-glib' 'alsa-lib' 'desktop-file-utils' 'hicolor-icon-theme'
         'libvpx' 'icu' 'libevent' 'nss' 'hunspell' 'sqlite' 'ttf-font')
makedepends=('unzip' 'zip' 'diffutils' 'python2' 'yasm' 'mesa' 'imake' 'gconf'
             'xorg-server-xvfb' 'libpulse' 'inetutils' 'rust')
optdepends=('networkmanager: Location detection via available WiFi networks'
            'ffmpeg: additional video and audio decoders'
            'upower: Battery API')
provides=("firefox=$pkgver")
conflicts=("firefox-beta-bin")            
install=firefox-beta.install
options=('!emptydirs' '!makeflags')
source=(https://ftp.mozilla.org/pub/mozilla.org/firefox/releases/$pkgver/source/firefox-$pkgver.source.tar.xz
        mozconfig
        firefox-beta.desktop
        firefox-install-dir.patch
        vendor.js
        firefox-fixed-loading-icon.png)
sha256sums=('0fd51881a3772a3dedd399729da6bf97c78a9ed756b6ab68286e1e5354ca4676'
            '85c9290580766426b8b07650fadd9bd19dcff2d23a5460d73809b2b262535886'
            'cf19552d5bbd14c2747aad9b92a2897b88701e9b42990cf28cf40c2d50a41909'
            'd86e41d87363656ee62e12543e2f5181aadcff448e406ef3218e91865ae775cd'
            '4b50e9aec03432e21b44d18c4c97b2630bace606b033f7d556c9d3e3eb0f4fa4'
            '68e3a5b47c6d175cc95b98b069a15205f027cab83af9e075818d38610feb6213')
validpgpkeys=('2B90598A745E992F315E22C58AB132963A06537A')

# Google API keys (see http://www.chromium.org/developers/how-tos/api-keys)
# Note: These are for Arch Linux use ONLY. For your own distribution, please
# get your own set of keys. Feel free to contact foutrelis@archlinux.org for
# more information.
_google_api_key=AIzaSyDwr302FpOSkGRpLlUpPThNTDPbXcIn_FM
_google_default_client_id=413772536636.apps.googleusercontent.com
_google_default_client_secret=0ZChLK6AxeA3Isu96MkwqDR4

# Mozilla API keys (see https://location.services.mozilla.com/api)
# Note: These are for Arch Linux use ONLY. For your own distribution, please
# get your own set of keys. Feel free to contact heftig@archlinux.org for
# more information.
_mozilla_api_key=16674381-f021-49de-8622-3021c5942aff


prepare() {
  cd firefox-$pkgver

  cp ../mozconfig .mozconfig
  patch -Np1 -i ../firefox-install-dir.patch
  
  echo -n "$_google_api_key" >google-api-key
  echo "ac_add_options --with-google-api-keyfile=\"$PWD/google-api-key\"" >>.mozconfig

  echo -n "$_google_default_client_id $_google_default_client_secret" >google-oauth-api-key
  echo "ac_add_options --with-google-oauth-api-keyfile=\"$PWD/google-oauth-api-key\"" >>.mozconfig

  echo -n "$_mozilla_api_key" >mozilla-api-key
  echo "ac_add_options --with-mozilla-api-keyfile=\"$PWD/mozilla-api-key\"" >>.mozconfig

  mkdir "$srcdir/path"

  # WebRTC build tries to execute "python" and expects Python 2
  ln -s /usr/bin/python2 "$srcdir/path/python"

  # configure script misdetects the preprocessor without an optimization level
  # https://bugs.archlinux.org/task/34644
  sed -i '/ac_cpp=/s/$CPPFLAGS/& -O2/' configure

  # Fix tab loading icon (doesn't work with libpng 1.6)
  # https://bugzilla.mozilla.org/show_bug.cgi?id=841734
  cp "$srcdir/firefox-fixed-loading-icon.png" \
    browser/themes/linux/tabbrowser/loading.png
}

build() {
  cd firefox-$pkgver

  export PATH="$srcdir/path:$PATH"
  export PYTHON="/usr/bin/python2"

  # Do PGO
  xvfb-run -a -s "-extension GLX -screen 0 1280x1024x24" \
    make -f client.mk build MOZ_PGO=1
}

package() {
  cd firefox-$pkgver
  make -f client.mk DESTDIR="$pkgdir" INSTALL_SDK= install
  mkdir "$pkgdir"/opt/firefox-beta
  mv "$pkgdir"/opt/firefox/* "$pkgdir"/opt/firefox-beta/
  rm -r "$pkgdir"/opt/firefox

  install -Dm644 ../vendor.js "$pkgdir/opt/firefox-beta/browser/defaults/preferences/vendor.js"

  for i in 16 22 24 32 48 256; do
      install -Dm644 browser/branding/official/default$i.png \
        "$pkgdir/usr/share/icons/hicolor/${i}x${i}/apps/firefox-beta.png"
  done
  install -Dm644 browser/branding/official/content/icon64.png \
    "$pkgdir/usr/share/icons/hicolor/64x64/apps/firefox-beta.png"
  install -Dm644 browser/branding/official/mozicon128.png \
    "$pkgdir/usr/share/icons/hicolor/128x128/apps/firefox-beta.png"
  install -Dm644 browser/branding/official/content/about-logo.png \
    "$pkgdir/usr/share/icons/hicolor/192x192/apps/firefox-beta.png"
  install -Dm644 browser/branding/official/content/about-logo@2x.png \
    "$pkgdir/usr/share/icons/hicolor/384x384/apps/firefox-beta.png"

  install -Dm644 ../firefox-beta.desktop \
    "$pkgdir/usr/share/applications/firefox-beta.desktop"

  # Use system-provided dictionaries
  rm -rf "$pkgdir"/opt/firefox-beta/{dictionaries,hyphenation}
  ln -s /usr/share/hunspell "$pkgdir/opt/firefox-beta/dictionaries"
  ln -s /usr/share/hyphen "$pkgdir/opt/firefox-beta/hyphenation"

  #workaround for now
  #https://bugzilla.mozilla.org/show_bug.cgi?id=658850
  ln -sf /opt/firefox-beta/firefox "$pkgdir/opt/firefox-beta/firefox-beta-bin"

  # /usr/bin symlinks
  rm -f "$pkgdir"/usr/bin/firefox
  ln -s /opt/firefox-beta/firefox "$pkgdir"/usr/bin/firefox-beta
  ln -s /opt/firefox-beta/firefox "$pkgdir"/usr/bin/firefox-beta-bin
}
