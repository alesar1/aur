# Maintainer: Kamil Śliwak <cameel2@gmail.com>

_addon_name=yomichan
_addon_version=1.7.4
_addon_id=789636
_addon_filename="${_addon_name}-${_addon_version}-an+fx.xpi"
_gecko_id="alex@foosoft.net"

pkgname=firefox-extension-${_addon_name}
pkgver=${_addon_version}
pkgrel=1
pkgdesc="Firefox extension that provides a Japanese dictionary with Anki integration"
arch=('any')
url="https://foosoft.net/projects/yomichan/"
license=('GPL3')
depends=("firefox")
source=("https://addons.cdn.mozilla.net/user-media/addons/${_addon_id}/${_addon_filename}")
noextract=("${_addon_filename}")
sha256sums=('fc410cb948156c3536d33cdfe2ed859d111610bf83f03c34405af958dd955fbf')

package() {
    cd "${srcdir}"
    install -Dm644 "${_addon_filename}" "${pkgdir}/usr/lib/firefox/browser/extensions/${_gecko_id}.xpi"
}
