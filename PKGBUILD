# Maintainer: Jorge Barroso <jorge_barroso_11 at hotmail dot com>
_pkgname=harvesttimer-qt
_appname=harvest
pkgname=harvest-timer-qt
pkgver=0.9.1
pkgrel=1
pkgdesc='Desktop app for Harvest, a simple time tracker and reporting tool for companies'
arch=('x86_64')
url='https://github.com/jorge-barroso/harvesttimer-qt'
license=('GPL')
provides=('harvest-timer')
conflicts=('harvest-timer')
depends=('qt6-base')
makedepends=('cmake')
apptag="v${pkgver}"
source=(
	"https://github.com/jorge-barroso/${_pkgname}/archive/refs/tags/${apptag}.tar.gz"
)
srcdir_name="${_pkgname}-${pkgver}"
sha256sums=('2dc2627cf317bd43da10192e0b66b522eceb4e3bba12039b172180cd47212a56')

build() {
	cd "${srcdir}"

	mkdir -p "${srcdir}/build"
	cd "${srcdir}/build"

	cmake "../${srcdir_name}/" -DCMAKE_INSTALL_PREFIX=/usr/bin -DCMAKE_BUILD_TYPE=release -DCMAKE_CXX_FLAGS="${CXXFLAGS}"

	make || return 1
}

package() {
	cd "${srcdir}/build"

	make DESTDIR="$pkgdir/" install || return 1
	
	for _size in 16 24 32 48 64 96 128 256 512; do
		install -Dm644 "../${srcdir_name}/resources/icons/hicolor/${_size}x${_size}.png" "$pkgdir/usr/share/icons/hicolor/${_size}x${_size}/apps/${_appname}.png"
	done

	install -Dm644 "../${srcdir_name}/resources/desktop/${_appname}.svg" "$pkgdir/usr/share/icons/hicolor/scalable/apps/${_appname}.svg"

	install -Dm755 "../${srcdir_name}/resources/desktop/${_appname}.desktop" "${pkgdir}/usr/share/applications/${_appname}.desktop"
}
