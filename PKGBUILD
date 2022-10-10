# Maintainer: Sup3Legacy <constantin {dot} gierczak {dot} galle (at) protonmail [dot] com>

pkgname=gurk-git
pkgver=0.3.0.dev.r177.g7002ad7
pkgrel=1
pkgdesc='CLI client for Signal'
arch=('x86_64')
url='https://github.com/boxdot/gurk-rs'
license=('AGPL3')
makedepends=('git' 'rust' 'cmake')
optdepends=()
provides=("${pkgname%-*}")
conflicts=("${pkgname%-*}")
source=("${pkgname%-*}::git+$url")
sha1sums=('SKIP')

pkgver() {
  cd "${pkgname%-*}"
  echo $(grep '^version =' Cargo.toml|head -n1|cut -d\" -f2|sed 's/-/./g').r$(git rev-list --count HEAD).g$(git describe --always)
}

prepare() {
  cd "${pkgname%-*}"
  cargo fetch --locked --target "$CARCH-unknown-linux-gnu"
}

build() {
  cd "${pkgname%-*}"
  cargo build --release
}

package() {
  cd "${pkgname%-*}"
  install -Dm755 target/release/gurk "$pkgdir/usr/bin/gurk"
}
