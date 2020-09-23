# Maintainer: Christopher Vittal ("viralstitch") <chris@vittal.dev>

pkgname=htslib
pkgver=1.11
pkgrel=2
pkgdesc="library for high-throughput sequencing data formats"
arch=('i686' 'x86_64')
url="https://github.com/samtools/htslib"
license=('custom')
depends=('bzip2' 'curl' 'xz')
provides=('tabix')
replaces=('tabix')
conflicts=('tabix')
source=(https://github.com/samtools/htslib/releases/download/$pkgver/$pkgname-$pkgver.tar.bz2)
sha256sums=('cffadd9baa6fce27b8fe0b01a462b489f06a5433dfe92121f667f40f632538d7')

build() {
  cd $srcdir/$pkgname-$pkgver

  ./configure \
    --prefix=/usr \
    --enable-libcurl \
    --enable-plugins \
    --with-plugin-dir=/usr/lib/htslib/plugins

  make
}

check() {
  cd $srcdir/$pkgname-$pkgver

  make check
}

package() {
  cd $srcdir/$pkgname-$pkgver

  make DESTDIR=$pkgdir install

  install -Dm644 LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE

  # htslib shared library comes installed as 0644
  chmod +x $pkgdir/usr/lib/libhts.so.*.*
}
