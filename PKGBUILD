# Maintainer: Clement Tsang (xoronth) <cjhtsang@uwaterloo.ca>

pkgname=bottom
pkgver=0.5.0
pkgrel=0
pkgdesc="A cross-platform graphical process/system monitor with a customizable interface and a multitude of features."
provides=('bottom')
makedepends=('cargo')
arch=('x86_64')
url="https://github.com/ClementTsang/bottom"
source=("$pkgname-$pkgver.tar.gz::https://github.com/ClementTsang/bottom/archive/$pkgver.tar.gz")
license=('MIT')
sha512sums=('8676586b36a10a1df9f7d9238155dc78e17263607c6a47142af608b9af4db44a98f38c178073d8fa23182b8f0337fa55a58d76db91e5a0c684b4c71e5a265d28')

build() {
    cd $pkgname-$pkgver
    cargo build --release --locked
}

check() {
    cd $pkgname-$pkgver
    CARGO_HUSKY_DONT_INSTALL_HOOKS=true cargo test --release --locked
}

package() {
    cd $pkgname-$pkgver
    install -Dm755 target/release/btm "$pkgdir/usr/bin/btm"
    install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/${pkgname}/LICENSE"

    local target_dir=$(ls target/release/build/bottom-*/out/btm.bash | head -n1 | xargs dirname)
    install -Dm644 "$target_dir"/_btm "$pkgdir/usr/share/zsh/site-functions/_btm"
    install -Dm644 "$target_dir"/btm.bash "$pkgdir/usr/share/bash-completion/completions/btm"
    install -Dm644 "$target_dir"/btm.fish "$pkgdir/usr/share/fish/vendor_completions.d/btm.fish"
}