# Maintainer: 3ED <krzysztof1987 at gmail>

pkgname=seamonkey-i18n-sk
pkgver=2.49.4
pkgrel=1
_lang=sk
pkgdesc="Slovak language pack for SeaMonkey"
arch=('any')
license=('MPL')
url="http://www.seamonkey-project.org/"
depends=("seamonkey>=${pkgver}")
source=(https://ftp.mozilla.org/pub/seamonkey/releases/${pkgver}/langpack/seamonkey-${pkgver}.${_lang}.langpack.xpi)
noextract=(seamonkey-${pkgver}.${_lang}.langpack.xpi)
sha256sums=('2ee8ee5e418fbb08297f249e99c8628ef08d458692c63f2eb07eca770e928ea8')

package() {
  install -Dm644 "${srcdir}/seamonkey-${pkgver}.${_lang}.langpack.xpi" \
    "${pkgdir}/usr/lib/seamonkey-${pkgver}/extensions/langpack-${_lang}@seamonkey.mozilla.org.xpi"
}
