# Maintainer: Rodrigo Bezerra <rodrigobezerra21 at gmail dot com>

_basename=lilv
pkgname=lib32-lilv
pkgver=0.24.10
pkgrel=1
pkgdesc="A C library interface to the LV2 plug-in standard (32-bit)"
arch=('x86_64')
url="https://drobilla.net/software/lilv/"
license=('custom:ISC')
depends=('lib32-sratom' 'lilv')
makedepends=('lib32-libsndfile' 'lib32-lv2' 'waf')
source=("https://download.drobilla.net/${_basename}-${pkgver}.tar.bz2"{,.sig})
sha512sums=('1dfd4fef19537686b63a4e7df45e3b1a7c4a658acc21d5646daba4d3bd5676513857b3f437b89f1a06232516433ef155772d19625c33d49d13ada37a965982cf'
            'SKIP')
b2sums=('a316c0aae8f93a6104ad46e9e93cd3948b4596920a9bb7f1ab5bfe596428aa43e45413f79cd9e7c094ca3239e4811bd391015f17be5c059a54b0a050aff1e964'
        'SKIP')
validpgpkeys=('907D226E7E13FA337F014A083672782A9BF368F3')

prepare() {
    cd "$_basename-$pkgver"

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
