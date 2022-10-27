# Maintainer: dr460nf1r3 <dr460nf1r3 at garudalinux dot org>
# Maintainer: Antoine Viallon <antoine@lesviallon.fr>

pkgname=ananicy-cpp-git
_pkgname=ananicy-cpp
pkgver=1.0.0.rc7.r33.g9a6987e
pkgrel=1
pkgdesc="Ananicy Cpp is a full rewrite of Ananicy in C++, featuring lower CPU and RAM usage."
url="https://gitlab.com/ananicy-cpp/ananicy-cpp.git"
source=(
	"git+https://gitlab.com/ananicy-cpp/ananicy-cpp.git"
	"git+https://gitlab.com/ananicy-cpp/stl-polyfills/std-format.git"
)
md5sums=('SKIP'
         'SKIP')
arch=(x86_64 i386 armv7h)
depends=(fmt spdlog nlohmann-json systemd)
makedepends=(cmake git gcc)
conflicts=(ananicy-cpp)
provides=(ananicy-cpp)
optdepends=("ananicy-rules-git: community rules")

pkgver() {
  cd "$_pkgname"
  git describe --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	cd "$_pkgname"

	git submodule init
	git config submodule."external/std-format".url "${srcdir}/std-format"
	git -c protocol.file.allow=always submodule update

	cmake -B build -S . \
		-DCMAKE_BUILD_TYPE=Release \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DUSE_EXTERNAL_SPDLOG=ON \
		-DUSE_EXTERNAL_JSON=ON \
		-DUSE_EXTERNAL_FMTLIB=ON
}

build() {
	cd "$_pkgname"
	cmake --build build --target ananicy-cpp
}

package() {
	cd "$_pkgname"
	export DESTDIR="$pkgdir"
	cmake --install build --component Runtime

	install -m755 -d "$pkgdir/etc/ananicy.d"
}

