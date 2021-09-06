# Maintainer: orhun <orhunparmaksiz@gmail.com>
# https://github.com/orhun/pkgbuilds

pkgname=typeracer-git
_pkgname=terminal-typeracer
pkgver=2.0.8.r3.g913294c
pkgrel=1
pkgdesc="Terminal typing speed tester (git)"
arch=('x86_64')
url="https://gitlab.com/ttyperacer/terminal-typeracer"
license=('GPL3')
depends=('openssl' 'sqlite')
makedepends=('rust' 'git')
conflicts=("${pkgname%-git}")
provides=("${pkgname%-git}")
source=("git+${url}")
sha512sums=('SKIP')

pkgver() {
  cd "$_pkgname"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd "$_pkgname"
  cargo fetch --locked
}

build() {
  cd "$_pkgname"
  cargo build --release --frozen
}

check() {
  cd "$_pkgname"
  cargo test --frozen
}

package() {
  cd "$_pkgname"
  install -Dm 755 "target/release/${pkgname%-git}" -t "$pkgdir/usr/bin"
  install -Dm 644 README.md -t "$pkgdir/usr/share/doc/$pkgname"
}
