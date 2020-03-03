# Maintainer: Julien Savard <juju@juju2143.ca>
pkgname=aloevera
pkgver=0.2.1
pkgrel=1
pkgdesc="Graphical asset processing pipeline for the Commander X16"
arch=('x86_64')
url="https://github.com/yeastplume/aloevera"
license=('Apache')
depends=('gcc-libs')
makedepends=('cargo')
optdepends=('cc65: compile assembly and header files'
            'x16-emulator: run BASIC and bin files')
source=("$pkgname-$pkgver.tar.gz::https://github.com/yeastplume/$pkgname/archive/v$pkgver.tar.gz")
md5sums=('ea5a3a4bb06a99f58cf6b8f0e20f16ac')

build() {
  cd "$pkgname-$pkgver"

  cargo build --release --locked --all-features
}

package() {
  cd "$pkgname-$pkgver"

  install -Dm755 "target/release/aloevera" "$pkgdir/usr/bin/aloevera"
  install -Dm644 README.md "$pkgdir/usr/share/doc/$pkgname/README.md"
  find docs -type f -exec install -Dm644 "{}" "$pkgdir/usr/share/doc/$pkgname/{}" \;
  find samples -type f -exec install -Dm644 "{}" "$pkgdir/usr/share/doc/$pkgname/{}" \;
}
