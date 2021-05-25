# Maintainer: Markus Weimar <mail@markusweimar.de>
pkgname=ttf-charis-sil
pkgver=5.000
pkgrel=5
pkgdesc='Transitional serif typeface based on Bitstream Charter.'
arch=('any')
url='https://software.sil.org/charis/'
license=('OFL')
conflicts=('ttf-sil-fonts<=6')
source=("https://software.sil.org/downloads/r/charis/CharisSIL-${pkgver}.zip")
sha256sums=('5e3e5473b30363008c289cc87e2aa584a0916087a63a3f689defa8e0cee09bfd')

package() {
    install -d ${pkgdir}/usr/share/fonts/TTF/
    install -m644 ${srcdir}/CharisSIL-${pkgver}/*.ttf ${pkgdir}/usr/share/fonts/TTF/
    install -D -m644 ${srcdir}/CharisSIL-${pkgver}/OFL.txt ${pkgdir}/usr/share/licenses/${pkgname}/OFL.txt
}
