# Maintainer: Daniel Playfair Cal <daniel.playfair.cal@gmail.com>
# Contributor: Evangelos Foutras <evangelos@foutrelis.com>
# Contributor: Pierre Schmitz <pierre@archlinux.de>
# Contributor: Jan "heftig" Steffens <jan.steffens@gmail.com>
# Contributor: Daniel J Griffiths <ghost1227@archlinux.us>

pkgname=chromium-ozone
pkgver=75.0.3770.142
pkgrel=1
_launcher_ver=6
_meta_browser_sha=3a0df19242cddda96efd91f195fe0df53fe4f955
pkgdesc="Chromium built with patches for wayland support via Ozone"
arch=('x86_64')
url="https://www.chromium.org/Home"
license=('BSD')
depends=('gtk3' 'nss' 'alsa-lib' 'xdg-utils' 'libxss' 'libcups' 'libgcrypt'
         'ttf-font' 'systemd' 'dbus' 'libpulse' 'pciutils' 'json-glib' 'libva'
         'desktop-file-utils' 'hicolor-icon-theme')
provides=('chromium')
conflicts=('chromium')
makedepends=('python' 'python2' 'gperf' 'yasm' 'mesa' 'ninja' 'nodejs' 'git'
             'clang' 'lld' 'gn<0.1578.0' 'java-runtime-headless')
optdepends=('pepper-flash: support for Flash content'
            'kdialog: needed for file dialogs in KDE'
            'gnome-keyring: for storing passwords in GNOME keyring'
            'kwallet: for storing passwords in KWallet')
install=chromium.install
source=(https://commondatastorage.googleapis.com/chromium-browser-official/chromium-$pkgver.tar.xz
        chromium-launcher-$_launcher_ver.tar.gz::https://github.com/foutrelis/chromium-launcher/archive/v$_launcher_ver.tar.gz
        meta-browser-${_meta_browser_sha}.tar.gz::https://github.com/OSSystems/meta-browser/archive/${_meta_browser_sha}.tar.gz
        chromium-system-icu.patch
        chromium-fix-window-flash-for-some-WMs.patch
        chromium-widevine.patch
        chromium-skia-harmony.patch
        chromium-sway-presentation.patch
        chromium-mutex-surfaces.patch
        https://git.nightly.network/Exherbo/desktop/raw/de0a391d9e7442dce614553835ef599119826387/packages/net-www/chromium-stable/files/chromium-remove-const.patch
        Added-HiDPI-support-for-Ozone-Wayland.patch)
sha256sums=('510e6ca7ccc218b401b375c13656f6aecab196b03142026dc3602b9d1804a5ac'
            '04917e3cd4307d8e31bfb0027a5dce6d086edb10ff8a716024fbb8bb0c7dccf1'
            '6bacd62414282999a5631e06cd3fa1eca787ee5b20a41fd3499668eead55f4d1'
            'e2d284311f49c529ea45083438a768db390bde52949995534034d2a814beab89'
            '183d8cc712f0bcf1afcb01ce90c4c104a4c8d8070a06f94974a28b007d9e2ce4'
            'd081f2ef8793544685aad35dea75a7e6264a2cb987ff3541e6377f4a3650a28b'
            '5887f78b55c4ecbbcba5930f3f0bb7bc0117c2a41c2f761805fcf7f46f1ca2b3'
            '279b9558a466d96bc7dcba96a9f41efaed98ede1cd69e1562689ee4409940fe8'
            'dcf01e0d630eb107e5efb56bb00c140269a0c9711b3ae90a3fd289ad5153ac08'
            '005f7db8acc774e2c66f99d900f2263abf495ccd5eda33c45a957fce2ed30f8d'
            'b6b258a6d3b42731c9375395b4e6e896edef00617d5b7028c348a5d2dbb14eb7')

# Possible replacements are listed in build/linux/unbundle/replace_gn_files.py
# Keys are the names in the above script; values are the dependencies in Arch
declare -gA _system_libs=(
  [ffmpeg]=ffmpeg
  [flac]=flac
  [fontconfig]=fontconfig
  [freetype]=freetype2
  [harfbuzz-ng]=harfbuzz
  [icu]=icu
  [libdrm]=
  [libjpeg]=libjpeg
  #[libpng]=libpng            # https://crbug.com/752403#c10
  [libvpx]=libvpx
  [libwebp]=libwebp
  [libxml]=libxml2
  [libxslt]=libxslt
  [opus]=opus
  [re2]=re2
  [snappy]=snappy
  [yasm]=
  [zlib]=minizip
)
_unwanted_bundled_libs=(
  ${!_system_libs[@]}
  ${_system_libs[libjpeg]+libjpeg_turbo}
)
depends+=(${_system_libs[@]})

# Google API keys (see https://www.chromium.org/developers/how-tos/api-keys)
# Note: These are for Arch Linux use ONLY. For your own distribution, please
# get your own set of keys.
_google_api_key=AIzaSyDwr302FpOSkGRpLlUpPThNTDPbXcIn_FM
_google_default_client_id=413772536636.apps.googleusercontent.com
_google_default_client_secret=0ZChLK6AxeA3Isu96MkwqDR4

_general_patches=(
  '0001-libstdc-do-not-assume-unique_ptr-has-ostream-operato.patch'
  'oe-clang-fixes.patch'
  # 'v8-qemu-wrapper.patch'
  'wrapper-extra-flags.patch'
  'do-not-specify-march-on-arm.patch'
  'add_internal_define_armv7ve.patch'
)

_wayland_patches=(
  '0001-ozone-wayland-Factored-the-clipboard-logic-out-of-Wa.patch'
  '0002-Convert-wayland-buffer-to-the-new-shared-memory-API.patch'
  '0003-Migrate-WaylandCanvasSurface-to-the-new-shared-memor.patch'
  '0004-ozone-wayland-Ease-the-buffer-swap-and-maintenance.patch'
  '0005-ozone-wayland-Fix-presentation-feedback-flags.patch'
  '0006-wayland-Do-not-release-shared-memory-fd-when-passing.patch'
  '0007-ozone-wayland-Don-t-wait-for-frame-callback-after-su.patch'
  '0008-ozone-wayland-Do-not-add-window-if-manager-does-not-.patch '
  '0009-ozone-wayland-Fix-NativeGpuMemoryBuffers-usage.patch'
  '0010-ozone-wayland-Add-immediate-release-support.patch'
  '0011-ozone-wayland-Wrap-wl_shm-to-WaylandShm.patch'
  '0012-ozone-wayland-Shm-Proxy-make-mojo-calls-on-the-gpu-t.patch'
  '0013-ozone-wayland-Shm-add-buffer_id.patch'
  '0014-ozone-wayland-Unite-Wayland-ShmBufferManager-and-Buf.patch'
  '0015-ozone-wayland-Stop-providing-WaylandConnection-throu.patch'
  '0016-ozone-wayland-Improve-logging-when-creating-gbm-buff.patch'
  '0017-ozone-wayland-Establish-BufferManagerGpu-and-BufferM.patch'
  '0018-ozone-wayland-Use-new-shmen-API-when-loading-keymap.patch'
  '0019-ozone-wayland-Prepare-WaylandCanvasSurface-for-compl.patch'
  '0020-ozone-wayland-Reset-surface-contents-in-a-safe-way.patch'
  '0021-Ozone-Wayland-Manager-make-mojo-calls-on-IO-thread.patch'
  '0022-ozone-wayland-Manager-tests-exercise-tests-with-mojo.patch'
  '0023-ozone-wayland-Fix-broken-software-rendering-path.patch'
  '0001-v4l2_device-CanCreateEGLImageFrom-support-all-ARM-So.patch'
  '0001-Add-support-for-V4L2VDA-on-Linux.patch'
  '0002-Add-mmap-via-libv4l-to-generic_v4l2_device.patch'
  '0001-ozone-wayland-Fix-method-prototype-match.patch'
)

prepare() {
  cd "$srcdir/chromium-$pkgver"

  # Allow building against system libraries in official builds
  sed -i 's/OFFICIAL_BUILD/GOOGLE_CHROME_BUILD/' \
    tools/generate_shim_headers/generate_shim_headers.py

  # https://crbug.com/893950
  sed -i -e 's/\<xmlMalloc\>/malloc/' -e 's/\<xmlFree\>/free/' \
    third_party/blink/renderer/core/xml/*.cc \
    third_party/blink/renderer/core/xml/parser/xml_document_parser.cc \
    third_party/libxml/chromium/libxml_utils.cc

  # https://crbug.com/956061
  patch -Np1 -i ../chromium-fix-window-flash-for-some-WMs.patch

  # Load Widevine CDM if available
  patch -Np1 -i ../chromium-widevine.patch

  # https://crbug.com/skia/6663#c10
  patch -Np0 -i ../chromium-skia-harmony.patch

  # https://bugs.gentoo.org/661880#c21
  patch -Np1 -i ../chromium-system-icu.patch

  # https://github.com/ungoogled-software/ungoogled-chromium-debian/issues/7
  patch -Np1 -i ../chromium-remove-const.patch

  # chromium-ozone-wayland
  for PATCH in ${_general_patches[@]}
  do
    echo "Applying $PATCH"
    patch -Np1 -i $srcdir/meta-browser-${_meta_browser_sha}/recipes-browser/chromium/files/${PATCH}
  done

  for PATCH in ${_wayland_patches[@]}
  do
    echo "Applying $PATCH"
    patch -Np1 -i $srcdir/meta-browser-${_meta_browser_sha}/recipes-browser/chromium/chromium-ozone-wayland/${PATCH}
  done

  # https://chromium-review.googlesource.com/c/chromium/src/+/1718406
  patch -Np1 -i ../chromium-mutex-surfaces.patch

  # https://chromium-review.googlesource.com/c/chromium/src/+/1719013
  patch -Np1 -i ../chromium-sway-presentation.patch

  # https://chromium-review.googlesource.com/c/chromium/src/+/1647154
  patch -Np1 -i ../Added-HiDPI-support-for-Ozone-Wayland.patch

  # Remove compiler flags not supported by our system clang
  sed -i \
    -e '/"-fsplit-lto-unit"/d' \
    -e '/"-Wno-defaulted-function-deleted"/d' \
    build/config/compiler/BUILD.gn

  # Force script incompatible with Python 3 to use /usr/bin/python2
  sed -i '1s|python$|&2|' third_party/dom_distiller_js/protoc_plugins/*.py

  mkdir -p third_party/node/linux/node-linux-x64/bin
  ln -s /usr/bin/node third_party/node/linux/node-linux-x64/bin/

  # Remove bundled libraries for which we will use the system copies; this
  # *should* do what the remove_bundled_libraries.py script does, with the
  # added benefit of not having to list all the remaining libraries
  local _lib
  for _lib in ${_unwanted_bundled_libs[@]}; do
    find "third_party/$_lib" -type f \
      \! -path "third_party/$_lib/chromium/*" \
      \! -path "third_party/$_lib/google/*" \
      \! -path 'third_party/yasm/run_yasm.py' \
      \! -regex '.*\.\(gn\|gni\|isolate\)' \
      -delete
  done

  python2 build/linux/unbundle/replace_gn_files.py \
    --system-libraries "${!_system_libs[@]}"
}

build() {
  make -C chromium-launcher-$_launcher_ver

  cd "$srcdir/chromium-$pkgver"

  export CC=clang
  export CXX=clang++
  export AR=ar
  export NM=nm

  if check_buildoption ccache y; then
    # Avoid falling back to preprocessor mode when sources contain time macros
    export CCACHE_SLOPPINESS=time_macros
    export CC="ccache $CC"
    export CXX="ccache $CXX"
  fi

  local _flags=(
    'custom_toolchain="//build/toolchain/linux/unbundle:default"'
    'host_toolchain="//build/toolchain/linux/unbundle:default"'
    'clang_use_chrome_plugins=false'
    'is_official_build=true' # implies is_cfi=true on x86_64
    'treat_warnings_as_errors=false'
    'fieldtrial_testing_like_official_build=true'
    'ffmpeg_branding="Chrome"'
    'proprietary_codecs=true'
    'link_pulseaudio=true'
    'use_gnome_keyring=false'
    'use_sysroot=false'
    'linux_use_bundled_binutils=false'
    'use_custom_libcxx=false'
    'enable_hangout_services_extension=true'
    'enable_widevine=true'
    'use_ozone=true'
    'ozone_platform_wayland=true'
    'ozone_auto_platforms=false'
    'use_xkbcommon=true'
    'use_system_libwayland=true'
    'use_system_minigbm=true'
    'use_system_libdrm=true'
    'use_vaapi=false'
    'use_jumbo_build=true'
    'enable_nacl=false'
    'enable_swiftshader=false'
    "google_api_key=\"${_google_api_key}\""
    "google_default_client_id=\"${_google_default_client_id}\""
    "google_default_client_secret=\"${_google_default_client_secret}\""
  )

  # Facilitate deterministic builds (taken from build/config/compiler/BUILD.gn)
  CFLAGS+='   -Wno-builtin-macro-redefined'
  CXXFLAGS+=' -Wno-builtin-macro-redefined'
  CPPFLAGS+=' -D__DATE__=  -D__TIME__=  -D__TIMESTAMP__='

  if check_option strip y; then
    _flags+=('symbol_level=0')

    # Mimic exclude_unwind_tables=true
    CFLAGS+='   -fno-unwind-tables -fno-asynchronous-unwind-tables'
    CXXFLAGS+=' -fno-unwind-tables -fno-asynchronous-unwind-tables'
    CPPFLAGS+=' -DNO_UNWIND_TABLES'
  else
    _flags+=('symbol_level=1')
  fi

  gn gen out/Release --args="${_flags[*]}" --script-executable=/usr/bin/python2
  ninja -C out/Release chrome chrome_sandbox chromedriver
}

package() {
  cd chromium-launcher-$_launcher_ver
  make PREFIX=/usr DESTDIR="$pkgdir" install
  install -Dm644 LICENSE \
    "$pkgdir/usr/share/licenses/chromium/LICENSE.launcher"

  cd "$srcdir/chromium-$pkgver"

  install -D out/Release/chrome "$pkgdir/usr/lib/chromium/chromium"
  install -Dm4755 out/Release/chrome_sandbox "$pkgdir/usr/lib/chromium/chrome-sandbox"
  ln -s /usr/lib/chromium/chromedriver "$pkgdir/usr/bin/chromedriver"

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
    out/Release/{*.bin,chromedriver} \
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
