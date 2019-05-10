# Maintainer: Xavier Peng <png.inside@gmail.com>

pkgname=chez-scheme
pkgver=9.5.2
pkgrel=1
pkgdesc="Chez Scheme is a compiler and run-time system for the language of the Revised^6 Report on Scheme (R6RS), with numerous extensions."
arch=(i686 x86_64)
url="https://github.com/cisco/ChezScheme"
depends=()
license=('APL')
makedepends=('binutils' 'make' 'ncurses' 'libx11' 'xproto')
conflicts=('petite-chez-scheme' 'chez-scheme-git')
replaces=('petite-chez-scheme' 'chez-scheme-git')
source=("https://github.com/cisco/ChezScheme/releases/download/v$pkgver/csv$pkgver.tar.gz")
sha1sums=('2d07be6aa99e66365864d96f538e12d3c5098957')
_archivename=csv$pkgver

build() {
  cd "$srcdir/${_archivename}"
  ./configure --installprefix=/usr --temproot=$pkgdir
}

package() {
  cd "${srcdir}/${_archivename}"
  make install DESTDIR="$pkgdir"
}
