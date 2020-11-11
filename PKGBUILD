# Maintainer: Sven-Hendrik Haase <svenstaro@gmail.com>

pkgname=oha
pkgver=0.4.1
pkgrel=1
pkgdesc="Ohayou(おはよう), HTTP load generator, inspired by rakyll/hey with tui animation"
arch=('x86_64')
url="https://github.com/hatoo/oha"
license=('MIT')
depends=('openssl')
makedepends=('rust')
source=($pkgname-$pkgver.tar.gz::https://github.com/hatoo/oha/archive/v${pkgver}.tar.gz)
sha512sums=('848d4a7d09e05c4afe14eaf76d4aba0d5c142aeb98f47dff4a0d3775b69224d0bcbb17c9c08c120d4c7f74dae0706bc443362452a893336e3e231a8649255dd3')

build() {
  cd "$srcdir/$pkgname-$pkgver"

  cargo build --release --locked
}

check() {
  cd "$srcdir/$pkgname-$pkgver"

  cargo test --release --locked
}

package() {
  cd "$srcdir/$pkgname-$pkgver"

  install -Dm755 target/release/oha "$pkgdir"/usr/bin/oha
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}

# vim:set ts=2 sw=2 et:
