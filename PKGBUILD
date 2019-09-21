# Maintainer: Rin Cat <me@rin.cat>

pkgname=rtl88x2bu-dkms-git
_pkgbase=rtl88x2bu
pkgver=5.6.1.r29.9bec777
_pkgver=5.6.1
pkgrel=1
pkgdesc="Kernel module for Realtek rtl88x2bu WiFi chipset"
arch=('i686' 'x86_64')
url="https://github.com/RinCat/RTL88x2BU-Linux-Driver"
license=('GPL2')
depends=('dkms' 'bc')
makedepends=('git')
source=("git+https://github.com/RinCat/RTL88x2BU-Linux-Driver.git")
sha256sums=('SKIP')

pkgver() {
    cd "${srcdir}/RTL88x2BU-Linux-Driver"
    printf '%s.r%s.%s' "${_pkgver}" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
    cd "${srcdir}/RTL88x2BU-Linux-Driver"
    mkdir -p "${pkgdir}/usr/src/${_pkgbase}-${pkgver}"
    cp -pr * "${pkgdir}/usr/src/${_pkgbase}-${pkgver}"
    install -Dm644 dkms.conf "${pkgdir}/usr/src/${_pkgbase}-${pkgver}/dkms.conf"
    sed -e "s/@PKGVER@/${pkgver}/" -i "${pkgdir}/usr/src/${_pkgbase}-${pkgver}/dkms.conf"
}

