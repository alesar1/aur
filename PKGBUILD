# Maintainer: Bernhard Landauer <oberon@manjaro.org>
# Maintainer: TidestManager1 < michaelpulliam1 (at) gmail (dot) com > 

pkgname=conky-lua
_pkgname=conky
pkgver=1.10.6
pkgrel=1
pkgdesc='Lightweight system monitor for X, with Lua support enabled'
url='http://github.com/brndnmtthws/conky'
license=('BSD' 'GPL3')
arch=('i686' 'x86_64')
options=('!emptydirs')
makedepends=('cmake'
    'docbook2x'
    'docbook-xml'
    'docbook-xsl'
    'librsvg'
    'libxinerama'
    'libxml2'
    'man-db'
    'perl-xml-libxml')
depends=('alsa-lib'
    'cairo'
    'curl'
    'glib2'
    'imlib2'
    'libxdamage'
    'libxft'
    'libxml2'
    'lua51'
    'tolua++'
    'wireless_tools')
provides=("conky=$pkgver")
conflicts=('conky')
backup=('etc/conky/conky.conf' 'etc/conky/conky_no_x11.conf')
source=("https://github.com/brndnmtthws/${_pkgname}/archive/v${pkgver}.tar.gz"
    'include_functional.patch')
sha1sums=('54cb3322dc3a969f1fda03383012c61d57261345'
          '5111076229ddfa778d60af15a8a13d3f703567ba')

prepare() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    patch -p1 -i $srcdir/include_functional.patch
}

build() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
 
    CPPFLAGS="${CXXFLAGS}" LIBS="${LDFLAGS}" LUA_LIBS="-llua5.1" LUA_CFLAGS="-I/usr/include/lua5.1" \
        cmake \
        -D CMAKE_INSTALL_PREFIX=/usr \
        -D CMAKE_BUILD_TYPE=Release \
        -D MAINTAINER_MODE=ON \
        -D BUILD_CURL=ON \
        -D BUILD_LUA_RSVG=ON \
        -D BUILD_LUA_CAIRO=ON \
        -D BUILD_LUA_IMLIB2=ON \
        -D BUILD_IMLIB2=ON \
        -D BUILD_RSS=ON \
        -D BUILD_WEATHER_METAR=ON \
        -D BUILD_WEATHER_XOAP=ON \
        -D BUILD_XDBE=ON \
        -D BUILD_WLAN=ON \
        .

    make
}
 
package() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    make DESTDIR="${pkgdir}" install
    install -Dm644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -Dm644 LICENSE.BSD ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.BSD
    install -Dm644 extras/vim/syntax/conkyrc.vim "${pkgdir}"/usr/share/vim/vimfiles/syntax/conkyrc.vim
    install -Dm644 extras/vim/ftdetect/conkyrc.vim "${pkgdir}"/usr/share/vim/vimfiles/ftdetect/conkyrc.vim
}
