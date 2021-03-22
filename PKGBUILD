# Maintainer: Benjamin Stürz <benni@stuerz.xyz>
pkgname=mkslideshow
pkgver=1.1
pkgrel=1
pkgdesc="A small tool for making simple slide-shows"
arch=('any')
url="https://github.com/Benni3D/mkslideshow.git"
license=('GPL2')
depends=('ffmpeg')
optdepends=('zenity: needed by mkslideshow_gui')
source=("https://github.com/Benni3D/mkslideshow/archive/v${pkgver}.tar.gz")
md5sums=('0bc5383ca9a6156ec80e4cad0458517c')

package() {
   cd "${srcdir}/${pkgname}-${pkgver}"
   install -dm755 "${pkgdir}/usr/share/licenses/${pkgname}"
   install -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
   make DESTDIR="${pkgdir}/usr" install
}
