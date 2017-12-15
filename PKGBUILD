# Maintainer: Sebastian Wilzbach < sebi at wilzbach dot me >
# Contributor: Daniel Micay <danielmicay@gmail.com>
# Contributor: Ivy Foster <joyfulgirl (at) archlinux (dot) us>

pkgname=bibutils
_basename=bibutils
pkgver=6.2
pkgrel=1
pkgdesc="Bibliography conversion tools"
arch=("i686" "x86_64")
url="http://sourceforge.net/p/bibutils/home/Bibutils/"
license=('GPL2')
makedepends=('tcsh')
depends=(glibc)
source=("http://downloads.sourceforge.net/project/${_basename}/${_basename}_${pkgver}_src.tgz")
md5sums=('b28a42eafe4eb3fb9074ec9f40b68b75')

build() {
  cd ${_basename}_$pkgver
  ./configure --dynamic --install-dir "$pkgdir/usr/bin" --install-lib "$pkgdir/usr/lib"
  make
}

package() {
  cd ${_basename}_$pkgver
  mkdir -p "$pkgdir/usr/bin" "$pkgdir/usr/lib"
  make install
}
