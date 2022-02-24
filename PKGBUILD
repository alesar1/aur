# Maintainer: Alexandre Bouvier <contact@amb.tf>
_reponame=dosbox-pure
_pkgname=libretro-$_reponame
pkgname=$_pkgname-git
pkgver=0.26.r0.g1845cd9
pkgrel=1
pkgdesc="MS-DOS core"
arch=('x86_64')
url="https://github.com/schellingb/$_reponame"
license=('GPL2')
groups=('libretro')
depends=('gcc-libs' 'libretro-core-info')
makedepends=('git')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("git+$url.git")
b2sums=('SKIP')

pkgver() {
	cd $_reponame
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
	sed -E \
		-e 's/^(\s*(CFLAGS|LDFLAGS)\s*):=/\1+=/' \
		-e 's/-Wno-format//' \
		-e 's/-O[0123s]//' \
		-e '/\$\(LDFLAGS\)/s/$/ -lpthread/' \
		-i $_reponame/Makefile
}

build() {
	make -C $_reponame
}

package() {
	# shellcheck disable=SC2154
	install -Dm644 -t "$pkgdir"/usr/lib/libretro $_reponame/dosbox_pure_libretro.so
}
