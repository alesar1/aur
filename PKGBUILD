# Maintainer: eolianoe <eolianoe [at] gmail [DoT] com>
# Contributor: Aaron Lindsay <aaron@aclindsay.com>
# Contributor: Edvinas Valatka <edacval@gmail.com>
# Contributor: Adrian Hühn <adrian.huehn@web.de>

pkgname='libsearpc'
epoch=2
pkgver=3.2.0
pkgrel=3
pkgdesc="A simple C language RPC framework (including both server side & client side)"
arch=('i686' 'x86_64' 'armv7h' 'armv6h' 'aarch64')
url="https://github.com/haiwen/libsearpc"
license=('Apache')
depends=(
    'glib2'
    'jansson'
    'python-gobject'
    'python-simplejson'
)
source=("libsearpc-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('c479d85e405674c3450eac040abe143af5a9fafe7f1b74926e2a05280ab5420e')

prepare () {
    cd "$srcdir/$pkgname-$pkgver"
    sed -i 's|(DESTDIR)@prefix@|@prefix@|' './libsearpc.pc.in'
}

build () {
    cd "$srcdir/$pkgname-$pkgver"
    ./autogen.sh
    ./configure --prefix=/usr PYTHON='/usr/bin/python'
    make
}

check () {
    cd "$srcdir/$pkgname-$pkgver"
    make check
}

package () {
    cd "$srcdir/$pkgname-$pkgver"
    make DESTDIR="$pkgdir" install
}
