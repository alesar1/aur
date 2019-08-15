# Maintainer: Noa-Emil Nissinen <aur dot satella at spamgourmet dot org>

pkgname=mingw-w64-gcc-bin
pkgver=9.2.0
pkgrel=0
pkgdesc="Cross GCC for the MinGW-w64 cross-compiler (pre-compiled)"
arch=('x86_64')
url="https://gcc.gnu.org/"
license=('GPL')
groups=('mingw-w64-toolchain' 'mingw-w64')
depends=('zlib' 'libmpc' 'mingw-w64-crt' 'mingw-w64-binutils' 'mingw-w64-winpthreads' 'mingw-w64-headers')
provides=("mingw-w64-gcc=${pkgver}" "mingw-w64-gcc-base")
conflicts=('mingw-w64-gcc')
options=('!strip' 'staticlibs' '!emptydirs' '!buildflags')
source=("https://sourceforge.net/projects/mingw-w64-builds/files/mingw-w64-gcc/mingw-w64-gcc-$pkgver.tar.xz")
md5sums=('5f4d1062c67a37b881425dd5986af8d3')

package() {
	cd "mingw-w64-gcc/"
	cp -r * "$pkgdir/"
}
