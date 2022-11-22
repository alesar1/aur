# Maintainer: Milan Toth <milgra@milgra.com>

pkgname=wcp
pkgver=0.61b
pkgrel=1
pkgdesc='Script-driven control panel/system menu for Wayland'
arch=('i686' 'x86_64')
url='https://github.com/milgra/wcp'
license=('MIT')
depends=('wayland' 'freetype2' 'libpng')
makedepends=('meson' 'wayland-protocols')
source=(
	"${pkgname}-${pkgver}.tar.xz::https://github.com/milgra/wcp/releases/download/${pkgver}/wcp-${pkgver}.tar.xz"
)

sha256sums=(
	'd89b89d7a35d9ef5fff24dd78f9dfea14c30a147f65238210b9cc72f7063f8ce'
)

prepare() {
	cd "${pkgname}-${pkgver}"
}

build() {
	mkdir -p build
	arch-meson build "${pkgname}-${pkgver}" --buildtype=release
	ninja -C build
}

package() {
	DESTDIR="${pkgdir}" ninja -C build install
}

