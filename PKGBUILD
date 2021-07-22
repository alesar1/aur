# Maintainer: dr460nf1r3 <dr460nf1r3 at garudalinux dot org>

pkgname=ananicy-cpp-git
_pkgname=ananicy-cpp
pkgver=0.7.3.r0.g0b2f7ee
pkgrel=1
pkgdesc="Ananicy Cpp is a full rewrite of Ananicy in C++, featuring lower CPU and RAM usage."
source=("git+https://gitlab.com/aviallon/ananicy-cpp.git")
md5sums=('SKIP')
arch=(x86_64 i386 armv7h)
depends=(fmt spdlog nlohmann-json systemd)
makedepends=(cmake git gcc)
conflicts=(ananicy-cpp)
provides=(ananicy-cpp)
optdepends=("ananicy: community rules")

pkgver() {
  cd "$_pkgname"
  git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	cd "$_pkgname"
	mkdir -p build
	cd build

	cmake .. \
		-DCMAKE_BUILD_TYPE=Release \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DUSE_EXTERNAL_SPDLOG=ON \
		-DUSE_EXTERNAL_JSON=ON \
		-DUSE_EXTERNAL_FMTLIB=ON
}

build() {
	cd "$_pkgname/build"
	cmake --build .
}

package() {
	cd "$_pkgname/build"
	export DESTDIR="$pkgdir"
	cmake --install .

	install -m755 -d "$pkgdir/etc/ananicy.d"
}

