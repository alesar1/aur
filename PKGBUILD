# Maintainer: Noa-Emil Nissinen <aur dot satella at spamgourmet dot org>

pkgname=mingw-w64-binutils-bin
pkgver=2.31.1
pkgrel=1
pkgdesc="Cross binutils for the MinGW-w64 cross-compiler (pre-compiled)"
arch=('x86_64')
url="http://www.gnu.org/software/binutils"
license=('GPL')
groups=('mingw-w64-toolchain' 'mingw-w64')
depends=('zlib')
provides=("mingw-w64-binutils=${pkgver}")
conflicts=('mingw-w64-binutils')
options=('!libtool' '!emptydirs')
source=("https://sourceforge.net/projects/mingw-w64-builds/files/mingw-w64-binutils/mingw-w64-binutils-$pkgver.tar.xz")
md5sums=('35830de3e20c39158e4032b4ca64c8f7')

package() {
  cd "mingw-w64-binutils/"
	cp -r * "$pkgdir/"
}
