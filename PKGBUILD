# Maintainer: Jonas Witschel <diabonas@archlinux.org>
# Contributor: Keshav Amburay <(the ddoott ridikulus ddoott rat) (aatt) (gemmaeiil) (ddoott) (ccoomm)>
# Contributor: Pablo Lezaeta <(prflr 88) (arro'a) (gmail) (puntocom)>
pkgname=shim-efi-git
pkgver=15.r57.5abcc10
pkgrel=1
pkgdesc='UEFI shim loader'
arch=('x86_64')
url='https://github.com/rhboot/shim'
license=('BSD')
makedepends=('git' 'gnu-efi-libs')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("git+$url.git")
sha512sums=('SKIP')

pkgver() {
	cd shim
	git describe --long | sed 's/\([^-]*-\)g/r\1/;s/-/./g'
}

prepare() {
	cd shim
	# Fix "address of packed member" compilation error with GGC 9 (GitHub PR #183)
	git pull origin pull/183/merge
}

build() {
	cd shim
	make EFI_PATH=/usr/lib ENABLE_HTTPBOOT=1
}

package() {
	cd shim
	make DESTDIR="$pkgdir" install-as-data
	install -Dm644 COPYRIGHT -t "$pkgdir/usr/share/licenses/$pkgname"
}
