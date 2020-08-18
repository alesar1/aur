# Maintainer: Kamil Śliwak <cameel2@gmail.com>

_addon_name=temporary_containers
_addon_version=1.9.1
_addon_id=888648
_addon_filename="${_addon_name}-${_addon_version}-fx.xpi"
_gecko_id="{c607c8df-14a7-4f28-894f-29e8722976af}"

pkgname=firefox-extension-temporary-containers
pkgver=${_addon_version}
pkgrel=1
pkgdesc="Browser extension that lets you open automatically managed disposable containers"
arch=('any')
url="https://github.com/stoically/temporary-containers"
license=('MIT/X11')
depends=("firefox")
source=("https://addons.cdn.mozilla.net/user-media/addons/${_addon_id}/${_addon_filename}")
noextract=("${_addon_filename}")
sha256sums=('65b9b0fb5af16aa1017b739bcaed515dbf8ff08fc95f63325aee22d1f1dfb56f')


package() {
    cd "${srcdir}"
    install -Dm644 "${_addon_filename}" "${pkgdir}/usr/lib/firefox/browser/extensions/${_gecko_id}.xpi"
}
sha256sums=('392ef6ff878f4969bf753801a4e99f19ff2108e2d9c978e2d5570c8b13e0a2ac')
