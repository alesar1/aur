# Maintainer : Daniel Bermond < yahoo-com: danielbermond >
# Contributor: Sibren Vasse <arch at sibrenvasse dot nl>
# Contributor: Matt Welch <matt dot welch at gmail dot com>
# Contributor: Anish Bhatt <anish at gatech dot edu>
# Contributor: Det <nimetonmaili gmail a-dot com>
# Contributor: Alucryd <alucryd at gmail dot com>
# Contributor: Jason Melton <jason dot melton at gmail dot com>
# Contributor: Youpi <max dot flocard at gmail dot com>
# Contributor: sl1pkn07 <sl1pkn07 at gmail dot com>

pkgname=nvidia-beta-dkms
pkgver=396.24
pkgrel=6
pkgdesc='NVIDIA driver sources for linux (beta version)'
arch=('x86_64')
url='http://www.nvidia.com/'
license=('custom')
depends=('dkms' 'linux' "nvidia-utils-beta>=${pkgver}" 'libgl')
optdepends=('linux-headers: build the module for Arch kernel'
            'linux-lts-headers: build the module for LTS Arch kernel')
provides=("nvidia=${pkgver}" 'nvidia-dkms')
conflicts=('nvidia')
options=('!strip')
install="${pkgname}.install"
_srcname="NVIDIA-Linux-x86_64-${pkgver}-no-compat32"
source=("http://us.download.nvidia.com/XFree86/Linux-x86_64/${pkgver}/${_srcname}.run"
        'linux-4.16.patch'
        'linux-4.18-rc1.patch')
sha256sums=('41b80d2a4519ac78ac17c02fec976256d2ba5c9618640d2a9be9cb70685b2a9c'
            '622ac792ec200b2239cb663c0010392118b78c9904973d82cd261165c16d6385'
            '87e0b5312425a56cda82873667563073fd9d2acc7f65d960e14c3eb0f4608ac0')

prepare() {
    # extract the source file
    sh "${_srcname}.run" --extract-only
    
    # patches
    cd "$_srcname"
    patch -Np1 -i "${srcdir}/linux-4.16.patch"
    patch -Np1 -i "${srcdir}/linux-4.18-rc1.patch"

    # update dkms.conf
    cd kernel
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

    # gift for linux-rt guys
    sed -i 's/NV_EXCLUDE_BUILD_MODULES/IGNORE_PREEMPT_RT_PRESENCE=1 NV_EXCLUDE_BUILD_MODULES/' dkms.conf
}

package() {
    cd "${_srcname}/kernel"
    
    # directories creation
    install -d "${pkgdir}/usr/lib/modprobe.d/"
    install -d "${pkgdir}/usr/src/nvidia-${pkgver}/"
    
    # install
    cp -dr --no-preserve='ownership' * "${pkgdir}/usr/src/nvidia-${pkgver}/"
    
    # blacklist nouveau driver
    printf '%s\n' 'blacklist nouveau' > "${pkgdir}/usr/lib/modprobe.d/${pkgname}.conf"
    
    # license
    cd "${srcdir}/${_srcname}"
    install -D -m644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
