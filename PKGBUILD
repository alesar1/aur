# Maintainer: Butui Hu <hot123tea123@gmail.com>

_pkgname=fiji
pkgname=fiji-bin
pkgver=20201104.1356
pkgrel=1
epoch=2
pkgdesc="ImageJ distribution with a lot of plugins for scientific (especially biology related) image processing."
arch=('x86_64')
url='http://fiji.sc/'
license=('GPL')
depends=(
  'freetype2'
  'libnet'
)
makedepends=('gendesk')

source=("${pkgname}-${pkgver}.zip::https://downloads.imagej.net/fiji/archive/${pkgver/./-}/fiji-linux64.zip")
sha256sums=('1343bd5a8472541f9e5a67a9fb86e82671c70c48f8c356ed96b2cca96281e46c')


prepare() {
  echo "Creating desktop file"
  gendesk -f -n --pkgname ${_pkgname} \
    --pkgdesc "${pkgdesc}" \
    --categories "Graphics;Science;ImageProcessing;" \
    --icon "${_pkgname}" \
    --exec ${_pkgname}
}

package()
{
  install -d "${pkgdir}/opt" "${pkgdir}/usr/bin" "${pkgdir}/usr/share/pixmaps"
  mv "${srcdir}/Fiji.app" "${pkgdir}/opt/${_pkgname}"
  cp "${pkgdir}/opt/${_pkgname}/images/icon.png" "${pkgdir}/usr/share/pixmaps/${_pkgname}.png"
  ln -s "/opt/${_pkgname}/ImageJ-linux64" "${pkgdir}/usr/bin/${_pkgname}"
  install -Dm644 "${srcdir}/fiji.desktop" "${pkgdir}/usr/share/applications/fiji.desktop"
}
