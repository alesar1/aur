# Maintainer: graysky <graysky AT archlinux DOT us>
# Contributer: xyne <xyne AT archlinux DOT ca>
# Contributer: TryA -  https://bbs.archlinux.org/viewtopic.php?id=114996

pkgname=mprime
pkgver=294b7
pkgrel=3
pkgdesc="A GIMPS, distributed computing project client, dedicated to finding Mersenne primes."
arch=('x86_64')
url="http://www.mersenne.org"
license=('custom')
depends=('curl' 'hwloc')
conflicts=('mprime-bin')
source=("http://www.mersenne.org/ftp_root/gimps/p95v${pkgver}.source.zip")
sha256sums=('15682e9587af2b86647de9786f97dc8c5d7a4a679a0440f7d1d1936a48c5aa45')

build() {
	cd "$srcdir/gwnum"
	make -f make64

	cd "$srcdir/linux64"
	make
}

package() {
  CFLAGS="-I.. -I../gwnum -DX86_64 -march=x86-64 -O2 -Wno-unused-result"
  CXXFLAGS="$CFLAGS"
  LIBS="../gwnum/gwnum.a ../gwnum/gwnum.ld -lm -lpthread $(pkg-config --libs libcurl) -lstdc++ $(pkg-config --static --libs hwloc) -lgmp"

	install -Dm755 linux64/mprime "$pkgdir/usr/bin/mprime"

	# license and documentation
	# x86_64 tarball for 279 includes none of these
	#install -Dm644 license.txt "$pkgdir/usr/share/licenses/$pkgname/license.txt"
	#install -Dm644 readme.txt "$pkgdir/usr/share/doc/$pkgname/readme.txt"
	#install -Dm644 stress.txt "$pkgdir/usr/share/doc/$pkgname/stress.txt"
	#install -Dm644 undoc.txt "$pkgdir/usr/share/doc/$pkgname/undoc.txt"
	#install -Dm644 whatsnew.txt "$pkgdir/usr/share/doc/$pkgname/whatsnew.txt"
}
