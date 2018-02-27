# Maintainer: Seppia <seppia@seppio.fish>
# Contributors: Eloston
# Derived from official Chromium and Inox PKGBUILDS

pkgname=ungoogled-chromium
pkgver=64.0.3282.186
pkgrel=1
_launcher_ver=5
pkgdesc="Modifications to Google Chromium for removing Google integration and enhancing privacy, control, and transparency"
arch=('x86_64')
url="https://github.com/Eloston/ungoogled-chromium"
license=('BSD')
depends=('gtk3' 'nss' 'alsa-lib' 'xdg-utils' 'libxss' 'libcups' 'libgcrypt'
         'ttf-font' 'systemd' 'dbus' 'libpulse' 'pciutils' 'json-glib'
         'desktop-file-utils' 'hicolor-icon-theme' 'libevent')
makedepends=('python2' 'gperf' 'yasm' 'mesa' 'ninja' 'git' 'libva'
             'clang' 'llvm' 'lld' 'quilt')
optdepends=('pepper-flash: support for Flash content'
            'kdialog: needed for file dialogs in KDE'
            'gnome-keyring: for storing passwords in GNOME keyring'
            'kwallet: for storing passwords in KWallet'
            'libva-intel-driver: for hardware video acceleration with Intel GPUs'
            'libva-mesa-driver: for hardware video acceleration with AMD/ATI GPUs'
            'libva-vdpau-driver: for hardware video acceleration with NVIDIA GPUs')
provides=("chromium")
conflicts=("chromium","inox","iridium")
source=(https://commondatastorage.googleapis.com/chromium-browser-official/chromium-$pkgver.tar.xz
        chromium-launcher-$_launcher_ver.tar.gz::https://github.com/foutrelis/chromium-launcher/archive/v$_launcher_ver.tar.gz
        chromium-$pkgver.txt::https://chromium.googlesource.com/chromium/src.git/+/$pkgver?format=TEXT
        'ungoogled-chromium::git+https://github.com/Eloston/ungoogled-chromium.git')
sha256sums=('5fd0218759231ac00cc729235823592f6fd1e4a00ff64780a5fed7ab210f1860'
            '4dc3428f2c927955d9ae117f2fb24d098cc6dd67adb760ac9c82b522ec8b0587'
            'e73f69942af1ba730a700151973fa6309b0586ff45bf35a7fea43f52b54a9cb5'
            'SKIP')

# Possible replacements are listed in build/linux/unbundle/replace_gn_files.py
# Keys are the names in the above script; values are the dependencies in Arch
readonly -A _system_libs=(
  #[ffmpeg]=ffmpeg            # https://crbug.com/731766
  [flac]=flac
  #[fontconfig]=fontconfig    # Enable for M65
  #[freetype]=freetype2       # Using 'use_system_freetype=true' until M65
  #[harfbuzz-ng]=harfbuzz     # Using 'use_system_harfbuzz=true' until M65
  [icu]=icu
  [libdrm]=
  [libevent]=libevent
  [libjpeg]=libjpeg
  #[libpng]=libpng            # https://crbug.com/752403#c10
  [libvpx]=libvpx
  [libwebp]=libwebp
  #[libxml]=libxml2           # https://crbug.com/736026
  [libxslt]=libxslt
  [opus]=opus
  [re2]=re2
  [snappy]=snappy
  [yasm]=
  [zlib]=minizip
)
readonly _unwanted_bundled_libs=(
  ${!_system_libs[@]}
  ${_system_libs[libjpeg]+libjpeg_turbo}
  freetype
  harfbuzz-ng
)
depends+=(${_system_libs[@]} freetype2 harfbuzz)

prepare() {
  cd "$srcdir/ungoogled-chromium"

  git checkout develop

  msg2 'Processing sources'
  python3 buildkit-launcher.py genbun -u "$srcdir/chromium-$pkgver/ungoogled" archlinux
  python3 buildkit-launcher.py prubin -u "$srcdir/chromium-$pkgver/ungoogled" -t "$srcdir/chromium-$pkgver"
  python3 buildkit-launcher.py subdom -u "$srcdir/chromium-$pkgver/ungoogled" -t "$srcdir/chromium-$pkgver"
  cp "$srcdir/chromium-$pkgver/ungoogled/patch_order.list" "$srcdir/chromium-$pkgver/ungoogled/patches/series"

  cd "$srcdir/chromium-$pkgver"

  msg2 'Applying build patches'
  # https://crbug.com/710701
  local _chrome_build_hash=$(base64 -d ../chromium-$pkgver.txt |
    grep -Po '^parent \K[0-9a-f]{40}$')
  if [[ -z $_chrome_build_hash ]]; then
    error "Unable to find Chrome build hash."
    return 1
  fi
  echo "LASTCHANGE=$_chrome_build_hash-" >build/util/LASTCHANGE

  # Apply patches
  env QUILT_PATCHES="$srcdir/chromium-$pkgver/ungoogled/patches" quilt push -a

  # Remove compiler flags not supported by our system clang
  sed -i \
    -e '/"-Wno-enum-compare-switch"/d' \
    -e '/"-Wno-null-pointer-arithmetic"/d' \
    -e '/"-Wno-tautological-unsigned-zero-compare"/d' \
    -e '/"-Wno-tautological-constant-compare"/d' \
    build/config/compiler/BUILD.gn

  # Use Python 2
  find . -name '*.py' -exec sed -i -r 's|/usr/bin/python$|&2|g' {} +

  # There are still a lot of relative calls which need a workaround
  mkdir -p "$srcdir/python2-path"
  ln -s /usr/bin/python2 "$srcdir/python2-path/python"

  # Remove bundled libraries for which we will use the system copies; this
  # *should* do what the remove_bundled_libraries.py script does, with the
  # added benefit of not having to list all the remaining libraries
  local _lib
  for _lib in ${_unwanted_bundled_libs[@]}; do
    find -type f -path "*third_party/$_lib/*" \
      \! -path "*third_party/$_lib/chromium/*" \
      \! -path "*third_party/$_lib/google/*" \
      \! -path './base/third_party/icu/*' \
      \! -path './third_party/freetype/src/src/psnames/pstables.h' \
      \! -path './third_party/yasm/run_yasm.py' \
      \! -regex '.*\.\(gn\|gni\|isolate\)' \
      -delete
  done

  python2 build/linux/unbundle/replace_gn_files.py \
    --system-libraries "${!_system_libs[@]}"
}

build() {
  make -C chromium-launcher-$_launcher_ver

  cd "$srcdir/chromium-$pkgver"

  if check_buildoption ccache y; then
    # Avoid falling back to preprocessor mode when sources contain time macros
    export CCACHE_SLOPPINESS=time_macros
  fi

  export PATH="$srcdir/python2-path:$PATH"
  export TMPDIR="$srcdir/temp"
  mkdir -p "$TMPDIR"

  export CC=clang
  export CXX=clang++
  export AR=llvm-ar
  export NM=llvm-nm

  local _flags=(
    'clang_base_path=getenv("CLANG_BASE_PATH")'
    'clang_use_chrome_plugins=false'
    'custom_toolchain="//build/toolchain/linux/unbundle:default"'
    'enable_ac3_eac3_audio_demuxing=true'
    'enable_google_now=false'
    'enable_hangout_services_extension=false'
    'enable_hevc_demuxing=true'
    'enable_iterator_debugging=false'
    'enable_mdns=false'
    'enable_mse_mpeg2ts_stream_parser=true'
    'enable_nacl=false'
    'enable_nacl_nonsfi=false'
    'enable_one_click_signin=false'
    'enable_reading_list=false'
    'enable_remoting=false'
    'enable_reporting=false'
    'enable_service_discovery=false'
    'enable_swiftshader=false'
    'enable_widevine=true'
    'exclude_unwind_tables=true'
    'fatal_linker_warnings=false'
    'ffmpeg_branding="ChromeOS"'
    'fieldtrial_testing_like_official_build=true'
    'gold_path=""'
    'goma_dir=""'
    'google_api_key=""'
    'google_default_client_id=""'
    'google_default_client_secret=""'
    'host_toolchain="//build/toolchain/linux/unbundle:default"'
    'is_clang=true'
    'is_debug=false'
    'link_pulseaudio=true'
    'linux_use_bundled_binutils=false'
    'optimize_for_size=false'
    'optimize_webui=false'
    'proprietary_codecs=true'
    'remove_webcore_debug_symbols=true'
    'rtc_libvpx_build_vp9=false'
    'safe_browsing_mode=0'
    'symbol_level=0'
    'treat_warnings_as_errors=false'
    'use_allocator="none"'
    'use_cups=true'
    'use_custom_libcxx=false'
    'use_gconf=false'
    'use_gnome_keyring=false'
    'use_gold=true'
    'use_gtk3=true'
    'use_jumbo_build=true'
    'use_kerberos=false'
    'use_lld=true'
    'use_official_google_api_keys=false'
    'use_openh264=false'
    'use_ozone=false'
    'use_pulseaudio=true'
    'use_sysroot=false'
    'use_system_freetype=true'
    'use_system_harfbuzz=true'
    'use_system_lcms2=true'
    'use_system_libjpeg=true'
    'use_system_libpng=true'
    'use_system_zlib=true'
    'use_unofficial_version_number=false'
    'use_vaapi=true'
  )

  if check_option strip y; then
    # https://chromium-review.googlesource.com/c/chromium/src/+/712575
    # _flags+=('exclude_unwind_tables=true')
    CFLAGS+='   -fno-unwind-tables -fno-asynchronous-unwind-tables'
    CXXFLAGS+=' -fno-unwind-tables -fno-asynchronous-unwind-tables'
    CPPFLAGS+=' -DNO_UNWIND_TABLES'
  fi

  msg2 'Building GN'
  python2 tools/gn/bootstrap/bootstrap.py -s -j 4 --no-clean
  msg2 'Configuring Chromium'
  out/Release/gn gen out/Release --args="${_flags[*]}" \
    --script-executable=/usr/bin/python2 --fail-on-unused-args

  msg2 'Building Chromium'
  ninja -C out/Release chrome chrome_sandbox chromedriver widevinecdmadapter
}

package() {
  cd chromium-launcher-$_launcher_ver
  make PREFIX=/usr DESTDIR="$pkgdir" install
  install -Dm644 LICENSE \
    "$pkgdir/usr/share/licenses/chromium/LICENSE.launcher"

  cd "$srcdir/chromium-$pkgver"

  install -D out/Release/chrome "$pkgdir/usr/lib/chromium/chromium"
  install -Dm4755 out/Release/chrome_sandbox "$pkgdir/usr/lib/chromium/chrome-sandbox"
  install -D out/Release/chromedriver "$pkgdir/usr/lib/chromium/chromedriver"
  ln -s /usr/lib/$pkgname/chromedriver "$pkgdir/usr/bin/chromedriver"

  install -Dm644 chrome/installer/linux/common/desktop.template \
    "$pkgdir/usr/share/applications/chromium.desktop"
  install -Dm644 chrome/app/resources/manpage.1.in \
    "$pkgdir/usr/share/man/man1/chromium.1"
  sed -i \
    -e "s/@@MENUNAME@@/Chromium/g" \
    -e "s/@@PACKAGE@@/chromium/g" \
    -e "s/@@USR_BIN_SYMLINK_NAME@@/chromium/g" \
    "$pkgdir/usr/share/applications/chromium.desktop" \
    "$pkgdir/usr/share/man/man1/chromium.1"

  cp \
    out/Release/{chrome_{100,200}_percent,resources}.pak \
    out/Release/{*.bin,libwidevinecdmadapter.so} \
    "$pkgdir/usr/lib/chromium/"
  install -Dm644 -t "$pkgdir/usr/lib/chromium/locales" out/Release/locales/*.pak

  if [[ -z ${_system_libs[icu]+set} ]]; then
    cp out/Release/icudtl.dat "$pkgdir/usr/lib/chromium/"
  fi

  for size in 22 24 48 64 128 256; do
    install -Dm644 "chrome/app/theme/chromium/product_logo_$size.png" \
      "$pkgdir/usr/share/icons/hicolor/${size}x${size}/apps/chromium.png"
  done

  for size in 16 32; do
    install -Dm644 "chrome/app/theme/default_100_percent/chromium/product_logo_$size.png" \
      "$pkgdir/usr/share/icons/hicolor/${size}x${size}/apps/chromium.png"
  done

  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/chromium/LICENSE"
}

# vim:set ts=2 sw=2 et:
