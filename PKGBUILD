# Maintainer: Fernando Fernandez <fernando at softwareperonista dot com dot ar>
pkgname=irrlicht-pkgconfig
pkgver=1.8.4
pkgrel=2
pkgdesc='pkgconfig file for irrlicth engine'
arch=('any')
url='http://irrlicht.sourceforge.net/'
license=('GPL3')
depends=('irrlicht')
source=('irrlicht.pc')
sha512sums=('6109348a1cb1a50df38d3d09a5a27593fe173c48077e0e47ae24360da96946d353d2150108e61bfa6d27409fc9b16f0e2c45335c56e541ceef5384c3a63dc79e')

build() {
  sed "s/VERSION/${pkgver}/" -i irrlicht.pc
}

package() {
  install -Dm644 irrlicht.pc ${pkgdir}/usr/lib/pkgconfig/irrlicht.pc
}
