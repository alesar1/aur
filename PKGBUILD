pkgname=kmozillahelper
pkgver=5.0.1
pkgrel=1
epoch=1
pkgdesc="Mozilla KDE Integration."
url="https://build.opensuse.org/package/show/openSUSE:Factory/mozilla-kde4-integration"
arch=("i686" "x86_64")
license=('MIT')
depends=("kdelibs")
makedepends=("cmake" "automoc4" "extra-cmake-modules")
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/openSUSE/kmozillahelper/archive/v${pkgver}.tar.gz")
md5sums=('58816fb988dc01a1b141a1d70ecd70ef')

build() {
	mkdir -p "$srcdir/$pkgname-build"
	cd "$srcdir/$pkgname-build"

	cmake -DCMAKE_INSTALL_PREFIX=/usr -DBUILD_TESTING=OFF -DCMAKE_BUILD_TYPE=Release "$srcdir/${pkgname}-${pkgver}"
	make
}

package() {
	cd "$srcdir/$pkgname-build"
	make DESTDIR="$pkgdir" install
}
