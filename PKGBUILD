# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>

_basename=serd
pkgname=lib32-serd
pkgver=0.30.4
pkgrel=1
pkgdesc="Lightweight C library for RDF syntax supporting reading/ writing Turtle and NTriples (32-bit)"
arch=('x86_64')
url="https://drobilla.net/software/serd/"
license=('custom:ISC')
depends=('lib32-glibc' 'serd')
makedepends=('waf')
source=("https://download.drobilla.net/$_basename-$pkgver.tar.bz2"{,.sig})
sha512sums=('4cc032f826d891213c6db787b10a41ffb8f4b2a3357ffa536e34013755dc34db7109d1b42f550a0d559d8651f56c3a5dfb3654c3e2047ee6e609ff9a5fe803d6'
            'SKIP')
validpgpkeys=('907D226E7E13FA337F014A083672782A9BF368F3')

prepare() {
    cd "${_basename}-${pkgver}"
    # remove call to local ldconfig
    sed -i "/ldconfig/d" wscript
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
