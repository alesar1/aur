# Maintainer: Jan Sonntag <jaso35 at gmail dot com>
# Contributor: Dmytro Korzhevin <dkorzhevin@gmail.com>
# Contributor: Sigmund Vestergaard <sigmundv at gmail dot com>
# Contributor: G_Syme <demichan(at)mail(dot)upb(dot)de>

pkgname=openstego
pkgver=0.8.0
pkgrel=1
pkgdesc="Steganography application that provides data hiding and watermarking functionality"
arch=('any')
url="https://www.openstego.com"
license=('GPL2')
depends=('bash' 'java-runtime')
makedepends=('unzip')
source=("https://github.com/syvaidya/openstego/releases/download/${pkgname}-${pkgver}/${pkgname}-${pkgver}.zip"
        "openstego.desktop"
        "openstego.svg")
sha256sums=('262610ced189d40765770946ee58cf9b8233a9e91813f9b63d252342cbf55e13'
            '0749d41ac197897b2604c6617a012194f5efa793aed036c1a797412038ccebcf'
            'b3c5939cdc6c33472787a94bd6a944e458ad6bd91843da85b83345a90bb9ebb5')

package() {
  cd ${srcdir}/${pkgname}-${pkgver}

  install -D -m644 lib/openstego.jar ${pkgdir}/usr/share/java/${pkgname}/lib/openstego.jar
  install -D -m755 openstego.sh ${pkgdir}/usr/share/java/${pkgname}/openstego.sh
  install -D -m644 README ${pkgdir}/usr/share/doc/$pkgname/README

  mkdir -p ${pkgdir}/usr/bin
  ln -s /usr/share/java/${pkgname}/openstego.sh ${pkgdir}/usr/bin/openstego

  install -D -m644 ${srcdir}/openstego.desktop ${pkgdir}/usr/share/applications/openstego.desktop
  install -D -m644 ${srcdir}/openstego.svg ${pkgdir}/usr/share/pixmaps/openstego.svg
}
