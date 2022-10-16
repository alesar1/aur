pkgname=rocksdb-ldb
pkgver=7.7.3
pkgrel=1
pkgdesc='The 'ldb' from the RocksDB storage'
arch=(i686 x86_64)
url='http://rocksdb.org'
license=(Apache leveldb)
depends=(
    'bzip2'
    'gcc-libs'
    'lz4'
    'snappy'
    'zlib'
    'gflags'
)
makedepends=('gcc' 'make')
source=(https://github.com/facebook/rocksdb/archive/v${pkgver}.tar.gz)
sha256sums=('b8ac9784a342b2e314c821f6d701148912215666ac5e9bdbccd93cf3767cb611')
provides=(rocksdb-ldb)

build() {
  cd "rocksdb-$pkgver"
  make clean
  DISABLE_WARNING_AS_ERROR=1 DEBUG_LEVEL=0 make ldb -j2
}

package() {
  cd "rocksdb-$pkgver"
  install -m755 -D ldb "$pkgdir"/usr/bin/rocksdb-ldb
}
