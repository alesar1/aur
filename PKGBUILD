# $Id$
# Maintainer: Mohammadreza Abdollahzadeh <morealaz at gmail dot com>

pkgname=shabnam-fonts
pkgver=5.0.0
pkgrel=1
pkgdesc="A beautiful Persian font based on Vazir font."
url="https://github.com/rastikerdar/shabnam-font"
arch=(any)
license=('OFL')
depends=('fontconfig')
provides=('ttf-shabnam')
conflicts=('ttf-shabnam')
source=("${pkgname}-${pkgver}.zip::${url}/releases/download/v${pkgver}/shabnam-font-v${pkgver}.zip")
sha256sums=('6ee9d8be9665207706ab461080ea15e1e714156a465897b31a8b507866278770')

package() {
  install -Dt "${pkgdir}/usr/share/fonts/${pkgname%-fonts}" -m644 ./{,**/}*.ttf
  install -Dt "${pkgdir}/usr/share/licenses/${pkgname}" -m644 ./LICENSE
}
# vim:set ts=2 sw=2 et:
