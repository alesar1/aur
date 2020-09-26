# Maintainer: Caleb Maclennan <caleb@alerque.com>

_pkgname=sile
pkgname=$_pkgname-luajit
pkgdesc='Modern typesetting system inspired by TeX'
pkgver=0.10.11
pkgrel=1
arch=('x86_64')
url='https://www.sile-typesetter.org'
license=('MIT')
_lua_deps=('cassowary'
           'cosmo'
           'cliargs'
           'expat'
           'filesystem'
           'linenoise'
           'lpeg'
           'luaepnf'
           'penlight'
           'repl'
           'sec'
           'socket'
           'stdlib'
           'vstruct'
           'zlib')
depends=('fontconfig'
         'freetype2'
         'harfbuzz'
         'gentium-plus-font'
         'icu'
         'libpng' # this goes with libtexpdf if ever split out to a library package
         'luajit'
         "${_lua_deps[@]/#/lua51-}"
         'zlib')
# Note find via find-deps; needs rebuilding any time versions of these change;
# currently missing several because parent packages are missing the provides=()
depends+=('libfreetype.so'
          'libharfbuzz.so'
          'libicudata.so'
          'libicui18n.so'
          'libicuio.so'
          'libicuuc.so')
checkdepends=('poppler')
provides=('libtexpdf.so'
          "$_pkgname=$pkgver")
conflicts=("$_pkgname")
source=("https://github.com/sile-typesetter/sile/releases/download/v$pkgver/$_pkgname-$pkgver.tar.xz")
sha256sums=('acbc94db894bbcdd1bbcf94e1aa506b0bcb8bffc1f2b96c0c345321c85ff8a30')

build () {
    cd "$_pkgname-$pkgver"
    ./configure \
        --prefix /usr \
        --with-luajit \
        --with-system-luarocks
    make all
}

check () {
    cd "$_pkgname-$pkgver"
    make check
}

package () {
    cd "$_pkgname-$pkgver"
    make install DESTDIR="$pkgdir"
}
