# Maintainer: Aki-nyan <aur@catgirl.link>

pkgname=nextpnr-ice40-nightly
pkgver=06d58e6e_20211029
pkgrel=1
epoch=1
pkgdesc="nextpnr portable FPGA place and route tool - for ice40"
arch=("any")
url="https://github.com/YosysHQ/nextpnr"
license=("custom:ISC")
groups=()
options=("!strip")
depends=(
	"yosys-nightly"
	"icestorm-nightly"
	"python"
	"boost-libs"
	"qt5-base"
)
optdepends=()
makedepends=("git" "gcc" "cmake" "ninja" "pkgconf" "gawk" "eigen" "boost")
conflicts=(
	"nextpnr-git"
)
replaces=()
source=(
	"nextpnr::git+https://github.com/YosysHQ/nextpnr.git"#commit=06d58e6e
)
sha256sums=(
	"SKIP"
)

_PREFIX="/usr"
prepare() {
	cd "${srcdir}/nextpnr"
	[ ! -d "${srcdir}/nextpnr/build-ice40" ] && mkdir build-ice40
	cd ..
}

build() {
	cd "${srcdir}/nextpnr"
	cd build-ice40
		cmake -G Ninja        \
			-DARCH=ice40      \
			-DBUILD_PYTHON=ON \
			-DBUILD_GUI=ON    \
			-DCMAKE_BUILD_TYPE=RelWithDebInfo \
			-DCMAKE_INSTALL_PREFIX=${_PREFIX} \
			-DUSE_OPENMP=ON	\
			..
	cd ..
	ninja -C build-ice40
	cd ..
}

package() {
	cd "${srcdir}/nextpnr"
	DESTDIR="${pkgdir}" PREFIX="${_PREFIX}" ninja -C build-ice40 install
	install -Dm644 "${srcdir}/nextpnr/COPYING" "${pkgdir}${_PREFIX}/share/licenses/nextpnr-ice40/COPYING"
	cd ..
}
