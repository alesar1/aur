# Maintainer: Martchus <martchus@gmx.net>

# All my PKGBUILDs are managed at https://github.com/Martchus/PKGBUILDs where
# you also find the URL of a binary repository.

_reponame=passwordmanager
pkgname=mingw-w64-passwordmanager
_name=${pkgname#mingw-w64-}
pkgver=4.1.4
pkgrel=1
arch=('any')
pkgdesc='A simple password store using AES-256-CBC encryption via OpenSSL (mingw-w64)'
license=('GPL')
depends=('mingw-w64-crt' 'mingw-w64-qt5-base' 'mingw-w64-qtutilities' 'mingw-w64-passwordfile' 'mingw-w64-openssl')
makedepends=('mingw-w64-gcc' 'mingw-w64-cmake' 'mingw-w64-qt5-tools' 'ffmpeg')
url="https://github.com/Martchus/${_reponame}"
source=("${_name}-${pkgver}.tar.gz::https://github.com/Martchus/${_reponame}/archive/v${pkgver}.tar.gz")
sha256sums=('e6f6c929a52e6df03f2cfff689a0a2165ecca50d1477f49825b3d574fea2bfc6')
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
        -DPASSWORD_MANAGER_CONFIGURATION_TARGET_SUFFIX:STRING=static
        -DENABLE_QT_TRANSLATIONS:BOOL=ON
        -DBUILTIN_TRANSLATIONS:BOOL=ON
        -DBUILTIN_ICON_THEMES:STRING=breeze;breeze-dark;Numix
        -DIMAGE_FORMAT_SUPPORT:STRING=Gif;ICO;Jpeg
        -DSVG_SUPPORT:BOOL=ON
        -DSVG_ICON_SUPPORT:BOOL=0N
    '
  )

  for _arch in "${_architectures[@]}"; do
    for _cfg in "${_configurations[@]}"; do
      msg2 "${_arch}-${_cfg}"
      mkdir -p "build-${_arch}-${_cfg}" && pushd "build-${_arch}-${_cfg}"
      ${_arch}-cmake \
        -DCMAKE_BUILD_TYPE:STRING='Release' \
        -DCMAKE_INSTALL_PREFIX="/usr/${_arch}" \
        -DCONFIGURATION_NAME:STRING="${_cfg}" \
        -DCONFIGURATION_PACKAGE_SUFFIX:STRING="-${_cfg}" \
	-DENABLE_TARGETS_FOR_MINGW64_CROSS_PACKAGING:BOOL=ON \
        -DQUICK_GUI:BOOL=OFF \
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
