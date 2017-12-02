# Maintainer: jD91mZM2 <me@krake.one>
pkgname="powerline-rs"
pkgdesc="powerline-shell rewritten in Rust. Inspired by powerline-go."
pkgver=0.1.3
pkgrel=1
url="https://github.com/jD91mZM2/powerline-rs"
license=("MIT" "custom:MIT")
source=("https://github.com/jD91mZM2/powerline-rs/archive/v$pkgver.tar.gz")
sha256sums=("23dfd718ebfbe5f2744b82a855d316fbfce96f894aff9093f4e580eccc07b7d6")
arch=("x86_64" "i386" "arm" "armv6h" "armv7h" "aarch64")
makedepends=("libgit2" "cargo" "cmake") # cmake is used by libgit2-sys
optdepends=(
    "bash-completion: Bash completion for powerline-rs"
    "fish: Fish completion for powerline-rs"
)

build() {
    cd "$srcdir/$pkgname-$pkgver"
    cargo build --release
}
package() {
    cd "$srcdir/$pkgname-$pkgver"
    install -Dm 755 "target/release/$pkgname" "$pkgdir/usr/bin/$pkgname"
    install -Dm 644 "LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
    install -Dm 644 "$pkgname.bash-completion" "$pkgdir/usr/share/bash-completion/completions/$pkgname"
    install -Dm 644 "$pkgname.fish" "$pkgdir/usr/share/fish/completions/$pkgname.fish"
}
