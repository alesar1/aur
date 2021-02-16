# Maintainer: Sven-Hendrik Haase <svenstaro@gmail.com>

pkgname=wasmer
pkgver=1.0.2
pkgrel=1
pkgdesc="Universal Binaries Powered by WebAssembly"
arch=('x86_64')
url="https://github.com/wasmerio/wasmer"
license=(MIT)
depends=('gcc-libs')
makedepends=('rust' 'cmake' 'python' 'libxkbcommon')
checkdepends=('llvm')
source=("$pkgname-$pkgver.tar.gz::https://github.com/wasmerio/wasmer/archive/${pkgver}.tar.gz")
sha512sums=('f8058cbd5a8a807cd84b4a839c87ff76dae5475c655e804b27262cd5cb22ddb6c43da3a01b6cdbed29502afc38aa9ee589022f67fab27b189453f2500478c4a9')

build() {
  cd "$pkgname-$pkgver"

  cargo build --all --release --locked --features "cranelift llvm singlepass"
}

check() {
  cd "$pkgname-$pkgver"

  cargo test --release --locked --manifest-path lib/cli/Cargo.toml --features "cranelift llvm singlepass" --bin wasmer
}

package() {
  cd "$pkgname-$pkgver"

  install -Dm755 target/release/wasmer "$pkgdir"/usr/bin/wasmer
  for header in wasm.h wasmer_wasm.h wasmer.h wasmer.hh; do
    install -Dm644 "lib/c-api/"$header "$pkgdir"/usr/include/$header
  done

  install -Dm755 target/release/libwasmer_c_api.so "$pkgdir/usr/lib/libwasmer.so.$pkgver"
  local _shortver="${pkgver%.*}"
  local _majorver="${_shortver%.*}"
  ln -s "libwasmer.so.$pkgver" "$pkgdir/usr/lib/libwasmer.so.$_shortver"
  ln -s "libwasmer.so.$pkgver" "$pkgdir/usr/lib/libwasmer.so.$_majorver"
  ln -s "libwasmer.so.$pkgver" "$pkgdir/usr/lib/libwasmer.so"

  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}

# vim:set ts=2 sw=2 et:
