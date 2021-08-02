# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>

_basename=sord
pkgname=lib32-sord
pkgver=0.16.8
pkgrel=2
pkgdesc="A lightweight C library for storing RDF data in memory (32-bit)"
arch=('x86_64')
url="https://drobilla.net/software/sord/"
license=('custom:ISC')
depends=('lib32-serd' 'sord')
makedepends=('lib32-gcc-libs' 'lib32-pcre' 'waf')
source=("https://download.drobilla.net/$_basename-$pkgver.tar.bz2"{,.sig})
sha512sums=('24ed50de8e5bb321e557bac6d3e441b2ed49adabf828bf0e1b33a080c89306dde80443dc8b563098fcc184c4d6e53b7e716b523ddccdf56d08301d1b0120f2b2'
            'SKIP')
b2sums=('3ba43b2edb69efec64ac68f139a18f23dc1b92290b054f420c400d2907af74fa550b042596374136c53b7cf0db1b775cfc7edd24c771bbf26d25928845787c7b'
        'SKIP')
validpgpkeys=('907D226E7E13FA337F014A083672782A9BF368F3') # David Robillard <d@drobilla.net>

prepare() {
    cd "$_basename-$pkgver"

    # remove local call to ldconfig
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
    cd "$_basename-$pkgver"

    export CC='gcc -m32'
    export CXX='g++ -m32'
    export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'
    export CFLAGS="$(echo "$CFLAGS" | sed 's/ -fno-plt//')"

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

    install -vDm 644 COPYING -t "$pkgdir/usr/share/licenses/$pkgname"

    cd "$pkgdir/usr"

    rm -r bin include share/man
}
