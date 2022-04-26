# Maintainer: Daniel Bermond <dbermond@archlinux.org>

pkgbase=lightway-core
pkgname=('lightway-core' 'lightway-core-doc')
pkgver=1.4.1
pkgrel=1
pkgdesc='A VPN protocol by ExpressVPN'
arch=('x86_64')
url='https://www.expressvpn.com/lightway/'
license=('GPL2')
makedepends=('git' 'ruby-ceedling' 'doxygen' 'graphviz')
source=("https://github.com/expressvpn/lightway-core/archive/v${pkgver}/${pkgname}-${pkgver}.tar.gz"
        'git+https://github.com/wolfSSL/wolfssl.git'
        '010-lightway-core-disable-werror-on-wolfssl.patch')
sha256sums=('5f73f8d4e08932420c9d077e8ecaa4763f958a551aa4a6bee1ff7e29a283068c'
            'SKIP'
            '60e4d5490192bc1ed6840665345e854eca5715a898824b90fa012245272f619b')

prepare() {
    local _wolfssl_commit
    _wolfssl_commit="$(awk '/he_wolfssl_commit/ { print $3 }' "${pkgname}-${pkgver}/unix.yml")"
    git -C wolfssl config --local advice.detachedHead false
    git -C wolfssl checkout --quiet "$_wolfssl_commit"
    
    patch -d wolfssl -Np1 -i "${srcdir}/010-lightway-core-disable-werror-on-wolfssl.patch"
    
    mkdir -p "${pkgname}-${pkgver}/third_party"
    cp -af wolfssl "${pkgname}-${pkgver}/third_party"
}

build() {
    export CFLAGS+=' -ffat-lto-objects'
    cd "${pkgname}-${pkgver}"
    ceedling release project:linux
    doxygen
}

check() {
    cd "${pkgname}-${pkgver}"
    ceedling test project:linux
}

package_lightway-core() {
    install -D -m644 "${pkgname}-${pkgver}"/public/*.h -t "${pkgdir}/usr/include"
    install -D -m644 "${pkgname}-${pkgver}"/build/release/libhelium.a -t "${pkgdir}/usr/lib"
}

package_lightway-core-doc() {
    pkgdesc+=' (documentation)'
    arch=('any')
    
    install -d -m755 "${pkgdir}/usr/share/doc"
    cp -dr --no-preserve='ownership' "lightway-core-${pkgver}"/html "${pkgdir}/usr/share/doc/lightway-core"
}
