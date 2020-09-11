# Maintainer: Xavier Peng <png.inside@gmail.com>
# Maintainer: Taekyung Kim <Taekyung.Kim.Maths@gmail.com>

pkgname=chez-scheme
pkgver=9.5.4
pkgrel=2
pkgdesc="Chez Scheme is a compiler and run-time system for the language of the Revised^6 Report on Scheme (R6RS), with numerous extensions."
arch=(i686 x86_64)
url="https://github.com/cisco/ChezScheme"
depends=()
license=('APL')
depends=('ncurses' 'libx11' 'libutil-linux')
conflicts=('petite-chez-scheme' 'chez-scheme-git')
replaces=('petite-chez-scheme' 'chez-scheme-git')
source=("https://github.com/cisco/ChezScheme/releases/download/v$pkgver/csv$pkgver.tar.gz")
sha1sums=('867c82cc3879e37dcb0188ef1c08915afaac42a9')
_archivename=csv$pkgver

build() {
  cd "$srcdir/${_archivename}"
  ./configure --installprefix=/usr --temproot=$pkgdir --threads
}

package() {
  cd "${srcdir}/${_archivename}"
  make install DESTDIR="$pkgdir" InstallSchemeName=scheme
}
