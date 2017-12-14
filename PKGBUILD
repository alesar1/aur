# Maintainer: Omar Pakker <archlinux@opakker.nl>

_pkgname=looking-glass
pkgname="${_pkgname}-git"
pkgver=a2.r5.g2ae9b47
pkgrel=1
pkgdesc="An extremely low latency KVMFR (KVM FrameRelay) implementation for guests with VGA PCI Passthrough"
url="https://looking-glass.hostfission.com"
arch=('x86_64')
license=('LGPL')
makedepends=('git' 'sdl2_ttf' 'spice-protocol')
depends=('sdl2_ttf' 'glu' 'openssl' 'fontconfig')
optdepends=()
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=("${_pkgname}::git+https://github.com/gnif/LookingGlass.git")
sha512sums=('SKIP')

pkgver() {
	cd "${_pkgname}"
	git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	cd "${_pkgname}/client"
	make
}

package() {
	install -Dm755 "${srcdir}/${_pkgname}/client/bin/looking-glass-client" "${pkgdir}/usr/bin/looking-glass-client"
}
