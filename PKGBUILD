# Maintainer: oldherl <oldherl@gmail.com>
# Contributor: Anatoly V. Beregovoy <avberegovoy@gmail.com>

pkgname=libpasastro
pkgver=1.4.0
pkgrel=2
_pkgver="v$pkgver"
pkgdesc="Provide Pascal interface for standard astronomy libraries"
arch=('x86_64')
url="http://www.sourceforge.net/projects/libpasastro/"
license=('GPL')
depends=('gcc-libs')
makedepends=('git')
options=()
# Temporary using a commit hash to fix Makefile bug
source=("git+https://github.com/pchev/libpasastro.git#commit=e3c218d1502a18cae858c83a9a8812ab197fcb60")
#source=("git+https://github.com/pchev/libpasastro.git#tag=$_pkgver")
sha256sums=('SKIP')

build() {
  cd $srcdir/$pkgname
  # fix: gcc complains if output directory does not exist
  mkdir -p plan404/obj
  make -j
}

package() {
  cd "$srcdir/$pkgname"
  make install PREFIX="$pkgdir/usr"
}

