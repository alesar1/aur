# Maintainer: Mantas Mikulėnas <grawity@gmail.com>
pkgname=mscompress
pkgver=0.3
pkgrel=1
pkgdesc='Microsoft "compress.exe/expand.exe" compatible (de)compressor'
arch=("i686" "x86_64")
url="http://martin.hinner.info/mscompress/"
license=("GPL2")
#source=("ftp://ftp.penguin.cz/pub/users/mhi/mscompress/$pkgname-$pkgver.tar.bz2")
source=("https://mirrors.kernel.org/gentoo/distfiles/$pkgname-$pkgver.tar.bz2")
sha1sums=('76fd76b08ca62b20cf4aacef78e5030a4b08c285')

build() {
	cd "$srcdir/$pkgname-$pkgver"
	./configure --prefix=/usr --sysconfdir=/etc
	make
}
package() {
	cd "$srcdir/$pkgname-$pkgver"
	make BUILDROOT="$pkgdir" install
}
# vim: set ft=sh
