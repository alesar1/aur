# Maintainer: Xentec <xentec at aix0 dot eu>

_name=cppformat
pkgname=${_name}-git
pkgver=1.1.0.r393.gb64913b
pkgrel=1
pkgdesc="Small, safe and fast formatting library for C++"
arch=('i686' 'x86_64')
url="http://cppformat.github.io"
license=('BSD')

conflicts=('cppformat')
depends=('gcc-libs')
makedepends=('cmake' 'git' 'doxygen' 'nodejs-less' 'python-virtualenv')

source=("$pkgname"::'git+https://github.com/cppformat/cppformat')
sha256sums=('SKIP')

pkgver() {
	cd "$pkgname"
	git describe --long --tags | sed -r 's/([^-]*-g)/r\1/;s/-/./g'
}

prepare() {
	cd "$pkgname"

	sed -i  "s/'--clean-css',//" doc/build.py
}

build() {
	cd "$pkgname"
	mkdir -p build && cd build

	cmake \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DCMAKE_BUILD_TYPE=Release \
		-DBUILD_SHARED_LIBS=1 \
		-DFMT_TEST=0 \
		-Wno-dev \
		..

	make
	make doc
}

check() {
	cd "$pkgname"/build

	cmake \
		-DFMT_TEST=1 \
		-Wno-dev \
		..

	make test
}

package() {
	cd "$pkgname"/build
	
	make DESTDIR="$pkgdir" install
	install -D -m644 ../LICENSE.rst ${pkgdir}/usr/share/licenses/${_name}/LICENSE

	# clean up
	rm -rf ${pkgdir}/usr/share/doc/${_name}/html/{.buildinfo,.doctrees,_sources}
}
