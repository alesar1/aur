# Maintainer:  Michael Lass <bevan@bi-co.net>
# Contributor: Hector Mtz-Seara <hseara.at.gmail.com>
# Contributor: Allan McRae <allan@archlinux.org>
# Contributor: Christian Storm <Christian.Storm@gmx.de>

# This PKGBUILD is maintained on github:
# https://github.com/michaellass/AUR

pkgname=jabref
pkgver=3.8
pkgrel=1
pkgdesc="GUI frontend for BibTeX, written in Java"
arch=('any')
url="http://www.jabref.org/"
license=('MIT')
depends=('java-runtime>=8')
optdepends=(
   'gsettings-desktop-schemas: For web search support'
)
source=(https://github.com/JabRef/jabref/releases/download/v${pkgver}/JabRef-${pkgver}.jar
        https://raw.githubusercontent.com/JabRef/jabref/master/LICENSE.md
        jabref.sh
        jabref.desktop)
noextract=(JabRef-${pkgver}.jar)
sha256sums=('13bcfd10ab3d2dbe21dfad06ecf4dbf1cd08e4e1fe6a6a93293d844b4c5c3a98'
            '19f74c294c572a431e0fadc00671aa5ca77149f8d0572fc01d5944eba06b0c6c'
            '0355f5135a6d855416160d4ff1cf8fe5e55921088b83491647b6a714dae87dda'
            'f958793f6e408bab7db84973169b30ed61077112d3f552dbcc9f068847317602')

prepare() {
  cd ${srcdir}
  bsdtar -xf JabRef-${pkgver}.jar images/icons/JabRef-icon-48.png
}

package() {
  cd ${srcdir}
  install -Dm755 JabRef-${pkgver}.jar ${pkgdir}/usr/share/java/${pkgname}/JabRef-${pkgver}.jar

  install -Dm755 ${pkgname}.sh ${pkgdir}/usr/bin/${pkgname}
  sed -i "s/VERSION/${pkgver}/" ${pkgdir}/usr/bin/${pkgname}

  install -Dm644 ${pkgname}.desktop ${pkgdir}/usr/share/applications/${pkgname}.desktop
  install -Dm644 images/icons/JabRef-icon-48.png ${pkgdir}/usr/share/pixmaps/${pkgname}.png
  install -Dm644 LICENSE.md ${pkgdir}/usr/share/licenses/jabref/LICENSE.md
}
