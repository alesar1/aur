# Maintainer: Kaizhao Zhang <zhangkaizhao@gmail.com>

pkgname=rbspy
pkgver=0.2.10
pkgrel=1
pkgdesc="Sampling profiler for Ruby"
url="https://rbspy.github.io"
makedepends=('cargo')
arch=('x86_64')
license=('MIT')
conflicts=('rbspy')

source=("https://github.com/rbspy/rbspy/archive/v${pkgver}.tar.gz")
sha256sums=('b757f60b043a5305537f610a5d96a469f4f966a7abaeb5d9f4711b570d5d6dce')

build() {
  cd "$pkgname-$pkgver"
  cargo build --release
}

package() {
  cd "$pkgname-$pkgver"
  install -D -m755 target/release/rbspy "${pkgdir}/usr/bin/rbspy"
  install -D -m644 License.md "$pkgdir/usr/share/licenses/$pkgname/License.md"
  install -D -m644 README.md "$pkgdir/usr/share/doc/$pkgname/README.md"
  install -D -m644 ARCHITECTURE.md "$pkgdir/usr/share/doc/$pkgname/ARCHITECTURE.md"
  install -D -m644 CODE_OF_CONDUCT.md "$pkgdir/usr/share/doc/$pkgname/CODE_OF_CONDUCT.md"
}
