# Maintainer: Peter Ivanov <ivanovp@gmail.com>
# Contributor: Aki-nyan <aur@catgirl.link>

_pkgname=nextpnr-xilinx
pkgname=$_pkgname-git
pkgver=r2847.3bfb3d01
pkgrel=1
epoch=2
pkgdesc="nextpnr portable FPGA place and route tool - for Xilinx"
arch=(x86_64)
url="https://github.com/gatecat/$_pkgname"
license=("custom:ISC")
groups=()
depends=(
	"python"
	"boost-libs"
)
optdepends=()
makedepends=("git" "gcc" "cmake" "pkgconf" "gawk" "eigen" "boost" "prjxray-db>=r258" "pypy3")
conflicts=(
	"nextpnr"
)
replaces=()
source=(
	"$_pkgname::git+$url"
	"nextpnr-xilinx-meta::git+https://github.com/gatecat/nextpnr-xilinx-meta.git"
	"0001-fix-xilinx_device-patch-export-for-xc7a35t-fabric.patch"
)
sha256sums=('SKIP'
            'SKIP'
            'e4faf96ecffea231c31e5b2e481bb48a8646982bc98ad71a463cabb078ff4856')
_DEVICES=(
        "xc7a100tcsg324-1"
        "xc7a100tfgg676-1"
        "xc7a200tffg1156-1"
        "xc7a200tsbg484-1"
        "xc7a35tcpg236-1"
        "xc7a35tcsg324-1"
        "xc7a35tftg256-1"
        "xc7a50tfgg484-1"
)

pkgver() {
	cd "$_pkgname"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd "$_pkgname"

	patch -p1 < "$srcdir/0001-fix-xilinx_device-patch-export-for-xc7a35t-fabric.patch"
}

build() {
	cmake -S "$_pkgname" -B build \
		-DARCH=xilinx     \
		-DBUILD_TESTS=ON \
		-DBUILD_PYTHON=OFF \
		-DBUILD_GUI=OFF    \
		-DCMAKE_BUILD_TYPE=None \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DUSE_OPENMP=ON

	make -C build

	cd "$_pkgname"

    echo "Generating device database, it will take some time, have a coffee..."
    for i in ${_DEVICES[@]}; do
        echo "### Generating device $i ###"
        [ ! -f "xilinx/$i.bba" ] && pypy3 xilinx/python/bbaexport.py --xray /usr/share/xray/database/artix7 --meta "$srcdir/nextpnr-xilinx-meta/artix7" --device $i --bba xilinx/$i.bba
        [ ! -f "xilinx/$i.bin" ] && build-xilinx/bbasm --l xilinx/$i.bba xilinx/$i.bin
    done
}

check() {
	make -C build test
}

package() {
	make -C build DESTDIR="${pkgdir}" install

	cd "$_pkgname"
	install -Dm644 COPYING "${pkgdir}/usr/share/licenses/$pkgname/COPYING"
    for i in ${_DEVICES[@]}; do
        install -Dm644 "xilinx/$i.bin" "${pkgdir}/usr/share/nextpnr/xilinx-chipdb/$i.bin"
    done
}
