# Maintainer: Michael Kogan <michael dot kogan at gmx dot net >

pkgname=racer-nocg-car-69-chevrolet-camaro-z28
pkgver=2013
pkgrel=4
pkgdesc='1969 Chevrolet Camaro Z/28 car model for Racer (CG version) by Cosmo°'
arch=('any')
license=(custom)
url='https://www.racedepartment.com/threads/chevrolet-camaro-z-28-1969.29105/'
depends=('racer-nocg')
source=("https://www.tracciontrasera.net/descargas/racer/coches/69ccz28.7z")
md5sums=('2a930f07aaca33e2d2f96233b6f62f83')

package(){
	install -d -m755 "$pkgdir/opt/racer-nocg/data/cars/"
	cp -dr "$srcdir/69ccz28" "$pkgdir/opt/racer-nocg/data/cars/"
}
