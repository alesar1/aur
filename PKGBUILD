# Maintainer: Dan Maftei <dan.maftei@gmail.com>
pkgname='molden'
pkgver=5.6
pkgrel=1
pkgdesc="A visualization program of molecular and electronic structure"
arch=('i686' 'x86_64')
url="http://www.cmbi.ru.nl/molden/"
license=('custom')
groups=()
depends=('mesa' 'glu')
makedepends=(
    'gcc-fortran'
    'xproto'
    'libx11'
    'mesa'
    'glu'
)
optdepends=(
   'openbabel: to create 2D images of the molecules in a .sdf file'
   'wget: to fetch PDB from rcsb.org'
)
provides=('molden')
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=(ftp://ftp.cmbi.ru.nl/pub/molgraph/molden/$pkgname$pkgver.tar.gz)
noextract=()
md5sums=('9267c6fc6eef897668d7d7c2785e5f53')

build() {
  cd "$pkgname$pkgver"
  # Patch Makefile for surf utility to reflect the 
  # replacement of missing makedepend 
  sed -i 's/@.*makedepend.*$/@ \$(CC) \$(INCLUDE) -M \$(SRCS) \> makedep/' surf/Makefile
  make
}

package() {
  cd "$pkgname$pkgver"
  install -t "$pkgdir/usr/bin/"  -Dm755 molden gmolden
  install -t "$pkgdir/usr/lib/$pkgname/" -Dm755 ambfor/ambfor ambfor/ambmd surf/surf  
  install -t "$pkgdir/usr/share/doc/$pkgname" -Dm755 doc/figures.ps.Z  doc/manual.ps.Z doc/manual.txt.Z  
  install -t "$pkgdir/usr/share/licenses/$pkgname/" -Dm755 CopyRight COMMERCIAL_LICENSE REGISTER     
}

