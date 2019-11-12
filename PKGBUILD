# Maintainer: GI_Jack <GI_Jack@hackermail.com>

# Please note this is NOT useragentswitcher by chris perderrik.

_plugin_name=user-agent-switcher
_plugin_ext="-an+fx"
_file=3442618

pkgname=firefox-extension-$_plugin_name
pkgver=1.3.16
pkgrel=1
arch=('any')
pkgdesc="Firefox extension to override the browser's User-Agent string"
license=('GPL')
url="https://gitlab.com/alexander255/user-agent-switcher"
depends=("firefox>=57")
source=("https://addons.mozilla.org/firefox/downloads/file/${_file}/user_agent_switcher-${pkgver}${_plugin_ext}.xpi")
noextract=('user_agent_switcher-${pkgver}${_plugin_ext}.xpi')
sha256sums=('fed5475083265a2e0120a855963d3e14f0636bea4a28113ce7a55a1486e8619d')

# https://addons.mozilla.org/firefox/downloads/file/3442618/user_agent_switcher-1.3.16-an+fx.xpi?src=search

package() {
  cd "${srcdir}"
  _extension_id="user-agent-switcher@ninetailed.ninja"
  _extension_dest="${pkgdir}/usr/lib/firefox/browser/extensions/${_extension_id}"
  install -Dm644 user_agent_switcher-${pkgver}${_plugin_ext}.xpi "${_extension_dest}.xpi"
}
