# Maintainer: Daniel M. Capella <polycitizen@gmail.com>

pkgname=firefox-referer-control
pkgver=1.31
pkgrel=1
pkgdesc='Control the HTTP Referer on a per-site basis'
url=https://addons.mozilla.org/en-US/firefox/addon/referercontrol
arch=('any')
license=('MPL2')
groups=('firefox-addons')
source=("https://addons.cdn.mozilla.net/user-media/addons/793120/referer_control-$pkgver-an+fx.xpi")
noextract=("${source##*/}")
sha256sums=('483a4ab588e6c53213f69515f1bd72122e10b2c6682dc1375b760788eec37e25')

package() {
  install -Dm644 "${source##*/}" "$pkgdir"/usr/lib/firefox/browser/extensions/{cde47992-8aa7-4206-9e98-680a2d20f798}.xpi
}

# vim:set ts=2 sw=2 et:
