# Maintainer: Alexandre Bouvier <contact@amb.tf>
_pkgname=dynarmic
pkgname=$_pkgname-git
pkgver=5.r113.g517e35f8
pkgrel=2
pkgdesc='An ARM dynamic recompiler'
arch=('x86_64')
url="https://github.com/MerryMage/$_pkgname"
license=('BSD')
makedepends=(
	'boost>=1.57'
	'cmake>=3.8'
	'fmt>=8'
	'git'
	'robin-map>=0.6.2'
	'xbyak>=5.995.r3'
	'zydis>=3.1.0.r78'
)
checkdepends=('catch2>=2.13.1')
provides=("$_pkgname=$pkgver" 'libdynarmic.so')
conflicts=("$_pkgname")
source=(
	"git+$url.git"
	"0002-dynarmic-add-cmake-install-rules.patch::$url/pull/636.patch"
	'unbundle-catch2.patch'
	'unbundle-fmt.patch'
	'unbundle-robin-map.patch'
	'unbundle-xbyak.patch'
	'unbundle-zydis.patch'
)
b2sums=(
	'SKIP'
	'bb8bfeccd4a944a36df33ce77bc15a8680bd06c80aeabac17ff052fc651468f559625ca0b1db52bd3badd228270f0e5dd0958d65710f8f3be67ed91be7464948'
	'd5adb75e25b1f3cb297f781d4c00d978d234912ca7fcb4e206e7f7779ccbe9a9d747c652a6fc2d8af55442b457dc8d496f3708b67fa0072aba8cdf5aba15bdde'
	'4bcf176ce2a82cbaf54f9eb0b463844e77c099e5824fb9d994817dd8a5b75ea1abebf17da4c01be14042ce36564d8df5836e9a02a5cbe92bb95d7232263123b4'
	'd474ec20f085832c73de96b19a06b5d8018d6fb429ea054a9e026c1d56f12035b83bc3b980487825ecb473b674a7b22f2b92733bdb53d71dcb1528318f2a5d80'
	'92d760e22bebe7d07bee8fdcc4d142ae8bc11e73c1d6e89e3964d07a1618c3ad4516eeaa262b6f7046a8b483c4b56d2e509b170fe9acf48eea7523210c0e9fa7'
	'df66b3be7d940ed9b6a9ab6e387e9b239bb49c958d2f255f68861c39a5eea48113c4a6faad10553876f44178678f188c7db97d2db390aaacbacd76ea1336ac7e'
)

pkgver() {
	cd $_pkgname
	git describe --long --tags | sed 's/^r//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	cd $_pkgname
	patch -Np1 < ../0002-dynarmic-add-cmake-install-rules.patch
	patch -Np1 < ../unbundle-catch2.patch
	patch -Np1 < ../unbundle-fmt.patch
	patch -Np1 < ../unbundle-robin-map.patch
	patch -Np1 < ../unbundle-xbyak.patch
	patch -Np1 < ../unbundle-zydis.patch
}

build() {
	cmake -S $_pkgname -B build \
		-DBUILD_SHARED_LIBS=ON \
		-DCMAKE_BUILD_TYPE=None \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DDYNARMIC_IGNORE_ASSERTS=ON \
		-DDYNARMIC_NO_BUNDLED_FMT=ON \
		-DDYNARMIC_TESTS="$CHECKFUNC" \
		-Wno-dev
	cmake --build build
}

check() {
	cmake --build build --target test
}

package() {
	depends+=('libfmt.so' 'libZydis.so')
	# shellcheck disable=SC2154
	DESTDIR="$pkgdir" cmake --install build
	install -Dm644 -t "$pkgdir"/usr/share/licenses/$pkgname $_pkgname/LICENSE.txt
}
