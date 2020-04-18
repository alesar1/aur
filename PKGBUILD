# Maintainer: Frederik Enste <frederik at fenste dot de>
# Maintainer: t00manysecrets <frederik at fenste dot de>

pkgname=materialize-bin
pkgver=1.78
pkgrel=1
pkgdesc="Image to Material tool (uses Wine)."
arch=(x86_64)
url="http://boundingboxsoftware.com/index.html"
license=('GNU' 'custom:GNU General Public License v3.0')
depends=(wine winetricks desktop-file-utils)
makedepends=(unzip)
source=("http://boundingboxsoftware.com/materialize/download/Materialize_${pkgver}.zip"
        "https://raw.githubusercontent.com/BoundingBoxSoftware/Materialize/master/LICENSE"
        "${pkgname}.sh"
        "${pkgname}.desktop")
install="${pkgname}.install"
sha256sums=('b0f6e3a905781e85dcd7db2383646bce51b8984ab93d1e3d13be42d5bea8904a'
            '3972dc9744f6499f0f9b2dbf76696f2ae7ad8af9b23dde66d6af86c9dfb36986'
            'ed9dcdab4071a854a460bfa56a79738895e2ca6cd7641d1928d160984c0619bd'
            'd1247c77728c389d385c7c830802d9bcbb1c20be9b98136b815188c8c3d79cbe')

build() {
  # unpack the zip file (into Materialize_Data)
  unzip -o Materialize_${pkgver}.zip -d materialize
}

package() {
  # install program into destination
  mkdir -p "${pkgdir}/opt/${pkgname}"
  cp -r ${srcdir}/materialize/* "${pkgdir}/opt/${pkgname}"
  chown root:root "${pkgdir}/opt/${pkgname}"
  chmod -R 755 "${pkgdir}/opt/${pkgname}"

  # install license
  install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/license/${pkgname}/LICENSE"

  # install start script
  install -Dm755 "${srcdir}/${pkgname}.sh" "${pkgdir}/usr/bin/${pkgname}"
}
