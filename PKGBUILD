# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>

_basename=lilv
pkgname=lib32-lilv
pkgver=0.24.14
pkgrel=1
pkgdesc="A C library interface to the LV2 plug-in standard (32-bit)"
arch=(x86_64)
url="https://drobilla.net/software/lilv/"
license=(ISC)
depends=(lib32-glibc lib32-lv2 lib32-serd lib32-sord lib32-sratom lilv)
makedepends=(lib32-libsndfile waf)
source=(https://download.drobilla.net/${_basename}-${pkgver}.tar.bz2{,.sig})
sha512sums=('f266e91f3cbc325c25dd7d08bde5033091cb3072c2dcb1490e9474f562b798dbc71c45ca7d971ed4dfd6bb16f5f6725ae242a58c4486684b71350e73f1469f47'
            'SKIP')
b2sums=('bc84fe5a4bf34f88ea7f9c09cb3168186f7f0fd2f3f23b08f55100502d959fd74fe7e1c6d9307772b1983fbeedde100f75d6751e9bf92a9663aaaa115ca0770c'
        'SKIP')
validpgpkeys=('907D226E7E13FA337F014A083672782A9BF368F3') # David Robillard <d@drobilla.net>

prepare() {
    cd $_basename-$pkgver

    # let wscript(s) find the custom waf scripts
    mkdir -pv tools
    touch __init__.py
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
                  --no-bash-completion \
                  --no-bindings \
                  --dyn-manifest \
                  --test

    waf -v build
}

check() {
    cd $_basename-$pkgver

    waf test
}

package() {
    cd $_basename-$pkgver

    waf install --destdir="${pkgdir}"

    install -vDm 644 COPYING -t "$pkgdir/usr/share/licenses/$pkgname/"

    cd "$pkgdir"/usr

    rm -r bin include share/man
}
