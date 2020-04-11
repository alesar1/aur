# Maintainer: robertfoster

pkgname=libindy
pkgver=1.15.0
pkgrel=1
pkgdesc="Shared crypto library for Hyperledger Indy components"
arch=(i686 x86_64)
url="https://github.com/hyperledger/indy-sdk"
license=('APACHE')
depends=('libsodium' 'openssl' 'sqlite3')
makedepends=('cmake' 'pkg-config' 'rust')
source=("https://github.com/hyperledger/indy-sdk/archive/v$pkgver.tar.gz")

build() {
  cd $srcdir/indy-sdk-$pkgver
  cd libindy
  cargo build --release
}

package() {
  cd $srcdir/indy-sdk-$pkgver
  cd libindy
  install -Dm755 target/release/libindy.so "$pkgdir/usr/lib/libindy.so"
  install -d 755 $pkgdir/usr/include/indy/
  cp include/*.h $pkgdir/usr/include/indy/
}

sha256sums=('4955a95cb3ffc1d49ad3d7299c1b5f3c44b03777c2c37324f5e80f89964f1652')
