# Maintainer: Piotr Gorski <lucjan.lucjanov@gmail.com>
# Contributor: Kamil Kolosowski <sameal@openlinux.pl>

pkgname=nvidia-bfs
pkgver=352.41
_extramodules=extramodules-4.1-bfs
pkgrel=1
_pkgdesc="NVIDIA drivers for linux-bfs."
pkgdesc="$_pkgdesc"
arch=('i686' 'x86_64')
url="http://www.nvidia.com/"
depends=('linux-bfs>=4.1' 'linux-bfs<4.2' "nvidia-libgl" "nvidia-utils=${pkgver}")
makedepends=('linux-bfs-headers>=4.1' 'linux-bfs-headers<4.2')
conflicts=('nvidia-bfs-304xx' 'nvidia-bfs-340xx')
license=('custom')
install=nvidia-bfs.install
options=(!strip)
source_i686=("ftp://download.nvidia.com/XFree86/Linux-x86/${pkgver}/NVIDIA-Linux-x86-${pkgver}.run")
source_x86_64=("ftp://download.nvidia.com/XFree86/Linux-x86_64/${pkgver}/NVIDIA-Linux-x86_64-${pkgver}-no-compat32.run")
md5sums_i686=('3f9c9fed035fa845e3f6a1ea5f5732f7')
md5sums_x86_64=('d41d1a358edbade36cfd97cdcc9a80b9')

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

	if [[ "$CARCH" = "x86_64" ]]; then
		cd uvm
		make SYSSRC=/usr/lib/modules/"${_kernver}/build" module
	fi
}

package() {
	install -Dm644 "${srcdir}/${_pkg}/kernel/nvidia.ko" \
		"${pkgdir}/usr/lib/modules/${_extramodules}/nvidia.ko"
	
    if [[ "$CARCH" = "x86_64" ]]; then
        install -D -m644 "${srcdir}/${_pkg}/kernel/uvm/nvidia-uvm.ko" \
            "${pkgdir}/usr/lib/modules/${_extramodules}/nvidia-uvm.ko"
    fi

	gzip -9 "${pkgdir}/usr/lib/modules/${_extramodules}/"*.ko
	install -dm755 "${pkgdir}/usr/lib/modprobe.d"
	echo "blacklist nouveau" >> "${pkgdir}/usr/lib/modprobe.d/nvidia-bfs.conf"
}
