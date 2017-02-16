# Maintainer: David Pflug <david at pflug.email>
pkgname=graphscad
pkgver=1.0.7
pkgrel=2
pkgdesc="An OpenSCAD-based Nodal editor to create customizable objects for 3D printing"
arch=('i686' 'x86_64')
url="http://graphscad.blogspot.com/"
license=('GPL')
source=("http://${pkgname}.free.fr/${pkgname}_ubu_v${pkgver}.zip")
sha256sums=('5238bad7ea2e23eefac1834040cacf354f89f7efcf1f31aa31b6b41747252dac')
depends=('zlib' 'python')

package() {
  cd "$srcdir/${pkgname}_ubu_v${pkgver}"

  install -D -m755 graphscad "$pkgdir/opt/graphscad/graphscad"
  mkdir -p "$pkgdir/usr/bin"
  ln -s /opt/graphscad/graphscad "$pkgdir/usr/bin/graphscad"
  cp -R graphscadfiles graphscadsettings icons plugins "$pkgdir/opt/graphscad/"
}

# vim:set ts=2 sw=2 et:
