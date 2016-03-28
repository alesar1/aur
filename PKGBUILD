# Maintainer : Sameed Pervaiz <greenbagels@teknik.io>
# Contributor: Kaan Genç <aur@kaangenc.me>
# Contributor: Sven-Hendrik Haase <sh@lutzhaase.com>
# Contributor: Felix Yan <felixonmars@archlinux.org>
# Contributor: Thomas Baechler <thomas@archlinux.org>

pkgbase=nvidia-grsec
pkgname=(nvidia-grsec nvidia-grsec-dkms)
pkgver=361.28
_extramodules=extramodules-4.4.5-grsec
pkgrel=6
pkgdesc="NVIDIA drivers for linux-grsec kernel"
arch=('i686' 'x86_64')
url="http://www.nvidia.com/"
depends=('libgl' "nvidia-utils=${pkgver}" 'linux-grsec>=4.4' 'linux-grsec<4.5')
makedepends=('nvidia-libgl' "nvidia-utils=${pkgver}" 'linux-grsec' 'linux-grsec-headers>=4.4' 'linux-grsec-headers<4.5')
license=('custom')
options=(!strip)
source=("https://www.grsecurity.net/~paxguy1/nvidia-drivers-${pkgver}-pax.patch")
source_i686=("http://us.download.nvidia.com/XFree86/Linux-x86/${pkgver}/NVIDIA-Linux-x86-${pkgver}.run")
source_x86_64=("http://us.download.nvidia.com/XFree86/Linux-x86_64/${pkgver}/NVIDIA-Linux-x86_64-${pkgver}-no-compat32.run")
sha512sums=('2872af917ee78a0191eef4ef133ca7f660beaa834ec8c6eafe0c827fae1acf71ce31d1194000e8256c9cf00b6297ca1225be374f59c0499a5a7ebf89b6668996')
sha512sums_i686=('4a18d7df8dabea9da52a5996b6e820f618e6417449b4e329c886d05465b25adb39ae3bd77b2852c93a7338fab2d398f6705bddde315c7373e313f242dc1113ab')
sha512sums_x86_64=('4628161009b6ab3a430c866ff6fbb39be4446408620e10969867059188922891505e7dea269a7ce4cdbb97fb2081ff59db3e5299c7673ffbb503ee7b7bf7cb77')

[[ "$CARCH" = "i686" ]] && _pkg="NVIDIA-Linux-x86-${pkgver}"
[[ "$CARCH" = "x86_64" ]] && _pkg="NVIDIA-Linux-x86_64-${pkgver}-no-compat32"

prepare() {
    sh "${_pkg}.run" --extract-only
    cd "${_pkg}"
    # patches here
    patch -Np1 -i "../nvidia-drivers-${pkgver}-pax.patch"

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
DEST_MODULE_LOCATION[2]="/kernel/drivers/video"' dkms.conf
}

build() {
    _kernver="$(cat /usr/lib/modules/${_extramodules}/version)"
    cd "${_pkg}"/kernel
    make SYSSRC=/usr/lib/modules/"${_kernver}/build" module
}

package_nvidia-grsec() {
    pkgdesc="NVIDIA drivers for linux-grsec kernel"
    depends=('linux>=4.4' 'linux<4.5' "nvidia-utils=${pkgver}" 'libgl')
    install=nvidia-grsec.install

    install -D -m644 "${srcdir}/${_pkg}/kernel/nvidia.ko" \
        "${pkgdir}/usr/lib/modules/${_extramodules}/nvidia.ko"
    install -D -m644 "${srcdir}/${_pkg}/kernel/nvidia-modeset.ko" \
         "${pkgdir}/usr/lib/modules/${_extramodules}/nvidia-modeset.ko"

    if [[ "$CARCH" = "x86_64" ]]; then
        install -D -m644 "${srcdir}/${_pkg}/kernel/nvidia-uvm.ko" \
            "${pkgdir}/usr/lib/modules/${_extramodules}/nvidia-uvm.ko"
    fi

    gzip "${pkgdir}/usr/lib/modules/${_extramodules}/"*.ko
    install -d -m755 "${pkgdir}/usr/lib/modprobe.d"

    echo "blacklist nouveau" >> "${pkgdir}/usr/lib/modprobe.d/nvidia-grsec.conf"
    sed -i -e "s/EXTRAMODULES='.*'/EXTRAMODULES='${_extramodules}'/" "${startdir}/${pkgname}.install"
}

package_nvidia-grsec-dkms() {
    pkgdesc="NVIDIA driver sources for linux-grsec kernel"
    depends=('dkms' "nvidia-utils=$pkgver" 'libgl')
    optdepends=('linux-grsec-headers: build modules against the grsec kernel')
    conflicts+=('nvidia-grsec')

    cd ${_pkg}
    install -dm 755 "${pkgdir}"/usr/{lib/modprobe.d,src}
    cp -dr --no-preserve='ownership' kernel-dkms "${pkgdir}/usr/src/nvidia-grsec-${pkgver}"
    echo 'blacklist nouveau' > "${pkgdir}/usr/lib/modprobe.d/nvidia-grsec.conf"
}
