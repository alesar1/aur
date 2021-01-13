# Maintainer: Stephen Gregoratto <dev@sgregoratto.me>
# Maintainer: Ossama Hjaji <ossama-hjaji@live.fr>
pkgname=onefetch
pkgver=2.9.0
pkgrel=1
pkgdesc="Git repository summary on your terminal"
url="https://github.com/o2sh/onefetch"
license=('MIT')
arch=('i686' 'x86_64' 'armv6h' 'armv7h')
depends=('libgit2')
makedepends=('cargo')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('55d8757b0d41b1ce2ac1e7c1b9960c5542675f6e5234158df029b967e5100e2a')

build() {
  cd "$pkgname-$pkgver"
  cargo build --release --all-features --locked
}

check() {
  cd "$pkgname-$pkgver"
  cargo test --release --locked
}

package() {
  install -Dm755 "$pkgname-$pkgver/target/release/$pkgname" "$pkgdir/usr/bin/$pkgname"
  install -Dm644 "$pkgname-$pkgver/LICENSE.md" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm644 "$pkgname-$pkgver/docs/$pkgname.1" "$pkgdir/usr/share/man/man1/$pkgname.1"
}
