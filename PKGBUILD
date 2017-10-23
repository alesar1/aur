# Maintainer: Jerome Leclanche <jerome@leclan.ch>

_pkgname=lxqt-qtplugin
pkgname=$_pkgname-git
pkgver=0.12.0
pkgrel=1
pkgdesc="LXQt platform integration for Qt"
arch=("i686" "x86_64")
url="http://lxqt.org"
license=("GPL2")
depends=("libdbusmenu-qt5" "libfm-qt-git" "libqtxdg-git")
makedepends=("git" "cmake" "qt5-tools" "lxqt-build-tools-git")
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("git+https://github.com/lxde/$_pkgname.git")
sha256sums=('SKIP')


pkgver() {
	cd "$srcdir/$_pkgname"
	git describe --always | sed "s/-/./g"
}

build() {
	mkdir -p build
	cd build
	cmake "$srcdir/$_pkgname" \
		-DCMAKE_INSTALL_PREFIX=/usr
	make
}

package() {
	cd build
	make DESTDIR="$pkgdir" install
}
