# Maintainer: Nicola Squartini <tensor5@gmail.com>

pkgname=nodejs-jslinter
pkgver=1.2.13
pkgrel=1
pkgdesc='JSLint for Node.js'
arch=('any')
url='https://github.com/tensor5/JSLinter'
license=('MIT')
depends=('nodejs')
makedepends=('npm')
options=(!emptydirs)

package() {
  npm install --user root -g --prefix="${pkgdir}"/usr jslinter@${pkgver}

  install -d -m755 "${pkgdir}/usr/share/licenses/${pkgname}"
  ln -s ../../../lib/node_modules/jslinter/LICENSE \
     "${pkgdir}/usr/share/licenses/${pkgname}"
}
