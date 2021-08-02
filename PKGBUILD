# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>

_basename=sratom
pkgname=lib32-sratom
pkgver=0.6.8
pkgrel=2
pkgdesc="An LV2 Atom RDF serialisation library (32-bit)"
arch=('x86_64')
url="https://drobilla.net/software/sratom/"
license=('custom:ISC')
depends=('lib32-sord' 'sratom')
makedepends=('lib32-gcc-libs' 'lib32-lv2' 'waf')
source=("https://download.drobilla.net/$_basename-$pkgver.tar.bz2"{,.sig})
sha512sums=('49ec4b230a72005ab7a7a3de0bfa630a27a16f9f811ca8e7f6da7fcf6b34526577217075d428a993f95b813dd2a82a9b6892eeb2e36b66b122ada778fbb3fb95'
            'SKIP')
b2sums=('8e11e03e6a66e9c96f90a0f31f4a65c660ed44304600caa2daad09b955a4829b266f7495b8ed85c62c34adfbc3e7f97790096bd721b51e1038986ac2e3926e60'
        'SKIP')
validpgpkeys=('907D226E7E13FA337F014A083672782A9BF368F3') # David Robillard <d@drobilla.net>

prepare() {
    cd "$_basename-$pkgver"

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
    cd "$_basename-$pkgver"

    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'

    waf configure --prefix=/usr \
                  --libdir=/usr/lib32 \
                  --test

    waf build
}

check() {
    cd "$_basename-$pkgver"

    waf test
}

package() {
    cd "$_basename-$pkgver"

    waf install --destdir="$pkgdir"

    install -vDm 644 COPYING -t "${pkgdir}/usr/share/licenses/${pkgname}"

    cd "$pkgdir/usr"

    rm -r include
}
