# Maintainer: Martchus <martchus@gmx.net>

# All my PKGBUILDs are managed at https://github.com/Martchus/PKGBUILDs where
# you also find the URL of a binary repository.

# set the web view provider: either webkit, webengine, auto or none
_webview_provider=${MINGW_64_TAGEDITOR_WEBVIEW_PROVIDER:-none}

# set the JavaScript provider: either script, qml, auto or none
_js_provider=${MINGW_64_TAGEDITOR_JS_PROVIDER:-qml}

# whether the experimental JSON export is enabled: ON or OFF
_json_export=${MINGW_64_TAGEDITOR_JSON_EXPORT:-ON}

_reponame=tageditor
pkgname=mingw-w64-tageditor
_name=${pkgname#mingw-w64-}
pkgver=3.3.6
pkgrel=1
arch=('any')
pkgdesc='A tag editor with Qt GUI and command-line interface supporting MP4/M4A/AAC (iTunes), ID3, Vorbis, Opus, FLAC and Matroska'
license=('GPL')
depends=('mingw-w64-crt' 'mingw-w64-qtutilities>=5.6.0' 'mingw-w64-tagparser>=6.2.0')
[[ $_webview_provider == none ]] && [[ $_js_provider == none ]] && depends+=('mingw-w64-qt5-base>=5.6')
[[ $_webview_provider == webkit ]] && depends+=('mingw-w64-qt5-webkit')
[[ $_webview_provider == webengine ]] && depends+=('mingw-w64-qt5-webengine>=5.6')
[[ $_js_provider == script ]] && depends+=('mingw-w64-qt5-script>=5.6')
[[ $_js_provider == qml ]] && depends+=('mingw-w64-qt5-declarative>=5.6')
makedepends=('mingw-w64-gcc' 'mingw-w64-cmake' 'mingw-w64-qt5-tools' 'ffmpeg')
[[ $_json_export == ON ]] && makedepends+=('mingw-w64-reflective-rapidjson')
url="https://github.com/Martchus/${_reponame}"
source=("${_name}-${pkgver}.tar.gz::https://github.com/Martchus/${_reponame}/archive/v${pkgver}.tar.gz")
sha256sums=('23cd6e03732757ef4e0d4a5fc6f2257a37b2eaa127da87a8be6a9bff5ec379b6')
options=(!buildflags staticlibs !strip !emptydirs)

_architectures=('i686-w64-mingw32' 'x86_64-w64-mingw32')
_configurations=()
[[ $NO_SHARED_LIBS ]] || _configurations+=('shared')
[[ $NO_STATIC_LIBS ]] || _configurations+=('static') makedepends+=('mingw-w64-qt5-base-static' 'mingw-w64-qt5-translations' 'mingw-w64-qt5-svg' 'breeze-icons' 'numix-icon-theme-git')

build() {
  cd "$srcdir/${PROJECT_DIR_NAME:-$_reponame-$pkgver}"

  declare -A _config_flags=(
    [shared]='
        -DBUILD_SHARED_LIBS:BOOL=ON
    '
    [static]='
        -DBUILD_SHARED_LIBS:BOOL=OFF
        -DCMAKE_FIND_LIBRARY_SUFFIXES:STRING=.a;.lib
        -DSTATIC_LINKAGE:BOOL=ON
        -DSTATIC_LIBRARY_LINKAGE:BOOL=ON
        -DQT_PACKAGE_PREFIX=StaticQt5
        -DKF_PACKAGE_PREFIX=StaticKF5
        -DTAGEDITOR_CONFIGURATION_TARGET_SUFFIX:STRING=static
        -DENABLE_QT_TRANSLATIONS:BOOL=ON
        -DBUILTIN_TRANSLATIONS:BOOL=ON
        -DBUILTIN_ICON_THEMES:STRING=breeze;breeze-dark;Numix
        -DIMAGE_FORMAT_SUPPORT:STRING=Gif;ICO;Jpeg
        -DSVG_SUPPORT:BOOL=ON
        -DSVG_ICON_SUPPORT:BOOL=0N
    '
  )

  for _arch in "${_architectures[@]}"; do
    local gcc_version=$($_arch-gcc --version | grep "^$_arch-gcc" | sed 's/^.* //g')

    for _cfg in "${_configurations[@]}"; do
      msg2 "${_arch}-${_cfg}"
      mkdir -p "build-${_arch}-${_cfg}" && pushd "build-${_arch}-${_cfg}"
      ${_arch}-cmake \
        -DCMAKE_BUILD_TYPE:STRING='Release' \
        -DCMAKE_INSTALL_PREFIX="/usr/${_arch}" \
        -DCONFIGURATION_NAME:STRING="${_cfg}" \
        -DCONFIGURATION_PACKAGE_SUFFIX:STRING="-${_cfg}" \
        -DWEBVIEW_PROVIDER:STRING="${_webview_provider}" \
        -DJS_PROVIDER:STRING="${_js_provider}" \
        -DENABLE_JSON_EXPORT:BOOL="${_json_export}" \
        -DREFLECTION_GENERATOR_EXECUTABLE:FILEPATH='/usr/bin/reflective_rapidjson_generator' \
        -DREFLECTION_GENERATOR_TRIPLE:STRING="${_arch}" \
        -DREFLECTION_GENERATOR_INCLUDE_DIRECTORIES="/usr/lib/gcc/${_arch}/${gcc_version}/include;/usr/${_arch}/include/c++/${gcc_version};/usr/${_arch}/include/c++/${gcc_version}/${_arch};/usr/${_arch}/include" \
	-DENABLE_TARGETS_FOR_MINGW64_CROSS_PACKAGING:BOOL=ON \
        ${_config_flags[$_cfg]} \
        ../
      make
      popd
    done
  done
}

package() {
  cd "$srcdir/${PROJECT_DIR_NAME:-$_reponame-$pkgver}"

  install \
    -D --target-directory="$pkgdir/usr/share/licenses/$pkgname" \
    LICENSES-windows-distribution.md

  for _arch in "${_architectures[@]}"; do
    for _cfg in "${_configurations[@]}"; do
      msg2 "${_arch}-${_cfg}"
      pushd "build-${_arch}-${_cfg}"
      make DESTDIR="${pkgdir}" install-mingw-w64-strip
      popd
    done
  done
}
