# Maintainer : Daniel Bermond <dbermond@archlinux.org>

pkgbase=nvidia-open-git
pkgname=('nvidia-open-git' 'nvidia-open-dkms-git')
pkgver=515.48.07.r0.g965db9855
pkgrel=1
pkgdesc='NVIDIA open GPU kernel modules (git version)'
arch=('x86_64')
url='https://github.com/NVIDIA/open-gpu-kernel-modules/'
license=('MIT' 'GPL2')
makedepends=('git' 'linux-headers')
options=('!buildflags' '!lto' '!strip')
source=('git+https://github.com/NVIDIA/open-gpu-kernel-modules.git'
        '110-nvidia-open-change-dkms-conf.patch'
        '120-nvidia-open-linux-rt-gift.patch'
        '130-nvidia-open-reproducible-build.patch')
sha256sums=('SKIP'
            '009724e2e07b7be589ba455f225a9742d88a3a29383f2f220cb830ef4c8b7aea'
            'b0f62a78f749ff3a104197c12b6d885352adcf35fb5ecf00c4cd4c51b4195e45'
            'b7ac1ca4d72fc8392e6682df616d53ba4e9d4e761217ac6339d32c377990cf64')

prepare() {
    patch -d open-gpu-kernel-modules -Np1 -i "${srcdir}/110-nvidia-open-change-dkms-conf.patch"
    patch -d open-gpu-kernel-modules -Np1 -i "${srcdir}/120-nvidia-open-linux-rt-gift.patch"
    patch -d open-gpu-kernel-modules -Np1 -i "${srcdir}/130-nvidia-open-reproducible-build.patch"
    
    [ -d dkms-src ] && rm -rf dkms-src
    cp -af open-gpu-kernel-modules/kernel-open dkms-src
}

pkgver() {
    git -C open-gpu-kernel-modules describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//'
}

build() {
    sed -i "s/__VERSION_STRING/${pkgver}/" {open-gpu-kernel-modules/kernel-open,dkms-src}/dkms.conf
    
    local -x KERNEL_UNAME
    
    # allow usage of custom kernel and building in a chroot
    if [ -d "/usr/lib/modules/$(uname -r)" ]
    then
        KERNEL_UNAME="$(uname -r)"
    else
        KERNEL_UNAME="$(find /usr/lib/modules -mindepth 1 -maxdepth 1 -type d | head -n1 | sed 's|.*/||')"
    fi
    
    unset -v SYSSRC
    make -C open-gpu-kernel-modules modules
}

package_nvidia-open-git() {
    depends=('linux' "nvidia-utils=${pkgver/.r*/}" 'libglvnd')
    provides=("nvidia-open=${pkgver}" 'NVIDIA-MODULE')
    conflicts=('nvidia-open' 'NVIDIA-MODULE')
    
    local _kernver
    if [ -d "/usr/lib/modules/$(uname -r)" ]
    then
        _kernver="$(<"/usr/lib/modules/$(uname -r)/build/version")"
    else
        _kernver="$(find /usr/lib/modules -mindepth 1 -maxdepth 1 -type d | head -n1)"
        _kernver="$(<"/usr/lib/modules/${_kernver##*/}/build/version")"
    fi
    
    install -D -m644 open-gpu-kernel-modules/kernel-open/*.ko -t "${pkgdir}/usr/lib/modules/${_kernver}/extramodules"
    install -D -m644 open-gpu-kernel-modules/COPYING "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    find "$pkgdir" -name '*.ko' -exec strip --strip-debug {} +
    find "$pkgdir" -name '*.ko' -exec xz -T1 {} +
    
    install -D -m644 <(printf '%s\n' 'options nvidia NVreg_OpenRmEnableUnsupportedGpus=1') "${pkgdir}/usr/lib/modprobe.d/nvidia-open.conf"
}

package_nvidia-open-dkms-git() {
    pkgdesc="$(sed 's/(\(git[[:space:]]version\)/(sources; \1/' <<< "$pkgdesc")"
    depends=('dkms' "nvidia-utils=${pkgver/.r*/}" 'libglvnd')
    provides=("nvidia-open=${pkgver}" 'NVIDIA-MODULE')
    conflicts=('nvidia-open' 'NVIDIA-MODULE')
    
    install -D -m644 open-gpu-kernel-modules/src/nvidia/_out/Linux_x86_64/nv-kernel.o \
        dkms-src/nvidia/nv-kernel.o_binary
    install -D -m644 open-gpu-kernel-modules/src/nvidia-modeset/_out/Linux_x86_64/nv-modeset-kernel.o \
        dkms-src/nvidia-modeset/nv-modeset-kernel.o_binary
    install -d -m755 "${pkgdir}/usr/src"
    cp -dr --no-preserve='ownership' dkms-src "${pkgdir}/usr/src/nvidia-${pkgver}"
    install -D -m644 open-gpu-kernel-modules/COPYING "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    
    install -D -m644 <(printf '%s\n' 'options nvidia NVreg_OpenRmEnableUnsupportedGpus=1') "${pkgdir}/usr/lib/modprobe.d/nvidia-open.conf"
}
