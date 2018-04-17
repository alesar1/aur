# Maintainer: Noa-Emil Nissinen <aur dot satella at spamgourmet dot org>

pkgname=mingw-w64-binutils-bin
pkgver=2.29.1
pkgrel=1
pkgdesc="Cross binutils for the MinGW-w64 cross-compiler (pre-compiled)"
arch=('x86_64')
url="http://www.gnu.org/software/binutils"
license=('GPL')
groups=('mingw-w64-toolchain' 'mingw-w64')
depends=('zlib')
provides=('mingw-w64-binutils')
conflicts=('mingw-w64-binutils')
options=('!libtool' '!emptydirs')
source=("https://github.com/4shadoww/mingw-w64-builds/releases/download/binary/$provides-$pkgver.tar.xz")
md5sums=('e19d0763e0b87e4893339748d3869382')

package() {
  cd "$provides/"
	cp -r * "$pkgdir/"
}
