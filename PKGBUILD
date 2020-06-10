# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>
# Contributor: GordonGR <ntheo1979@gmail.com>
# Contributor: josephgbr <rafael.f.f1 at gmail dot com>
# Contributor: escoand <passtschu at freenet.de>

_basename=faad2
pkgname=lib32-faad2
pkgver=2.9.2
pkgrel=1
pkgdesc="ISO AAC audio decoder (32 bit)"
arch=('x86_64')
url="https://github.com/knik0/faad2"
license=('GPL2')
depends=('lib32-glibc' 'faad2')
options=('!makeflags')
source=($_basename-$pkgver.tar.gz::https://github.com/knik0/faad2/archive/${pkgver//./_}.tar.gz)
sha256sums=('9728b2b94f94ab49363cd229e7377fbe6ef3c311c5cd80da662d53ddb0ee091d')

prepare() {
    mv -v "${_basename}-${pkgver//./_}" "${_basename}-${pkgver}"

    cd "${_basename}-${pkgver}"

    autoreconf -vfi
}

build() {
    cd "${_basename}-${pkgver}"

    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'

    ./configure \
        --build=i686-pc-linux-gnu \
        --prefix=/usr \
        --libdir=/usr/lib32

    make
}

package() {
    cd "${_basename}-${pkgver}"

    make DESTDIR="${pkgdir}" install

    rm -rf "${pkgdir}/usr"/{bin,include,share}
}
