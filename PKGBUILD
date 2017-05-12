# Maintainer: Frederik Schwan <frederik dot schwan at linux dot com>

pkgbase=gogland-eap
_pkgbase=gogland
pkgname=(gogland-eap gogland-eap-jre)
pkgver=171.4424.55
pkgrel=1
pkgdesc='Capable and Ergonomic Go IDE - EAP'
arch=('x86_64' 'i686')
license=('Commercial')
url='https://www.jetbrains.com/go/'
options=('!strip')
source=(https://download.jetbrains.com/go/${_pkgbase}-${pkgver}.tar.gz
        jetbrains-gogland-eap.desktop)
sha512sums=('a21c127e52fc9a2828ddb92d59e02ef11603a4ae98007bb75c6c3d55d1380497008bb95b476db8c300a53c2373ea3667e245aa1fc20a91f1a34e54414c5081a5'
            '92ace1dfccb7df233d814dd80056eb2ca2b9e9ce1567b289ff76b174489fa3b42352d8aa3b28c05344207f293819320cd23c35e9c2088cda4ff0596aeb64ef87')

package_gogland-eap() {
  optdepends=('gogland-eap-jre: JetBrains custom Java Runtime (Recommended)'
              'java-runtime>=8: JRE - Required if gogland-eap-jre is not installed')

  install -d -m 755 "${pkgdir}/opt/"
  install -d -m 755 "${pkgdir}/usr/bin/"
  install -d -m 755 "${pkgdir}/usr/share/applications/"
  install -d -m 755 "${pkgdir}/usr/share/pixmaps/"

  rsync -rtl "${srcdir}/Gogland-${pkgver}/" "${pkgdir}/opt/${pkgbase}" --exclude=/jre

  ln -s "/opt/${pkgbase}/bin/${_pkgbase}.sh" "${pkgdir}/usr/bin/${pkgbase}"
  install -D -m 644 "${srcdir}/jetbrains-${pkgbase}.desktop" "${pkgdir}/usr/share/applications/"
  install -D -m 644 "${pkgdir}/opt/${pkgbase}/bin/${_pkgbase}.png" "${pkgdir}/usr/share/pixmaps/${pkgbase}.png"

  chmod +x "${pkgdir}/opt/${pkgbase}/bin/dlv"
}

package_gogland-eap-jre() {
  install -d -m 755 "${pkgdir}/opt/${pkgbase}"
  rsync -rtl "${srcdir}/Gogland-${pkgver}/jre" "${pkgdir}/opt/${pkgbase}"
}
