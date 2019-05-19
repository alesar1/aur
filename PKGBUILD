# Maintainer: Spyros Stathopoulos <spystath [AT] gmail [DOT] com>

pkgname=nvfancontrol
pkgver=0.4.0
_pkgver=0.4.0
pkgrel=1
pkgdesc="NVidia dynamic fan control"
arch=('i686' 'x86_64')
url="https://github.com/foucault/nvfancontrol"
license=('GPL3')
depends=('libxext')
makedepends=('cargo' 'libxnvctrl')
optdepends=('nvidia: For GTX 4xx or newer cards'
            'nvidia-340xx: For G8x, G9x and GTX 2xx cards')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/foucault/${pkgname}/archive/${_pkgver}.tar.gz"
        "${pkgname}-${pkgver}.tar.gz.asc::https://github.com/foucault/${pkgname}/releases/download/${_pkgver}/${pkgname}-${_pkgver}.tar.gz.asc")
sha256sums=('a8a106614473546d6bf00ba2d649531b8e521f6d669469e15d5a44253f54bf32'
            'SKIP')
validpgpkeys=('391572CF5690CAF60BB320C6A68E5115BB817582') # Spyros Stathopoulos

build() {
	cd "${pkgname}-${_pkgver}"
	cargo build --release
}

package() {
	cd "${pkgname}-${_pkgver}"
	install -Dm755 "target/release/${pkgname}" -t "${pkgdir}/usr/bin"
}
