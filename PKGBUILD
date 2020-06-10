# Maintainer: Alonso Rodriguez <alonsorodi20 (at) gmail (dot) com>
# Maintainer: Sven-Hendrik Haase <sh@lutzhaase.com>
# Maintainer: Felix Yan <felixonmars@archlinux.org>
# Contributor: Thomas Baechler <thomas@archlinux.org>

pkgbase=nvidia-390xx
pkgname=(nvidia-390xx nvidia-390xx-dkms)
pkgver=390.132
pkgrel=37
pkgdesc="NVIDIA drivers for linux, 390xx legacy branch"
arch=('x86_64')
url="https://www.nvidia.com/"
makedepends=("nvidia-390xx-utils=${pkgver}" 'libglvnd' 'linux-headers')
conflicts=('nvidia')
license=('custom')
options=('!strip')
_pkg="NVIDIA-Linux-x86_64-${pkgver}-no-compat32"
source=("https://us.download.nvidia.com/XFree86/Linux-x86_64/${pkgver}/${_pkg}.run"
        'kernel-4.16.patch'
        'kernel-5.5.patch'
        'kernel-5.6.patch'
        'kernel-5.7.patch')
sha256sums=('b6b4b8af37e78e026c9ebdf4a5c64ea412dfcb710931dd028c22dac228de659d'
            '622ac792ec200b2239cb663c0010392118b78c9904973d82cd261165c16d6385'
            'c72d89546b6dbd332e678800e48acbcdb29c1e1f23f986f77cee2c46b1a91e75'
            '9e820398ad71c6ea14a8efc6b0f61a38000971c00a5ac4e5959686569dabb3c7'
            'c3654116dc68284e98bcb45d6e94ce872985c98943b4031dacf67cfe8a7e0c56')

prepare() {
    sh "${_pkg}.run" --extract-only
    cd "${_pkg}"

    # Restore phys_to_dma support (still needed for 396.18)
    # https://bugs.archlinux.org/task/58074
    patch -Np1 -i ../kernel-4.16.patch

    # Patch to avoid screen tearing on Optimus Systems [Geeko]
    patch -Np1 -i ../kernel-5.5.patch

    # Patch to make it compile under linux 5.6
    patch -Np1 -i ../kernel-5.6.patch

    # Patch to make it compile under linux 5.7 - Courtesy of openglfreak
    patch -Np1 -i ../kernel-5.7.patch

    cp -a kernel kernel-dkms
    cd kernel-dkms
    sed -i "s/__VERSION_STRING/${pkgver}/" dkms.conf
    sed -i 's/__JOBS/`nproc`/' dkms.conf
    sed -i 's/__DKMS_MODULES//' dkms.conf
    sed -i '$iBUILT_MODULE_NAME[0]="nvidia"\
DEST_MODULE_LOCATION[0]="/kernel/drivers/video"\
BUILT_MODULE_NAME[1]="nvidia-uvm"\
DEST_MODULE_LOCATION[1]="/kernel/drivers/video"\
BUILT_MODULE_NAME[2]="nvidia-modeset"\
DEST_MODULE_LOCATION[2]="/kernel/drivers/video"\
BUILT_MODULE_NAME[3]="nvidia-drm"\
DEST_MODULE_LOCATION[3]="/kernel/drivers/video"' dkms.conf

    # Gift for linux-rt guys
    sed -i 's/NV_EXCLUDE_BUILD_MODULES/IGNORE_PREEMPT_RT_PRESENCE=1 NV_EXCLUDE_BUILD_MODULES/' dkms.conf
}

build() {
    cd "${_pkg}"/kernel
    make SYSSRC=/usr/src/linux module
}

package_nvidia-390xx() {
    pkgdesc="NVIDIA drivers for linux, 390xx legacy branch"
    depends=('linux' "nvidia-390xx-utils=${pkgver}" 'libglvnd')

    _extradir="/usr/lib/modules/$(</usr/src/linux/version)/extramodules"
    install -Dt "${pkgdir}${_extradir}" -m644 \
      "${srcdir}/${_pkg}/kernel"/nvidia{,-modeset,-drm,-uvm}.ko

    find "${pkgdir}" -name '*.ko' -exec gzip -n {} +

    echo "blacklist nouveau" |
        install -Dm644 /dev/stdin "${pkgdir}/usr/lib/modprobe.d/${pkgname}.conf"

    install -Dt "${pkgdir}/usr/share/licenses/${pkgname}" -m644 "${srcdir}/${_pkg}/LICENSE"
}

package_nvidia-390xx-dkms() {
    pkgdesc="NVIDIA driver sources for linux, 390xx legacy branch"
    depends=('dkms' "nvidia-390xx-utils=$pkgver" 'libglvnd')
    provides=("nvidia-390xx=$pkgver")
    conflicts+=('nvidia-390xx')

    cd ${_pkg}

    install -dm 755 "${pkgdir}"/usr/src
    cp -dr --no-preserve='ownership' kernel-dkms "${pkgdir}/usr/src/nvidia-${pkgver}"

    echo "blacklist nouveau" |
        install -Dm644 /dev/stdin "${pkgdir}/usr/lib/modprobe.d/${pkgname}.conf"

    install -Dt "${pkgdir}/usr/share/licenses/${pkgname}" -m644 "${srcdir}/${_pkg}/LICENSE"
}
