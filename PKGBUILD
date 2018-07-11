# Maintainer: Jerome Leclanche <jerome@leclan.ch>

_pkgname=qtermwidget
pkgname=$_pkgname-git
pkgver=0.9.0.49.g5d789ca
pkgrel=1
pkgdesc="A terminal widget for Qt"
arch=("i686" "x86_64")
url="https://github.com/lxqt/qtermwidget"
license=("GPL2")
provides=("$_pkgname")
conflicts=("$_pkgname")
depends=("qt5-base")
makedepends=(git cmake lxqt-build-tools-git qt5-tools python-pyqt5 python-sip sip)
source=("git+https://github.com/lxqt/$_pkgname.git")
sha256sums=('SKIP')


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
		-DQTERMWIDGET_BUILD_PYTHON_BINDING=ON
	make
}

package() {
	cd build
	make DESTDIR="$pkgdir" install
}
