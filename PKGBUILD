# Maintainer: Stefan Tatschner <stefan.tatschner@aisec.fraunhofer.de>

pkgbase="can-isotp-git"
pkgname=("can-isotp-modules-git" "can-isotp-headers-git")
_pkgname="can-isotp-modules"
pkgver=r822.856c160
pkgrel=1
pkgdesc="The CAN ISO-TP Kernel Module (ALPHA)"
arch=('i686' 'x86_64')
url="https://github.com/hartkopp/can-isotp-modules"
license=('GPLv2')
depends=('linux')
makedepends=('linux-headers')
source=("git+https://github.com/hartkopp/can-isotp-modules.git")
md5sums=('SKIP')

pkgver() {
    cd "${srcdir}/${_pkgname}"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    cd "${srcdir}/${_pkgname}/net/can"
    ./make_isotp.sh
}

package_can-isotp-modules-git() {
    install="can-isotp-modules.install"
    provides=("can-isotp-modules")
    conflicts=("can-isotp-modules")

    cd "${srcdir}/${_pkgname}/net/can"
    install -d "${pkgdir}/usr/lib/modules/extramodules-4.2-ARCH"
    install "can-isotp.ko" "${pkgdir}/usr/lib/modules/extramodules-4.2-ARCH/can-isotp.ko"
}

package_can-isotp-headers-git() {
    provides=("can-isotp-headers")
    conflicts=("can-isotp-headers")

    cd "${srcdir}/${_pkgname}/include/socketcan/can"
    install -d "${pkgdir}/usr/lib/modules/$(uname -r)/build/include/uapi/linux/can"
    install "isotp.h" "${pkgdir}/usr/lib/modules/$(uname -r)/build/include/uapi/linux/can/isotp.h"
}
