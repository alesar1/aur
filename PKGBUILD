# $Id$
# Maintainer: Sven-Hendrik Haase <sh@lutzhaase.com>
# Maintainer: Thomas Baechler <thomas@archlinux.org>
# Maintainer: Drew Walton <drewwalton19216801@gmail.com>

pkgname=nvidia-352
pkgver=352.63
_extramodules=extramodules-4.2-ARCH
pkgrel=1
pkgdesc="NVIDIA drivers for linux"
arch=('i686' 'x86_64')
url="http://www.nvidia.com/"
depends=('linux>=4.2' 'linux<4.4' "nvidia-utils-352=${pkgver}" 'libgl')
makedepends=('linux-headers>=4.2' 'linux-headers<4.4' 'nvidia-libgl-352')
provides=('nvidia')
conflicts=('nvidia-96xx' 'nvidia-173xx' 'nvidia')
license=('custom')
install=nvidia-352.install
options=(!strip)
source=("ftp://download.nvidia.com/XFree86/Linux-x86/${pkgver}/NVIDIA-Linux-x86-${pkgver}.run"
        "ftp://download.nvidia.com/XFree86/Linux-x86_64/${pkgver}/NVIDIA-Linux-x86_64-${pkgver}-no-compat32.run")
md5sums=('7882ecda1763504beb10af77a21b21c5'
         'ce1ec67f875d434c212b859b582204c5')

[[ "$CARCH" = "i686" ]] && _pkg="NVIDIA-Linux-x86-${pkgver}"
[[ "$CARCH" = "x86_64" ]] && _pkg="NVIDIA-Linux-x86_64-${pkgver}-no-compat32"

prepare() {
    sh "${_pkg}.run" --extract-only
    cd "${_pkg}"
    # patches here
}

build() {
    _kernver="$(cat /usr/lib/modules/${_extramodules}/version)"
    cd "${_pkg}"/kernel
    IGNORE_CC_MISMATCH=1 make SYSSRC=/usr/lib/modules/"${_kernver}/build" module

    if [[ "$CARCH" = "x86_64" ]]; then
        cd uvm
        IGNORE_CC_MISMATCH=1 make SYSSRC=/usr/lib/modules/"${_kernver}/build" module
    fi
}

package() {
    install -D -m644 "${srcdir}/${_pkg}/kernel/nvidia.ko" \
        "${pkgdir}/usr/lib/modules/${_extramodules}/nvidia.ko"

    if [[ "$CARCH" = "x86_64" ]]; then
        install -D -m644 "${srcdir}/${_pkg}/kernel/uvm/nvidia-uvm.ko" \
            "${pkgdir}/usr/lib/modules/${_extramodules}/nvidia-uvm.ko"
    fi

    gzip "${pkgdir}/usr/lib/modules/${_extramodules}/"*.ko
    install -d -m755 "${pkgdir}/usr/lib/modprobe.d"

    echo "blacklist nouveau" >> "${pkgdir}/usr/lib/modprobe.d/nvidia.conf"
}
