# Maintainer: Pablo Arias <pabloariasal@gmail.com>
# Contributor: John Jenkins <twodopeshaggy@gmail.com>

pkgname=bcal
pkgver=2.2
pkgrel=1
pkgdesc="Storage conversion and expression calculator"
arch=("i686" "x86_64")
url="https://github.com/jarun/bcal"
license=('GPL3')
source=("https://github.com/jarun/bcal/archive/v${pkgver//_/-}.tar.gz")
sha256sums=('506d17d6df35fad636d3ced425afee5921cd2b21242099b78b369cfcb5716e23')
conflicts=('bcal-git')
provides=('bcal')

package() {
  make -C "${pkgname}-${pkgver}" DESTDIR="${pkgdir}" PREFIX="/usr" install > /dev/null
}
