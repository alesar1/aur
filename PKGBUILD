# Maintainer: orhun <orhunparmaksiz@gmail.com>
# https://github.com/orhun/pkgbuilds

pkgname=cargo-binstall-git
pkgver=0.6.2.r0.g5506ffb
pkgrel=1
pkgdesc="Binary installation for Rust projects (git)"
arch=('x86_64')
url="https://github.com/ryankurte/cargo-binstall"
license=('GPL3')
depends=('zlib' 'openssl' 'xz' 'bzip2')
makedepends=('cargo' 'git')
conflicts=("${pkgname%-git}")
provides=("${pkgname%-git}")
source=("git+${url}")
sha256sums=('SKIP')

pkgver() {
  cd "${pkgname%-git}"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd "${pkgname%-git}"
  cargo fetch --locked --target "$CARCH-unknown-linux-gnu"
}

build() {
  cd "${pkgname%-git}"
  CFLAGS+=" -ffat-lto-objects"
  cargo build --release --frozen
}

check() {
  cd "${pkgname%-git}"
  cargo test --frozen
}

package() {
  cd "${pkgname%-git}"
  install -Dm 755 "target/release/${pkgname%-git}" -t "${pkgdir}/usr/bin"
  install -Dm 644 README.md -t "$pkgdir/usr/share/doc/$pkgname"
}
