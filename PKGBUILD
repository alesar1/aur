# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>

_basename=sratom
pkgname=lib32-sratom
pkgver=0.6.6
pkgrel=1
pkgdesc="An LV2 Atom RDF serialisation library (32-bit)"
arch=('x86_64')
url="https://drobilla.net/software/sratom/"
license=('custom:ISC')
depends=('lib32-sord' 'sratom')
makedepends=('lib32-lv2' 'waf')
source=("https://download.drobilla.net/$_basename-$pkgver.tar.bz2"{,.sig})
sha512sums=('ccc209af68a39c1a669ba694d250b292df2f588aeea2a9d1dfe54a23e31f032fcce1d99ebf9dd7cff80ce5aedd204c74e3ccc04d6cd239921cd3e443db83ed55'
            'SKIP')
b2sums=('0cb1949486deb5e8f823b17c98fb415dc44b0cefece647b6c5b3646438736ee9c7afa617bb00a68d61a31c80f6e643758f48602f647655aa4b185b2cc5fff893'
        'SKIP')
validpgpkeys=('907D226E7E13FA337F014A083672782A9BF368F3')

prepare() {
    cd "$_basename-$pkgver"

    # remove local ldconfig call
    sed -i '/ldconfig/d' wscript

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
