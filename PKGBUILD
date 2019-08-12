# Maintainer: Eric Biggers <ebiggers3@gmail.com>

pkgname=libdeflate-git
pkgver=1.3.r0.g8587515
pkgrel=1
pkgdesc="Heavily optimized library for DEFLATE/zlib/gzip compression and decompression"
arch=('i686' 'x86_64')
url="https://github.com/ebiggers/libdeflate"
license=('MIT')
depends=('glibc')
makedepends=('git')
options=('staticlibs')
source=('git+https://github.com/ebiggers/libdeflate.git')
sha256sums=('SKIP')
conflicts=('libdeflate')
provides=('libdeflate')

pkgver() {
  cd libdeflate
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd libdeflate
  make
}

check() {
  cd libdeflate

  make test_programs
  ./test_checksums
}

package() {
  cd libdeflate

  make install PREFIX=/usr DESTDIR="$pkgdir"
  install -Dm644 -t "$pkgdir/usr/share/doc/$pkgname" README* NEWS
  install -Dm644 "COPYING" "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}
