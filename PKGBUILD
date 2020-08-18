# Maintainer: albakham <contact@geber.ga>

pkgname=utopia
pkgver=1.0.5986
pkgrel=3
pkgdesc='Client for Utopia, an "Anti Orwellian Ecosystem"'
arch=('x86_64')
url='https://u.is'
license=('')
source=(https://update.u.is/downloads/linux/utopia-latest.amd64.deb)
sha256sums=('f68ea2dbdc1d18496868e9b1323ad3e218cc39d37b196901210ba3385d4249cb')
sha512sums=('d372b724d0a0c405996446e920344351e8e253fad326ee1123f97d2f15234796cd6abeafbfc9920b7088cce52eaf8331124459dfe85cebf0240927ff0373be58')
depends=(libx11 libglvnd libpulse fontconfig)
optdepends=(gst-plugins-base gst-plugins-ugly gst-plugins-good gst-plugins-bad)

build() {

  ar -x ${srcdir}/utopia-latest.amd64.deb
  tar -xJf ${srcdir}/data.tar.xz

}

package() {
    install -d "${pkgdir}/opt/"
    cp -r "${srcdir}/opt/${pkgname}" "${pkgdir}/opt/"

    install -Dm644 "${srcdir}/usr/share/applications/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"

    install -Dm755 "${srcdir}/opt/utopia/messenger/utopia" "${pkgdir}/usr/bin/${pkgname}"

    install -Dm644 "${srcdir}/usr/share/pixmaps/${pkgname}.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
}
