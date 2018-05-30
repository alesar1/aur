# Contributor: Raffaele Zamorano
# Contributor: Jose Riha <jose1711 gmail com>
# Maintainer: Nikolay Korotkiy <sikmir@gmail.com>
_orgname=tumic0
_pkgname=GPXSee
_branch=master
pkgname=${_pkgname,,}-git
pkgver=5.13.r1011.2c816a5
pkgrel=1
pkgdesc='GPS log file viewer and analyzer'
arch=('i686' 'x86_64')
url="http://www.gpxsee.org/"
license=('GPL3')
depends=('qt5-base')
makedepends=('git' 'qt5-tools')
#makedepends=('python' 'qt5-tools')
optdepends=('qt5-imageformats: Support for TIFF')
provides=("${pkgname//-git}=${pkgver}")
conflicts=(${pkgname//-git})
source=("${_pkgname}-${_branch}::git://github.com/${_orgname}/${_pkgname}.git#branch=${_branch}")
#source=("https://github.com/${_orgname}/${_pkgname}/archive/${_branch}.tar.gz")
sha256sums=('SKIP')

pkgver() {
  cd ${_pkgname}-${_branch}

  RELEASE="$(git describe --tags $(git rev-list --tags --max-count=1))"
  REVISION="$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
  printf "%s.r%s" "${RELEASE}" "${REVISION}"
}

#pkgver() {
#  api_url="https://api.github.com/repos/${_orgname}/${_pkgname}"
#  base="928e259d"
#  head=$(curl -s "$api_url/git/refs/heads/${_branch}" | \
#    python -c "import sys, json; print(json.load(sys.stdin)['object']['sha'][:8])")
#  count=$(curl -s "$api_url/compare/${base}...${head}" | \
#    python -c "import sys, json; print(json.load(sys.stdin)['total_commits'] + 1)")
#  release=$(curl -s "$api_url/tags" | \
#    python -c "import sys, json; r = json.load(sys.stdin)[0]; print(r['name'])")
#  printf "%s.r%s.%s" "${release}" "${count}" "${head}"
#}

prepare() {
  cd ${_pkgname}-${_branch}

  sed -i "s/\(VERSION = \).*/\1${pkgver}/" gpxsee.pro
}

build() {
  cd ${_pkgname}-${_branch}

  lrelease-qt5 gpxsee.pro
  qmake gpxsee.pro
  make
}

package() {
  cd ${_pkgname}-${_branch}

  install -d 755 ${pkgdir}/usr/bin
  install -d 755 ${pkgdir}/usr/share/applications
  install -d 755 ${pkgdir}/usr/share/pixmaps
  install -d 755 ${pkgdir}/usr/share/mime/packages
  install -d 755 ${pkgdir}/usr/share/${pkgname//-git}
  install -d 755 ${pkgdir}/usr/share/${pkgname//-git}/maps
  install -d 755 ${pkgdir}/usr/share/${pkgname//-git}/csv
  install -d 755 ${pkgdir}/usr/share/${pkgname//-git}/translations

  install -m 755 GPXSee ${pkgdir}/usr/bin/${pkgname//-git}
  install -m 644 pkg/maps/* ${pkgdir}/usr/share/${pkgname//-git}/maps
  install -m 644 pkg/csv/* ${pkgdir}/usr/share/${pkgname//-git}/csv
  install -m 644 lang/*.qm ${pkgdir}/usr/share/${pkgname//-git}/translations
  install -m 644 icons/gpxsee.png ${pkgdir}/usr/share/pixmaps/${pkgname//-git}.png
  install -m 644 pkg/gpxsee.desktop ${pkgdir}/usr/share/applications/${pkgname//-git}.desktop
  install -m 644 pkg/gpxsee.xml ${pkgdir}/usr/share/mime/packages/${pkgname//-git}.xml
}
