# Maintainer: Triss Healy (trissylegs) <th@trissyle.gs>
# Contributer: JunYoung Gwak <aur@jgwak.com>
# Contributor: relrel <relrelbachar@gmail.com>
# Contributor: grimsock <lord.grimsock at gmail dot com>
# Contributor: James An <james@jamesan.ca>
# Contributor: lybin
_pkgname=msedgedriver
_channel=beta
pkgname=${_pkgname}-${_channel}
pkgver=93.0.961.11
pkgrel=1
pkgdesc="Standalone server that implements the W3C WebDriver standard (for google-chrome)"
arch=('x86_64')
url="https://chromedriver.chromium.org/"
license=('BSD')
depends=(alsa-lib gtk3 libcups libxss libxtst nss xdg-utils)
optdepends=(edge-${_channel})
conflicts=("${_pkgname}" "${_pkgname}-dev")
source=("${_pkgname}_${pkgver}_linux64.zip::https://msedgedriver.azureedge.net/93.0.961.11/edgedriver_linux64.zip")
sha512sums=('ffd618d00015434655f68c0e6ac97c437a6fe8ee5e4ba8edf7bc3abd06e19cd9968cdba710703ff9687f9df5f3cfff5b922828aec501ad1bcb39a349a7b56138')

package() {    
    install -Dm755 "${srcdir}/${_pkgname}" -t "${pkgdir}/usr/bin/"
    install -Dm644 "${srcdir}/Driver_Notes/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}/"
    install -Dm644 "${srcdir}/Driver_Notes/credits.html" -t "${pkgdir}/usr/share/licenses/${pkgname}/"
}
