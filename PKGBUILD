# Maintainer: orhun <orhunparmaksiz@gmail.com>
# https://github.com/orhun/pkgbuilds

pkgname=cicero-git
pkgver=0.1.2.r2.g5c1438e
pkgrel=1
pkgdesc="Unicode tool with a terminal user interface (git)"
arch=('x86_64')
url="https://github.com/eyeplum/cicero-tui"
license=('GPL3')
makedepends=('rust' 'git' 'cmake' 'fontconfig')
conflicts=("${pkgname%-git}")
provides=("${pkgname%-git}")
source=("git+${url}")
sha512sums=('SKIP')

pkgver() {
  cd "${pkgname%-git}-tui"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "${pkgname%-git}-tui"
  # TODO: Use `--locked` flag for reproducibility.
  # Tracking issue: https://github.com/eyeplum/cicero-tui/pull/1#issuecomment-729879480
  cargo build --release
}

check() {
  cd "${pkgname%-git}-tui"
  cargo test --release
}

package() {
  cd "${pkgname%-git}-tui"
  install -Dm 755 "target/release/${pkgname%-git}" -t "${pkgdir}/usr/bin"
  install -Dm 644 README.md -t "$pkgdir/usr/share/doc/${pkgname%-git}"
}
