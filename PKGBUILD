# Maintainer: Magnus Anderson <magnus@iastate.edu>
pkgname=slopgun
pkgver=0.2
pkgrel=1
pkgdesc='Provide a simple script to use `slop` and `shotgun` together to save screenshots'
arch=('any')
license=('GPL')
depends=('slop' 'shotgun' 'xclip')
md5sums=() #autofill using updpkgsums

package() {
  mkdir -p "${pkgdir}/usr/bin"
  install -D -m755 ../slopgun "${pkgdir}/usr/bin"
  mkdir -p "${pkgdir}/usr/share/applications"
  install -D -m644 ../slopgun.desktop "${pkgdir}/usr/share/applications"
}
