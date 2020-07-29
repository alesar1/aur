# Maintainer: Patrick Northon <northon_patrick3@yahoo.ca>

pkgname=mingw-w64-fmt
pkgver=7.0.2
pkgrel=1
pkgdesc="{fmt} is an open-source formatting library for C++. It can be used as a safe and fast alternative to (s)printf and iostreams."
url="https://fmt.dev/"
license=("MIT")
depends=("mingw-w64-crt")
builddepends=("mingw-w64-cmake")
arch=("any")
options=(!strip !buildflags staticlibs)
optdepends=()
sha256sums=(
	"7697e022f9cdc4f90b5e0a409643faa2cde0a6312f85e575c8388a1913374de5"
)
source=(
	"https://github.com/fmtlib/fmt/archive/${pkgver}.tar.gz"
)

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
	_flags=( -Wno-dev -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS_RELEASE="-O2 -DNDEBUG" -DFMT_DOC=OFF -DFMT_TEST=OFF )
	
	for _arch in ${_architectures}; do
		${_arch}-cmake -S "fmt-${pkgver}" -B "build-${_arch}" "${_flags[@]}"
		make -C "build-${_arch}"
		
		${_arch}-cmake -S "fmt-${pkgver}" -B "build-${_arch}-static" "${_flags[@]}" -DBUILD_SHARED_LIBS=FALSE
		make -C "build-${_arch}-static"
	done
}

package() {
	for _arch in ${_architectures}; do
		make DESTDIR="${pkgdir}" -C "build-${_arch}" install
		make DESTDIR="${pkgdir}" -C "build-${_arch}-static" install
		${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
    ${_arch}-strip -g "$pkgdir"/usr/${_arch}/lib/*.a
	done
}
