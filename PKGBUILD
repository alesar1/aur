# Maintainer : Daniel Bermond <dbermond@archlinux.org>
# Contributor: Det <nimetonmaili g-mail>
# Contributor: Ng Oon-Ee
# Contributor: Dan Vratil

pkgname=nvidia-beta
pkgver=440.64
pkgrel=1
pkgdesc="NVIDIA drivers for Arch's official 'linux' package (beta version)"
arch=('x86_64')
url='https://www.nvidia.com/'
license=('custom')
depends=('linux' "nvidia-utils-beta>=${pkgver}" 'libglvnd')
makedepends=('linux-headers')
provides=("nvidia=${pkgver}" "nvidia-beta=${pkgver}")
conflicts=('nvidia')
options=('!strip')
_pkg="NVIDIA-Linux-${CARCH}-${pkgver}-no-compat32"
source=("http://us.download.nvidia.com/XFree86/Linux-${CARCH}/${pkgver}/${_pkg}.run")
sha256sums=('b0567234f6eaa841bb9f5cf965d1e93b9c7b4c87d6e5bdc3d7add924e9a55a7d')

prepare() {
    # extract the source file
    [ -d "$_pkg" ] && rm -rf "$_pkg"
    printf '%s\n' "  -> Self-Extracting ${_pkg}.run..."
    sh "${_pkg}.run" --extract-only
}

build() {
    printf '%s\n' "  -> Building Nvidia module for $(</usr/src/linux/version)..."
    make -C "${_pkg}/kernel" SYSSRC='/usr/src/linux' module
}

package() {
    local _extradir
     _extradir="/usr/lib/modules/$(</usr/src/linux/version)/extramodules"
    
    install -D -m644 "${_pkg}/kernel/"nvidia{,-drm,-modeset,-uvm}.ko -t "${pkgdir}${_extradir}"
    find "$pkgdir" -name '*.ko' -exec gzip -n {} +
    printf '%s\n' 'blacklist nouveau' | install -D -m644 /dev/stdin "${pkgdir}/usr/lib/modprobe.d/nvidia.conf"
    install -D -m644 "${_pkg}/LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
