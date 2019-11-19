# Maintainer: skydrome <skydrome@i2pmail.org>
# Contributor: skydrome <skydrome@i2pmail.org>

# Compile a debug build?
_debug=n

# Compile from a specific commit?
_commit=HEAD
_branch=master

pkgname=rtorrent-pyro-git
pkgver=20191003
pkgrel=1
pkgdesc="Ncurses BitTorrent client based on libTorrent - rTorrent-git with Pyroscope patches"
url="https://github.com/pyroscope/rtorrent-ps"
license=('GPL2')
arch=('i686' 'x86_64' 'armv7h')
depends=('libtorrent-pyro-git' 'ncurses' 'curl' 'xmlrpc-c')
makedepends=('git' 'clang')
optdepends=('ttf-dejavu: for utf8 glyphs'
            'python2: for pyroscope tools')
conflicts=('rtorrent' 'rtorrent-git' 'rtorrent-ps')
provides=('rtorrent')
install='pyroscope.install'
backup=('usr/share/doc/rtorrent/rtorrent.rc.sample')

[[ $_debug = 'n' ]] &&
    _debug='--disable-debug'
    BUILDENV+=(!check) ||
{
    _debug='--enable-extra-debug'
    depends+=('cppunit')
    options=(!strip)
}

_url='https://raw.githubusercontent.com/chros73/rtorrent-ps-ch/master/patches'
source=("git://github.com/rakshasa/rtorrent.git#branch=$_branch"
        "https://github.com/skydrome/rtorrent/commit/c3697d3a82085194643e58e8ee06855e4d45a6dc.patch"
        "https://raw.githubusercontent.com/pyroscope/pyrocore/master/src/pyrocore/data/config/bash-completion"
        "$_url/command_pyroscope.cc"
        "$_url/ui_pyroscope.cc"
        "$_url/ui_pyroscope.h"
        "rtorrent.rc.sample"
        "bootstrap.sh")

md5sums=('SKIP'
         '5d41e09f61e346a6c055e36c243f00b5'
         'efdb1a143d661dcda5a22e43bb28e36f'
         'd68073da455851d628b587b852b4b54a'
         '5befaa2e705a550a6dcd7f397060df81'
         '0e9791d796e2185279d7f109b064576b'
         'ac6885720390a54fea906976eae84a9d'
         '9edae7ef267b47d2445a667e98f6ea2d')

pkgver() {
    cd rtorrent
    git log -1 --format="%cd" --date=short "$_commit" |tr -d -
}

prepare() {
    cd rtorrent
    #patch -Np1 -i "$startdir/rtorrent.patch"

    sed -i configure.ac \
        -e "s:\\(AC_DEFINE(HAVE_CONFIG_H.*\\):\1\nAC_DEFINE(RT_HEX_VERSION, 0x000908, version checks):"
    sed -i src/ui/download_list.cc \
        -e "s:rTorrent \" VERSION:rTorrent-PS g$(git rev-parse --short $_commit) \" VERSION:"

    for i in $srcdir/*.patch; do
        msg "Patching $(basename $i)"
        patch -uNp1 -i "$i"
    done
    for i in $srcdir/*.{cc,h}; do
        ln -sf "$i" src
    done

    ./autogen.sh
}

build() {
    cd rtorrent
    export CC=clang
    export CXX=clang++
    export CXXFLAGS+=" -Wno-exceptions"
    export libtorrent_LIBS="-L/usr/lib -ltorrent"

    ./configure $_debug \
        --prefix=/usr \
        --with-xmlrpc-c
    make
}

check() {
    make -C rtorrent check ||true
}

package() {
    cd rtorrent
    make DESTDIR="$pkgdir" install

    install -Dm644 doc/faq.xml           "$pkgdir/usr/share/doc/rtorrent/faq.xml"
    install -Dm644 doc/old/rtorrent.1    "$pkgdir/usr/share/man/man1/rtorrent.1"
    install -Dm755 ../bootstrap.sh       "$pkgdir/usr/share/doc/rtorrent/bootstrap.sh"
    install -Dm644 ../rtorrent.rc.sample "$pkgdir/usr/share/doc/rtorrent/rtorrent.rc.sample"
    install -Dm644 ../bash-completion    "$pkgdir/usr/share/bash-completion/completions/pyrocore"
}
