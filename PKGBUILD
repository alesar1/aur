# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>

_basename=serd
pkgname=lib32-serd
pkgver=0.30.12
pkgrel=1
pkgdesc="Lightweight C library for RDF syntax supporting reading/ writing Turtle and NTriples (32-bit)"
arch=(x86_64)
url="https://drobilla.net/software/serd/"
license=(custom:ISC)
depends=(lib32-glibc serd)
makedepends=(lib32-gcc-libs waf)
source=(https://download.drobilla.net/$_basename-$pkgver.tar.bz2{,.sig})
sha512sums=('c330648eb2c947a6d220f42d0af63fd2744da496301483e58be3cda387da166711d6acd5cee2df8cbb837ab450e1802b3f9a0a2973e5ad6d976b69b863aecb7f'
            'SKIP')
b2sums=('acd065613494f05d1b2016c2097c1efbd1ebe3a5b901fac3a60d27140fee5c51ec17314df7ac2d3ad89d852dcb016dcf7255271f506f900445ce275335ed7d01'
        'SKIP')
validpgpkeys=('907D226E7E13FA337F014A083672782A9BF368F3') # David Robillard <d@drobilla.net>

prepare() {
    cd $_basename-$pkgver

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
    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'

    export LINKFLAGS="$LDFLAGS"

    cd $_basename-$pkgver

    waf configure --prefix=/usr \
                         --libdir=/usr/lib32 \
                         --test

    waf -v build
}

check() {
    cd $_basename-$pkgver

    waf test
}

package() {
    cd $_basename-$pkgver

    waf install --destdir="$pkgdir"

    install -vDm 644 COPYING -t "$pkgdir/usr/share/licenses/$pkgname/"

    cd "$pkgdir/usr"

    rm -r bin include share/man
}
