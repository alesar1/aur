# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>

_basename=sratom
pkgname=lib32-sratom
pkgver=0.6.10
pkgrel=1
pkgdesc="An LV2 Atom RDF serialisation library (32-bit)"
arch=(x86_64)
url="https://drobilla.net/software/sratom/"
license=(custom:ISC)
depends=(lib32-glibc lib32-sord lib32-lv2 sratom)
makedepends=(lib32-gcc-libs waf)
source=("https://download.drobilla.net/$_basename-$pkgver.tar.bz2"{,.sig})
sha512sums=('cc5d2848d61de45a37d1f844b2c741016decf065bcac975214dd01108171ba332f0a51526f2f1078d5f501055af0a48716704515cbe7a9f73526fd878621ca4b'
            'SKIP')
b2sums=('6205a0269216099556556cd251649eba58fdf1a2c8a80611367f3b9564fe410ed7ff1c565ab7b628743fa99ca893eb7a86fed631872eff86e19de9ba534fae49'
        'SKIP')
validpgpkeys=('907D226E7E13FA337F014A083672782A9BF368F3') # David Robillard <d@drobilla.net>

prepare() {
    cd $_basename-$pkgver

    # remove local ldconfig call
    sed -i '/ldconfig/d' wscript

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

    waf build
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

    rm -r include
}
