# Maintainer: Youngjae Lee <ls4154.lee@gmail.com>
pkgname=dm-zoned-tools
pkgver=2.2.0
pkgrel=1
pkgdesc="User space utility for managing zoned block devices used with the dm-zoned device mapper "
arch=("x86_64")
url="https://github.com/westerndigitalcorporation/dm-zoned-tools"
license=("GPL3")
depends=("glibc" "util-linux-libs" "kmod" "device-mapper")
makedepends=("autoconf" "automake" "libtool" "autoconf-archive")
source=("$pkgname-$pkgver.tar.gz::https://github.com/westerndigitalcorporation/$pkgname/archive/refs/tags/v$pkgver.tar.gz")
md5sums=("801c38767332efb7c040545e8b7f813a")

build() {
	cd "$pkgname-$pkgver"
	./autogen.sh
	./configure --prefix=/usr --sbindir=/usr/bin
	make
}

package() {
	cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir" install
}
