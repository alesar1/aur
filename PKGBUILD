# Maintainer: Daniel M. Capella <polycitizen@gmail.com>

pkgname=fcat-git
pkgver=r20.773fc64
pkgrel=1
pkgdesc="cat implementation in Rust using Linux' splice syscall"
arch=('x86_64')
url=https://github.com/mre/fcat
license=('Apache' 'MIT')
depends=('gcc-libs')
makedepends=('rust')
provides=('fcat')
conflicts=('fcat')
source=("git+$url.git")
sha512sums=('SKIP')

pkgver() {
  cd fcat
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd fcat
  cargo build --release
}

check() {
  cd fcat
  cargo test --release
}

package() {
  cd fcat
  install -Dm644 LICENSE-MIT "$pkgdir"/usr/share/licenses/fcat-git/LICENSE-MIT
  install -Dm755 target/release/fcat "$pkgdir"/usr/bin/fcat
}

# vim:set ts=2 sw=2 et:
