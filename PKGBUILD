# Maintainer: Patrick Northon <northon_patrick3@yahoo.ca>

_pkgname=spdlog
pkgname=mingw-w64-${_pkgname}
pkgver=1.10.0
pkgrel=1
pkgdesc='Very fast, header-only/compiled, C++ logging library (mingw-w64)'
url="https://github.com/gabime/${_pkgname}/"
license=('MIT')
depends=('mingw-w64-fmt')
makedepends=('mingw-w64-cmake')
checkdepends=('mingw-w64-wine')
arch=('any')
options=(!strip !buildflags staticlibs)
optdepends=()
source=(
	"$_pkgname-$pkgver.tar.gz::${url}/archive/refs/tags/v${pkgver}.tar.gz"
)
sha256sums=('697f91700237dbae2326b90469be32b876b2b44888302afbc7aceb68bcfe8224')

_srcdir="${_pkgname}-${pkgver}"
_architectures='i686-w64-mingw32 x86_64-w64-mingw32'
_flags=( -Wno-dev -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS_RELEASE='-O2 -DNDEBUG'
	-DSPDLOG_BUILD_BENCH=OFF -DSPDLOG_FMT_EXTERNAL=ON
	-DSPDLOG_WCHAR_FILENAMES=OFF -DSPDLOG_WCHAR_SUPPORT=OFF -DSPDLOG_ENABLE_PCH=ON -DSPDLOG_BUILD_EXAMPLE=OFF )

prepare() {
	cd "${_srcdir}"
	find . -iname '*.cpp' -type f -exec sed -i 's/<Windows.h>/<windows.h>/' '{}' \;
}

build() {
	for _arch in ${_architectures}; do
		${_arch}-cmake -S "${_srcdir}" -B "build-${_arch}-static" "${_flags[@]}" -DSPDLOG_BUILD_TESTS=OFF \
			-DSPDLOG_BUILD_TESTS_HO=OFF -DBUILD_SHARED_LIBS=OFF -DCMAKE_INSTALL_PREFIX="/usr/${_arch}/static"
		cmake --build "build-${_arch}-static"
		
		${_arch}-cmake -S "${_srcdir}" -B "build-${_arch}" "${_flags[@]}" -DSPDLOG_BUILD_TESTS=OFF -DSPDLOG_BUILD_TESTS_HO=OFF
		cmake --build "build-${_arch}"
	done
}

check() {
	for _arch in ${_architectures}; do
		# Only compile-time tests enabled.
		${_arch}-cmake -S "${_srcdir}" -B "build-${_arch}" "${_flags[@]}" -DSPDLOG_BUILD_TESTS=OFF -DSPDLOG_BUILD_TESTS_HO=ON
		cmake --build "build-${_arch}"
		cmake --build "build-${_arch}" --target test
	done
}

package() {
	for _arch in ${_architectures}; do
		DESTDIR="${pkgdir}" cmake --install "build-${_arch}-static"
		${_arch}-strip -g "$pkgdir"/usr/${_arch}/static/lib/*.a
		
		DESTDIR="${pkgdir}" cmake --install "build-${_arch}"
		${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
		${_arch}-strip -g "$pkgdir"/usr/${_arch}/lib/*.a
	done
}
