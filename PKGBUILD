# Maintainer: Alexandre Bouvier <contact@amb.tf>
_pkgname=libretro-pcsx2
pkgname=$_pkgname-git
pkgver=r12086.f83cd9467
pkgrel=1
pkgdesc="Sony PlayStation 2 core"
arch=('x86_64')
url="https://github.com/libretro/pcsx2"
license=('LGPL3')
groups=('libretro')
depends=('libaio' 'libgl' 'libretro-core-info' 'systemd-libs')
makedepends=('cmake' 'git' 'libglvnd' 'systemd' 'vim')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("$_pkgname::git+$url.git")
b2sums=('SKIP')

pkgver() {
	cd $_pkgname
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	sed -i '/ ccache)$/d' $_pkgname/CMakeLists.txt
}

build() {
	cmake -S $_pkgname -B build \
		-DARCH_FLAG="" \
		-DCMAKE_BUILD_TYPE=Release \
		-DDISABLE_ADVANCE_SIMD=ON \
		-DLIBRETRO=ON \
		-DOPTIMIZATION_FLAG="" \
		-DUSE_LTO=OFF \
		-Wno-dev
	cmake --build build
}

package() {
	# shellcheck disable=SC2154
	install -Dm644 -t "$pkgdir"/usr/lib/libretro build/pcsx2/pcsx2_libretro.so
}
