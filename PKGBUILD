# Maintainer: Michael Egger <gcarq@archlinux.info>
# Contributor: Evangelos Foutras <evangelos@foutrelis.com>
# Contributor: Pierre Schmitz <pierre@archlinux.de>
# Contributor: Jan "heftig" Steffens <jan.steffens@gmail.com>
# Contributor: Daniel J Griffiths <ghost1227@archlinux.us>

pkgname=inox
pkgver=47.0.2526.80
pkgrel=1
_launcher_ver=3
pkgdesc="Chromium Spin-off to enhance privacy by disabling data transmission to Google"
arch=('i686' 'x86_64')
url="http://www.chromium.org/"
license=('BSD')
depends=('gtk2' 'nss' 'alsa-lib' 'xdg-utils' 'bzip2' 'libevent' 'libxss' 'icu'
         'libexif' 'libgcrypt' 'ttf-font' 'systemd' 'dbus' 'flac' 'snappy'
         'pciutils' 'libpulse' 'harfbuzz' 'libsecret'
         'perl' 'perl-file-basedir' 'desktop-file-utils' 'hicolor-icon-theme')
makedepends=('python2' 'python2-ply' 'gperf' 'yasm' 'mesa' 'ninja')
makedepends_x86_64=('lib32-gcc-libs' 'lib32-zlib')
optdepends=('kdebase-kdialog: needed for file dialogs in KDE'
            'gnome-keyring: for storing passwords in GNOME keyring'
            'kwallet: for storing passwords in KWallet')
options=('!strip')
install=inox.install
source=(https://commondatastorage.googleapis.com/chromium-browser-official/chromium-$pkgver.tar.xz
        chromium-launcher-$_launcher_ver.tar.gz::https://github.com/foutrelis/chromium-launcher/archive/v$_launcher_ver.tar.gz
        inox.desktop
        chromium-fix-print-preview-on-en_GB-locale.patch
        0001-Add-FPDFAPIJPEG_-prefix-to-more-libjpeg-functions.patch
        chromium-widevine.patch
        https://raw.githubusercontent.com/gcarq/inox-patchset/master/disable-autofill-download-manager.patch
        https://raw.githubusercontent.com/gcarq/inox-patchset/master/disable-google-url-tracker.patch
        https://raw.githubusercontent.com/gcarq/inox-patchset/master/disable-default-extensions.patch
        https://raw.githubusercontent.com/gcarq/inox-patchset/master/modify-default-prefs.patch
        https://raw.githubusercontent.com/gcarq/inox-patchset/master/disable-notification-promo-fetch.patch
        https://raw.githubusercontent.com/gcarq/inox-patchset/master/restore-classic-ntp.patch
        https://raw.githubusercontent.com/gcarq/inox-patchset/master/disable-google-ipv6-probes.patch
        https://raw.githubusercontent.com/gcarq/inox-patchset/master/disable-gcm-status-check.patch
        https://raw.githubusercontent.com/gcarq/inox-patchset/master/add-duckduckgo-search-engine.patch
        https://raw.githubusercontent.com/gcarq/inox-patchset/master/branding.patch
        https://raw.githubusercontent.com/gcarq/inox-patchset/master/launcher-branding.patch
        https://raw.githubusercontent.com/gcarq/inox-patchset/master/disable-missing-key-warning.patch
        https://raw.githubusercontent.com/gcarq/inox-patchset/master/disable-translation-lang-fetch.patch
        https://raw.githubusercontent.com/gcarq/inox-patchset/master/disable-update-pings.patch
        https://raw.githubusercontent.com/gcarq/inox-patchset/master/chromium-sandbox-pie.patch
        https://raw.githubusercontent.com/gcarq/inox-patchset/master/disable-new-avatar-menu.patch
        https://raw.githubusercontent.com/gcarq/inox-patchset/master/disable-first-run-behaviour.patch)
        
sha256sums=('b107148323a3b641eae29bfeda298183c0d1c110ef96a04a13f329015d614d05'
            '8b01fb4efe58146279858a754d90b49e5a38c9a0b36a1f84cbb7d12f92b84c28'
            'ff3f939a8757f482c1c5ba35c2c0f01ee80e2a2273c16238370081564350b148'
            '6fff45aafa31fb35a032b4e2175a341e08f9d2a9b37c5cf080c318180f558378'
            'd114def156d60d5f4c9e42f2955ba19bdebe38037a330ef947af24ace25db39d'
            '379b746e187de28f80f5a7cd19edcfa31859656826f802a1ede054fcb6dfb221'
            '79401ba0d780cb459a32824729abb7976b5f1b45623cd2896c0f0198a7f77764'
            '59ebf0ff2227eea507bf113c8f6ff4768dd168b6fa7cc2195172d2757a5df807'
            '2f5d18666b4a4101a6c42fbeaaa0421b4d346da6825ee02f58e4ae7ebb993db1'
            '81f5f881e10d974b2a770b68e8becc25db22781252e85d0b7323f2c1236190a1'
            '64b5e27c57017b80c3e1471d0ee9fd45901392beb9ffe69fb4362f701eccc6ae'
            '2aec3f9a8a3f9f64caf1fdaae797a617199739c8b0ead1e176aba1bcfffcc389'
            '562eea848542f76537a9f3993bac397b523d0ce419416daf0bb4dd17f5203c7c'
            'b081462f645ffab7aaf2c310761c269329d3d22a36cf463dd0ba5ebb3da2141e'
            'fc6b8f673cabfa3ce1cba535b6c872cdd41e815fc0c9a6468ac5fa7b5fbe3ce3'
            'd2861c60acfdb710cf8b114ef1c3484011102cfef813c480d460002305ebcc0f'
            '8412971b2814c1135375d5e5fc52f0f005ac15ed9e7625db59f7f5297f92727e'
            '55b75daf5aad2a8929c80837f986d4474993f781c0ffa4169e38483b0af6e385'
            '0362593751abc09bbf2244109c93068fc9a40a51ba4dbd17bb2b107ff50d7dce'
            'e94dd87a3c28cdee7fde1c05d0ad2b76dd72a60819dde0401ef66828ac492bf2'
            'cd0d2b665f9d39f7c25929f8e1b85b9a391b4a5a8a70d005cd815bbf2bb4e548'
            '9e37751dca4a2b60681ba14119bc3839685ae420686664de7dfc4245f9eeff3c'
            'c47efe038f502d4fe2b66e59347b01c58ee8739a8d8f050c6c1cc60752d24f13')

# We can't build (P)NaCL on i686 because the toolchain is x86_64 only and the
# instructions on how to build the toolchain from source don't work that well
# (at least not from within the Chromium 39 source tree).
# https://sites.google.com/a/chromium.org/dev/nativeclient/pnacl/building-pnacl-components-for-distribution-packagers
_build_nacl=1
if [[ $CARCH == i686 ]]; then
  _build_nacl=0
fi

prepare() {
  cd "$srcdir/chromium-$pkgver"
  
  # https://groups.google.com/a/chromium.org/d/topic/chromium-packagers/9JX1N2nf4PU/discussion
  touch chrome/test/data/webui/i18n_process_css_test.html
  
  # https://code.google.com/p/chromium/issues/detail?id=541273
  sed -i "/'target_name': 'libvpx'/s/libvpx/&_new/" build/linux/unbundle/libvpx.gyp

  # https://code.google.com/p/chromium/issues/detail?id=480415
  patch -Np1 -i ../chromium-fix-print-preview-on-en_GB-locale.patch

  # https://code.google.com/p/chromium/issues/detail?id=505226
  patch -d third_party/pdfium -Np1 <../0001-Add-FPDFAPIJPEG_-prefix-to-more-libjpeg-functions.patch

  # Enable support for the Widevine CDM plugin
  # The actual libraries are not included, but can be copied over from Chrome:
  #   libwidevinecdmadapter.so
  #   libwidevinecdm.so
  # (Version string doesn't seem to matter so let's go with "Pinkie Pie")
  sed "s/@WIDEVINE_VERSION@/Pinkie Pie/" ../chromium-widevine.patch |
    patch -Np1

  # Apply Inox patches
  patch -Np1 -i ../disable-autofill-download-manager.patch
  patch -Np1 -i ../disable-google-url-tracker.patch
  patch -Np1 -i ../disable-default-extensions.patch
  patch -Np1 -i ../modify-default-prefs.patch
  patch -Np1 -i ../disable-notification-promo-fetch.patch
  patch -Np1 -i ../restore-classic-ntp.patch
  patch -Np1 -i ../disable-google-ipv6-probes.patch
  patch -Np1 -i ../disable-gcm-status-check.patch
  patch -Np1 -i ../add-duckduckgo-search-engine.patch
  patch -Np1 -i ../branding.patch
  patch -Np1 -i ../disable-missing-key-warning.patch
  patch -Np1 -i ../disable-translation-lang-fetch.patch
  patch -Np1 -i ../disable-update-pings.patch
  patch -Np1 -i ../chromium-sandbox-pie.patch
  patch -Np1 -i ../disable-new-avatar-menu.patch
  patch -Np1 -i ../disable-first-run-behaviour.patch
  
  # Remove bundled ICU; its header files appear to get picked up instead of
  # the system ones, leading to errors during the final link stage
  # https://groups.google.com/a/chromium.org/d/topic/chromium-packagers/BNGvJc08B6Q
  find third_party/icu -type f \! -regex '.*\.\(gyp\|gypi\|isolate\)' -delete

  # Use Python 2
  find . -name '*.py' -exec sed -i -r 's|/usr/bin/python$|&2|g' {} +
  # There are still a lot of relative calls which need a workaround
  mkdir "$srcdir/python2-path"
  ln -s /usr/bin/python2 "$srcdir/python2-path/python"
  # Download the PNaCL toolchain on x86_64; i686 toolchain is no longer provided
  if (( $_build_nacl )); then
    python2 build/download_nacl_toolchains.py \
      --packages nacl_x86_newlib,pnacl_newlib,pnacl_translator \
      sync --extract
  fi
  
  # Patch Inox launcher
  cd "$srcdir/chromium-launcher-$_launcher_ver"
  patch -Np1 -i ../launcher-branding.patch
}

build() {
  cd "$srcdir/chromium-launcher-$_launcher_ver"
  make PREFIX=/usr

  cd "$srcdir/chromium-$pkgver"

  export PATH="$srcdir/python2-path:$PATH"

  # CFLAGS are passed through release_extra_cflags below
  export -n CFLAGS CXXFLAGS

  local _chromium_conf=(
    -Dwerror=
    -Dclang=0
    -Dpython_ver=2.7
    -Dlinux_link_gsettings=1
    -Dlinux_link_libpci=1
    -Dlinux_link_pulseaudio=1
    -Dlinux_strip_binary=1
    -Dlinux_use_bundled_binutils=0
    -Dlinux_use_bundled_gold=0
    -Dlinux_use_gold_flags=0
    -Dicu_use_data_file_flag=0
    -Dlogging_like_official_build=1
    -Drelease_extra_cflags="$CFLAGS"
    -Dffmpeg_branding=Chrome
    -Dproprietary_codecs=1
    -Duse_gnome_keyring=0
    -Duse_system_bzip2=1
    -Duse_system_flac=1
    -Duse_system_ffmpeg=0
    -Duse_system_harfbuzz=1
    -Duse_system_icu=1
    -Duse_system_libevent=1
    -Duse_system_libjpeg=1
    -Duse_system_libpng=1
    -Duse_system_libvpx=1
    -Duse_system_libxml=0
    -Duse_system_snappy=1
    -Duse_system_xdg_utils=1
    -Duse_system_yasm=1
    -Duse_system_zlib=0
    -Dusb_ids_path=/usr/share/hwdata/usb.ids
    -Duse_mojo=0
    -Duse_gconf=0
    -Ddisable_fatal_linker_warnings=1
    -Ddisable_glibc=1
    -Denable_webrtc=0
    -Denable_google_now=0
    -Denable_remoting=0
    -Dsafe_browsing_mode=0
    -Denable_rlz=0
    -Denable_hangout_services_extension=0
    -Dbranding=Chromium
    -Dgoogle_chrome_build=0
    -Denable_web_speech=1
    -Denable_wifi_bootstrapping=0
    -Denable_speech_input=0
    -Denable_pre_sync_backup=0
    -Denable_print_preview=0
    -Dtracing_like_official_build=1
    -Dfieldtrial_testing_like_official_build=1
    -Dfastbuild=1
    )

  if (( ! $_build_nacl )); then
    _chromium_conf+=(
      -Ddisable_nacl=1
      -Ddisable_pnacl=1
    )
  fi

  build/linux/unbundle/replace_gyp_files.py "${_chromium_conf[@]}"
  build/gyp_chromium --depth=. "${_chromium_conf[@]}"

  ninja -C out/Release chrome chrome_sandbox chromedriver
}

package() {
  cd "$srcdir/chromium-launcher-$_launcher_ver"

  make PREFIX=/usr DESTDIR="$pkgdir" install-strip
  install -Dm644 LICENSE \
    "$pkgdir/usr/share/licenses/$pkgname/LICENSE.launcher"

  cd "$srcdir/chromium-$pkgver"

  install -D out/Release/chrome "$pkgdir/usr/lib/$pkgname/$pkgname"

  install -Dm4755 out/Release/chrome_sandbox \
    "$pkgdir/usr/lib/$pkgname/chrome-sandbox"

  install -D out/Release/chromedriver "$pkgdir/usr/lib/$pkgname/inoxdriver"

  cp out/Release/{*.pak,*.bin} \
    "$pkgdir/usr/lib/$pkgname/"

  # Manually strip binaries so that 'nacl_irt_*.nexe' is left intact
  strip $STRIP_BINARIES "$pkgdir/usr/lib/$pkgname/"{"$pkgname",chrome-sandbox} \
    "$pkgdir/usr/lib/$pkgname/inoxdriver"

  if (( $_build_nacl )); then
    cp out/Release/nacl_helper{,_bootstrap} out/Release/nacl_irt_*.nexe \
      "$pkgdir/usr/lib/$pkgname/"
    strip $STRIP_BINARIES "$pkgdir/usr/lib/$pkgname/"nacl_helper{,_bootstrap}
  fi

  cp -a out/Release/locales "$pkgdir/usr/lib/$pkgname/"

  install -Dm644 out/Release/chrome.1 "$pkgdir/usr/share/man/man1/$pkgname.1"

  install -Dm644 "$srcdir/$pkgname.desktop" \
    "$pkgdir/usr/share/applications/$pkgname.desktop"

  for size in 22 24 48 64 128 256; do
    install -Dm644 "chrome/app/theme/chromium/product_logo_$size.png" \
      "$pkgdir/usr/share/icons/hicolor/${size}x${size}/apps/$pkgname.png"
  done

  for size in 16 32; do
    install -Dm644 "chrome/app/theme/default_100_percent/chromium/product_logo_$size.png" \
      "$pkgdir/usr/share/icons/hicolor/${size}x${size}/apps/$pkgname.png"
  done

  ln -s /usr/lib/$pkgname/inoxdriver "$pkgdir/usr/bin/inoxdriver"

  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim:set ts=2 sw=2 et: