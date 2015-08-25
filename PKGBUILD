# Maintainer: Evan Teitelman <teitelmanevan@gmail.com>
# Contributor: Tilmann Becker <tilmann.becker@freenet.de>

pkgname=scrounge-ntfs
pkgver=0.9
pkgrel=2
pkgdesc="Data recovery program for NTFS file systems"
arch=('i686' 'x86_64')
url="http://memberwebs.com/stef/software/scrounge/"
license=('BSD')
groups=()
depends=()
makedepends=('autoconf' 'automake')
provides=()
conflicts=()
replaces=()
backup=()
install=
source=(http://thewalter.net/stef/software/scrounge/${pkgname}-${pkgver}.tar.gz)
noextract=()
md5sums=('851cbb9a1ce417cf61f2612626a1bc58')

build() {
	cd "$srcdir/$pkgname-$pkgver"

	./configure --prefix=/usr
	make || return 1
}

package() {
	cd "$srcdir/$pkgname-$pkgver"
	make DESTDIR="$pkgdir/" install
}
