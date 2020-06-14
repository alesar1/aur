# Maintainer: Kamil Śliwak <cameel2@gmail.com>

_addon_name=youtube_classic
_addon_version=1.5.3
_addon_id=969546
_addon_filename="${_addon_name}-${_addon_version}-fx.xpi"
_gecko_id="{6acd0f4d-ab79-4b79-9b28-8bde65ae355c}"

pkgname=firefox-extension-youtube-classic
pkgver=${_addon_version}
pkgrel=1
pkgdesc="Browser extension that restores the classic YouTube look (version for Firefox)"
arch=('any')
url="https://github.com/thisdotvoid/youtube-classic-extension"
license=('MPL2')
depends=("firefox")
source=("https://addons.cdn.mozilla.net/user-media/addons/${_addon_id}/${_addon_filename}")
noextract=("${_addon_filename}")
sha256sums=('8a9f159e709363d5c1585ddbed9b1c0049048cf15117ff4f53093cc6af315cd8')

package() {
    cd "${srcdir}"
    install -Dm644 "${_addon_filename}" "${pkgdir}/usr/lib/firefox/browser/extensions/${_gecko_id}.xpi"
}
