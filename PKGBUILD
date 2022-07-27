# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>

_basename=sord
pkgname=lib32-sord
pkgver=0.16.12
pkgrel=1
pkgdesc="A lightweight C library for storing RDF data in memory (32-bit)"
arch=(x86_64)
url="https://drobilla.net/software/sord.html"
license=(custom:ISC)
depends=(lib32-serd sord)
makedepends=(meson)
source=(https://download.drobilla.net/$_basename-$pkgver.tar.xz{,.sig})
sha512sums=('d63cc1473d12676dac3724a096c85fd47745e456cf4b191fd9f8aaf8bb9399510c6878948fd045cc1942356e61dbefd8d88374c1ef6b327057e0bb8bfa03f926'
            'SKIP')
b2sums=('9b89848440a994145a934e66e6fe7b844e82e926cb48d05223faef9357d315db981cd68b1174d7c47e5d63b97f8e15d8cc6b2b992a6bd790b8b117ebbb6c059a'
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
