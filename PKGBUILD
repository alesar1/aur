# Maintainer:  Eric Biggers <ebiggers3 at gmail dot com>

pkgname=wimlib
pkgver=1.11.0
pkgrel=1
pkgdesc="A library and program to extract, create, and modify WIM files"
arch=("i686" "x86_64")
url="https://wimlib.net"
license=("custom")
depends=("openssl" "fuse" "libxml2" "ntfs-3g")
checkdepends=("attr")
optdepends=("cdrkit: for making ISO image of Windows PE"
	"mtools: for making disk image of Windows PE"
	"syslinux: for making disk image of Windows PE"
	"cabextract: for extracting Windows PE from the WAIK")
source=("https://wimlib.net/downloads/$pkgname-$pkgver.tar.gz")

build() {
	cd "$pkgname-$pkgver"
	./configure --with-libcrypto --with-fuse --with-ntfs-3g --prefix=/usr
	make
}

check() {
	cd "$pkgname-$pkgver"
	make check
}

package() {
	cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir" install
	for file in NEWS README; do
		install -Dm644 $file "$pkgdir/usr/share/doc/$pkgname/$file"
	done
	for file in COPYING*; do
		install -Dm644 $file "$pkgdir/usr/share/licenses/$pkgname/$file"
	done
}

sha256sums=('16d19c3fbbda1c3ac8034b0884f42962e70ec0608ac54defc60f84328ae447a0')
