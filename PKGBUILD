# Maintainer: 3ED <krzysztof1987 at gmail>

pkgname=seamonkey-i18n-nb-no
pkgver=2.35
pkgrel=1
_lang=nb-NO
pkgdesc="Norwegian (Bokmal) language pack for SeaMonkey"
arch=('any')
license=('MPL')
url="http://www.seamonkey-project.org/"
depends=("seamonkey>=${pkgver}")
source=(https://ftp.mozilla.org/pub/seamonkey/releases/${pkgver}/langpack/seamonkey-${pkgver}.${_lang}.langpack.xpi)
noextract=(seamonkey-${pkgver}.${_lang}.langpack.xpi)
sha256sums=('fad48d775baa3f5ee4e145b23ee09e65bb27137da6e127c4f8681bfc93ec539a')

package() {
  install -Dm644 "${srcdir}/seamonkey-${pkgver}.${_lang}.langpack.xpi" \
    "${pkgdir}/usr/lib/seamonkey-${pkgver}/extensions/langpack-${_lang}@seamonkey.mozilla.org.xpi"
}
