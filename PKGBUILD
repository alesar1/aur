# Maintainer: Gavin Costello <gavcos at gmail dot com>
# Contributor:
pkgname=angularjs
pkgver=1.8.0
pkgrel=1
pkgdesc="An open-source JavaScript framework, whose goal is to augment browser-based applications with model–view–controller (MVC) capability, in an effort to make both development and testing easier."
arch=(any)
url="http://angularjs.org"
license=('MIT')
depends=('jquery')
source=("https://ajax.googleapis.com/ajax/libs/${pkgname}/${pkgver}/angular.js" "https://ajax.googleapis.com/ajax/libs/${pkgname}/${pkgver}/angular.min.js")
md5sums=('c10ac193a66f6f4b01e02460efb37522' '57d5ec9bb2a88256b2a8e6e30f6d82ae')

package() {
  cd "${srcdir}"
  mkdir -p "${pkgdir}/usr/share/angularjs"
  install -m644 "angular.js" "${pkgdir}/usr/share/angularjs"
  install -m644 "angular.min.js" "${pkgdir}/usr/share/angularjs"
}

# vim:set ts=2 sw=2 et:
