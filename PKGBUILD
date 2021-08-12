# Maintainer: Caleb Maclennan <caleb@alerque.com>
# Maintainer: Adrián Pérez de Castro <aperez@igalia.com>

pkgname=sile
pkgdesc='Modern typesetting system inspired by TeX'
pkgver=0.10.15
pkgrel=3
arch=(x86_64)
url=https://www.sile-typesetter.org
license=(MIT)
_lua_deps=(bit32
           cassowary
           cosmo
           cliargs
           expat
           filesystem
           linenoise
           lpeg
           luaepnf
           penlight
           repl
           sec
           socket
           stdlib
           utf8
           vstruct
           zlib)
depends=(fontconfig
         freetype2
         harfbuzz
         gentium-plus-font
         icu
         libpng # this goes with libtexpdf if ever split out to a library package
         lua
         "${_lua_deps[@]/#/lua-}"
         zlib)
# Note: find via find-deps; needs rebuilding any time versions of these change;
# currently missing several because parent packages are missing the provides=()
depends+=(libfreetype.so
          libharfbuzz.so
          libicudata.so
          libicui18n.so
          libicuio.so
          libicuuc.so)
checkdepends=(poppler)
provides=(libtexpdf.so)
_archive="$pkgname-$pkgver"
source=("https://github.com/sile-typesetter/sile/releases/download/v$pkgver/$_archive.tar.xz")
sha256sums=('49b55730effd473c64a8955a903e48f61c51dd7bb862e6d5481193218d1e3c5c')

build () {
	cd "$_archive"
	./configure \
		--prefix /usr \
		--with-system-luarocks
	make all
}

check () {
	cd "$_archive"
	make check
}

package () {
	cd "$_archive"
	make install DESTDIR="$pkgdir"
}
