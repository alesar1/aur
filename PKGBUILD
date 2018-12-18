# Maintainer: Pouyan Heyratpour <pouyan@janstun.com>

pkgname=awesome-carrot
pkgver=1.0.0
pkgrel=1
pkgdesc="Carrot awesomeWM personalization application"
arch=('any')
url="https://pouyanh.github.io/carrot/"
license=('GPL3')
depends=('lua')
source=(${pkgname}-${pkgver}.tar.gz::https://github.com/pouyanh/carrot/archive/v${pkgver}.tar.gz)
md5sums=() #autofill using updpkgsums

package() {
  cd "${pkgname}-${pkgver}"

  install -Dm 644 *.lua -t "${pkgdir}/usr/share/lua/5.3/${pkgname}"
  install -Dm 644 widgets/* -t "${pkgdir}/usr/share/lua/5.3/${pkgname}/widgets"
  install -Dm 644 icons/* -t "${pkgdir}/usr/share/lua/5.3/${pkgname}/icons"
  install -Dm 644 README.md -t "${pkgdir}/usr/share/doc/${pkgname}"
}
