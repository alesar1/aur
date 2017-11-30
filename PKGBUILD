# Maintainer: Daniel M. Capella <polycitizen@gmail.com>

pkgname=firefox-bookmarkdupes
pkgver=2.3
pkgrel=1
pkgdesc='Display/Remove duplicate bookmarks, empty folders or descriptions'
url=https://github.com/vaeth/bookmarkdupes
arch=('any')
license=('GPL')
source=("https://addons.cdn.mozilla.net/user-media/addons/870263/lesezeichenduplikate-$pkgver-fx.xpi")
noextract=("${source##*/}")
sha256sums=('dcf1c475496fbd6699440baaa2ba2015d250f49f9f4537708f657949644f5b60')

package() {
  install -Dm644 "${source##*/}" "$pkgdir"/usr/lib/firefox/browser/extensions/bookmarkdupes@martin-vaeth.org.xpi
}

# vim:set ts=2 sw=2 et:
