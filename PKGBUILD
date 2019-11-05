# Maintainer: Butui Hu <hot123tea123@gmail.com>

pkgname=qupath-bin
_pkgname=QuPath
pkgver=0.2.0_m5
pkgrel=1
pkgdesc="An open, powerful, flexible, extensible software platform for whole slide image analysis."
arch=('x86_64')
url="https://qupath.github.io"
license=('GPL')
depends=(
  'freetype2'
  'java-runtime'  
  'libjpeg-turbo'
  'libnet'
  'libtiff'
  'libxml2'
  'sqlite'
)
makedepends=('gendesk')
provides=(qupath=${pkgver})
conflicts=('qupath')
source=(
    "${pkgname}-${pkgver}.tar.xz::https://github.com/qupath/qupath/releases/download/v${pkgver//_/-}/${_pkgname}-${pkgver//_/-}-Linux.tar.xz"
)
sha512sums=('fe5b68e4aecfbdb17022ccfffea2a4bb3eddb65faae292b281afbfa2289c9073f790a3414be7dc95580cab476e4a1b4fe99456050601cab1f2c5e9d5fbd9f362')

prepare() {
  msg2 "Creating desktop file"
  gendesk -f -n --pkgname ${_pkgname} \
    --pkgdesc "${pkgdesc}" \
    --categories "Graphics;MedicalSoftware;Science;" \
    --icon "${_pkgname}" \
    --exec "qupath"
}
package() {
  install -d "${pkgdir}/opt" "${pkgdir}/usr/bin" "${pkgdir}/usr/share/pixmaps"
  mv "${srcdir}/${_pkgname}-${pkgver//_/-}" "${pkgdir}/opt/${_pkgname}"
  find "${pkgdir}/opt/${_pkgname}" -type f -name "*.png" -exec cp -vf {} "${pkgdir}/usr/share/pixmaps/${_pkgname}.png" \;
  ln -s /opt/${_pkgname}/bin/${_pkgname}-${pkgver//_/-} "${pkgdir}/usr/bin/qupath"
  install -Dm644 "${srcdir}/${_pkgname}.desktop" "${pkgdir}/usr/share/applications/${_pkgname}.desktop"
}
# vim:set ts=2 sw=2 et:

