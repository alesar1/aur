# Maintainer: Otreblan <otreblain@gmail.com>

pkgname=tinyobjloader
pkgver=2.0.0rc9
pkgrel=1
epoch=
pkgdesc="Tiny but powerful single file wavefront obj loader "
arch=('x86_64')
url="https://github.com/tinyobjloader/tinyobjloader"
license=('MIT')
groups=()
depends=('gcc-libs')
makedepends=('cmake')
checkdepends=()
optdepends=()
provides=()
conflicts=()
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('f9061d790905416a8a6c6f3dbfee77c7665636de0a9dc750ce799b513ddba83c')

prepare() {
	cd "$srcdir/$pkgname-$pkgver"
	mkdir -p "build"

	local CMAKE_VERSION="$(LC_ALL=C cmake --version | awk '{print $3; exit}')"

	# Needed for the link time optimization
	sed "s/\(cmake_minimum_required(\).*)/\1VERSION $CMAKE_VERSION)/" \
		-i CMakeLists.txt

	# Remove reference to the source file
	echo 'target_compile_definitions(${LIBRARY_NAME} PRIVATE NDEBUG)' >> CMakeLists.txt
}

build() {
	cd "$srcdir/$pkgname-$pkgver/build"
	cmake \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DCMAKE_UNITY_BUILD=ON \
		-DCMAKE_INTERPROCEDURAL_OPTIMIZATION=ON \
		-DBUILD_SHARED_LIBS=ON \
		..
	make
}

package() {
	cd "$srcdir/$pkgname-$pkgver/build"
	make DESTDIR="$pkgdir/" install

	# The license is in the wrong folder.
	mv "$pkgdir/usr/share/"{doc,licenses}
}
