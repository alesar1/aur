# Maintainer: Alexandre Bouvier <contact@amb.tf>
# Contributor: Oliver Jaksch <arch-aur@com-in.de>
# shellcheck shell=bash disable=SC2034,SC2164
_pkgname=libretro-stella
pkgname=$_pkgname-git
pkgver=6.5.3.r81.g7ade95c03
pkgrel=1
epoch=1
pkgdesc="Atari 2600 VCS core"
arch=('arm' 'armv6h' 'armv7h' 'i686' 'x86_64')
url="https://stella-emu.github.io/"
license=('GPL2')
groups=('libretro')
depends=('glibc' 'libretro-core-info')
makedepends=('git')
provides=("$_pkgname")
conflicts=("$_pkgname")
source=('stella-emu::git+https://github.com/stella-emu/stella.git')
md5sums=('SKIP')

pkgver() {
	cd stella-emu
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
	# https://github.com/stella-emu/stella/issues/806
	CXXFLAGS="$CXXFLAGS -Wp,-U_GLIBCXX_ASSERTIONS" make -C stella-emu/src/libretro LTO=
}

package() {
	# shellcheck disable=SC2154
	install -Dm644 -t "$pkgdir"/usr/lib/libretro stella-emu/src/libretro/stella_libretro.so
}
