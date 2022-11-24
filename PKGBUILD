# Maintainer: Yigit Sever <yigit at yigitsever dot com>

pkgname=ouch
pkgver=0.4.0
pkgrel=1
pkgdesc="Painless compression and decompression in the terminal"
arch=('x86_64')
url="https://github.com/ouch-org/ouch"
license=('MIT')
makedepends=('cargo')
conflicts=(${pkgname}-git ${pkgname}-bin)
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/refs/tags/${pkgver}.tar.gz")
sha256sums=('3e126f00e1ad82ef4abfd28f86dac53b366a29de6a70359e734ecc8748f580fc')

prepare() {
  cd "$srcdir/$pkgname-$pkgver"
  cargo fetch --locked --target "$CARCH-unknown-linux-gnu"
}

build() {
  cd "$srcdir/$pkgname-$pkgver"
  export RUSTUP_TOOLCHAIN=stable
  export CARGO_TARGET_DIR=target
  GEN_COMPLETIONS=1 OUCH_ARTIFACTS_FOLDER=artifacts cargo build --frozen --release --all-features
}

check() {
  cd "$srcdir/$pkgname-$pkgver"
  export RUSTUP_TOOLCHAIN=stable
  cargo test --frozen --all-features
}

package() {
  cd "$srcdir/$pkgname-$pkgver"

  install -Dm0755 -t "$pkgdir/usr/bin/" "target/release/$pkgname"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

  cd "$srcdir/$pkgname-$pkgver/artifacts"

  # install manpages
  install -Dm0644 "${pkgname}.1" -t "${pkgdir}/usr/share/man/man1"
  install -Dm0644 "${pkgname}-compress.1" -t "${pkgdir}/usr/share/man/man1"
  install -Dm0644 "${pkgname}-decompress.1" -t "${pkgdir}/usr/share/man/man1"
  install -Dm0644 "${pkgname}-list.1" -t "${pkgdir}/usr/share/man/man1"

  # install shell completions
  install -Dm0644 "${pkgname}.bash" "${pkgdir}/usr/share/bash-completion/completions/${pkgname}"
  install -Dm0644 "${pkgname}.fish" "${pkgdir}/usr/share/fish/vendor_completions.d/${pkgname}.fish"
  install -Dm0644 "_${pkgname}" "${pkgdir}/usr/share/zsh/site-functions/_${pkgname}"
}
