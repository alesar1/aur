# Maintainer: Musee "lae" Ullah <lae(at)lae(dot)is>

pkgname=monacoin-qt
_coinname=monacoin
pkgver=0.15.1
pkgrel=1
pkgdesc="peer-to-peer network based digital currency - Qt GUI"
arch=('i686' 'x86_64')
url="https://monacoin.org/en/index.html"
license=('MIT')
provides=('monacoin-qt' 'monacoind' 'monacoin-tx')
depends=('openssl-1.0' 'boost-libs' 'libevent' 'db4.8' 'qt5-base' 'protobuf')
makedepends=('git' 'pkg-config' 'boost' 'gcc' 'make' 'autoconf' 'automake' 'libtool')
optdepends=('qrencode: for generating QR codes within the GUI' 'zeromq: send notifications via zeromq')
source=("https://github.com/monacoinproject/${_coinname}/archive/${_coinname}-${pkgver}.tar.gz"
        "0001-rename-libbitcoinconsensus-to-libmonacoinconsensus.patch"
        "monacoin-qt.desktop")
sha256sums=('ceadfafc4721226521171188d8842858af0ea8527e559182f38a2491e177667b'
            '458444ae19977bacb20842f26a8662a9d80d6aaa52b0df91ecf9bc83dac22ec0'
            '4af25bac0076c6d2060832b66819741d3e049a71d6ad5f1a26a2700415d23cfc')
install=monacoin.install

prepare() {
    mv "${srcdir}/monacoin-monacoin-${pkgver}" "${srcdir}/${_coinname}-${pkgver}"
    cd "${srcdir}/${_coinname}-${pkgver}"
    patch -p1 <"${srcdir}/0001-rename-libbitcoinconsensus-to-libmonacoinconsensus.patch"
}

build() {
    cd "${srcdir}/${_coinname}-${pkgver}"
    export PKG_CONFIG_PATH="/usr/lib/openssl-1.0/pkgconfig"
    export CXXFLAGS+=" -I/usr/include/openssl-1.0"
    export LDFLAGS+=" -L/usr/lib/openssl-1.0 -lssl"
    ./autogen.sh
    ./configure --prefix=/usr --with-pic --disable-shared --enable-cxx \
        --disable-bench --disable-tests
    make ${MAKEFLAGS}
}

package() {
    install -Dm644 "${srcdir}/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
    cd "${srcdir}/${_coinname}-${pkgver}"
    install -Dm644 share/pixmaps/bitcoin256.xpm "${pkgdir}/usr/share/pixmaps/monacoin.xpm"
    make DESTDIR="${pkgdir}" install
}
