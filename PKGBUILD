# Maintainer: Omar Pakker <archlinux@opakker.nl>

_pkgname=looking-glass
pkgname="${_pkgname}-git"
pkgver=a10.r31.g859e984
pkgrel=1
pkgdesc="An extremely low latency KVMFR (KVM FrameRelay) implementation for guests with VGA PCI Passthrough"
url="https://looking-glass.hostfission.com"
arch=('x86_64')
license=('GPL2')
makedepends=('git' 'sdl2_ttf' 'spice-protocol' 'libconfig' 'libva')
depends=('sdl2_ttf' 'glu' 'openssl' 'fontconfig' 'libconfig' 'libva')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=("${_pkgname}::git+https://github.com/gnif/LookingGlass.git")
sha512sums=('SKIP')

pkgver() {
	cd "${_pkgname}"
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	cd "${_pkgname}/client"
	make
}

package() {
	install -Dm755 "${srcdir}/${_pkgname}/client/bin/looking-glass-client" "${pkgdir}/usr/bin/looking-glass-client"
}
