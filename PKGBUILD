# Maintainer: GI_Jack <iamjacksemail@hackermail.com>

_plugin_name=foxyproxy
_plugin_version=6.2
_plugin_id=2464
_plugin_ext="-an+fx"
pkgdesc="FoxyProxy is an advanced proxy management tool that completely replaces Firefox's limited proxying capabilities."
license=('GPL')

pkgname=firefox-extension-$_plugin_name
pkgver=$_plugin_version
pkgrel=1
arch=('any')
url="https://addons.mozilla.org/firefox/addon/$_plugin_id"
depends=("firefox>=57")
source=("https://addons.cdn.mozilla.net/user-media/addons/2464/foxyproxy_standard-${pkgver}${_plugin_ext}.xpi")
noextract=('foxyproxy_standard-${pkgver}${_plugin_ext}.xpi')
sha256sums=('4bde72198d8e13afa63313a2bcdb5d6d8164e69c035b9c2a4b5970dc54123374')

package() {
  cd "${srcdir}"
  _extension_id="foxyproxy@eric.h.jung"
  _extension_dest="${pkgdir}/usr/lib/firefox/browser/extensions/${_extension_id}"
  install -Dm644 foxyproxy_standard-${pkgver}${_plugin_ext}.xpi "${_extension_dest}.xpi"
}
