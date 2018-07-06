# Maintainer: Tony <tony@criticalstack.com>

pkgname=rocksdb-static
pkgver=5.14.2
pkgrel=1
pkgdesc='Embedded key-value store for fast storage (static library)'
arch=(i686 x86_64)
url='http://rocksdb.org'
license=('Apache')
depends=(gperftools zlib bzip2 lz4 snappy gcc-libs)
checkdepends=(python2)
source=(https://github.com/facebook/rocksdb/archive/v$pkgver.zip
		fix-compiler-with-gcc-8.1.1.patch)
sha256sums=('15bb12b9492fc2a20c0c4dbd8873703a1b6b620c32708aaaf558b0a4f58feeda'
            '079e9b29bc7174d6a6a6dd50602f9d2a561ea55d42328c75576acd666fe92dd5')

prepare() {
  cd rocksdb-$pkgver
  sed -e 's/\bpython\b/python2/' -i Makefile
  if [ "$CARCH"  == "armv6h" ]; then
    sed -e 's/-momit-leaf-frame-pointer//' -i Makefile
  fi
  patch -Np1 -i ../fix-compiler-with-gcc-8.1.1.patch
}

build() {
  cd rocksdb-$pkgver
  export USE_RTTI=1
  make static_lib
}

package() {
  cd rocksdb-$pkgver
  install -m755 -D librocksdb.a "$pkgdir"/usr/lib/librocksdb.a
  install -D -m644 LICENSE.Apache "$pkgdir/usr/share/licenses/$pkgname/LICENSE.Apache"
  install -D -m644 LICENSE.leveldb "$pkgdir/usr/share/licenses/$pkgname/LICENSE.leveldb"
}
