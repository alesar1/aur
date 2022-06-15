# Maintainer: Peter Jung ptr1337 <admin@ptr1337.dev>

pkgname=mold-git
pkgver=v1.2.1_341_gb05a6717
pkgrel=1
pkgdesc="A Modern Linker"
arch=(x86_64)
url="https://github.com/rui314/mold"
license=("AGPL3")
depends=("gcc-libs" "mimalloc" "openssl" "tbb" "zlib")
makedepends=("clang" "git")
source=("mold::git+https://github.com/rui314/mold")
sha256sums=('SKIP')
provides=("mold=$pkgver")
conflicts=("mold")
reponame="mold"
MKFLAGS=" PREFIX=/usr LTO=1 SYSTEM_MIMALLOC=1 SYSTEM_TBB=1"

prepare() {
	cd "$reponame"
	sed -i "s/libexec/lib/" Makefile
}

pkgver() {
	cd "$reponame"
	git describe --long --tags | sed "s/-/_/g"
}

build() {
	make -C "${reponame}" PREFIX=/usr LTO=1 SYSTEM_MIMALLOC=1 SYSTEM_TBB=1 -j `nproc` CXX=clang++
}

package() {
	make -C "${reponame}" PREFIX=/usr LTO=1 SYSTEM_MIMALLOC=1 SYSTEM_TBB=1 DESTDIR="${pkgdir}" install

	ln -vsf /usr/bin/mold "$pkgdir/usr/lib/mold/ld"
}
