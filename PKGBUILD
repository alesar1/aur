# $Id: PKGBUILD 71073 2012-05-23 06:56:29Z allan $
# Mantainer: Hector Mtz-Seara <hseara.at.gmail.com>
# Contributor: Allan McRae <allan@archlinux.org>
# Contributor: Christian Storm <Christian.Storm@gmx.de>

# This PKGBUILD is maintained on github:
# https://github.com/michaellass/AUR

pkgname=jabref
pkgver=3.2
pkgrel=2
pkgdesc="GUI frontend for BibTeX, written in Java"
arch=('any')
url="http://www.jabref.org/"
license=('GPL')
depends=('java-runtime>=8')
optdepends=(
   'gsettings-desktop-schemas: For web search support'
)
source=(http://downloads.sourceforge.net/$pkgname/JabRef-${pkgver}.jar
        jabref.sh
        jabref.desktop)
sha256sums=('5f3d18052019dd10475de6e8e1d3c900300cd7195d6e1e6262fab104d06abadb'
            '0355f5135a6d855416160d4ff1cf8fe5e55921088b83491647b6a714dae87dda'
            'f958793f6e408bab7db84973169b30ed61077112d3f552dbcc9f068847317602')

package() {
  cd ${srcdir}
  install -Dm755 JabRef-${pkgver}.jar ${pkgdir}/usr/share/java/${pkgname}/JabRef-${pkgver}.jar

  install -Dm755 ${pkgname}.sh ${pkgdir}/usr/bin/${pkgname}
  sed -i "s/VERSION/${pkgver}/" ${pkgdir}/usr/bin/${pkgname}

  install -Dm644 ${pkgname}.desktop ${pkgdir}/usr/share/applications/${pkgname}.desktop
  install -Dm644 images/icons/JabRef-icon-48.png ${pkgdir}/usr/share/pixmaps/${pkgname}.png
}
