# Maintainer: Daniel Milde <daniel at milde dot cz>
# Contributor: Danibspi danibspi <at> gmail <dot> com

pkgname=cunit
pkgver=2.1.3
pkgrel=3
pkgdesc="Lightweight system for writing, administering, and running unit tests in C"
arch=(i686 x86_64 armv6h armv7h)
url="http://cunit.sourceforge.net/"
license=('LGPL2')
depends=('glibc')
options=('!libtool')
source=(https://downloads.sourceforge.net/project/cunit/CUnit/2.1-3/CUnit-2.1-3.tar.bz2)
sha256sums=('f5b29137f845bb08b77ec60584fdb728b4e58f1023e6f249a464efa49a40f214')

build() {
  cd "$srcdir/CUnit-2.1-3"
  libtoolize --force
  aclocal
  autoheader
  automake --force-missing --add-missing
  autoconf
  ./configure --prefix=/usr
  make || return 1
}

package() {
  cd "$srcdir/CUnit-2.1-3"
  make DESTDIR="$pkgdir" install
  mv $pkgdir/usr/doc $pkgdir/usr/share/doc
}



