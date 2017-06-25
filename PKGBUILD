pkgname=desktop-phonepi
pkgver=1
pkgrel=4
pkgdesc="Desktop application for PhonePi project"
url="https://github.com/PhonePi"
arch=("i686" "x86_64" "armv6h")
license=("GPL2")
makedepends=("git" "cmake")
depends=("qt5-base" "qt5-tools" "qt5-wayland")
source=(git://github.com/PhonePi/phonepi.git)
sha256sums=("SKIP")

build() {
	cd "$srcdir/phonepi/src/desktop"
	git submodule init
	git submodule update
	cmake . -DCMAKE_INSTALL_PREFIX=/usr
	make
}

package() {
	cd "$srcdir/phonepi/src/desktop"
	make DESTDIR=$pkgdir install
}
