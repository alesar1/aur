# Maintainer: cyqsimon <28627918+cyqsimon@users.noreply.github.com>

pkgname=rng-rename
pkgver=0.5.0
pkgrel=3
pkgdesc="A CLI tool to rename files to randomly generated strings."
arch=("x86_64" "i686" "armv6h" "armv7h" "aarch64")
url="https://github.com/cyqsimon/rng-rename"
license=("AGPL3")
conflicts=("rng-rename-git" "rng-rename-bin")
depends=("gcc-libs")
makedepends=("cargo")
# source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz")
source=("${pkgname}-${pkgver}.tar.gz::https://static.crates.io/crates/${pkgname}/${pkgname}-${pkgver}.crate")
sha512sums=('4d80d60b3b7b3002a2b7d14a2d55ca1ba217b651e44438085fa8ccc87cbb1a287aeff153fd73be68118da89dc8db35a7e4586d9f8e799239f1b7eebb1b322719')

prepare() {
  cd ${pkgname}-${pkgver}
  #cargo update
  cargo fetch --locked --target="${CARCH}-unknown-linux-gnu"
}

build() {
  cd ${pkgname}-${pkgver}
  cargo build --release --frozen --all-features --target-dir="target"
  target/release/rng-rename complete bash > completion.bash
  target/release/rng-rename complete fish > completion.fish
  target/release/rng-rename complete zsh > completion.zsh
}

package() {
  cd ${pkgname}-${pkgver}
  install -Dm755 target/release/rng-rename "${pkgdir}/usr/bin/rng-rename"
  install -Dm644 completion.bash "${pkgdir}/usr/share/bash-completion/completions/rng-rename"
  install -Dm644 completion.fish "${pkgdir}/usr/share/fish/vendor_completions.d/rng-rename.fish"
  install -Dm644 completion.zsh "${pkgdir}/usr/share/zsh/site-functions/_rng-rename"
}
