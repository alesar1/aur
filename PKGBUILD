# Maintainer: Antoine Büsch <antoine dot busch at gmail dot com>

pkgname=sinuous
pkgver=0.1.2
pkgrel=1
pkgdesc="A simple TUI to control local Sonos speakers"
url="https://github.com/abusch/sinuous"
license=("MIT")
arch=("any")
depends=()
makedepends=('rust')
source=("$pkgname-$pkgver.tar.gz::$url/archive/refs/tags/v$pkgver.tar.gz")
sha256sums=('1fe6272d174906ec10c95683be12ad5a9945f94a5c8bdd481584495aef9641ca')

prepare() {
   cd "$pkgname-$pkgver"
   cargo fetch --locked
}

build() {
   cd "$pkgname-$pkgver"
   cargo build --release --locked --target-dir=target
}

check() {
   cd "$pkgname-$pkgver"
}

package() {
   cd "$pkgname-$pkgver"
   cargo install \
      --locked \
      --no-track \
      --path . \
      --root "${pkgdir}"/usr
   install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"
   install -Dm644 README.md -t "$pkgdir/usr/share/doc/$pkgname/"
}
