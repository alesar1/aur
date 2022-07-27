# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>

_basename=serd
pkgname=lib32-serd
pkgver=0.30.14
pkgrel=1
pkgdesc="Lightweight C library for RDF syntax supporting reading/ writing Turtle and NTriples (32-bit)"
arch=(x86_64)
url="https://drobilla.net/software/serd.html"
license=(custom:ISC)
depends=(lib32-gcc-libs serd)
makedepends=(meson)
source=(https://download.drobilla.net/$_basename-$pkgver.tar.xz{,.sig})
sha512sums=('d753bf60d4ff37220e64fda6a5dc6c69dc1a52ef435ab5b1e698f72dc5a7280ea764bb53b015753c3dc0910f252ca96c0ebafcb902a9956fcbf0a4480ce4e1dc'
            'SKIP')
b2sums=('42ed92e8eed3564c2625dd2f8e9bff55b65d1c8c993f13f2aa7ea0ab41a4c261b6b8fe9d4c61a915157616df1dba11d37f3813cd7bf7cd4571cb535895cb8f9c'
        'SKIP')
validpgpkeys=('907D226E7E13FA337F014A083672782A9BF368F3') # David Robillard <d@drobilla.net>

build() {
    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG='/usr/bin/i686-pc-linux-gnu-pkg-config'

    arch-meson $_basename-$pkgver build \
        --libdir='/usr/lib32' \
        -Ddocs=disabled \
        -Dtools=disabled

    meson compile -C build
}

check() {
    meson test -C build
}

package() {
    meson install -C build --destdir "$pkgdir"

    install -vDm 644 $_basename-$pkgver/COPYING -t "$pkgdir/usr/share/licenses/$pkgname/"
    install -vDm 644 $_basename-$pkgver/{AUTHORS,NEWS,README.md} -t "$pkgdir/usr/share/doc/$pkgname/"

    cd "$pkgdir/usr"

    rm -r include
}
