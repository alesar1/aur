# Maintainer: orhun <orhunparmaksiz@gmail.com>
# https://github.com/orhun/pkgbuilds

pkgname=rusty-krab-manager-git
pkgver=1.1.3.r0.g446140c
pkgrel=1
pkgdesc="Time management TUI (git)"
arch=('x86_64')
url="https://github.com/aryakaul/rusty-krab-manager"
license=('custom:ETHICAL')
makedepends=('rust' 'git' 'alsa-lib')
conflicts=("${pkgname%-git}")
provides=("${pkgname%-git}")
source=("git+${url}")
sha512sums=('SKIP')

pkgver() {
  cd "${pkgname%-git}"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "${pkgname%-git}"
  # TODO: Use `--locked` flag for reproducibility.
  # Tracking issue: https://github.com/aryakaul/rusty-krab-manager/issues/31
  cargo build --release --all-features
}

package() {
  cd "${pkgname%-git}"
  install -Dm 755 "target/release/${pkgname%-git}" -t "${pkgdir}/usr/bin"
  install -Dm 644 README.md -t "$pkgdir/usr/share/doc/${pkgname%-git}"
  install -Dm 644 LICENSE -t "$pkgdir/usr/share/licenses/${pkgname%-git}"
}
