# Maintainer: Frederik Schwan <frederik dot schwan at linux dot com>

pkgbase=datagrip
pkgname=(datagrip datagrip-jre)
pkgver=2017.3
pkgrel=1
pkgdesc='Smart SQL Editor and Advanced Database Client Packed Together for Optimum Productivity'
arch=('any')
url='http://www.jetbrains.com/datagrip/'
license=('Commercial')
makedepends=('rsync')
conflicts=('0xdbe' '0xdbe-eap')
options=('!strip')
source=(https://download.jetbrains.com/${pkgbase}/${pkgbase}-${pkgver}.tar.gz
        jetbrains-datagrip.desktop)
sha512sums=('76e41339d3c228fa5803f36f6c3a0f4f158209ce2c49eb8781fefdcfafcf969c206c241359bb94ce5ddc954dd72e23da869c123c58b2352b3b98ee4fd178e02e'
            '6fa0fb2eba7017f2818a5e9d8e44d43a050fdb5b13c7dd1650fae472191f892424f904009e2ba675d5f75200e7e2f42dad95741e94b16355a8ce9eb07bd8660b')

package_datagrip() {
  optdepends=('datagrip-jre: JetBrains custom Java Runtime (Recommended)'
              'java-runtime>=8: JRE - Required if datagrip-jre is not installed')

  install -d -m 755 "${pkgdir}/opt/"
  install -d -m 755 "${pkgdir}/usr/bin/"
  install -d -m 755 "${pkgdir}/usr/share/applications/"
  install -d -m 755 "${pkgdir}/usr/share/pixmaps/"

  rsync -rtl "${srcdir}/DataGrip-${pkgver}/" "${pkgdir}/opt/${pkgbase}" --exclude=/jre64

  ln -s "/opt/${pkgbase}/bin/${pkgbase}.sh" "${pkgdir}/usr/bin/${pkgbase}"
  install -D -m 644 "${srcdir}/jetbrains-${pkgbase}.desktop" "${pkgdir}/usr/share/applications/"
  install -D -m 644 "${pkgdir}/opt/${pkgbase}/bin/${pkgbase}.png" "${pkgdir}/usr/share/pixmaps/${pkgbase}.png"
}

package_datagrip-jre() {
  install -d -m 755 "${pkgdir}/opt/${pkgbase}"
  rsync -rtl "${srcdir}/DataGrip-${pkgver}/jre64" "${pkgdir}/opt/${pkgbase}"
}
