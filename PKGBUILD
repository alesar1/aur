# Maintainer: polyzen <polycitizen@gmail.com>

pkgname=firefox-extension-cookie-controller
pkgver=3.9
pkgrel=1
pkgdesc='Buttons for managing cookies, cookie permissions, and site cookie exceptions.'
url=https://addons.mozilla.org/en-US/firefox/addon/cookie-controller
arch=('any')
license=('custom:MPLv2')
depends=('firefox')
source=("https://addons.cdn.mozilla.net/user-media/addons/334572/cookie_controller-$pkgver-fx.xpi")
sha256sums=('369082b89a3d8a949a0c960f16fa83b21e3a91f7359ba9dbb0886a2e679d6912')

package() {
  local GLOBIGNORE=*.xpi:license.txt
  local dstdir="$pkgdir"/usr/lib/firefox/browser/extensions/"{ac2cfa60-bc96-11e0-962b-0800200c9a66}"

  install -d "$dstdir"
  cp -dpr --no-preserve=ownership * "$dstdir"
  chmod -R 755 "$dstdir"
  install -D license.txt "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}

# vim:set ts=2 sw=2 et:
