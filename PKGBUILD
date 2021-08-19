# Maintainer: t-ask <t-ask-aur at cixera.com>
# Co-maintainer: Oscar Morante <spacepluk@gmail.com>
# Co-maintainer: Dragoon Aethis <dragoon@dragonic.eu>

pkgname=substance-painter
pkgver=7.2.2
_build=1163
pkgrel=1
pkgdesc="3D painting software allowing you to texture, render and share your work."
arch=('x86_64')
url='https://download.substance3d.com/substance-painter'
license=('custom')
depends=('fontconfig' 'gcc-libs-multilib' 'glu' 'hicolor-icon-theme' 'libtiff4')
options=('!strip') # PNG assets here should be left untouched!
# https://download.substance3d.com/adobe-substance-3d-painter/7.x/Adobe_Substance_3D_Painter-7.2.2-1163-linux-x64-standard.rpm
source=("https://download.substance3d.com/adobe-substance-3d-painter/7.x/Adobe_Substance_3D_Painter-${pkgver}-${_build}-linux-x64-standard.rpm")

sha256sums=('26137d78715f445a17602ab80e192bcec6355ecb641b4869c5a01259051983db')

validpgpkeys=()

package() {
  mkdir -p "${pkgdir}/opt/Adobe"

  install -Dm644 -t "${pkgdir}/usr/share/applications" "${srcdir}/opt/Adobe/Adobe_Substance_3D_Painter/resources/adobe-Adobe_Substance_3D_Painter.desktop"
  install -Dm644 -t "${pkgdir}/usr/share/mime/packages" "${srcdir}/opt/Adobe/Adobe_Substance_3D_Painter/resources/adobe-x.adobe.substance3d.painter.xml"
  install -Dm644 -t "${pkgdir}/usr/share/icons" "${srcdir}/opt/Adobe/Adobe_Substance_3D_Painter/resources/icons/painter-256x256.png"

  mv "${pkgdir}/usr/share/icons/painter-256x256.png" "${pkgdir}/usr/share/icons/adobe-Adobe_Substance_3D_Painter.png"
  mv "${srcdir}/opt/Adobe/Adobe_Substance_3D_Painter" "${pkgdir}/opt/Adobe/"
}
