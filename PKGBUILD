# Maintainer: Tony Lambiris <tony@criticalstack.com>

pkgname=rocksdb-lite
pkgver=5.12.4
pkgrel=1
pkgdesc='Embedded key-value store for fast storage (lite version)'
arch=(i686 x86_64)
url='http://rocksdb.org'
license=('Apache')
depends=(gperftools zlib bzip2 lz4 snappy gcc-libs)
conflicts=(rocksdb)
checkdepends=(python2)
source=(https://github.com/facebook/rocksdb/archive/v$pkgver.zip
		fix-gcc-8-warnings.patch)
sha256sums=('d54b1870ed343f80f96326b7de7fd798e8ddd11f05ef413c0e3357219f08ac67'
            '2c5d96fbf1638d899da84b4a80ad3c6060b774ed80148f443ae40672d31df9d3')

prepare() {
  cd rocksdb-$pkgver
  sed -e 's/\bpython\b/python2/' -i Makefile
  if [ "$CARCH"  == "armv6h" ]; then
    sed -e 's/-momit-leaf-frame-pointer//' -i Makefile
  fi
  patch -Np1 -i ../fix-gcc-8-warnings.patch
}

build() {
  cd rocksdb-$pkgver
  export USE_RTTI=1
  make shared_lib CFLAGS='-DROCKSDB_LITE -DROCKSDB_USE_RTTI'
}

package() {
  cd rocksdb-$pkgver
  install -d "$pkgdir"/usr/include
  cp -r include/rocksdb "$pkgdir"/usr/include
  install -m755 -D librocksdb.so "$pkgdir"/usr/lib/librocksdb_lite.so
  install -D -m644 LICENSE.Apache "$pkgdir/usr/share/licenses/$pkgname/LICENSE.Apache"
  install -D -m644 LICENSE.leveldb "$pkgdir/usr/share/licenses/$pkgname/LICENSE.leveldb"
}
