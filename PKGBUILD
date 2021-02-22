# Maintainer: Omar Pakker <archlinux@opakker.nl>

_pkgname=looking-glass
pkgbase="${_pkgname}-git"
pkgname=("${_pkgname}-git"
         "${_pkgname}-module-dkms-git"
         "${_pkgname}-host-git"
         "obs-plugin-${_pkgname}-git")
epoch=2
pkgver=B3.r97.g30b5287
pkgrel=2
pkgdesc="An extremely low latency KVMFR (KVM FrameRelay) implementation for guests with VGA PCI Passthrough"
url="https://looking-glass.io/"
arch=('x86_64')
license=('GPL2')
makedepends=('cmake' 'git' 'sdl2_ttf' 'fontconfig' 'spice-protocol' 'wayland-protocols'
             'libxss' 'libxi' 'libxinerama' 'obs-studio')
source=("${_pkgname}::git+https://github.com/gnif/LookingGlass.git"
        "LGMP::git+https://github.com/gnif/LGMP.git"
        "PureSpice::git+https://github.com/gnif/PureSpice.git")
sha512sums=('SKIP'
            'SKIP'
            'SKIP')
install="${pkgbase}.install"

pkgver() {
	cd "${_pkgname}"
	local TAG=$(git describe --abbrev=0 --tags)
	local SUFFIX=$(git describe --long --tags | sed 's/^'"${TAG}"'-\([^-]*-g\)/r\1/;s/-/./g')
	printf "%s.%s" "${TAG//-/}" "${SUFFIX}"
}

prepare() {
	cd "${_pkgname}"

	git submodule init
	git config submodule.repos/LGMP.url "${srcdir}/LGMP"
	git config submodule.repos/PureSpice.url "${srcdir}/PureSpice"
	git submodule update
}

build() {
	cd "${srcdir}/${_pkgname}"
	for b in {client,host,obs}; do
		pushd "${b}"
		cmake -DCMAKE_INSTALL_PREFIX=/usr .
		make
		popd
	done
}

package_looking-glass-git() {
	pkgdesc="A client application for accessing the LookingGlass IVSHMEM device of a VM"
	depends=('sdl2_ttf' 'nettle' 'fontconfig' 'libxss' 'libxi' 'libxinerama')
	provides=("${_pkgname}")
	conflicts=("${_pkgname}")

	cd "${srcdir}/${_pkgname}/client"
	make DESTDIR="${pkgdir}" install
}

package_looking-glass-module-dkms-git() {
	pkgdesc="A kernel module that implements a basic interface to the IVSHMEM device for when using LookingGlass in VM->VM mode"
	depends=('dkms')
	provides=("${_pkgname}-module-dkms")
	conflicts=("${_pkgname}-module-dkms")

	cd "${srcdir}/${_pkgname}/module"
	install -Dm644 -t "${pkgdir}/usr/src/${pkgbase}-${pkgver}" \
		Makefile \
		dkms.conf \
		kvmfr.{h,c}
}

package_looking-glass-host-git() {
	pkgdesc="Linux host application for pushing frame data to the LookingGlass IVSHMEM device"
	depends=('libxcb' 'zlib')
	provides=("${_pkgname}-host")
	conflicts=("${_pkgname}-host")

	cd "${srcdir}/${_pkgname}/host"
	make DESTDIR="${pkgdir}" install
}

package_obs-plugin-looking-glass-git() {
	pkgdesc="Plugin for OBS Studio to stream directly from Looking Glass without having to record the Looking Glass client"
	depends=('obs-studio')
	provides=("obs-plugin-${_pkgname}")
	conflicts=("obs-plugin-${_pkgname}")

	install -Dm644 -t "${pkgdir}/usr/lib/obs-plugins" \
		"${srcdir}/${_pkgname}/obs/liblooking-glass-obs.so"
}
