# Maintainer: AltoXorg <atrl101 AT yahoo DOT com>

_romname=gc_nmq_d
_romdesc="Ocarina of Time Gamecube Europe PAL Debug"
pkgname=soh-otr-${_romname}
pkgver=5
pkgrel=1
pkgdesc="OTR game data for SoH (${_romdesc})"
arch=("any")
url="https://github.com/HarbourMasters/Shipwright"
license=("unknown")
provides=("soh-otr")
conflicts=("soh-otr")
depends=("soh")
makedepends=("soh-otr-exporter")
source=("file://baserom.z64")
sha256sums=('94bdeb4ab906db112078a902f4477e9712c4fe803c4efb98c7b97c3f950305ab')

SHIP_PREFIX=/opt/soh

build() {
  cd "${srcdir}"

  [ -e oot.otr ] && rm oot.otr
  [ ! -e assets ] && ln -s ${SHIP_PREFIX}/assets assets
  [ -e Extract ] && rm -r Extract; mkdir Extract
  cp -r "${SHIP_PREFIX}"/assets/game Extract/assets/

  "assets/extractor/ZAPD.out" ed -eh -i "assets/extractor/xmls/${_romname^^}" \
    -b baserom.z64 -fl "assets/extractor/filelists" -o placeholder -osf placeholder -gsf 1 \
    -rconf "assets/extractor/Config_${_romname^^}.xml" -se OTR
}

package() {
  cd "${srcdir}"

  install -Dm644 oot.otr -t "${pkgdir}/${SHIP_PREFIX}"
}

