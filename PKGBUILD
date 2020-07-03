# Maintainer: mrxx <mrxx at cyberhome dot at>

pkgname=ttf-recursive
pkgver=1.052
pkgrel=2
pkgdesc="A variable type family built for better code & UI"
arch=('any')
url="https://github.com/arrowtype/recursive"
license=('custom:SIL Open Font License 1.1')
depends=('fontconfig')
source=("${url}/releases/download/${pkgver}/Recursive-Beta_${pkgver}.zip")
sha256sums=('f77299f03b77ecb01511c37bbaffa613b31234a84611a8714a172b824f4b6837')

package() {
  install -d ${pkgdir}/usr/share/fonts/TTF/Recursive
  cp -a ${srcdir}/Recursive-Beta_${pkgver}/{Recursive_Code,Recursive_Desktop} "${pkgdir}/usr/share/fonts/TTF/Recursive"
  install -Dm644 "${srcdir}/Recursive-Beta_${pkgver}/LICENSE.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
