# Maintainer: Patrick Northon <northon_patrick3@yahoo.ca>

pkgname=mingw-w64-fmt
pkgver=7.1.2
pkgrel=1
pkgdesc="{fmt} is an open-source formatting library for C++. It can be used as a safe and fast alternative to (s)printf and iostreams. (mingw-w64)"
url="https://fmt.dev/"
license=("MIT")
depends=("mingw-w64-crt")
makedepends=("mingw-w64-cmake")
arch=("any")
options=(!strip !buildflags staticlibs)
optdepends=()
sha256sums=(
	"4119a1c34dff91631e1d0a3707428f764f1ea22fe3cd5e70af5b4ccd5513831c"
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
	done
}

package() {
	for _arch in ${_architectures}; do
		make DESTDIR="${pkgdir}" -C "build-${_arch}" install
		${_arch}-strip --strip-unneeded "$pkgdir"/usr/${_arch}/bin/*.dll
	done
}
