# Contributor: Aaron Lindsay <aaron@aclindsay.com>
# Maintainer: Edvinas Valatka <edacval@gmail.com>

pkgname=ccnet
pkgver=5.0.3
pkgrel=1
pkgdesc="A framework for writing networked applications in C."
arch=('i686' 'x86_64' 'armv7h' 'armv6h')
url="https://github.com/haiwen/ccnet/"
license=('GPL3')
depends=('libevent' 'libzdb' 'libsearpc>=3.0.7' 'libldap' 'python2')
makedepends=('vala' 'pacman>=4.1')
options=('!makeflags')

source=("${pkgname}-v${pkgver}-server.tar.gz::https://github.com/haiwen/${pkgname}/archive/v${pkgver}-server.tar.gz"
    "https://raw.githubusercontent.com/haiwen/ccnet/master/COPYRIGHT"
    "libccnet.pc.patch")

prepare () {
    cd "$srcdir/$pkgname-$pkgver-server"
    patch -p1 -i $srcdir/libccnet.pc.patch
}

build () {
    cd "$srcdir/$pkgname-$pkgver-server"
    ./autogen.sh
    ./configure --enable-server --enable-ldap --prefix=/usr --disable-compile-demo PYTHON=/usr/bin/python2
    make -j1
}

package () {
    cd "$srcdir/$pkgname-$pkgver-server"
    make DESTDIR="$pkgdir" install
}
sha256sums=('d9912fc2ca7ea1c41f58c8f461cc02c6d650d5d59f79b8337a987478306eb175'
            'c07aeccf581c255e60acbddcc6af90290e0d6354e6ec0ee1987b82845d3d57ac'
            '66c3b02c3981db6a80819e0ae103bedadf8dfdf81405a7f75a9cba714acf973f')
