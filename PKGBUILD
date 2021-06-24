# Maintainer: Morgenstern <charles [at] charlesbwise [dot] com>
# Contributor: Mohammadreza Abdollahzadeh <morealaz [at] gmail [dot] com>

pkgname=bootstrap
pkgver=5.0.2
pkgrel=1
pkgdesc="Front-end framework for web development"
arch=('any')
url="https://getbootstrap.com/"
license=('MIT')
install=bootstrap.install
source=("https://github.com/twbs/${pkgname}/releases/download/v${pkgver}/${pkgname}-${pkgver}-dist.zip"
	"LICENSE")
sha256sums=('66fbc134317db2370ee099cb3d19330b5075606ddf70cca333dab0165020f6c1'
            '9b2ce2d9793f14f0fb1a77ce64961acc1157fb25858156c47139491107970acb')

package() {
  cd ${pkgname}-${pkgver}-dist
  install -d ${pkgdir}/usr/share/javascript/${pkgname}/{css,js}
  for _jsfile in ./js/*; do
	install -m0644 "${_jsfile}" "${pkgdir}/usr/share/javascript/${pkgname}/js/"
  done
  for _cssfile in ./css/*; do
	install -m0644 "${_cssfile}" "${pkgdir}/usr/share/javascript/${pkgname}/css/"
  done
  install -Dm0644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE" 
}
