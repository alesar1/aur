# Maintainer: Muflone http://www.muflone.com/contacts/english/
# Contributor: Thomas Baechler <thomas@archlinux.org>
# Contributor: Jaroslaw Swierczynski <swiergot@juvepoland.com>
# Contributor: Michal Hybner <dta081@gmail.com>
# Contributor: Andrea Scarpino <andrea@archlinux.org>

_locale='fr'
pkgname=palemoon-i18n-fr
pkgver=28.1.0
pkgrel=1
pkgdesc="French language pack for Pale Moon browser"
arch=('any')
url="https://addons.palemoon.org/language-packs/"
license=('MPL' 'GPL')
source=("${pkgname}-${pkgver}.xpi"::"http://addons.palemoon.org/?component=download&version=latest&id=langpack-${_locale}@palemoon.org")
sha256sums=('9b01c8e5b14691697ce24fcba14b33089b9776ac5f799d6aa43850f6ba2549ff')
depends=('palemoon-i18n-common')
noextract=("${pkgname}-${pkgver}.xpi")
DLAGENTS=("http::/usr/bin/curl --user-agent 'PaleMoon' --output %o %u"
          "${DLAGENTS[@]}")

package() {
  install -m 755 -d "${pkgdir}/usr/lib/palemoon/browser/extensions"
  install -m 644 "${pkgname}-${pkgver}.xpi" \
    "${pkgdir}/usr/lib/palemoon/browser/extensions/langpack-${_locale}@palemoon.org.xpi"
}

