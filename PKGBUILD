# Maintainer: Rouven Rastetter <r3ddr4gon@firaweb.de>
# Contributors: Mikael Eriksson <mikael_eriksson@miffe.org>
#               Cian Mc Govern <cianmcgovern91@gmail.com>
#               Tom Englund <tomenglund26@gmail.com>
#               Tomasz Przybył <fademind@gmail.com>
# Original arch package by: Thomas Baechler <thomas@archlinux.org>

pkgname=nvidia-mainline
pkgver=352.41
_extramodules=extramodules-4.2-mainline
pkgrel=1
pkgdesc="NVIDIA drivers for linux-mainline"
arch=('i686' 'x86_64')
url="http://www.nvidia.com/"
depends=('linux-mainline>=4.2rc1' 'linux-mainline<4.3rc1' "nvidia-libgl" "nvidia-utils=${pkgver}")
makedepends=('linux-mainline-headers>=4.2rc1' 'linux-mainline-headers<4.3rc1')
license=('custom')
install=nvidia.install
options=(!strip)

source=("nvidia-4.2.patch")
sha256sums=('01fe34a2eeb88057d51849098966e202f1ab94e548afe85ef25f533c8375e3c3')

if [ "$CARCH" = "i686" ]; then
    _arch='x86'
    _pkg="NVIDIA-Linux-${_arch}-${pkgver}"
    source+=("http://us.download.nvidia.com/XFree86/Linux-${_arch}/${pkgver}/${_pkg}.run")
    sha256sums+=('b3fc5af7bb2852305272ffb3d5d73fbfba639d6a2af9e34a007dde3c6133f6e3')
elif [ "$CARCH" = "x86_64" ]; then
    _arch='x86_64'
    _pkg="NVIDIA-Linux-${_arch}-${pkgver}-no-compat32"
    source+=("http://us.download.nvidia.com/XFree86/Linux-${_arch}/${pkgver}/${_pkg}.run")
    sha256sums+=('a67cca72f7de2b5a8d822001b5a78012373989a97388fe9eff56a75e6cad30cd')
fi

prepare() {
    sh "${_pkg}.run" --extract-only
    cd "${_pkg}"
    # patches here
    patch -Np1 -i ${srcdir}/nvidia-4.2.patch
}

build() {
    _kernver="$(cat /usr/lib/modules/${_extramodules}/version)"
    cd "${_pkg}"/kernel
    make SYSSRC=/usr/lib/modules/"${_kernver}/build" module

    cd uvm
    make SYSSRC=/usr/lib/modules/"${_kernver}/build" module
}

package() {
    install -D -m644 "${srcdir}/${_pkg}/kernel/nvidia.ko" \
        "${pkgdir}/usr/lib/modules/${_extramodules}/nvidia.ko"
    install -D -m644 "${srcdir}/${_pkg}/kernel/uvm/nvidia-uvm.ko" \
        "${pkgdir}/usr/lib/modules/${_extramodules}/nvidia-uvm.ko"
    gzip "${pkgdir}/usr/lib/modules/${_extramodules}/"*.ko
    sed -i -e "s/EXTRAMODULES='.*'/EXTRAMODULES='${_extramodules}'/" "${startdir}/nvidia.install"
}
