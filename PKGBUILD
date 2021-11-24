# Maintainer: Xavier Peng <png.inside@gmail.com>
# Maintainer: Taekyung Kim <gnuykeat.mik@gmail.com>

pkgname=chez-scheme
pkgver=9.5.6
pkgrel=1
pkgdesc="Chez Scheme is a compiler and run-time system for the language of the Revised^6 Report on Scheme (R6RS), with numerous extensions."
arch=(i686 x86_64)
url="https://github.com/cisco/ChezScheme"
depends=()
license=('Apache')
depends=('ncurses' 'libx11' 'libutil-linux')
conflicts=('petite-chez-scheme' 'chez-scheme-git')
replaces=('petite-chez-scheme' 'chez-scheme-git')
source=("https://github.com/cisco/ChezScheme/releases/download/v$pkgver/csv$pkgver.tar.gz")
sha256sums=('6b3d1d111c6c47a4e51b500b30f4c29efd339e414f6ace743cff6d08a0dacaae')
_archivename=csv$pkgver

build() {
  cd "$srcdir/${_archivename}"
  ./configure --installprefix=/usr --temproot=$pkgdir --threads --installschemename=chez --installscriptname=chez-script
}

package() {
  cd "${srcdir}/${_archivename}"
  make install DESTDIR="$pkgdir"
}
