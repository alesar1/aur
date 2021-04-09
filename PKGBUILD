# Maintainer: Patrick Northon <northon_patrick3@yahoo.ca>

pkgname=mingw-w64-openexr
pkgver=2.5.4
pkgrel=1
pkgdesc="An high dynamic-range image file format library (mingw-w64)"
url="http://www.openexr.com/"
arch=(any)
license=('BSD')
depends=('mingw-w64-crt' 'mingw-w64-zlib')
makedepends=('mingw-w64-cmake' 'wine')
options=('staticlibs' '!buildflags' '!strip')
source=("https://github.com/AcademySoftwareFoundation/openexr/archive/v${pkgver}.tar.gz")
sha256sums=("dba19e9c6720c6f64fbc8b9d1867eaa75da6438109b941eefdc75ed141b6576d")

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
	_flags=( -Wno-dev -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS_RELEASE="-O2 -DNDEBUG" -DBUILD_TESTING=OFF 
		-DINSTALL_OPENEXR_DOCS=OFF -DINSTALL_OPENEXR_EXAMPLES=OFF -DOPENEXR_BUILD_UTILS=OFF -DPYILMBASE_ENABLE=OFF )
	
	for _arch in ${_architectures}; do
		${_arch}-cmake -S "openexr-${pkgver}" -B "build-${_arch}" "${_flags[@]}" -DOPENEXR_BUILD_BOTH_STATIC_SHARED=ON
		cmake --build "build-${_arch}"
	done
}

package() {
  for _arch in ${_architectures}; do
    DESTDIR="${pkgdir}" cmake --install "build-${_arch}"
    ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g "$pkgdir"/usr/${_arch}/lib/*.a
  done
}
