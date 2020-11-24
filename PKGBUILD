# Maintainer: ny-a <nyaarch64@gmail..com>
# Contributor: Jean Lucas <jean@4ray.co>

pkgname=tiny-irc-client
pkgver=0.7.0
pkgrel=1
pkgdesc='Console IRC client written in Rust'
arch=(i686 x86_64 aarch64)
url=https://github.com/osa1/tiny
license=(MIT)
depends=(libdbus openssl)
makedepends=(rustup)
source=("https://github.com/osa1/tiny/archive/v${pkgver}.tar.gz")
md5sums=('13046d60e7a501b29a56cebe9911c9fa')

build() {
  cd "${srcdir}/tiny-${pkgver}/tiny"
  cargo build --no-default-features --features=tls-native,desktop-notifications --release --locked
}

check() {
  cd "${srcdir}/tiny-${pkgver}/tiny"
  cargo test --no-default-features --features=tls-native,desktop-notifications --release --locked
}

package() {
  cd "${srcdir}/tiny-${pkgver}"
  install -D target/release/tiny -t "$pkgdir"/usr/bin
  install -Dm 644 README.md -t "$pkgdir"/usr/share/doc/tiny
  install -Dm 644 LICENSE -t "$pkgdir"/usr/share/licenses/tiny
}
