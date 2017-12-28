# Maintainer: Jesse Spangenberger <azulephoenix@gmail.com>
# Contributor: Tristelune <tristelune@archlinux.info>
pkgname=pdfstudio
pkgver=12.0.6
_pkgver=v12_0_6
pkgrel=1
pkgdesc="Review, annotate, and edit PDF Documents"
arch=('i686' 'x86_64')
url="http://www.qoppa.com/pdfstudio/"
license=('custom')
conflicts=('pdfstudio11' 'pdfstudio8' 'pdfstudio9' 'pdfstudio10')
provides=('pdfstudio')
makedepends=('pacman>=4.2.0')
depends=('java-runtime>=6' 'desktop-file-utils')

install=${pkgname}.install     
     
sha256sums=('454fbc31f8951f3affcaa0c432b78591a3012a428768f196face44c03b5709ec'
            'b82acfb50e1e15a43c54aba7a0712b6c710c10ae74280a26a451343720e965e3'
            '0a3c1c337a22228f3df28412ca65d45d0d8067b508cf7b1cf93810fc17c9b447')
sha256sums_i686=('98e2f0ba0356e6fa07ba7fad90c70546ded14a4d707b14ca87b0a9dcb836afa2')
sha256sums_x86_64=('c9c924b6e94881684971ada4620d59f5688ce1903cd3df42c7ed568aff62e8b9')
source_i686=("http://download.qoppa.com/pdfstudio/v12/PDFStudio_${_pkgver}_linux.deb")
source_x86_64=("http://download.qoppa.com/pdfstudio/v12/PDFStudio_${_pkgver}_linux64.deb")
source=(${pkgname}.desktop
	${pkgname}.install
	${pkgname}.png)

prepare() {
	bsdtar xf data.tar.gz
	bsdtar xf "opt/pdfstudio12/lib/pdfstudio.jar" resources/license.html

	rm -rf "opt/pdfstudio12/jre"
}

package() {

	cd "${srcdir}"
			
	install -dm 755 "${pkgdir}/opt"
	install -Dm644 ${pkgname}.desktop "${pkgdir}/usr/share/applications/${pkgname}.desktop"
	install -Dm644 ${pkgname}.png "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
	install -Dm644 resources/license.html "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.html"
	
	cp -r opt/ "${pkgdir}"
	mkdir -p "${pkgdir}/usr/bin"
	ln -s /opt/pdfstudio12/pdfstudio12 "${pkgdir}/usr/bin/pdfstudio"
}
