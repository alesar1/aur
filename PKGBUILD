# Maintainer: Nikolay Korotkiy <sikmir@gmail.com>
_orgname=OpenOrienteering
_pkgname=mapper
_branch=master
pkgname=${_orgname,,}-${_pkgname}-git
pkgver=0.8.1.2pre.r4582.07a64a2f
pkgrel=1
pkgdesc="Map drawing program from OpenOrienteering"
arch=('i686' 'x86_64')
url="http://www.openorienteering.org/apps/mapper/"
license=('GPL3')
depends=('qt5-base>=5.6' 'polyclipping>=6.1.3a' 'proj>=4.9.2' 'gdal')
#makedepends=('git' 'cmake>=3.2' 'qt5-tools>=5.6' 'doxygen' 'libcups')
makedepends=('python' 'cmake>=3.2' 'qt5-tools>=5.6' 'doxygen' 'libcups')
optdepends=('qt5-imageformats: Support for TIFF etc.')
provides=("${pkgname//-git}=${pkgver}")
conflicts=(${pkgname//-git})
install=${pkgname//-git}.install
#source=("${_pkgname}-${_branch}::git://github.com/${_orgname}/${_pkgname}.git#branch=${_branch}")
source=("https://github.com/${_orgname}/${_pkgname}/archive/${_branch}.tar.gz")
sha256sums=('SKIP')

#pkgver() {
#  cd ${_pkgname}-${_branch}
#
#  RELEASE="$(git describe --tags $(git rev-list --tags --max-count=1) | tr '-' '.')"
#  REVISION="$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
#  printf "%s.r%s" "${RELEASE#?}" "${REVISION}"
#}

pkgver() {
  api_url="https://api.github.com/repos/${_orgname}/${_pkgname}"
  base="8a8986ec"
  head=$(curl -s "$api_url/git/refs/heads/${_branch}" | \
    python -c "import sys, json; print(json.load(sys.stdin)['object']['sha'][:8])")
  count=$(curl -s "$api_url/compare/${base}...${head}" | \
    python -c "import sys, json; print(json.load(sys.stdin)['total_commits'] + 1)")
  release=$(curl -s "$api_url/releases" | \
    python -c "import sys, json; r = json.load(sys.stdin)[0]; print(r['tag_name'] + ('pre' if r['prerelease'] else ''))")
  printf "%s.r%s.%s" "${release#?}" "${count}" "${head}"
}

prepare() {
  cd ${_pkgname}-${_branch}/translations
  weblate_url="https://hosted.weblate.org/download/${_orgname}"
  for lang in `ls OpenOrienteering_*.ts | sed 's/OpenOrienteering_\(.*\)\.ts/\1/;/template/d;s/zh_CN/zh_Hans/'`; do
    curl -so OpenOrienteering_$lang.ts $weblate_url/${_pkgname}/$lang/
  done
  rename Hans.ts CN.ts OpenOrienteering_zh_Hans.ts
  for lang in `ls map_symbols_*.ts | sed 's/map_symbols_\(.*\)\.ts/\1/;/template/d'`; do
    curl -so map_symbols_$lang.ts $weblate_url/map-symbols/$lang/
  done
  for lang in `ls qt_*.ts | sed 's/qt_\(.*\)\.ts/\1/;/template/d'`; do
    curl -so qt_$lang.ts $weblate_url/qt/$lang/
  done
}

build() {
  cd ${_pkgname}-${_branch}

  rm -rf build
  mkdir -p build
  cd build

  cmake ..                      \
    -DCMAKE_BUILD_TYPE=Release  \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DLICENSING_PROVIDER=arch   \
    -DMapper_PACKAGE_NAME=${pkgname//-git} \
    -DMapper_VERSION_DISPLAY=${pkgver} \
    -Wno-dev
  make
}

package() {
  cd ${_pkgname}-${_branch}/build

  make DESTDIR=${pkgdir}/ install
}
