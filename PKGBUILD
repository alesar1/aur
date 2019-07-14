# Maintainer: Jordi Pakey-Rodriguea <jordi at 0xdec dot im>
# Contributor: Grey Christoforo <first name at last name dot net>

pkgname=kicad-packages3d
_pkgname=kicad-packages3D
pkgver=5.1.2
pkgrel=1
pkgdesc="KiCad 3D package libraries"
arch=('any')
url="https://github.com/KiCad/kicad-packages3D"
license=('GPL')
groups=('kicad-libraries')
makedepends=('cmake')
options=('!strip')
conflicts=('kicad-packages3d-git' 'kicad-library-git' 'kicad-library' 'kicad-library-3d')
source=("https://github.com/KiCad/$_pkgname/archive/$pkgver.tar.gz")
sha256sums=('5c3dfc3cc7f11ce5a19853b86a79dbeef7383ccbf7ecaf9c83728bcc28edef09')

build() {
  cd "$srcdir"
  mkdir -p "$srcdir/build/"
  cd "$srcdir/build"
  cmake ../${_pkgname}-${pkgver} -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr
}

package() {
  cd "$srcdir/build"
  make DESTDIR="$pkgdir" install
}
