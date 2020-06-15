# Maintainer: Patrick Northon <northon_patrick3@yahoo.ca>

pkgname=mingw-w64-openexr
pkgver=2.5.2
pkgrel=1
pkgdesc="An high dynamic-range image file format library (mingw-w64)"
url="http://www.openexr.com/"
arch=(any)
license=('BSD')
depends=('mingw-w64-crt' 'mingw-w64-zlib')
makedepends=('mingw-w64-cmake' 'wine')
options=('staticlibs' '!buildflags' '!strip')
source=("https://github.com/AcademySoftwareFoundation/openexr/archive/v${pkgver}.tar.gz")
sha256sums=('5da8dff448d0c4a529e52c97daf238a461d01cd233944f75095668d6d7528761')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
	_flags=( -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS_RELEASE="-O2 -DNDEBUG -Wno-dev" -DBUILD_TESTING=OFF 
		-DINSTALL_OPENEXR_DOCS=OFF -DINSTALL_OPENEXR_EXAMPLES=OFF -DOPENEXR_BUILD_UTILS=OFF -DPYILMBASE_ENABLE=OFF )
	
	for _arch in ${_architectures}; do
		${_arch}-cmake -S openexr-${pkgver} -B "build-${_arch}-static" "${_flags[@]}" -DBUILD_SHARED_LIBS=FALSE
		make -C "build-${_arch}-static"
		${_arch}-cmake -S openexr-${pkgver} -B "build-${_arch}" "${_flags[@]}"
		make -C "build-${_arch}"
	done
}

package() {
  for _arch in ${_architectures}; do
		make DESTDIR="${pkgdir}" -C "build-${_arch}-static" install
    make DESTDIR="${pkgdir}" -C "build-${_arch}" install
    ${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g "$pkgdir"/usr/${_arch}/lib/*.a
  done
}
