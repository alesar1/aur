# Maintainer: termuellinator

pkgname=lug-helper
pkgver=1.17
pkgrel=1
epoch=1
pkgdesc="Star Citizen's Linux Users Group Helper Script"
arch=('any')
depends=('bash' 'coreutils' 'curl')
optdepends=('zenity' 'polkit')
provides=('lug-helper')
conflicts=('lug-helper')
url="https://github.com/starcitizen-lug/lug-helper"
license=('GPL3')
source=(
    "${pkgname}-${pkgver}.tar.gz::https://github.com/starcitizen-lug/lug-helper/archive/v${pkgver}.tar.gz"
    'lug-helper.desktop'
)
sha256sums=(
    'b439e7edd98b7e9978eebea0569b6ba89de0f0857ae4e4e4544740593de4fa3c'
    'a69118baac0cd55dfb85a81de1873ab1fee85d3477e13c10628a824ebdc5e22f'
)


package() {
    install -Dm755 "${srcdir}/${pkgname}-${pkgver}/lug-helper.sh" "$pkgdir/usr/bin/lug-helper"
    install -Dm755 "${srcdir}/${pkgname}-${pkgver}/lug-logo.png" "$pkgdir/usr/share/pixmaps/lug-logo.png"
    install -Dm755 "${srcdir}/${pkgname}-${pkgver}/lug-lutris-install.json" "$pkgdir/usr/share/lug-helper/lug-lutris-install.json"
    install -Dm755 "${srcdir}/lug-helper.desktop" "$pkgdir/usr/share/applications/lug-helper.desktop"
}
 
