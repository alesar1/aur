# Maintainer: iniVation AG <support@inivation.com>

pkgname=libcaer
pkgver=3.3.11
pkgrel=1
pkgdesc="Minimal C library to access, configure and get data from neuromorphic sensors and processors."
url="https://gitlab.com/inivation/dv/$pkgname/"
license=('BSD')
arch=('i686' 'x86_64' 'armv7h' 'aarch64')
groups=()
depends=('libusb' 'libserialport' 'opencv')
makedepends=('cmake' 'pkgconf')
provides=()
conflicts=()
replaces=()
options=('staticlibs')
source=("https://gitlab.com/inivation/dv/$pkgname/-/archive/$pkgver/$pkgname-$pkgver.tar.gz")
noextract=()
sha256sums=('ef6136029215dcbd2dcbfbabb27402974de9c35444a8bdb427d3b0c838973af1')

build() {
	cd "$srcdir/$pkgname-$pkgver"

	cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_INSTALL_LIBDIR=lib -DENABLE_SERIALDEV=1 -DENABLE_OPENCV=1 -DENABLE_STATIC=1 -DUDEV_INSTALL=1 .

	make
}

package() {
	cd "$srcdir/$pkgname-$pkgver"

	DESTDIR="$pkgdir/" make install

	cd "$pkgdir"

	# Fix udev directory due to symlinks
	mv lib/udev/ usr/lib/
	rm -Rf lib/
}
