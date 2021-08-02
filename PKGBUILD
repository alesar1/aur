# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>

_basename=serd
pkgname=lib32-serd
pkgver=0.30.10
pkgrel=2
pkgdesc="Lightweight C library for RDF syntax supporting reading/ writing Turtle and NTriples (32-bit)"
arch=('x86_64')
url="https://drobilla.net/software/serd/"
license=('custom:ISC')
depends=('lib32-glibc' 'serd')
makedepends=('lib32-gcc-libs' 'waf')
source=("https://download.drobilla.net/$_basename-$pkgver.tar.bz2"{,.sig})
sha512sums=('ed7b49abfd3dc3a724b047f5f0cd07b811596330c96d91c0ce90540440f03260e05daee76c3ccccc3d4ca39afbbd4f3d07decbb601730e90c133a09c640c0006'
            'SKIP')
b2sums=('7f84b425a9eed36c5b59b22b8fd2cb9139a3de2bd1a47f92fd9888c433d931dcf83f13c2460d821c04f4244a79aa4330ba973017508ecb5f4564e78ae45b9b9a'
        'SKIP')
validpgpkeys=('907D226E7E13FA337F014A083672782A9BF368F3') # David Robillard <d@drobilla.net>

prepare() {
    cd "${_basename}-${pkgver}"

    # remove call to local ldconfig
    sed -i "/ldconfig/d" wscript
    # let wscript(s) find the custom waf scripts
    mkdir -pv tools
    touch __init__.py
    touch tools/__init__.py
    cp -v waflib/extras/{autoship,autowaf,lv2}.py tools/
    mkdir -pv plugins/tools/
    cp -v waflib/extras/{autoship,autowaf,lv2}.py plugins/tools/
    rm -rv waflib
    sed -e 's/waflib.extras/tools/g' \
        -e "s/load('autowaf'/load('autowaf', tooldir='tools'/g" \
        -e "s/load('lv2'/load('lv2', tooldir='tools'/g" \
        -i wscript
}

build() {
    cd "${_basename}-${pkgver}"

    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'

    waf configure --prefix=/usr \
                         --libdir=/usr/lib32 \
                         --test

    waf -v build
}

check() {
    cd "${_basename}-${pkgver}"

    waf test
}

package() {
    cd "${_basename}-${pkgver}"

    waf install --destdir="$pkgdir"

    install -vDm 644 COPYING "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

    cd "$pkgdir/usr"

    rm -r bin include share/man
}
