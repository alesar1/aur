# Maintainer: Joan Bruguera Micó <joanbrugueram@gmail.com>
pkgname='dimemas'
pkgdesc='High-abstracted network simulator for message-passing programs (from BSC).'
pkgver='5.4.2.20201116'
pkgrel='1'
arch=('i686' 'x86_64')
url='https://www.bsc.es/discover-bsc/organisation/scientific-structure/performance-tools'
license=('LGPL2.1')
depends=(boost)
source=("https://ftp.tools.bsc.es/$pkgname/$pkgname-${pkgver%.*}-src.tar.bz2"
        "dimemas-Build-fix-for-GCC-10-fno-common-default.patch")
sha512sums=(5d44f4e72640f5c955913f0b786b841b81e87102e756c14d01b25bfdebd3019942ec925991706bab2197336692c39a6c646a9056c922841617000cc1f3e6fe05
            94b11bec6ee99fc9327a0f392d021289a1a5bb2150f2354a4403002fafe3263e18c7bfed8eee97fe26280813a84820565e5b0969b8dedf05c3852e2ab2634547)

prepare() {
	cd "$srcdir/$pkgname-${pkgver%.*}"

	patch -Np1 -i "$srcdir/dimemas-Build-fix-for-GCC-10-fno-common-default.patch"
}

build() {
	cd "$srcdir/$pkgname-${pkgver%.*}"

	# NOTE: The following optional features are NOT enabled:
	# * Java GUI
	./configure \
		--prefix=/usr

	make
}

package() {
	cd "$srcdir/$pkgname-${pkgver%.*}"

	make DESTDIR="$pkgdir/" install
}