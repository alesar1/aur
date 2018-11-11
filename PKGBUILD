# Maintainer: Mattia Biondi <mattia dot biondi3 at studio dot unibo dot it>
pkgname=umps
pkgver=2.0.1
pkgrel=1
pkgdesc="Virtual machine simulator based around the MIPS R2/3000
microprocessor."
arch=('x86_64')
url="http://mps.sourceforge.net/"
license=('GPL2')
depends=('qt4' 'libelf' 'boost' 'libsigc++')
makedepends=('git' 'libtool' 'm4' 'automake' 'autoconf')
source=("$pkgname-$pkgver.tar.gz::https://github.com/tjonjic/umps/archive/master.tar.gz")
md5sums=('SKIP')

build() {
  cd "$pkgname-$pkgver"
  libtoolize --force
  aclocal
  autoreconf -vfi
  automake --force-missing --add-missing
  autoconf
	./configure --enable-maintainer-mode --with-mips-tool-prefix=mipsel-linux-gnu-
	make
}

check() {
  cd "$pkgname-$pkgver"
	make -k check
}

package() {
  cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir/" install
}
