# Maintainer: Piotr Gorski <lucjan.lucjanov@gmail.com> PGP-Key: 78695CFD
# Contributor: shivik <> PGP-Key: 761E423C
# Contributor: Thomas Baechler <thomas@archlinux.org>

pkgname=nvidia-lqx
pkgver=355.11
_extramodules=extramodules-4.2-lqx
pkgrel=3
pkgdesc="NVIDIA drivers for linux-lqx"
arch=('i686' 'x86_64')
url="http://www.nvidia.com/"
depends=('linux-lqx>=4.2' 'linux-lqx<4.3' "nvidia-libgl" "nvidia-utils=${pkgver}")
makedepends=('linux-lqx-headers>=4.2' 'linux-lqx-headers<4.3')
conflicts=('nvidia-304xx-lqx' 'nvidia-340xx-lqx')
license=('custom')
install=nvidia-lqx.install
options=(!strip)
source_i686+=("ftp://download.nvidia.com/XFree86/Linux-x86/${pkgver}/NVIDIA-Linux-x86-${pkgver}.run")
source_x86_64+=("ftp://download.nvidia.com/XFree86/Linux-x86_64/${pkgver}/NVIDIA-Linux-x86_64-${pkgver}-no-compat32.run")
md5sums_i686=('16d143ccafe99328a2ca8e5a396fd4bc')
md5sums_x86_64=('30133d89690f4683c4e289ec6c0247dc')

[[ "$CARCH" = "i686" ]] && _pkg="NVIDIA-Linux-x86-${pkgver}"
[[ "$CARCH" = "x86_64" ]] && _pkg="NVIDIA-Linux-x86_64-${pkgver}-no-compat32"

prepare() {
    sh "${_pkg}.run" --extract-only
    cd "${_pkg}"
    # patches here
}

build() {
	_kernver="$(cat /usr/lib/modules/${_extramodules}/version)"
	cd "${_pkg}/kernel"
	make SYSSRC=/usr/lib/modules/"${_kernver}/build" module
}

package() {
	install -Dm644 "${srcdir}/${_pkg}/kernel/nvidia.ko" \
		"${pkgdir}/usr/lib/modules/${_extramodules}/nvidia.ko"

	if [[ "$CARCH" = "x86_64" ]]; then
		install -D -m644 "${srcdir}/${_pkg}/kernel/nvidia-uvm.ko" \
			"${pkgdir}/usr/lib/modules/${_extramodules}/nvidia-uvm.ko"
	fi

	gzip -9 "${pkgdir}/usr/lib/modules/${_extramodules}/"*.ko
	install -dm755 "${pkgdir}/usr/lib/modprobe.d"
        echo "blacklist nouveau" >> "${pkgdir}/usr/lib/modprobe.d/nvidia-lqx.conf"
}
