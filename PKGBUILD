# Maintainer: Yurii Kolesnykov <root@yurikoles.com>
# Based on [extra]'s thunderbird by Maintainer: Levente Polyak <anthraxx[at]archlinux[dot]org>

pkgname=thunderbird-beta
_pkgname=thunderbird
_pkgver=94.0
_beta=4
pkgver="${_pkgver}b${_beta}"
pkgrel=1
pkgdesc='Standalone mail and news reader from mozilla.org — Beta version'
url='https://www.mozilla.org/thunderbird/'
arch=(x86_64)
license=(MPL GPL LGPL)
depends=(
  glibc gtk3 libgdk-3.so libgtk-3.so mime-types dbus libdbus-1.so dbus-glib
  alsa-lib nss hunspell sqlite ttf-font libvpx libvpx.so zlib bzip2 libbz2.so
  botan libwebp libwebp.so libwebpdemux.so libevent libjpeg-turbo libffi
  libffi.so nspr gcc-libs libx11 libxrender libxfixes libxext libxcomposite
  libxdamage pango libpango-1.0.so cairo gdk-pixbuf2 icu libicui18n.so
  libicuuc.so freetype2 libfreetype.so fontconfig libfontconfig.so glib2
  libglib-2.0.so pixman libpixman-1.so gnupg
)
makedepends=(
  unzip zip diffutils python python-setuptools yasm nasm mesa imake libpulse
  xorg-server-xvfb autoconf2.13 rust clang llvm cbindgen nodejs
  gawk perl findutils libotr
)
optdepends=(
  'libcanberra: sound support'
  'libotr: OTR support for active one-to-one chats'
)
options=(!emptydirs !makeflags)
provides=("thunderbird=$pkgver")
conflicts=('thunderbird' 'thunderbird-beta-bin')
source=(https://ftp.mozilla.org/pub/mozilla.org/thunderbird/releases/$pkgver/source/thunderbird-$pkgver.source.tar.xz{,.asc}
        thunderbird-beta.desktop
        vendor-prefs.js
        distribution.ini
        mozconfig.cfg)
validpgpkeys=(14F26682D0916CDD81E37B6D61B7B526D98F0353) # Mozilla Software Releases <release@mozilla.com>

# Google API keys (see http://www.chromium.org/developers/how-tos/api-keys)
# Note: These are for Arch Linux use ONLY. For your own distribution, please
# get your own set of keys. Feel free to contact foutrelis@archlinux.org for
# more information.
_google_api_key=AIzaSyDwr302FpOSkGRpLlUpPThNTDPbXcIn_FM

# Mozilla API keys (see https://location.services.mozilla.com/api)
# Note: These are for Arch Linux use ONLY. For your own distribution, please
# get your own set of keys. Feel free to contact heftig@archlinux.org for
# more information.
_mozilla_api_key=16674381-f021-49de-8622-3021c5942aff

prepare() {
  cd $_pkgname-$_pkgver

  echo "${noextract[@]}"

  printf "%s" "$_google_api_key" >google-api-key
  printf "%s" "$_mozilla_api_key" >mozilla-api-key
  cp ../mozconfig.cfg .mozconfig
  sed "s|@PWD@|${PWD@Q}|g" -i .mozconfig
}

build() {
  cd $_pkgname-$_pkgver
  if [[ -n "${SOURCE_DATE_EPOCH}" ]]; then
    export MOZ_BUILD_DATE=$(date --date "@${SOURCE_DATE_EPOCH}" "+%Y%m%d%H%M%S")
  fi
  export MACH_USE_SYSTEM_PYTHON=1
  export MOZBUILD_STATE_PATH="${srcdir}/.mozbuild"
  ./mach configure
  ./mach build
  ./mach buildsymbols
}

package() {
  cd $_pkgname-$_pkgver
  DESTDIR="$pkgdir" ./mach install

  install -Dm 644 ../vendor-prefs.js -t "$pkgdir/usr/lib/${_pkgname}/defaults/pref"
  install -Dm 644 ../distribution.ini -t "$pkgdir/usr/lib/${_pkgname}/distribution"
  install -Dm 644 ../thunderbird-beta.desktop -t "$pkgdir/usr/share/applications"

  install -Dm 644 comm/mail/branding/thunderbird/net.thunderbird.Thunderbird.appdata.xml \
    "$pkgdir/usr/share/metainfo/net.thunderbird.Thunderbird.appdata.xml"

  for i in 16 22 24 32 48 64 128 256; do
    install -Dm644 comm/mail/branding/thunderbird/default${i}.png \
      "$pkgdir/usr/share/icons/hicolor/${i}x${i}/apps/${_pkgname}.png"
  done
  install -Dm644 comm/mail/branding/thunderbird/TB-symbolic.svg \
    "$pkgdir/usr/share/icons/hicolor/symbolic/apps/thunderbird-symbolic.svg"

  # Use system-provided dictionaries
  ln -Ts /usr/share/hunspell "$pkgdir/usr/lib/${_pkgname}/dictionaries"
  ln -Ts /usr/share/hyphen "$pkgdir/usr/lib/${_pkgname}/hyphenation"

  # Install a wrapper to avoid confusion about binary path
  install -Dm755 /dev/stdin "$pkgdir/usr/bin/${_pkgname}" <<END
#!/bin/sh
exec /usr/lib/${_pkgname}/thunderbird "\$@"
END

  # Replace duplicate binary with wrapper
  # https://bugzilla.mozilla.org/show_bug.cgi?id=658850
  ln -srf "$pkgdir/usr/bin/${_pkgname}" \
    "$pkgdir/usr/lib/${_pkgname}/thunderbird-bin"
}

sha256sums=('8761f7adaaab01445ed557f649a75b9c06d984b16ea7a7d5923d9dec92f9cc3d'
            'SKIP'
            '71251951e99d33c1bc56d8e1729270cb1c0bd026a86cd840b8ac9ac54a68d846'
            'fa11b4736bbf53ec015f71cd42b1040b22d1a855c562b76927b3f0eccb925c85'
            'bc3aae2cc00dc9806f54606f98d967366a2ba7223f6a3ad1c658a653ebff5569'
            '86874c98733a532e4956482ec3f9dfa5bdff2d06771e09e73be1ade712c07bd0')
