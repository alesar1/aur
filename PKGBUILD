# Maintainer: Stas Rudakou <stas at garage22 dot net>

pkgname=cobalt
_cratename=cobalt-bin
pkgver=0.9.0
pkgrel=1
pkgdesc="Static site generator written in Rust"
url="https://github.com/cobalt-org/cobalt.rs"
makedepends=('cargo')
depends=('openssl')
arch=('i686' 'x86_64')
license=('MIT')
source=("$_cratename-$pkgver.tar.gz::https://crates.io/api/v1/crates/$_cratename/$pkgver/download")
sha256sums=('a72fea238db0b9ccc5d9ef80e285e1803c420da2c2cecad1da1d856e3fa6f588')

build() {
  cd "$_cratename-$pkgver"
  cargo build --release --features "syntax-highlight sass"
}

package() {
  cd "$_cratename-$pkgver"
  install -Dm755 target/release/cobalt "$pkgdir/usr/bin/cobalt"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
