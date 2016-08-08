# Maintainer: Christoph Steinacker <archologist.linuxATgooglemailDOTcom>
pkgname=jes
pkgver=1.01.26
pkgrel=1
pkgdesc="A java-based tool for german cash method of accounting (Einnahme-Überschuss-Rechnung)"
arch=('any')
url="http://www.jes-eur.de"
license=('custom')
#install="${pkgname}.install"
depends=('java-runtime' 'x-server' 'xdg-utils')
source=(http://www.jes-eur.de/userfiles/downloads/jes/jes_10126.zip
    ${pkgname}.desktop
	${pkgname}.sh.new
	LICENSE
)
package() {
  # Removing delivered shell script
  rm $srcdir/$pkgname.sh

  cd ${srcdir}
  install -D -m755 jes.jar ${pkgdir}/usr/share/java/${pkgname}/jes.jar

  install -D -m755 ${pkgname}.sh.new ${pkgdir}/usr/bin/${pkgname}
  install -D -m644 ${pkgname}.desktop ${pkgdir}/usr/share/applications/${pkgname}.desktop

  # Installing the LICENSE
  install -D -m644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE

  # Installing the icons
  install -D -m644 ${pkgname}.png ${pkgdir}/usr/share/icons/hicolor/128x128/apps/${pkgname}.png
}
sha512sums=('e5ddcc5f2d9cb9520c74c99ba03a214fe46d07b952c183553eb9c044b9f773d975af56b8531a2baf816107acd95e29c9ab1f18cb94d76e5becc9c5a8b65cd84e'
            '947316e50858cc0d00f853b17a11fdca733aa6c13c9dc6f0c901a70515bb8eefd8151eba68c39e1bf4e0f6d0f6f252e16d078786ff2b05074584e79714762eed'
            '869bb56593aeb13e804df88981c83af55f291d7f7531ec8cd1c4847a4fdbed52d4cc11ec7604c07a729504155f25a3f4741f16b444b8dd77249d42299e8bfec0'
            '7e5cb765fed87f9035bd81c238f3de87b82dfb52197528dd8b647c299cbc11ffe9c0b6fc69cee03a02a0e861dca016a45a2fe8b20c7668725c2009a0c461277f')
