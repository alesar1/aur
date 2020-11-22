# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>

_basename=sord
pkgname=lib32-sord
pkgver=0.16.6
pkgrel=1
pkgdesc="A lightweight C library for storing RDF data in memory (32-bit)"
arch=('x86_64')
url="https://drobilla.net/software/sord/"
license=('custom:ISC')
depends=('lib32-serd' 'sord')
makedepends=('lib32-pcre' 'waf')
source=("https://download.drobilla.net/$_basename-$pkgver.tar.bz2"{,.sig})
sha512sums=('1d3c2bf47ff7e4b533e4e737e2ece8e29bace78bb00c41a252ad5c583abdcba3baa05b189cb8651c212861a2eea3c690354c99d684fd0f343b40e74c94572f98'
            'SKIP')
b2sums=('7ec248a78e0d9e525d640363414ddd32acc3e32817e2ab86e791fd9232a46658538c9a4db936a5daa7eeb5ef9f7bf13e1aa1429ab6d9fc769e1391a014da919f'
        'SKIP')
validpgpkeys=('907D226E7E13FA337F014A083672782A9BF368F3') # David Robillard

prepare() {
    cd "$_basename-$pkgver"

    # remove local call to ldconfig
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
