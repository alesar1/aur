# Maintainer: skydrome <skydrome@i2pmail.org>
# Contributor: skydrome <skydrome@i2pmail.org>

# Compile a debug build?
_debug=n

# Compile from a specific commit?
_commit=HEAD

pkgname=rtorrent-pyro-git
pkgver=20160310
pkgrel=1
pkgdesc="Ncurses BitTorrent client based on libTorrent - rTorrent-git with Pyroscope patches"
url="https://github.com/pyroscope/rtorrent-ps"
license=('GPL')
arch=('i686' 'x86_64')
depends=('libtorrent-pyro-git' 'libsigc++' 'ncurses' 'curl' 'xmlrpc-c')
makedepends=('git' 'cppunit')
optdepends=('ttf-dejavu: for utf8 glyphs')
conflicts=('rtorrent' 'rtorrent-git')
provides=('rtorrent')
install='pyroscope.install'
backup=('usr/share/doc/rtorrent/rtorrent.rc.sample')

[[ $_debug = 'n' ]] &&
    _debug='--disable-debug' || options=(!strip)

_url="https://raw.githubusercontent.com/pyroscope/rtorrent-ps/master/patches"
source=("git://github.com/rakshasa/rtorrent.git#commit=$_commit"
        "rtorrent.rc.sample"
        "${_url}/ps-ui_pyroscope_all.patch"
        "${_url}/pyroscope.patch"
        "${_url}/ui_pyroscope.patch"
        "${_url}/command_pyroscope.cc"
        "${_url}/ui_pyroscope.cc"
        "${_url}/ui_pyroscope.h")

md5sums=('SKIP'
         '35e2c69152a3c2137c5958f9f27cb906'
         '7a88f8ab5d41242fdf1428de0e2ca182'
         'bd04a0699b80c8042e1cf63a7e0e4222'
         '0a2bbaf74c7160ba33876dcc2f050f14'
         '75b2f47edad1f27eb0aca495c6474089'
         '23e215888c8c45cfc6b816b02f473c1b'
         '1258acfc82c50a8f452ace87fef0b416')

pkgver() {
    cd "$srcdir/rtorrent"
    git log -1 --format="%cd" --date=short "$_commit" |tr -d -
}

prepare() {
    cd "$srcdir/rtorrent"
    #patch -Np1 -i "${startdir}/rtorrent.patch"

    sed -i doc/scripts/update_commands_0.9.sed \
        -e "s:':\":g"
    sed -i ../{command_pyroscope.cc,ui_pyroscope.cc} \
        -e "s:tr1:std:"

    sed -i configure.ac \
        -e "s:\\(AC_DEFINE(HAVE_CONFIG_H.*\\):\1\nAC_DEFINE(RT_HEX_VERSION, 0x000907, version checks):"
    sed -i src/ui/download_list.cc \
        -e "s:rTorrent \" VERSION:rTorrent-PS git~$(git rev-parse --short $_commit) \" VERSION:"

    for i in ${srcdir}/*.patch; do
        sed -f doc/scripts/update_commands_0.9.sed -i "$i"
        msg "Patching $i"
        patch -uNp1 -i "$i"
    done
    for i in ${srcdir}/*.{cc,h}; do
        sed -f doc/scripts/update_commands_0.9.sed -i "$i"
        ln -sf "$i" src
    done

    ./autogen.sh
}

build() {
    cd "$srcdir/rtorrent"
    #export CC=clang
    #export CXX=clang++
    export CXXFLAGS+=" -fno-strict-aliasing"
    export libtorrent_LIBS="-L/usr/lib -ltorrent"

    ./configure $_debug \
        --prefix=/usr \
        --with-xmlrpc-c
    make
}

package() {
    cd "$srcdir/rtorrent"
    make DESTDIR="$pkgdir" install

    install -Dm644 "$srcdir"/rtorrent.rc.sample "${pkgdir}/usr/share/doc/rtorrent/rtorrent.rc.sample"
    install -Dm644 doc/faq.xml        "${pkgdir}/usr/share/doc/rtorrent/faq.xml"
    install -Dm644 doc/old/rtorrent.1 "${pkgdir}/usr/share/man/man1/rtorrent.1"
}
