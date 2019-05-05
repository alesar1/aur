# Maintainer: Dct Mei <dctxmei@gmail.com>
# Contributor: Daniel M. Capella <polyzen@archlinux.org>

pkgname=firefox-esr-ublock-origin
pkgver=1.18.16
pkgrel=1
pkgdesc='Efficient blocker add-on for various browsers. Fast, potent, and lean'
url=https://github.com/gorhill/uBlock
arch=('any')
license=('GPL3')
groups=('firefox-esr-addons')
source=("https://addons.cdn.mozilla.net/user-media/addons/607454/ublock_origin-$pkgver-an+fx.xpi")
noextract=("${source##*/}")
sha256sums=('d65565207ff63c6646b83bcbf434fd3a879d0dcde06b9c032f05a0d7d3ddeca1')

package() {
  install -Dm644 "${source##*/}" "$pkgdir"/opt/firefox-esr/browser/extensions/uBlock0@raymondhill.net.xpi
}

# vim:set ts=2 sw=2 et:
