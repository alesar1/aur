# Maintainer: dr460nf1r3 <dr460nf1r3@garudalinux.org>
# Contributor: lsf
# Contributor: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Jakub Schmidtke <sjakub@gmail.com>

pkgname=firedragon-stable
_pkgname=FireDragon
__pkgname=firedragon
pkgver=88.0b3
pkgrel=1
pkgdesc="Librewolf fork build using custom branding & new features using stable as source."
arch=(x86_64 aarch64)
license=(MPL GPL LGPL)
url="https://gitlab.com/dr460nf1r3/settings/"
depends=(gtk3 libxt mime-types dbus-glib
         ffmpeg nss-hg ttf-font libpulse whoogle-git
         libvpx libjpeg zlib icu libevent libpipewire02)
makedepends=(unzip zip diffutils yasm mesa imake inetutils
             rust mozilla-common xorg-server-xwayland xorg-server-xvfb
             autoconf2.13 mercurial clang llvm jack gtk2 nodejs cbindgen nasm
             python-setuptools python-psutil python-zstandard git binutils lld)
optdepends=('networkmanager: Location detection via available WiFi networks'
            'libnotify: Notification integration'
            'pulseaudio: Audio support'
            'speech-dispatcher: Text-to-Speech'
            'hunspell-en_US: Spell checking, American English'
            'libappindicator-gtk3: Global menu support for GTK apps'
            'appmenu-gtk-module-git: Appmenu for GTK only'
            'plasma5-applets-window-appmenu: Appmenu for Plasma only')
options=(!emptydirs !makeflags !strip)
replaces=('dragonwolf')
provides=('firedragon')
conflicts=('firedragon')
install=$__pkgname.install
_arch_svn=https://git.archlinux.org/svntogit/packages.git/plain/trunk
_linux_commit=7a39d563510701275472b1656b92eed590a040d5
_settings_commit=241e6f4d73e6f2de37537cf4473612ae9f8ad81e
source_x86_64=(https://archive.mozilla.org/pub/devedition/releases/$pkgver/source/firefox-$pkgver.source.tar.xz
               $__pkgname.desktop
               "git+https://gitlab.com/dr460nf1r3/common.git"
               "git+https://gitlab.com/dr460nf1r3/settings.git"
               "megabar.patch::https://gitlab.com/librewolf-community/browser/linux/-/raw/${_linux_commit}/megabar.patch"
               "remove_addons.patch::https://gitlab.com/librewolf-community/browser/linux/-/raw/${_linux_commit}/remove_addons.patch"
               "context-menu.patch::https://gitlab.com/librewolf-community/browser/linux/-/raw/${_linux_commit}/context-menu.patch"
               "unity-menubar.patch::https://gitlab.com/librewolf-community/browser/linux/-/raw/${_linux_commit}/unity-menubar.patch"
               "mozilla-vpn-ad.patch::https://gitlab.com/librewolf-community/browser/linux/-/raw/${_linux_commit}/mozilla-vpn-ad.patch")
source_aarch64=(https://archive.mozilla.org/pub/devedition/releases/$pkgver/source/firefox-$pkgver.source.tar.xz
                $__pkgname.desktop
                "git+https://gitlab.com/dr460nf1r3/common.git"
                "git+https://gitlab.com/dr460nf1r3/settings.git"
                "megabar.patch::https://gitlab.com/librewolf-community/browser/linux/-/raw/${_linux_commit}/megabar.patch"
                "remove_addons.patch::https://gitlab.com/librewolf-community/browser/linux/-/raw/${_linux_commit}/remove_addons.patch"
                "unity-menubar.patch::https://gitlab.com/librewolf-community/browser/linux/-/raw/${_linux_commit}/unity-menubar.patch"
                "context-menu.patch::https://gitlab.com/librewolf-community/browser/linux/-/raw/${_linux_commit}/context-menu.patch"
                "mozilla-vpn-ad.patch::https://gitlab.com/librewolf-community/browser/linux/-/raw/${_linux_commit}/mozilla-vpn-ad.patch"
                "arm.patch::https://gitlab.com/librewolf-community/browser/linux/-/raw/${_linux_commit}/arm.patch"
                https://raw.githubusercontent.com/archlinuxarm/PKGBUILDs/master/extra/firefox/build-arm-libopus.patch)

sha256sums_x86_64=('b9ac5833ef8109b9106c39b5aa0e8f5edf3ee794cc110dcade70ecab34529c3d'
                   '158152bdb9ef6a83bad62ae03a3d9bc8ae693b34926e53cc8c4de07df20ab22d'
                   'SKIP'
                   'SKIP'
                   '2addc8abeea860e123da43b5c6be687f520f5770d52e3b19de62bedc3581d007'
                   'f2f7403c9abd33a7470a5861e247b488693cf8d7d55c506e7e579396b7bf11e6'
                   '3bc57d97ef58c5e80f6099b0e82dab23a4404de04710529d8a8dd0eaa079afcd'
                   '85f037f794afee0c70840123960375a00f9cef08dd903ea038b6bb62e683b96f'
                   'f3fd29e24207d5cc83f9df6c9ffa960aabdab598ea59a61fec57e9947b1d8bc9')
sha256sums_aarch64=('b9ac5833ef8109b9106c39b5aa0e8f5edf3ee794cc110dcade70ecab34529c3d'
                    '158152bdb9ef6a83bad62ae03a3d9bc8ae693b34926e53cc8c4de07df20ab22d'
                    'SKIP'
                    'SKIP'
                    '2addc8abeea860e123da43b5c6be687f520f5770d52e3b19de62bedc3581d007'
                    'f2f7403c9abd33a7470a5861e247b488693cf8d7d55c506e7e579396b7bf11e6'
                    '85f037f794afee0c70840123960375a00f9cef08dd903ea038b6bb62e683b96f'
                    '3bc57d97ef58c5e80f6099b0e82dab23a4404de04710529d8a8dd0eaa079afcd'
                    'f3fd29e24207d5cc83f9df6c9ffa960aabdab598ea59a61fec57e9947b1d8bc9'
                    '6ca87d2ac7dc48e6f595ca49ac8151936afced30d268a831c6a064b52037f6b7'
                    '2d4d91f7e35d0860225084e37ec320ca6cae669f6c9c8fe7735cdbd542e3a7c9')

prepare() {
  if [[ ! -d mozbuild ]];then
      mkdir mozbuild
  fi
  cd firefox-$pkgver

  cat >../mozconfig <<END
ac_add_options --enable-application=browser
mk_add_options MOZ_OBJDIR=${PWD@Q}/obj

# This supposedly speeds up compilation (We test through dogfooding anyway)
ac_add_options --disable-tests
ac_add_options --disable-debug

ac_add_options --prefix=/usr
ac_add_options --enable-release
ac_add_options --enable-hardening
ac_add_options --enable-rust-simd
export CC='clang'
export CXX='clang++'

# Branding
ac_add_options --enable-update-channel=release
ac_add_options --with-app-name=${__pkgname}
ac_add_options --with-app-basename='${___pkgname}'
ac_add_options --with-branding=browser/branding/firedragon
ac_add_options --with-distribution-id=org.garudalinux
ac_add_options --with-unsigned-addon-scopes=app,system
ac_add_options --allow-addon-sideload
export MOZ_REQUIRE_SIGNING=0

# Features
ac_add_options --enable-alsa
ac_add_options --enable-jack
ac_add_options --disable-crashreporter
ac_add_options --disable-updater
ac_add_options --disable-tests

# Disables crash reporting, telemetry and other data gathering tools
mk_add_options MOZ_CRASHREPORTER=0
mk_add_options MOZ_DATA_REPORTING=0
mk_add_options MOZ_SERVICES_HEALTHREPORT=0
mk_add_options MOZ_TELEMETRY_REPORTING=0

# options for ci / weaker build systems
# mk_add_options MOZ_MAKE_FLAGS="-j4"
# ac_add_options --enable-linker=gold
END

if [[ $CARCH == 'aarch64' ]]; then
  cat >>../mozconfig <<END
# taken from manjaro build:
ac_add_options --enable-optimize="-g0 -O2"
# from ALARM
# ac_add_options --disable-webrtc

END

  export MOZ_DEBUG_FLAGS=" "
  export CFLAGS+=" -g0"
  export CXXFLAGS+=" -g0"
  export RUSTFLAGS="-Cdebuginfo=0"

  # we should have more than enough RAM on the CI spot instances.
  # ...or maybe not?
  export LDFLAGS+=" -Wl,--no-keep-memory"
  patch -p1 -i ../arm.patch
  patch -p1 -i ../build-arm-libopus.patch

else

  cat >>../mozconfig <<END
# probably not needed, enabled by default?
ac_add_options --enable-optimize
END
fi

  # Remove some pre-installed addons that might be questionable
  patch -p1 -i ../remove_addons.patch

  # Disable (some) megabar functionality
  # Adapted from https://github.com/WesleyBranton/userChrome.css-Customizations
  patch -p1 -i ../megabar.patch

  # Debian patch to enable global menubar
  # disabled for the default build, as it seems to cause issues in some configurations
  patch -p1 -i ../unity-menubar.patch

  # Disabling Pocket
  sed -i "s/'pocket'/#'pocket'/g" browser/components/moz.build

  patch -p1 -i ../context-menu.patch

  # remove mozilla vpn ads
  patch -p1 -i ../mozilla-vpn-ad.patch

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
  cd firefox-$pkgver

  export MOZ_NOSPAM=1
  export MOZBUILD_STATE_PATH="$srcdir/mozbuild"
  export MACH_USE_SYSTEM_PYTHON=1

  # LTO needs more open files
  ulimit -n 4096

  # -fno-plt with cross-LTO causes obscure LLVM errors
  # LLVM ERROR: Function Import: link error
  # CFLAGS="${CFLAGS/-fno-plt/}"
  # CXXFLAGS="${CXXFLAGS/-fno-plt/}"

  # Do 3-tier PGO
  echo "Building instrumented browser..."

if [[ $CARCH == 'aarch64' ]]; then

  cat >.mozconfig ../mozconfig - <<END
ac_add_options --enable-profile-generate
END

else

  cat >.mozconfig ../mozconfig - <<END
ac_add_options --enable-profile-generate=cross
END

fi

  ./mach build

  echo "Profiling instrumented browser..."
  ./mach package
  LLVM_PROFDATA=llvm-profdata \
    JARLOG_FILE="$PWD/jarlog" \
    xvfb-run -s "-screen 0 1920x1080x24 -nolisten local" \
    ./mach python build/pgo/profileserver.py

  if [[ ! -s merged.profdata ]]; then
    echo "No profile data produced."
    return 1
  fi

  if [[ ! -s jarlog ]]; then
    echo "No jar log produced."
    return 1
  fi

  echo "Removing instrumented browser..."
  ./mach clobber

  echo "Building optimized browser..."

if [[ $CARCH == 'aarch64' ]]; then

  cat >.mozconfig ../mozconfig - <<END
ac_add_options --enable-lto
ac_add_options --enable-profile-use
ac_add_options --with-pgo-profile-path=${PWD@Q}/merged.profdata
ac_add_options --with-pgo-jarlog=${PWD@Q}/jarlog
ac_add_options --enable-linker=lld
END

else

  cat >.mozconfig ../mozconfig - <<END
ac_add_options --enable-lto=cross
ac_add_options --enable-profile-use=cross
ac_add_options --with-pgo-profile-path=${PWD@Q}/merged.profdata
ac_add_options --with-pgo-jarlog=${PWD@Q}/jarlog
ac_add_options --enable-linker=lld
ac_add_options --disable-elf-hack
END

fi

  ./mach build

  echo "Building symbol archive..."
  ./mach buildsymbols
}

package() {
  cd firefox-$pkgver
  DESTDIR="$pkgdir" ./mach install

  install -Dvm644 "$srcdir/settings/$__pkgname.profile" "$pkgdir/etc/firejail/$__pkgname.profile"
  install -Dvm644 "$srcdir/settings/$__pkgname-common.profile" "$pkgdir/etc/firejail/$__pkgname-common.profile"
  install -Dvm644 "$srcdir/settings/$__pkgname.psd" "$pkgdir/usr/share/psd/browsers/firedragon"
  
  rm "$pkgdir"/usr/lib/${__pkgname}/pingsender

  local vendorjs="$pkgdir/usr/lib/$__pkgname/browser/defaults/preferences/vendor.js"

  install -Dvm644 /dev/stdin "$vendorjs" <<END
// Use system-provided dictionaries
pref("spellchecker.dictionary_path", "/usr/share/hunspell");

// Don't disable extensions in the application directory
// done in dragonwolf.cfg
// pref("extensions.autoDisableScopes", 11);
END

  # cd ${srcdir}/settings
  # git checkout ${_settings_commit}
  cd ${srcdir}/firefox-$pkgver
  cp -r ${srcdir}/settings/* ${pkgdir}/usr/lib/${__pkgname}/

  local distini="$pkgdir/usr/lib/$__pkgname/distribution/distribution.ini"
  install -Dvm644 /dev/stdin "$distini" <<END
[Global]
id=garudalinux
version=1.0
about=$_pkgname for Garuda Linux

[Preferences]
app.distributor=garudalinux
app.distributor.channel=$__pkgname
app.partner.garudalinux=garudalinux
END

  for i in 16 32 48 64 128; do
    install -Dvm644 browser/branding/${__pkgname}/default$i.png \
      "$pkgdir/usr/share/icons/hicolor/${i}x${i}/apps/$__pkgname.png"
  done
  install -Dvm644 browser/branding/librewolf/content/about-logo.png \
    "$pkgdir/usr/share/icons/hicolor/192x192/apps/$__pkgname.png"

  # arch upstream provides a separate svg for this. we don't have that, so let's re-use 16.png
  install -Dvm644 browser/branding/${__pkgname}/default16.png \
    "$pkgdir/usr/share/icons/hicolor/symbolic/apps/$__pkgname-symbolic.png"

  install -Dvm644 ../$__pkgname.desktop \
    "$pkgdir/usr/share/applications/$__pkgname.desktop"

  # Install a wrapper to avoid confusion about binary path
  install -Dm755 /dev/stdin "$pkgdir/usr/bin/$__pkgname" <<END
#!/bin/sh
exec /usr/lib/$__pkgname/$__pkgname "\$@"
END

  # Replace duplicate binary with wrapper
  # https://bugzilla.mozilla.org/show_bug.cgi?id=658850
  ln -srfv "$pkgdir/usr/bin/$__pkgname" "$pkgdir/usr/lib/$__pkgname/librewolf-bin"
  # Use system certificates
  local nssckbi="$pkgdir/usr/lib/$__pkgname/libnssckbi.so"
  if [[ -e $nssckbi ]]; then
    ln -srfv "$pkgdir/usr/lib/libnssckbi.so" "$nssckbi"
  fi
}
