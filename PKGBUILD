# Maintainer: Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=rotki-bin
pkgver=1.11.0
pkgrel=1
pkgdesc='A portfolio tracking, analytics, accounting and tax reporting application that respects your privacy'
arch=('x86_64')
url="https://rotki.com"
license=('BSD')
provides=('rotki')
options=('!strip')
noextract=("${pkgname%-bin}-${pkgver}.tar.xz")
depends=('gtk3'
         'nss')
makedepends=('gendesk')
source=("${pkgname%-bin}-${pkgver}.tar.xz::https://github.com/rotki/rotki/releases/download/v${pkgver}/rotki-linux_x64-v${pkgver}.tar.xz"
        "rotki.png::https://github.com/rotki/rotki/raw/develop/frontend/app/src/assets/images/rotki_1024x1024.png"
        "LICENSE::https://github.com/rotki/rotki/raw/develop/LICENSE.md")
sha256sums=('ce924d29ffae1db208b098fca077cc1bcb831382bdd669e85868e03e7858bb0b'
            '78032738ae55b065b3f786be0482809149f474a2294a6a2dfd26a079e9154383'
            '3e463a974d261052ceffe9aff3173284e31a0b67e901b19cc8a7723235fabd7d')

package() {
  install -d "${pkgdir}/opt/" "${pkgdir}/usr/bin"
  ln -s /opt/rotki/rotki "${pkgdir}/usr/bin"
  tar xvf ${pkgname%-bin}-${pkgver}.tar.xz -C "${pkgdir}/opt/"
  mv "${pkgdir}/opt/rotki"* "${pkgdir}/opt/rotki"
  convert rotki.png -resize 256x256 rotki256.png
  install -Dm644 rotki256.png "${pkgdir}/usr/share/pixmaps/rotki.png"
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
  gendesk -f -n --pkgname "${pkgname%-bin}" \
          --pkgdesc "$pkgdesc" \
          --name "Rotki" \
          --comment "$pkgdesc" \
          --exec "${pkgname%-bin}" \
          --categories 'Utility;Office;Application' \
          --icon "${pkgname%-bin}"
  install -Dm644 ${pkgname%-bin}.desktop -t "${pkgdir}/usr/share/applications"
  find "${pkgdir}/opt" -type f -exec chmod o-w {} +
  find "${pkgdir}/opt" -type d -exec chmod o-w {} +
}
# vim:set ts=2 sw=2 et:
