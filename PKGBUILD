# Contributor: Philipp Schwarz <fidschi_aur@temporaryforwarding.com>
# Contributor: Stefan Husmann <stefan-husmann@t-online.de>
# Contributor: Dany Martineau <dany.luc.martineau at gmail.com>
# Contributor: moostik <mooostik_at_gmail.com>
# Maintainer: Michael Kogan <michael.kogan at gmx.net>

pkgname=car
pkgver=2016.03.25
pkgrel=6
url="http://car.rene-grothmann.de/"
pkgdesc="Compass and Ruler is a dynamic geometry program"
arch=('any')
license=('GPL')
depends=('java-runtime' 'xdg-utils')
source=("http://car.rene-grothmann.de/download/car.zip"
        "${pkgname}.desktop"
	"${pkgname}.sh")
md5sums=('fa68cdf9976b3826f6d8ac74fd4e1c0e'
         '9bf9a70cf538378bde46f3da2c252a4c'
         '2539542867d5f23e823b7a7704f17443')

package() {
        cd "${srcdir}/car"
	install -Dm644 "${srcdir}/car/doc_en/zirkel.jar" \
	  "${pkgdir}/usr/share/java/car/zirkel.jar"
	install -d "${pkgdir}/usr/share/pixmaps"
	install -Dm644 "${srcdir}/car/doc_en/images/ZuL-Logo.png" \
	  "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
	install -Dm755 "${srcdir}/${pkgname}.sh" "${pkgdir}/usr/bin/${pkgname}"
	install -Dm644 "${srcdir}/${pkgname}.desktop" \
	  "${pkgdir}/usr/share/applications/${pkgname}.desktop"
	install -d "$pkgdir"/usr/share/doc/${pkgname}/
	cp -r "${srcdir}"/car/doc_en/* "$pkgdir"/usr/share/doc/${pkgname}/
} 
