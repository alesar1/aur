# Maintainer: eolianoe <eolianoe [at] gmail [DoT] com>
# Contributor: Aaron Lindsay <aaron@aclindsay.com>
# Contributor: Edvinas Valatka <edacval@gmail.com>
# Contributor: Adrian Hühn <adrian.huehn@web.de>

pkgname=libsearpc
pkgver=3.0.7
pkgrel=2
pkgdesc="A simple and easy-to-use C language RPC framework (including both server side & client side) based on GObject System."
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
url="https://github.com/haiwen/libsearpc"
license=('GPLv3')
source=("libsearpc-v${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz"
depends=("glib2>=2.26.0" "jansson>=2.2.1" "python2-gobject2>=2.26.0" 'python2-simplejson')
        "libsearpc.pc.patch")

prepare () {
    cd "${srcdir}/${pkgname}-${pkgver}"
    patch -p1 -i "${srcdir}"/libsearpc.pc.patch
}

build () {
    cd "${srcdir}/${pkgname}-${pkgver}"
    ./autogen.sh
    ./configure --prefix=/usr PYTHON=/usr/bin/python2
    make
}

check () {
    cd "${srcdir}/${pkgname}-${pkgver}"
    make check
}

package () {
    cd "${srcdir}/${pkgname}-${pkgver}"
    make DESTDIR="${pkgdir}" install
}
sha256sums=('efee6b495f93e70101c87849c78b135014dfd2f0e5c08dcfed9834def47cb939'
            'aec39a303aaebc0777a22d8c53367f52f619654d63f62b362d75c1c599e632f4')
