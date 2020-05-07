# Maintainer: Omar Pakker <archlinux@opakker.nl>

pkgbase=looking-glass
pkgname=("${pkgbase}" "${pkgbase}-module-dkms" "${pkgbase}-host")
epoch=2
pkgver=B1
_pkgver=${pkgver//_/-}
pkgrel=3
pkgdesc="An extremely low latency KVMFR (KVM FrameRelay) implementation for guests with VGA PCI Passthrough"
url="https://looking-glass.hostfission.com"
arch=('x86_64')
license=('GPL2')
makedepends=('cmake' 'sdl2_ttf' 'glu' 'fontconfig' 'spice-protocol')
source=("https://github.com/gnif/LookingGlass/archive/${_pkgver}.tar.gz"
        "https://github.com/gnif/LookingGlass/pull/241.diff")
sha512sums=('add82702d7e7f601a07db5b9e0de7a7472d3051a71c4cb484e0c10333f25e0ca54d19513002b93803ae1677fb8ea05368253cd929853dfcda16207a53ed2f19f'
            'ecf3a2d45a5393410ddc93444c01174745cddc9c07b52347c7e3635b4e1ce3d87cf6c332f8767034f1a219603f929ab2f821c7157f564b630de4d0eba11045f0')

prepare() {
	cd "${srcdir}/LookingGlass-${_pkgver}"
	patch -i "${srcdir}/241.diff" -u common/src/crash.linux.c
}

build() {
	cd "${srcdir}/LookingGlass-${_pkgver}"
	for b in {client,c-host}; do
		pushd "${b}"
		cmake -DCMAKE_INSTALL_PREFIX=/usr .
		make
		popd
	done
}

package_looking-glass() {
	pkgdesc="A client application for accessing the LookingGlass IVSHMEM device of a VM"
	depends=('sdl2_ttf' 'glu' 'nettle' 'fontconfig')

	cd "${srcdir}/LookingGlass-${_pkgver}/client"
	make DESTDIR="${pkgdir}" install
}

package_looking-glass-module-dkms() {
	pkgdesc="A kernel module that implements a basic interface to the IVSHMEM device for when using LookingGlass in VM->VM mode"
	depends=('dkms')

	cd "${srcdir}/LookingGlass-${_pkgver}/module"
	for f in {Makefile,dkms.conf,kvmfr.c}; do
		install -Dm644 "${f}" "${pkgdir}/usr/src/${pkgbase}-${pkgver}/${f}"
	done
}

package_looking-glass-host() {
	pkgdesc="Linux host application for pushing frame data to the LookingGlass IVSHMEM device"
	depends=('libxcb' 'zlib')

	cd "${srcdir}/LookingGlass-${_pkgver}/c-host"
	make DESTDIR="${pkgdir}" install
}
