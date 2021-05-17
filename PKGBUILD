pkgname=ananicy-cpp
pkgver=0.4.0
pkgrel=1
pkgdesc="Ananicy Cpp is a full rewrite of Ananicy in C++, featuring lower CPU and RAM usage."
url="https://gitlab.com/aviallon/ananicy-cpp/"
license=(GPLv3)
source=(
	"https://gitlab.com/aviallon/${pkgname}/-/archive/v${pkgver}/${pkgname}-v${pkgver}.tar.gz"
	)
md5sums=('9b7c04e1881c8e60b5474d3a916d6f56')
arch=(x86_64 i386 armv7h)
depends=(ananicy fmt spdlog nlohmann-json systemd)
makedepends=(cmake git)

prepare() {
	cd "$pkgname-v${pkgver}"

	mkdir -p build
	cd build
	cmake .. \
		-DCMAKE_BUILD_TYPE=Release \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DUSE_EXTERNAL_SPDLOG=ON \
		-DUSE_EXTERNAL_JSON=ON \
		-DUSE_EXTERNAL_FMTLIB=ON \
		-DVERSION=${pkgver}
}

build() {
	cd "$pkgname-v${pkgver}/build"

	cmake --build .
}

package() {
	cd "$pkgname-v${pkgver}/build"

	export DESTDIR="$pkgdir"
	cmake --install .
}

