# Maintainer: Adam Fontenot <fontenot@ucla.edu>

pkgname=libheif
pkgver=1.2.0
pkgrel=1
pkgdesc="HEIF file format decoder and encoder"
arch=('i686' 'x86_64')
url="https://github.com/strukturag/libheif"
license=('GPL3')
depends=('libde265')
optdepends=('x265: HEIF encoding')
source=("$url/archive/v$pkgver.tar.gz")
sha256sums=('ba6eeb9494cfaeeebddacc7803862ef5256eb4a1bff50c07f1385c3f8b282869')

prepare() {
  cd "$pkgname-$pkgver"
}

build() {
  cd "$pkgname-$pkgver"
  ./autogen.sh
  ./configure --prefix=/usr --enable-static=no
  make
}

package() {
  cd "$pkgname-$pkgver"
  make DESTDIR="$pkgdir" install
}
