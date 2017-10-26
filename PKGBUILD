# Maintainer: Frederik Schwan <frederik dot schwan at linux dot com>

pkgbase=gogland-eap
_pkgbase=gogland
pkgname=(gogland-eap gogland-eap-jre)
pkgver=173.3415.23
pkgrel=1
pkgdesc='Capable and Ergonomic Go IDE - EAP'
arch=('x86_64' 'i686')
url='https://www.jetbrains.com/go/'
license=('Commercial')
options=('!strip')
source=(https://download.jetbrains.com/go/${_pkgbase}-${pkgver}.tar.gz
        jetbrains-gogland-eap.desktop)
sha512sums=('7cfcf07bef5115cecff9913551ec4af8cd493a341e30cb818223b5c36345c5816bba118f53f5ad652dc78533b336530ca98dba9f34e81a322c94a332d49f4524'
            '92ace1dfccb7df233d814dd80056eb2ca2b9e9ce1567b289ff76b174489fa3b42352d8aa3b28c05344207f293819320cd23c35e9c2088cda4ff0596aeb64ef87')

package_gogland-eap() {
  optdepends=('gogland-eap-jre: JetBrains custom Java Runtime (Recommended)'
              'java-runtime>=8: JRE - Required if gogland-eap-jre is not installed')

  install -d -m 755 "${pkgdir}/opt/"
  install -d -m 755 "${pkgdir}/usr/bin/"
  install -d -m 755 "${pkgdir}/usr/share/applications/"
  install -d -m 755 "${pkgdir}/usr/share/pixmaps/"

  rsync -rtl "${srcdir}/Gogland-${pkgver}/" "${pkgdir}/opt/${pkgbase}" --exclude=/jre64

  chmod +x "${pkgdir}/opt/${pkgbase}/plugins/intellij-go-plugin/lib/dlv/linux/dlv"
  ln -s "/opt/${pkgbase}/bin/${_pkgbase}.sh" "${pkgdir}/usr/bin/${pkgbase}"
  install -D -m 644 "${srcdir}/jetbrains-${pkgbase}.desktop" "${pkgdir}/usr/share/applications/"
  install -D -m 644 "${pkgdir}/opt/${pkgbase}/bin/${_pkgbase}.png" "${pkgdir}/usr/share/pixmaps/${pkgbase}.png"
}

package_gogland-eap-jre() {
  install -d -m 755 "${pkgdir}/opt/${pkgbase}"
  rsync -rtl "${srcdir}/Gogland-${pkgver}/jre64" "${pkgdir}/opt/${pkgbase}"
}
