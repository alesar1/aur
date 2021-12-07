# Maintainer: Pando85 <pando855@gmail.com>

pkgname=rash
pkgver=1.0.2
pkgrel=4
pkgdesc="Declarative shell scripting using Rust native bindings"
arch=('i686' 'x86_64' 'armv6h' 'armv7h' 'aarch64')
url="https://rash.sh"
license=('GPL')
depends=('gcc-libs')
makedepends=('cargo'
             'git')
source=("git+https://github.com/rash-sh/rash.git#tag=v${pkgver}?signed")
validpgpkeys=('C15CDDF9318F14398300B917C6CB8A1793CA3F94')
sha512sums=('SKIP')

prepare() {
    cd "$srcdir/$pkgname"
    cargo fetch --locked --target "$CARCH-unknown-linux-gnu"
}

build() {
    cd "$srcdir/$pkgname"
    export RUSTUP_TOOLCHAIN=stable
    export CARGO_TARGET_DIR=target
    cargo build --frozen --release --all-features
}

check() {
    cd "$srcdir/$pkgname"
    export RUSTUP_TOOLCHAIN=stable
    cargo test --frozen --all-features
}

package() {
    cd "$srcdir/$pkgname"
    install -Dm0755 -t "$pkgdir/usr/bin/" "target/release/$pkgname"
}
