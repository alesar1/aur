# Maintainer: Seppia <seppia@seppio.fish>
# Contributors: Eloston
# Derived from official Chromium and Inox PKGBUILDS and ungoogled-chromium buildkit

pkgname=ungoogled-chromium
pkgver=79.0.3945.130
_rev=1
_archver=a79e70b9f50152e39346f89f3ca136dbdeb15b4e
pkgrel=${_rev}
_launcher_ver=6
pkgdesc="A lightweight approach to removing Google web service dependency"
arch=('x86_64')
url="https://github.com/Eloston/ungoogled-chromium"
license=('BSD')
depends=('gtk3' 'nss' 'alsa-lib' 'xdg-utils' 'libxss' 'libcups' 'libgcrypt'
         'ttf-font' 'systemd' 'dbus' 'libpulse' 'pciutils' 'json-glib' 'libva'
         'desktop-file-utils' 'hicolor-icon-theme' 'jsoncpp' 'openjpeg2')
makedepends=('python' 'python2' 'gperf' 'yasm' 'mesa' 'ninja' 'git'
             'clang' 'lld' 'gn' 'llvm' 'quilt')
optdepends=('pepper-flash: support for Flash content'
            'kdialog: needed for file dialogs in KDE'
            'gnome-keyring: for storing passwords in GNOME keyring'
            'kwallet: for storing passwords in KWallet'
            'libva-intel-driver: for hardware video acceleration with Intel GPUs'
            'libva-mesa-driver: for hardware video acceleration with AMD/ATI GPUs'
            'libva-vdpau-driver: for hardware video acceleration with NVIDIA GPUs')
provides=('chromium')
conflicts=('chromium')
source=(https://commondatastorage.googleapis.com/chromium-browser-official/chromium-$pkgver.tar.xz
        chromium-launcher-$_launcher_ver.tar.gz::https://github.com/foutrelis/chromium-launcher/archive/v$_launcher_ver.tar.gz
        https://github.com/Eloston/ungoogled-chromium/archive/$pkgver-$pkgrel.tar.gz
        https://github.com/ungoogled-software/ungoogled-chromium-archlinux/archive/${_archver}.tar.gz)
sha256sums=('56193431ab9d1193773b133d86b419bfae8d8b9196eea253660895e0e8f87ba0'
            '04917e3cd4307d8e31bfb0027a5dce6d086edb10ff8a716024fbb8bb0c7dccf1'
            'cf680d5a1462c1c0896421b134044f08e0dd73e3d3556ebcaa19cbedfdf983b1'
            '2e707870c469823844344affada4c72ab80cb5bb01f90f8f8f2bbc3c19f61885')

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
  [libevent]=libevent
  [libjpeg]=libjpeg
  #[libpng]=libpng            # https://crbug.com/752403#c10
  #[libvpx]=libvpx            # https://github.com/webmproject/libvpx/commit/5a0242ba5c
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

prepare() {
  _ungoogled_archlinux_repo="$srcdir/$pkgname-archlinux-${_archver}"
  _ungoogled_repo="$srcdir/$pkgname-$pkgver-$pkgrel"
  _utils="${_ungoogled_repo}/utils"

  cd "$srcdir/chromium-$pkgver"

  msg2 'Pruning binaries'
  python "$_utils/prune_binaries.py" ./ "$_ungoogled_repo/pruning.list"
  msg2 'Applying patches'
  python "$_utils/patches.py" apply ./ "$_ungoogled_repo/patches" "$_ungoogled_archlinux_repo/patches"
  msg2 'Applying domain substitution'
  python "$_utils/domain_substitution.py" apply -r "$_ungoogled_repo/domain_regex.list" -f "$_ungoogled_repo/domain_substitution.list" -c domainsubcache.tar.gz ./

  # Force script incompatible with Python 3 to use /usr/bin/python2
  sed -i '1s|python$|&2|' third_party/dom_distiller_js/protoc_plugins/*.py

  # Remove bundled libraries for which we will use the system copies; this
  # *should* do what the remove_bundled_libraries.py script does, with the
  # added benefit of not having to list all the remaining libraries
  local _lib
  for _lib in ${_unwanted_bundled_libs[@]}; do
    find -type f -path "*third_party/$_lib/*" \
      \! -path "*third_party/$_lib/chromium/*" \
      \! -path "*third_party/$_lib/google/*" \
      \! -path './base/third_party/icu/*' \
      \! -path './third_party/crashpad/crashpad/third_party/zlib/zlib_crashpad.h' \
      \! -path './third_party/pdfium/third_party/freetype/include/pstables.h' \
      \! -path './third_party/yasm/run_yasm.py' \
      \! -regex '.*\.\(gn\|gni\|isolate\)' \
      -delete
  done

  python2 build/linux/unbundle/replace_gn_files.py \
    --system-libraries "${!_system_libs[@]}"
}

build() {
  _ungoogled_archlinux_repo="$srcdir/$pkgname-archlinux-${_archver}"
  _ungoogled_repo="$srcdir/$pkgname-$pkgver-$pkgrel"

  make -C chromium-launcher-$_launcher_ver

  cd "$srcdir/chromium-$pkgver"

  if check_buildoption ccache y; then
    # Avoid falling back to preprocessor mode when sources contain time macros
    export CCACHE_SLOPPINESS=time_macros
  fi

  export CC=clang
  export CXX=clang++
  export AR=llvm-ar
  export NM=llvm-nm

  mkdir -p out/Default

  # Assemble GN flags
  cp "$_ungoogled_repo/flags.gn" "out/Default/args.gn"
  printf '\n' >> "out/Default/args.gn"
  cat "$_ungoogled_archlinux_repo/flags.archlinux.gn" >> "out/Default/args.gn"

  # Facilitate deterministic builds (taken from build/config/compiler/BUILD.gn)
  CFLAGS+='   -Wno-builtin-macro-redefined'
  CXXFLAGS+=' -Wno-builtin-macro-redefined'
  CPPFLAGS+=' -D__DATE__=  -D__TIME__=  -D__TIMESTAMP__='

  # Do not warn about unknown warning options
  CFLAGS+='   -Wno-unknown-warning-option'
  CXXFLAGS+=' -Wno-unknown-warning-option'

  msg2 'Configuring Chromium'
  gn gen out/Default --script-executable=/usr/bin/python2 --fail-on-unused-args
  msg2 'Building Chromium'
  ninja -C out/Default chrome chrome_sandbox chromedriver
}

package() {
  cd chromium-launcher-$_launcher_ver
  make PREFIX=/usr DESTDIR="$pkgdir" install
  install -Dm644 LICENSE \
    "$pkgdir/usr/share/licenses/chromium/LICENSE.launcher"

  cd "$srcdir/chromium-$pkgver"

  install -D out/Default/chrome "$pkgdir/usr/lib/chromium/chromium"
  install -Dm4755 out/Default/chrome_sandbox "$pkgdir/usr/lib/chromium/chrome-sandbox"
  ln -s /usr/lib/${pkgname#ungoogled-}/chromedriver "$pkgdir/usr/bin/chromedriver"

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
    out/Default/{chrome_{100,200}_percent,resources}.pak \
    out/Default/{*.bin,chromedriver} \
    "$pkgdir/usr/lib/chromium/"
  install -Dm644 -t "$pkgdir/usr/lib/chromium/locales" out/Default/locales/*.pak

  if [[ -z ${_system_libs[icu]+set} ]]; then
    cp out/Default/icudtl.dat "$pkgdir/usr/lib/chromium/"
  fi

  for size in 24 48 64 128 256; do
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
