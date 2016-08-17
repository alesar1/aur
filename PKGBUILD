# Maintainer: Lukasz Pozarlik <lpozarlik@gmail.com>

pkgname='udash-generator'
pkgver='0.3.0'
pkgrel='1'
pkgdesc='Udash project generator'
url="https://github.com/UdashFramework/udash-generator"
arch=('any')
license=('Apache')
source=("https://github.com/UdashFramework/udash-generator/releases/download/v${pkgver}/udash-generator.zip"
        "https://raw.githubusercontent.com/UdashFramework/udash-generator/master/LICENSE"
        "udash-generator.sh")
md5sums=('5d7c9fef852af63f089a939df5681043'
         '175792518e4ac015ab6696d16c4f607e'
         '88d5a254ac9d259bf693cf45c93b2021')
depends=('java-environment')

package() {
  mkdir -p "${pkgdir}/usr/bin/"
  mkdir -p "${pkgdir}/opt/${pkgname}"
  mkdir -p "${pkgdir}/usr/share/licenses/${pkgname}"

  install -Dm644 "${srcdir}/udash-generator.jar" "${pkgdir}/opt/${pkgname}/udash-generator.jar"
  install -Dm755 "${srcdir}/udash-generator.sh" "${pkgdir}/opt/${pkgname}/udash-generator.sh"
  install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  ln -s "/opt/${pkgname}/udash-generator.sh" "${pkgdir}/usr/bin/udash-generator"
}

# vim: ts=2 sw=2 et

