# Maintainer: Gavin Costello <gavcos at gmail dot com>
# Contributor:
pkgname=backbonejs
_script=backbone
pkgver=1.4.0
pkgrel=1
pkgdesc="Backbone is a JavaScript library with a RESTful JSON interface, and is based on the model-view-presenter (MVP) application design paradigm."
arch=(any)
url=http://backbonejs.org
license=('MIT')
depends=()
source=("$url/$_script.js" "$url/$_script-min.js")
md5sums=('222432686a333255fd0f9b8fa4d4e713' 
  '93a2e442d9ea4e6bfc6fe8789d7277f6')

package() {
  cd "${srcdir}"
  install -Dm644 "${_script}-min.js" "${pkgdir}/usr/share/${pkgname}/${_script}-min.js"
  install -Dm644 "${_script}.js" "${pkgdir}/usr/share/${pkgname}/${_script}.js"
}

# vim:set ts=2 sw=2 et:
