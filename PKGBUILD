# Maintainer: Mopi <mopi@dotslashplay.it>
pkgname=play.it
pkgver=2.10.3
pkgrel=2
pkgdesc="Easy way to install games on Linux"
arch=('i686' 'x86_64')
url="https://wiki.dotslashplay.it"
license=('BSD 2')
depends=()
optdepends=(
  'imagemagick'
 	'libarchive'
	'icoutils'
	'innoextract'
	'unzip'
)
source=("${pkgname}-${pkgver}.tar.gz::https://framagit.org/vv221/play.it/-/archive/${pkgver}/play.it-${pkgver}.tar.gz")
sha1sums=('8ade2e6b30e7fdd3ca4a1359bdce02c4de557be6')

build() {
  cd "$srcdir/$pkgname-$pkgver"
	make
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  mkdir -p $pkgdir/usr/local/bin
  cp -a play.it $pkgdir/usr/local/bin
  mkdir -p $pkgdir/usr/local/share/games/play.it
  cp -a play.it-2/lib/libplayit2.sh play.it-2/games/* $pkgdir/usr/local/share/games/play.it
  mkdir -p "$pkgdir/usr/local/man/man6"

}

