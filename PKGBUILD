# Maintainer: Ali Molaei <ali dot molaei at protonmail dot com>
# Contributor: Mohammadreza Abdollahzadeh <morealaz at gmail dot com>

pkgname=vazir-fonts
pkgver=27.0.2
pkgrel=1
pkgdesc="A beautiful Persian font based on DejaVu font."
url="https://github.com/rastikerdar/vazir-font"
arch=(any)
license=('OFL')
provides=('ttf-vazir')
conflicts=('ttf-vazir')
source=("${pkgname}-${pkgver}.zip::${url}/releases/download/v${pkgver}/vazir-font-v${pkgver}.zip"
        "LICENSE::https://raw.githubusercontent.com/rastikerdar/vazir-font/master/OFL.txt")
sha256sums=('1a26a291b1e10ba5e0d96cfa6259b31ef69c4145b3091a6ccaacdc69e0409e90'
            '0deb92b7b0e3d3eceeb1cffed7789d64edbcff39c611aecca96a9fc3f805835a')

package() {
  install -Dt "${pkgdir}/usr/share/fonts/${pkgname%-fonts}" -m644 ./{,**/}*.ttf
  install -Dt "${pkgdir}/usr/share/licenses/${pkgname}" -m644 ./LICENSE
}
