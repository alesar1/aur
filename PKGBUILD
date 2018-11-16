# Maintainer: Eduard Wirch <wirch.eduard@gmail.com>
# Contributor: Andrea Scarpino <andrea@archlinux.org>

pkgname=masterpassword-gui
pkgver=2.7.10
pkgrel=1
pkgdesc='Java GUI for Master Password'
arch=('any')
url='http://masterpasswordapp.com/'
license=('GPL3')
depends=('java-runtime')
source=("https://ssl.masterpasswordapp.com/$pkgname.jar"
        "${pkgname}.desktop" "${pkgname}.png" "${pkgname}.sh")
sha1sums=('5e1858a822d89e57b81112e088937a04facb4c50'
          '663d645fe83358b8a5061de7260b3eed9c79bac3'
          'cc3bb9d05c24db935f1bdd56a0c82ada42c724d1'
          'cea8783054a993d5f18d71edb3ec991453f9c46c')
noextract=("${pkgname}.jar")

package() {
  install -d "${pkgdir}/usr/share/java/${pkgname}"
  install -m644 masterpassword-gui.jar "${pkgdir}/usr/share/java/${pkgname}"
  install -Dm755 ${pkgname}.sh "${pkgdir}/usr/bin/${pkgname}"

  install -D ${pkgname}.desktop "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -D ${pkgname}.png "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
}
