# Maintainer : Daniel Bermond <dbermond@archlinux.org>
# Contributor: Sibren Vasse <arch at sibrenvasse dot nl>
# Contributor: Matt Welch <matt dot welch at gmail dot com>
# Contributor: Anish Bhatt <anish at gatech dot edu>
# Contributor: Det <nimetonmaili gmail a-dot com>
# Contributor: Alucryd <alucryd at gmail dot com>
# Contributor: Jason Melton <jason dot melton at gmail dot com>
# Contributor: Youpi <max dot flocard at gmail dot com>
# Contributor: sl1pkn07 <sl1pkn07 at gmail dot com>

pkgname=nvidia-beta-dkms
pkgver=450.57
pkgrel=1
pkgdesc='NVIDIA driver sources for linux (beta version)'
arch=('x86_64')
url='https://www.nvidia.com/'
license=('custom')
provides=("nvidia=${pkgver}" "nvidia-dkms=${pkgver}" "nvidia-beta=${pkgver}"
          'NVIDIA-MODULE')
conflicts=('nvidia')
_pkg="NVIDIA-Linux-${CARCH}-${pkgver}-no-compat32"
source=("https://us.download.nvidia.com/XFree86/Linux-${CARCH}/${pkgver}/${_pkg}.run"
        '110-nvidia-change-dkms-conf.patch'
        '120-nvidia-linux-rt-gift.patch')
sha256sums=('8a65da18761a2e6547d681b0d87201a46d822e71a318c89a849767a95fbd1e07'
            '3f0940fa30468d237cda6cab354b4c40c7baacad5bd5aaf31706740f855e35ce'
            'd669f45bbe75bf5b490168eb599b8492fca502930b8a34d730b803adba13381f')

prepare() {
    # extract the source file
    [ -d "$_pkg" ] && rm -rf "$_pkg"
    printf '%s\n' "  -> Self-Extracting ${_pkg}.run..."
    sh "${_pkg}.run" --extract-only
    
    patch -d "$_pkg" -Np1 -i "${srcdir}/110-nvidia-change-dkms-conf.patch"
    patch -d "$_pkg" -Np1 -i "${srcdir}/120-nvidia-linux-rt-gift.patch"
}

package() {
    depends=('dkms' "nvidia-utils-beta>=${pkgver}" 'libglvnd')
    
    mkdir -p "${pkgdir}/usr/src"
    cp -dr --no-preserve='ownership' "${_pkg}/kernel" "${pkgdir}/usr/src/nvidia-${pkgver}"
    printf '%s\n' 'blacklist nouveau' | install -D -m644 /dev/stdin "${pkgdir}/usr/lib/modprobe.d/nvidia.conf"
    install -D -m644 "${_pkg}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
