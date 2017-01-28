# Maintainer: Frederik Schwan <frederik dot schwan at linux dot com>

pkgname=datagrip
_pkgname=DataGrip
pkgver=2016.3.3
pkgrel=1
pkgdesc='Smart SQL Editor and Advanced Database Client Packed Together for Optimum Productivity'
arch=('i686' 'x86_64')
url='http://www.jetbrains.com/datagrip/'
license=('Commercial')
optdepends=('java-environment>=8: use system java'
            'java-runtime-common: use system java')
provides=('0xdbe' '0xdbe-eap')
conflicts=('0xdbe' '0xdbe-eap')
options=('!strip')
source=(https://download.jetbrains.com/$pkgname/${pkgname}-${pkgver}.tar.gz
        jetbrains-datagrip.desktop)
sha512sums=('4449bd4dd177a381ffa0fa491c3f4c014ba066be7b15b11d28c688d3b06c0ffa6fe189bf2fc373539befa0da58101bb1e2175415d290659b794ba41b0a185e44'
            '6fa0fb2eba7017f2818a5e9d8e44d43a050fdb5b13c7dd1650fae472191f892424f904009e2ba675d5f75200e7e2f42dad95741e94b16355a8ce9eb07bd8660b')

package() {
  install -d -m 755 ${pkgdir}/opt/
  install -d -m 755 ${pkgdir}/usr/bin/
  install -d -m 755 ${pkgdir}/usr/share/applications/
  install -d -m 755 ${pkgdir}/usr/share/pixmaps/

  cp -a ${srcdir}/${_pkgname}-${pkgver} $pkgdir/opt/${pkgname}
  # if using system java you may remove the bundled jre and save about 100M
  #rm -rf $pkgdir/opt/${pkgname}/jre

  ln -s /opt/$pkgname/bin/${pkgname}.sh $pkgdir/usr/bin/${pkgname}
  install -D -m 644 ${srcdir}/jetbrains-${pkgname}.desktop ${pkgdir}/usr/share/applications/
  install -D -m 644 ${pkgdir}/opt/${pkgname}/bin/${pkgname}.png ${pkgdir}/usr/share/pixmaps/${pkgname}.png
}
