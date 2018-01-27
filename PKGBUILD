# Maintainer: Martchus <martchus@gmx.net>

# All my PKGBUILDs are managed at https://github.com/Martchus/PKGBUILDs where
# you also find the URL of a binary repository.

# set the web view provider: either webkit, webengine, auto or none
_webview_provider=webkit

# set the JavaScript provider: either script, qml, auto or none
_js_provider=qml

# whether the experimental JSON export is enabled: ON or OFF
_json_export=ON

_reponame=tageditor
pkgname=tageditor
pkgver=2.3.2
pkgrel=1
arch=('i686' 'x86_64')
pkgdesc='A tag editor with Qt GUI and command-line interface supporting MP4/M4A/AAC (iTunes), ID3, Vorbis, Opus, FLAC and Matroska'
license=('GPL')
depends=('qtutilities>=5.6.0' 'tagparser>=6.2.0' 'desktop-file-utils' 'xdg-utils')
[[ $_webview_provider == none ]] && [[ $_js_provider == none ]] && depends+=('qt5-base>=5.6')
[[ $_webview_provider == webkit ]] && depends+=('qt5-webkit')
[[ $_webview_provider == webengine ]] && depends+=('qt5-webengine>=5.6')
[[ $_js_provider == script ]] && depends+=('qt5-script>=5.6')
[[ $_js_provider == qml ]] && depends+=('qt5-declarative>=5.6')
makedepends=('cmake' 'qt5-tools')
[[ $_json_export == ON ]] && makedepends+=('reflective-rapidjson')
checkdepends=('cppunit')
url="https://github.com/Martchus/${_reponame}"
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/Martchus/${_reponame}/archive/v${pkgver}.tar.gz")
sha256sums=('d829f4dee076a33d9404c297061dc734848413f2b0cca1a6bdb49ebc253c1864')

build() {
  cd "$srcdir/${PROJECT_DIR_NAME:-$_reponame-$pkgver}"
  cmake \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX="/usr" \
    -DWEBVIEW_PROVIDER="${_webview_provider}" \
    -DJS_PROVIDER="${_js_provider}" \
    -DENABLE_JSON_EXPORT="${_json_export}" \
    -DREFLECTION_GENERATOR_EXECUTABLE:FILEPATH='/usr/bin/reflective_rapidjson_generator'
  make
}

check() {
  cd "$srcdir/${PROJECT_DIR_NAME:-$_reponame-$pkgver}"
  if [[ $TEST_FILE_PATH ]]; then
    make check
  else
    msg2 'Skipping execution of testsuite because the environment variable TEST_FILE_PATH is not set.'
  fi
}

package() {
  cd "$srcdir/${PROJECT_DIR_NAME:-$_reponame-$pkgver}"
  make DESTDIR="${pkgdir}" install
}
