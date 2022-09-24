# Maintainer: Noah Vogt (noahvogt) <noah@noahvogt.com>
# Maintainer: Bruno Pagani <archange@archlinux.org>

# Remember to handle https://bugs.archlinux.org/task/74324 on major upgrades
_use_suffix=0
pkgver=20.0.3
_commit=a85ad0ea38bdc07968a3e28697d2606831b33e64
_chromiumver=104.0.5112.81
_gcc_patchset=2
# shellcheck disable=SC2034
pkgrel=2

_major_ver=${pkgver%%.*}
if [[ ${_use_suffix} != 0 ]]; then
  pkgname="electron${_major_ver}-xdg"
else
  pkgname=electron-xdg
fi
# shellcheck disable=SC2034
pkgdesc='Build cross platform desktop apps with web technologies - without creating a useless ~/.pki directory'
# shellcheck disable=SC2034
arch=('x86_64')
# shellcheck disable=SC2034
url='https://electronjs.org/'
# shellcheck disable=SC2034
license=('MIT' 'custom')
# shellcheck disable=SC2034
depends=('c-ares' 'ffmpeg' 'gtk3' 'libevent' 'libxslt' 'minizip' 'nss' 're2'
         'snappy')
# shellcheck disable=SC2034
makedepends=('clang' 'git' 'gn' 'gperf' 'harfbuzz-icu' 'http-parser'
             'java-runtime-headless' 'jsoncpp' 'libnotify' 'lld' 'llvm' 'ninja'
             'npm' 'pciutils' 'pipewire' 'python' 'python-httplib2'
             'python-pyparsing' 'python-six' 'wget' 'yarn')
# shellcheck disable=SC2034
optdepends=('kde-cli-tools: file deletion support (kioclient5)'
            'libappindicator-gtk3: StatusNotifierItem support'
            'pipewire: WebRTC desktop sharing under Wayland'
            'trash-cli: file deletion support (trash-put)'
            'xdg-utils: open URLs with desktop’s default (xdg-email, xdg-open)')
if [[ ${_use_suffix} == 0 ]]; then
  # shellcheck disable=SC2034
  conflicts=("electron${_major_ver}" "electron")
  # shellcheck disable=SC2034
  provides=("electron${_major_ver}" "electron")
else
  provides=("electron")
  conflicts=("electron")
fi
# shellcheck disable=SC2034
options=('!lto') # Electron adds its own flags for ThinLTO
# shellcheck disable=SC2034
source=('git+https://github.com/electron/electron.git'
        'git+https://chromium.googlesource.com/chromium/tools/depot_tools.git#branch=main'
        "https://github.com/stha09/chromium-patches/releases/download/chromium-${_chromiumver%%.*}-patchset-${_gcc_patchset}/chromium-${_chromiumver%%.*}-patchset-${_gcc_patchset}.tar.xz"
        "electron-launcher.sh"
        "electron.desktop"
        'default_app-icon.patch'
        'jinja-python-3.10.patch'
        'use-system-libraries-in-node.patch'
        'std-vector-non-const.patch'
        'x11-ozone-fix-X11-screensaver-suspension.patch'
        'roll-src-third_party-ffmpeg.patch'
        'chromium-tflite-system-zlib.patch'
        'remove-no-opaque-pointers-flag.patch'
       )
# shellcheck disable=SC2034
sha256sums=('SKIP'
            'SKIP'
            'ce702099849465927cf47f7bc3a4a27045d0e35e16b17481ebf35e14506bafa7'
            '77817939c9833f8dda74a8c75620c15747170551ffa6f14f7c5b4071599e8831'
            '4484200d90b76830b69eea3a471c103999a3ce86bb2c29e6c14c945bf4102bae'
            'dd2d248831dd4944d385ebf008426e66efe61d6fdf66f8932c963a12167947b4'
            '55dbe71dbc1f3ab60bf1fa79f7aea7ef1fe76436b1d7df48728a1f8227d2134e'
            'c70652a8b24c237bcfd27469de32797a2cb46d9f0d63d897bb6418314a25644c'
            '76b969e1534e8c355b8b524a686cbf3b24136eaa6bd40b0c09fdd9866049f159'
            '9956a843bc8a765c130080616ccd3ebc46ea95c3a2324c4b403bc293a8705eb2'
            '30df59a9e2d95dcb720357ec4a83d9be51e59cc5551365da4c0073e68ccdec44'
            '588c166bf748793758a7df438cfa665b32e09ca8fbd6380be28bc5984a33523c'
            'ab46b2c26a4dfe86486fd7e31bfc7211c515994a61a8c0cbd742f9c9e3c91873')

_system_libs=('ffmpeg'
              'flac'
              'fontconfig'
              'freetype'
              'harfbuzz-ng'
              'icu'
              'libdrm'
              'libevent'
              'libjpeg'
              'libpng'
#              'libvpx'
              'libwebp'
              'libxml'
              'libxslt'
#              'openh264'
              'opus'
              're2'
              'snappy'
              'zlib'
             )
# add custom patches by extending the bash array, as this is both cleaner
# and easier to maintain
source=(${source[@]}
        xdg-basedir.patch)
sha256sums=(${sha256sums[@]}
            'cd844867b5b2197ad097662fee32579a7091dfba1d46cb438c4c7e696690440a')

prepare() {
  sed -i "s|@ELECTRON@|${pkgname%-*}|" electron-launcher.sh
  sed -i "s|@ELECTRON@|${pkgname%-*}|" electron.desktop
  if [[ ${_use_suffix} != 0 ]]; then
    sed -i "s|@ELECTRON_NAME@|Electron ${_major_ver}|" electron.desktop
  else
    sed -i "s|@ELECTRON_NAME@|Electron|" electron.desktop
  fi

  export PATH="${PATH}:${srcdir:?}/depot_tools"

  echo "Fetching chromium..."
  git clone --branch=${_chromiumver} --depth=1 \
      https://chromium.googlesource.com/chromium/src.git

  echo "solutions = [
  {
    \"name\": \"src/electron\",
    \"url\": \"file://${srcdir}/electron@${_commit}\",
    \"deps_file\": \"DEPS\",
    \"managed\": False,
    \"custom_deps\": {
      \"src\": None,
    },
    \"custom_vars\": {},
  },
]" > .gclient

  python "${srcdir}/depot_tools/gclient.py" sync \
      --with_branch_heads \
      --with_tags \
      --nohooks

  (
    cd src/electron || exit
    patch -Np1 -i ../../std-vector-non-const.patch
  )

  echo "Running hooks..."
  # python "${srcdir}/depot_tools/gclient.py" runhooks
  src/build/landmines.py
  src/build/util/lastchange.py -o src/build/util/LASTCHANGE
  src/build/util/lastchange.py -m GPU_LISTS_VERSION \
    --revision-id-only --header src/gpu/config/gpu_lists_version.h
  src/build/util/lastchange.py -m SKIA_COMMIT_HASH \
    -s src/third_party/skia --header src/skia/ext/skia_commit_hash.h
  # Create sysmlink to system clang-format
  ln -s /usr/bin/clang-format src/buildtools/linux64
  # Create sysmlink to system Node.js
  mkdir -p src/third_party/node/linux/node-linux-x64/bin
  ln -sf /usr/bin/node src/third_party/node/linux/node-linux-x64/bin
  src/third_party/depot_tools/download_from_google_storage.py \
    --no_resume --extract --no_auth --bucket chromium-nodejs \
    -s src/third_party/node/node_modules.tar.gz.sha1
  python src/tools/download_optimization_profile.py \
    --newest_state=src/chrome/android/profiles/newest.txt \
    --local_state=src/chrome/android/profiles/local.txt \
    --output_name=src/chrome/android/profiles/afdo.prof \
    --gs_url_base=chromeos-prebuilt/afdo-job/llvm
  #vpython src/tools/update_pgo_profiles.py \
  #  --target=linux \
  #  update \
  #  --gs-url-base=chromium-optimization-profiles/pgo_profiles
  src/electron/script/apply_all_patches.py \
      src/electron/patches/config.json
  cd src/electron || exit
  yarn install --frozen-lockfile
  cd ..

  echo "Applying local patches..."
  # move ~/.pki directory to ${XDG_DATA_HOME:-$HOME/.local}/share/pki
  patch -p1 -i ../xdg-basedir.patch

  # Remove '-Xclang -no-opaque-pointers' flag not supported by our clang
  patch -Np1 -i ../remove-no-opaque-pointers-flag.patch

  # Fix build with unbundled zlip (patch from Gentoo)
  patch -Np1 -i ../chromium-tflite-system-zlib.patch

  # Upstream fixes
  patch -Np1 -i ../x11-ozone-fix-X11-screensaver-suspension.patch

  # Revert ffmpeg roll requiring new channel layout API support
  # https://crbug.com/1325301
  patch -Rp1 -i ../roll-src-third_party-ffmpeg.patch

  # Fixes for building with libstdc++ instead of libc++
  patch -Np1 -i ../patches/chromium-103-VirtualCursor-std-layout.patch

  # Electron specific fixes
  patch -d third_party/electron_node/tools/inspector_protocol/jinja2 \
      -Np1 -i ../../../../../../jinja-python-3.10.patch
  patch -Np1 -i ../use-system-libraries-in-node.patch
  patch -Np1 -i ../default_app-icon.patch  # Icon from .desktop file

  echo "Patching Chromium for using system libraries..."
  sed -i 's/OFFICIAL_BUILD/GOOGLE_CHROME_BUILD/' \
      tools/generate_shim_headers/generate_shim_headers.py
  for lib in $(printf "%s\n" "${_system_libs[@]}" | sed 's/^libjpeg$/&_turbo/'); do
      third_party_dir="third_party/${lib}"
      if [ ! -d "${third_party_dir}" ]; then
        third_party_dir="base/${third_party_dir}"
      fi
      find "${third_party_dir}" -type f \
          \! -path "${third_party_dir}/chromium/*" \
          \! -path "${third_party_dir}/google/*" \
          \! -path 'third_party/harfbuzz-ng/utils/hb_scoped.h' \
          \! -regex '.*\.\(gn\|gni\|isolate\)' \
          -delete
  done
  build/linux/unbundle/replace_gn_files.py \
      --system-libraries \
      "${_system_libs[@]}"
}

build() {
  export CC=clang
  export CXX=clang++
  export AR=ar
  export NM=nm

  # Facilitate deterministic builds (taken from build/config/compiler/BUILD.gn)
  CFLAGS+='   -Wno-builtin-macro-redefined'
  CXXFLAGS+=' -Wno-builtin-macro-redefined'
  CPPFLAGS+=' -D__DATE__=  -D__TIME__=  -D__TIMESTAMP__='

  # Do not warn about unknown warning options
  CFLAGS+='   -Wno-unknown-warning-option'
  CXXFLAGS+=' -Wno-unknown-warning-option'

  # Let Chromium set its own symbol level
  CFLAGS=${CFLAGS/-g }
  CXXFLAGS=${CXXFLAGS/-g }

  # https://github.com/ungoogled-software/ungoogled-chromium-archlinux/issues/123
  CFLAGS=${CFLAGS/-fexceptions}
  CFLAGS=${CFLAGS/-fcf-protection}
  CXXFLAGS=${CXXFLAGS/-fexceptions}
  CXXFLAGS=${CXXFLAGS/-fcf-protection}

  # This appears to cause random segfaults when combined with ThinLTO
  # https://bugs.archlinux.org/task/73518
  CFLAGS=${CFLAGS/-fstack-clash-protection}
  CXXFLAGS=${CXXFLAGS/-fstack-clash-protection}

  # https://crbug.com/957519#c122
  CXXFLAGS=${CXXFLAGS/-Wp,-D_GLIBCXX_ASSERTIONS}

  # Do not warn about unknown warning options
  CFLAGS+='   -Wno-unknown-warning-option'
  CXXFLAGS+=' -Wno-unknown-warning-option'

  cd src || exit
  export CHROMIUM_BUILDTOOLS_PATH="${PWD}/buildtools"
  GN_EXTRA_ARGS='
    custom_toolchain = "//build/toolchain/linux/unbundle:default"
    host_toolchain = "//build/toolchain/linux/unbundle:default"
    clang_use_chrome_plugins = false
    symbol_level = 0
    chrome_pgo_phase = 0
    treat_warnings_as_errors = false
    rtc_use_pipewire = true
    link_pulseaudio = true
    use_gnome_keyring = false
    use_sysroot = false
    use_custom_libcxx = false
    icu_use_data_file = false
    is_component_ffmpeg = false
  '
  gn gen out/Release \
      --args="import(\"//electron/build/args/release.gn\") ${GN_EXTRA_ARGS}"
  ninja -C out/Release electron
  # Strip before zip to avoid
  # zipfile.LargeZipFile: Filesize would require ZIP64 extensions
  strip -s out/Release/electron
  ninja -C out/Release electron_dist_zip
  # ninja -C out/Release third_party/electron_node:headers
}

package() {
  install -dm755 "${pkgdir:?}/usr/lib/${pkgname%-*}"
  bsdtar -xf src/out/Release/dist.zip -C "${pkgdir}/usr/lib/${pkgname%-*}"

  chmod u+s "${pkgdir}/usr/lib/${pkgname%-*}/chrome-sandbox"

  install -dm755 "${pkgdir}/usr/share/licenses/${pkgname%-*}"
  for l in "${pkgdir}/usr/lib/${pkgname%-*}"/{LICENSE,LICENSES.chromium.html}; do
    ln -s  \
      "$(realpath --relative-to="${pkgdir}/usr/share/licenses/${pkgname%-*}" "${l}")" \
      "${pkgdir}/usr/share/licenses/${pkgname%-*}"
  done

  install -Dm755 "${srcdir}/electron-launcher.sh" \
    "${pkgdir}/usr/bin/${pkgname%-*}"
  if [[ "${_use_suffix}" == 0 ]]; then
    ln -s "/usr/bin/${pkgname%-*}" "${pkgdir}/usr/bin/${pkgname%-*}${_major_ver}"
    ln -s "/usr/lib/${pkgname%-*}" "${pkgdir}/usr/lib/${pkgname%-*}${_major_ver}"
  fi

  # Install .desktop and icon file (see default_app-icon.patch)
  install -Dm644 electron.desktop \
    "${pkgdir}/usr/share/applications/${pkgname%-*}.desktop"
  install -Dm644 src/electron/default_app/icon.png \
          "${pkgdir}/usr/share/pixmaps/${pkgname%-*}.png"  # hicolor has no 1024x1024
}
