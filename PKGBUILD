# Maintainer: Aki-nyan <aur@catgirl.link>

pkgname=nextpnr-ecp5-nightly
pkgver=1615b0a5_20211106
pkgrel=1
epoch=1
pkgdesc="nextpnr portable FPGA place and route tool - for ecp5"
arch=("any")
url="https://github.com/YosysHQ/nextpnr"
license=("custom:ISC")
groups=()
options=("!strip")
depends=(
	"yosys-nightly"
	"prjtrellis-nightly"
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
	"nextpnr::git+https://github.com/YosysHQ/nextpnr.git"#commit=1615b0a5
)
sha256sums=(
	"SKIP"
)

_PREFIX="/usr"
prepare() {
	cd "${srcdir}/nextpnr"
	[ ! -d "${srcdir}/nextpnr/build-ecp5" ] && mkdir build-ecp5
	cd ..
}

build() {
	cd "${srcdir}/nextpnr"
	cd build-ecp5
		cmake -G Ninja        \
			-DARCH=ecp5      \
			-DBUILD_PYTHON=ON \
			-DBUILD_GUI=ON    \
			-DCMAKE_BUILD_TYPE=RelWithDebInfo \
			-DCMAKE_INSTALL_PREFIX=${_PREFIX} \
			-DUSE_OPENMP=ON	\
			..
	cd ..
	ninja -C build-ecp5
	cd ..
}

package() {
	cd "${srcdir}/nextpnr"
	DESTDIR="${pkgdir}" PREFIX="${_PREFIX}" ninja -C build-ecp5 install
	install -Dm644 "${srcdir}/nextpnr/COPYING" "${pkgdir}${_PREFIX}/share/licenses/nextpnr-ecp5/COPYING"
	cd ..
}
