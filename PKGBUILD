# Maintainer: Shohei Maruyama <cheat.sc.linux@outlook.com>
pkgname=tee-supplicant
pkgver=3.6.0.r9.gbc0ec8c
pkgrel=1
pkgdesc='Normal world client side of the TEE'
arch=('aarch64')
url='https://github.com/OP-TEE/optee_client'
license=('BSD')
depends=()
source=('git://github.com/OP-TEE/optee_client.git')
sha256sums=('SKIP')

pkgver() {
    cd ${srcdir}/optee_client
    git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd ${srcdir}/optee_client/libteec
    make ${MAKEFLAGS}

    cd ${srcdir}/optee_client/tee-supplicant
    make ${MAKEFLAGS}
}

package() {
    # install library
    install -dm755 ${pkgdir}/usr/lib/

    cd ${pkgdir}/usr/lib/
    install -m755 ${srcdir}/optee_client/out/libteec/libteec.so.1.0.0 .
    ln -s libteec.so.1.0.0 libteec.so
    ln -s libteec.so.1.0.0 libteec.so.1
    ln -s libteec.so.1.0.0 libteec.so.1.0

    # install c headers
    install -dm755 ${pkgdir}/usr/include

    cd ${pkgdir}/usr/include
    for i in ${srcdir}/optee_client/public/*.h; do
        install -m644 ${i} .
    done

    # install tee-supplicant
    install -dm755 ${pkgdir}/usr/bin
    install -m755 ${srcdir}/optee_client/out/tee-supplicant/tee-supplicant ${pkgdir}/usr/bin
}
