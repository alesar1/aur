# Maintainer: Jerome Leclanche <jerome@leclan.ch>

_pkgname=qtermwidget
pkgname=$_pkgname-git
pkgver=0.6.0.33.gda6838d
pkgrel=1
pkgdesc="A terminal widget for Qt"
arch=("i686" "x86_64")
url="https://github.com/qterminal/qtermwidget"
license=("GPL2")
provides=("$_pkgname")
conflicts=("$_pkgname")
depends=("qt5-base")
makedepends=("git" "cmake")
source=("git+https://github.com/qterminal/$_pkgname.git")
sha256sums=("SKIP")


pkgver() {
	cd "$srcdir/$_pkgname"
	git describe --always | sed "s/-/./g"
}

build() {
	mkdir -p build
	cd build
	cmake "$srcdir/$_pkgname" \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DCMAKE_INSTALL_LIBDIR=lib \
		-DCMAKE_BUILD_TYPE=Release \
		-DBUILD_DESIGNER_PLUGIN=0 \
		-DUSE_QT5=true
	make
}

package() {
	cd build
	make DESTDIR="$pkgdir" install
}
