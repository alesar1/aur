# Maintainer: Kiril Vladimiroff <kiril@vladimiroff.org>

pkgname=onlykey
pkgver=5.3.4
pkgrel=1
pkgdesc="OnlyKey Chrome Desktop App"
arch=('x86_64')
url="https://onlykey.io/"
license=('custom')
source=("https://github.com/trustcrypto/OnlyKey-App/releases/download/v${pkgver}/OnlyKey_${pkgver}_amd64.deb"
        "49-onlykey.rules")
sha256sums=('09eade68cc05909b8657db123c14a35668289dcfbcb9227d53f5e7e3c6dbfdc5'
            '6bb0a54748ec6ce1a1186b41f45a6bfc1363998c1a88722a8f1518c3278aabef')

package() {
  bsdtar -O -xf "OnlyKey_${pkgver}"*.deb data.tar.xz | bsdtar -C "${pkgdir}" -xJf -

  find "${pkgdir}" -type d -exec chmod 755 {} +
  chmod 755 "${pkgdir}"/usr/share/applications/OnlyKey.desktop

  install -Dm 644 49-onlykey.rules "${pkgdir}/etc/udev/rules.d/49-onlykey.rules"
}
