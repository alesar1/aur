# Maintainer: vnepogodin
# Contributor: Kyle De'Vir (QuartzDragon) <kyle[dot]devir[at]mykolab[dot]com>
# Contributor: Jonas Heinrich <onny@project-insanity.org>
# Contributor: Maxwell Anselm <silverhammermba+aur@gmail.com>
# Contributor: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Jakub Schmidtke <sjakub@gmail.com>

pkgname=librewolf-wayland-hg
_pkgname=Librewolf
pkgver=r591370+.fdd919d10609+
pkgrel=1
pkgdesc="Community-maintained fork of Firefox, focused on privacy, security and freedom."
arch=(x86_64)
license=(MPL GPL LGPL)
url="https://librewolf-community.gitlab.io/"
depends=(gtk3 libxt mime-types dbus-glib ffmpeg nss ttf-font libpulse)
makedepends=(unzip zip diffutils yasm mesa imake inetutils xorg-server-xwayland
             rust
             autoconf2.13 mercurial clang llvm jack gtk2 nodejs cbindgen nasm
             python-setuptools python-psutil python-zstandard git binutils lld)
optdepends=('networkmanager: Location detection via available WiFi networks'
            'libnotify: Notification integration'
            'pulseaudio: Audio support'
            'speech-dispatcher: Text-to-Speech'
            'hunspell-en_US: Spell checking, American English')
options=(!emptydirs !makeflags !strip)
_settings_commit=25115b211d60876c43f5098ce3e88bcee2a7e521
_repo=https://hg.mozilla.org/mozilla-unified
conflicts=('librewolf')
provides=('librewolf')
source=("hg+$_repo#revision=release"
        librewolf.desktop
        "git+https://gitlab.com/librewolf-community/browser/common.git"
        "git+https://gitlab.com/librewolf-community/settings.git"
        "megabar.patch"
        "remove_addons.patch"
        "unity-menubar.patch")
sha256sums=('SKIP'
            'a9e5264257041c0b968425b5c97436ba48e8d294e1a0f02c59c35461ea245c33'
            '9a1a572dc88014882d54ba2d3079a1cf5b28fa03c5976ed2cb763c93dabbd797')

pkgver() {
  cd mozilla-unified
  printf "r%s.%s" "$(hg identify -n)" "$(hg identify -i)"
}

prepare() {
  mkdir mozbuild
  cd mozilla-unified

  #
  # If you want to disable LTO/PGO (compile too long), delete the lines below beginning with
  # `ac_add_options --enable-lto' and ending with 'export RANLIB=llvm-ranlib`
  #

  cat >.mozconfig <<END
ac_add_options --enable-application=browser

#This supposedly speeds up compilation (We test through dogfooding anyway)
ac_add_options --disable-tests
ac_add_options --disable-debug

ac_add_options --prefix=/usr
ac_add_options --enable-release
ac_add_options --enable-hardening
ac_add_options --enable-optimize
ac_add_options --enable-rust-simd
ac_add_options --disable-elf-hack
ac_add_options --enable-lto=cross
ac_add_options --enable-profile-use=cross
ac_add_options --enable-linker=lld
export MOZ_PGO=1
export CC=clang
export CXX=clang++
export AR=llvm-ar
export NM=llvm-nm
export RANLIB=llvm-ranlib

# Branding
ac_add_options --enable-update-channel=release
ac_add_options --with-app-name=librewolf
ac_add_options --with-app-basename=${_pkgname}
ac_add_options --with-branding=browser/branding/librewolf
ac_add_options --with-distribution-id=io.gitlab.librewolf
ac_add_options --with-unsigned-addon-scopes=app,system
ac_add_options --allow-addon-sideload
export MOZ_REQUIRE_SIGNING=0

# Features
ac_add_options --enable-pulseaudio
ac_add_options --enable-alsa
ac_add_options --enable-jack
ac_add_options --disable-crashreporter
ac_add_options --disable-updater
ac_add_options --enable-default-toolkit=cairo-gtk3-wayland

# Disables crash reporting, telemetry and other data gathering tools
mk_add_options MOZ_CRASHREPORTER=0
mk_add_options MOZ_DATA_REPORTING=0
mk_add_options MOZ_SERVICES_HEALTHREPORT=0
mk_add_options MOZ_TELEMETRY_REPORTING=0

# options for ci / weaker build systems
# mk_add_options MOZ_MAKE_FLAGS="-j4"
# ac_add_options --enable-linker=gold
END

  # Remove some pre-installed addons that might be questionable
  patch -p1 -i ../remove_addons.patch

  # Disable (some) megabar functionality
  # Adapted from https://github.com/WesleyBranton/userChrome.css-Customizations
  patch -p1 -i ../megabar.patch

  # Debian patch to enable global menubar
  patch -p1 -i ../unity-menubar.patch

  # Disabling Pocket
  sed -i "s/'pocket'/#'pocket'/g" browser/components/moz.build
  # this one only to remove an annoying error message:
  sed -i 's#SaveToPocket.init();#// SaveToPocket.init();#g' browser/components/BrowserGlue.jsm

  # Remove Internal Plugin Certificates
  _cert_sed='s#if (aCert.organizationalUnit == "Mozilla [[:alpha:]]\+") {\n'
  _cert_sed+='[[:blank:]]\+return AddonManager\.SIGNEDSTATE_[[:upper:]]\+;\n'
  _cert_sed+='[[:blank:]]\+}#'
  _cert_sed+='// NOTE: removed#g'
  sed -z "$_cert_sed" -i toolkit/mozapps/extensions/internal/XPIInstall.jsm

  # allow SearchEngines option in non-ESR builds
  sed -i 's#"enterprise_only": true,#"enterprise_only": false,#g' browser/components/enterprisepolicies/schemas/policies-schema.json

  _settings_services_sed='s#firefox.settings.services.mozilla.com#f.s.s.m.c.qjz9zk#g'

  # stop some undesired requests (https://gitlab.com/librewolf-community/browser/common/-/issues/10)
  sed "$_settings_services_sed" -i browser/components/newtab/data/content/activity-stream.bundle.js
  sed "$_settings_services_sed" -i modules/libpref/init/all.js
  sed "$_settings_services_sed" -i services/settings/Utils.jsm
  sed "$_settings_services_sed" -i toolkit/components/search/SearchUtils.jsm

  rm -f ${srcdir}/common/source_files/mozconfig
  cp -r ${srcdir}/common/source_files/* ./
}

build() {
  cd mozilla-unified

  export MOZ_SOURCE_REPO="$_repo"
  export MOZ_NOSPAM=1
  export MOZBUILD_STATE_PATH="$srcdir/mozbuild"
  export MACH_USE_SYSTEM_PYTHON=1

  # LTO/PGO needs more open files
  ulimit -n 4096

  ./mach build
}

package() {
  cd mozilla-unified
  DESTDIR="$pkgdir" ./mach install

  _vendorjs="$pkgdir/usr/lib/librewolf/browser/defaults/preferences/vendor.js"
  install -Dm644 /dev/stdin "$_vendorjs" <<END
// Use LANG environment variable to choose locale
pref("intl.locale.requested", "");

// Use system-provided dictionaries
pref("spellchecker.dictionary_path", "/usr/share/hunspell");

// Don't disable extensions in the application directory
// done in librewolf.cfg
// pref("extensions.autoDisableScopes", 11);
END

  cd ${srcdir}/settings
  git checkout ${_settings_commit}
  cd ${srcdir}/mozilla-unified
  cp -r ${srcdir}/settings/* ${pkgdir}/usr/lib/${pkgname}/

  _distini="$pkgdir/usr/lib/$_pkgname/distribution/distribution.ini"
  install -Dm644 /dev/stdin "$_distini" <<END
[Global]
id=io.gitlab.${_pkgname}
version=1.0
about=LibreWolf

[Preferences]
app.distributor="LibreWolf Community"
app.distributor.channel=$pkgname
app.partner.librewolf=$pkgname
END

  for i in 16 32 48 64 128; do
    install -Dm644 browser/branding/librewolf/default$i.png \
      "$pkgdir/usr/share/icons/hicolor/${i}x${i}/apps/librewolf.png"
  done
  install -Dm644 browser/branding/official/content/about-logo.png \
    "$pkgdir/usr/share/icons/hicolor/192x192/apps/librewolf.png"

  # arch upstream provides a separate svg for this. we don't have that, so let's re-use 16.png
  install -Dm644 browser/branding/${pkgname}/default16.png \
    "$pkgdir/usr/share/icons/hicolor/symbolic/apps/librewolf-symbolic.png"

  install -Dm644 ../librewolf.desktop \
    "$pkgdir/usr/share/applications/librewolf.desktop"

  # Install a wrapper to avoid confusion about binary path
  install -Dm755 /dev/stdin "$pkgdir/usr/bin/librewolf" <<END
#!/bin/sh
exec /usr/lib/librewolf/librewolf "\$@"
END

  # Replace duplicate binary with wrapper
  # https://bugzilla.mozilla.org/show_bug.cgi?id=658850
  ln -srf "$pkgdir/usr/bin/librewolf" \
    "$pkgdir/usr/lib/librewolf/librewolf-bin"

  # Use system certificates
  local nssckbi="$pkgdir/usr/lib/librewolf/libnssckbi.so"
  if [[ -e $nssckbi ]]; then
    ln -srf "$pkgdir/usr/lib/libnssckbi.so" "$nssckbi"
  fi
}
