# Maintainer: Ali Molaei <ali dot molaei at protonmail dot com>
# Contributor: Mohammadreza Abdollahzadeh <morealaz at gmail dot com>

pkgname=sahel-fonts
pkgver=1.0.0_alpha23
pkgrel=1
pkgdesc="A beautiful Persian font."
url="https://github.com/rastikerdar/sahel-font"
arch=(any)
license=('OFL')
depends=('fontconfig')
provides=('ttf-sahel')
conflicts=('ttf-sahel')
source=("${pkgname}-${pkgver}.zip::${url}/releases/download/v${pkgver//_/-}/sahel-font-v${pkgver//_/-}.zip")
sha256sums=('b997d5f22d975bd4bea458428f720487e31e39569b4545c183106c93ccf3f115')

package() {
  install -d "$pkgdir/usr/share/fonts/${pkgname%-fonts}"
  install -t "$pkgdir/usr/share/fonts/${pkgname%-fonts}" -m644 ./Sahel*.ttf
  install -t "$pkgdir/usr/share/fonts/${pkgname%-fonts}" -m644 ./{Farsi*,Without-Latin}/Sahel*.ttf  
  install -Dm644 ./LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
# vim:set ts=2 sw=2 et:
