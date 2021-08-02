# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>

_basename=lilv
pkgname=lib32-lilv
pkgver=0.24.12
pkgrel=2
pkgdesc="A C library interface to the LV2 plug-in standard (32-bit)"
arch=('x86_64')
url="https://drobilla.net/software/lilv/"
license=('custom:ISC')
depends=('lib32-sratom' 'lilv')
makedepends=('lib32-libsndfile' 'lib32-lv2' 'waf')
source=("https://download.drobilla.net/${_basename}-${pkgver}.tar.bz2"{,.sig})
sha512sums=('ea22db4e995792b62d60d793169c792549b8fb0255c2cf7a85780dd149811921e2fae5eaea0fb83465f01b14dfa66361af3be40bf7cb3733e98655b943f4faee'
            'SKIP')
b2sums=('47efe553c6fc249ed0cde47a47a01e0b3496ea4dfac88849b75d9720cb3a158fa1c95959ffc1a09e606f8ba3831e79382ba08ad100ee17cf19c7f1ffa186d6e2'
        'SKIP')
validpgpkeys=('907D226E7E13FA337F014A083672782A9BF368F3') # David Robillard <d@drobilla.net>

prepare() {
    cd "$_basename-$pkgver"

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
                  --no-bash-completion \
                  --no-bindings \
                  --dyn-manifest \
                  --test

    waf -v build
}

check() {
    cd "$_basename-$pkgver"

    waf test
}

package() {
    cd "$_basename-$pkgver"

    waf install --destdir="$pkgdir"

    install -vDm 644 COPYING -t "${pkgdir}/usr/share/licenses/${pkgname}"

    cd "$pkgdir"/usr

    rm -r bin include share/man
}
