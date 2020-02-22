# Maintainer: Bruce Zhang
pkgname=qt-scrcpy
_name=QtScrcpy
pkgver=1.2.0
pkgrel=1
pkgdesc="Android real-time screencast control tool"
arch=('x86_64')
url="https://github.com/barry-ran/QtScrcpy"
license=('Apache')
depends=('qt5-base' 'scrcpy')
provides=('qt-scrcpy')
source=(
	"$pkgname-$pkgver.src.tar.gz::https://github.com/barry-ran/$_name/archive/v$pkgver.tar.gz"
	binaries.patch
)
sha256sums=('aba3b61c40cf72615e46bb73178175d6d92775816ed5cda125e31eb7883a5fa6'
            '1fa61a24bf59a62db1b29a3d3ec49186ef6f539ff8d09dd04534d939cb30aedd')

prepare() {
	cd "$srcdir/$_name-$pkgver/$_name"
	patch < "$srcdir/binaries.patch"
}

build() {
	cd "$srcdir/$_name-$pkgver"
	mkdir build
	cd build
	qmake ../all.pro CONFIG+=qtquickcompiler
	make
}

package() {
	cd "$srcdir/$_name-$pkgver/output/linux/release"
	install -Dm755 QtScrcpy "$pkgdir/usr/bin/QtScrcpy"
}
