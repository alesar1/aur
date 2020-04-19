# Maintainer: Conrad Kleinespel <conradk@conradk.com>

pkgname=rooster
pkgver=2.8.6
pkgrel=1
pkgdesc="A simple password manager for geeks"
url="https://github.com/conradkdotcom/rooster"
makedepends=('cargo' 'pkg-config' 'libx11' 'libxmu' 'python3' 'libsodium' 'openssl')
depends=('libx11' 'libxmu' 'libsodium' 'openssl' 'xsel')
arch=('i686' 'x86_64')
license=('Apache-2.0')
source=("$pkgname-$pkgver.tar.gz::https://github.com/conradkdotcom/$pkgname/archive/v$pkgver.tar.gz")
sha256sums=('b05d2c368ac26d96edd058130bfc7cc7a1960a5bfbc63b6ddfad62d27b08d62f')

build() {
  cd "$pkgname-$pkgver"
  cargo build --release
}

package() {
  cd "$pkgname-$pkgver"
  install -Dm755 target/release/rooster "$pkgdir/usr/bin/rooster"
}
