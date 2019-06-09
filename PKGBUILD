# Maintainer : Daniel Bermond < gmail-com: danielbermond >
# Contributor: Sibren Vasse <arch at sibrenvasse dot nl>
# Contributor: Matt Welch <matt dot welch at gmail dot com>
# Contributor: Anish Bhatt <anish at gatech dot edu>
# Contributor: Det <nimetonmaili gmail a-dot com>
# Contributor: Alucryd <alucryd at gmail dot com>
# Contributor: Jason Melton <jason dot melton at gmail dot com>
# Contributor: Youpi <max dot flocard at gmail dot com>
# Contributor: sl1pkn07 <sl1pkn07 at gmail dot com>

pkgname=nvidia-beta-dkms
pkgver=430.14
pkgrel=2
pkgdesc='NVIDIA driver sources for linux (beta version)'
arch=('x86_64')
url='https://www.nvidia.com/'
license=('custom')
depends=('dkms' "nvidia-utils-beta>=${pkgver}" 'libglvnd')
makedepends=('linux-headers')
optdepends=('linux-headers: build the module for Arch kernel'
            'linux-lts-headers: build the module for LTS Arch kernel')
provides=("nvidia=${pkgver}" "nvidia-dkms=${pkgver}" "nvidia-beta=${pkgver}")
conflicts=('nvidia')
_pkg="NVIDIA-Linux-${CARCH}-${pkgver}-no-compat32"
source=("https://us.download.nvidia.com/XFree86/Linux-${CARCH}/${pkgver}/${_pkg}.run"
        'FS62142.patch'
        '0001-nvidia-beta-dkms-change-dkms-conf.patch'
        '0002-nvidia-beta-dkms-linux-rt-gift.patch')
sha256sums=('0f583a277b1731cb8327510b75dba9cf7adf5c781247e4f48bcc9f358253278f'
            'c961006882afb691410c017c239e2c2ef61badb88f15735d37112b513ef0a99d'
            '066045f1e5bd25f5488ab37c2ad13e12c7827d2439569ef5c26826c92dfa4250'
            '25e29ee166552523366278d94ba69a7895cd50321cf402a9f69598b16a9e2827')

prepare() {
    # extract the source file
    [ -d "$_pkg" ] && rm -rf "$_pkg"
    printf '%s\n' "  -> Self-Extracting ${_pkg}.run..."
    sh "${_pkg}.run" --extract-only
    
    cd "$_pkg"
    patch -Np1 -i "${srcdir}/0001-nvidia-beta-dkms-change-dkms-conf.patch"
    patch -Np1 -i "${srcdir}/0002-nvidia-beta-dkms-linux-rt-gift.patch"
    
    # fix https://bugs.archlinux.org/task/62142
    patch -Np1 -i "${srcdir}/FS62142.patch"
}

package() {
    cd "$_pkg"
    
    mkdir -p "${pkgdir}/usr/src"
    
    # install
    cp -dr --no-preserve='ownership' kernel "${pkgdir}/usr/src/nvidia-${pkgver}"
    
    # blacklist nouveau driver
    printf '%s\n' 'blacklist nouveau' | install -D -m644 /dev/stdin "${pkgdir}/usr/lib/modprobe.d/nvidia.conf"
    
    # license
    install -D -m644 "${srcdir}/${_pkg}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
