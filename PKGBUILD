# Maintainer: Arisa Snowbell <goddess@chizuru.space>
pkgname=shiny-mirrors
pkgver=r169.282cff6
pkgrel=1
pkgdesc="An alternative to reflector, written in Rust! A tool to find the best mirrors for you!"
arch=('x86_64' 'aarch64')
url="https://gitlab.com/Arisa_Snowbell/shiny-mirrors"
license=('GPL3')
depends=('gcc-libs')
makedepends=('cargo-nightly' 'git' 'pandoc')
backup=("etc/$pkgname.conf")
_commit=282cff6628269bbcaecd4634a5ecddfcd500ff6c
source=("git+https://gitlab.com/Arisa_Snowbell/shiny-mirrors.git#commit=$_commit?signed")
sha256sums=('SKIP')
validpgpkeys=('E2C998FA1F7B651E45B20CDC56AA2C2801F619D7' '93F4694364C3E688BA33E3E41CBE6B7A2B054E06')
options=(!lto)

pkgver() {
  cd "$srcdir/$pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd "$srcdir/$pkgname"
  export RUSTUP_TOOLCHAIN=nightly
  cargo fetch --locked --target "$CARCH-unknown-linux-gnu"
}

build() {
  cd "$srcdir/$pkgname"
  export RUSTUP_TOOLCHAIN=nightly
  export CARGO_TARGET_DIR=target
  cargo build --frozen --release --features arch --no-default-features

  pandoc "$pkgname/man/$pkgname.md" -s -t man -o "$pkgname/man/$pkgname.1"
}

package() {
  cd "$srcdir/$pkgname"
  install -Dm755 "target/release/$pkgname" -t "$pkgdir/usr/bin/"
  install -Dm644 "target/completions/_${pkgname}" -t \
    "$pkgdir/usr/share/zsh/site-functions/"
  install -Dm644 "target/completions/$pkgname.bash" \
    "$pkgdir/usr/share/bash-completion/completions/$pkgname"
  install -Dm644 "target/completions/$pkgname.fish" -t \
    "$pkgdir/usr/share/fish/completions/"
  install -Dm644 "$pkgname/man/$pkgname.1" -t "$pkgdir/usr/share/man/man1/"
  install -Dm644 "conf/$pkgname.conf" -t "$pkgdir/etc/" # Config for Manjaro build, but at runtime it will be overwritten
  install -Dm644 "$pkgname/systemd/$pkgname.service" "$pkgdir/usr/lib/systemd/system/$pkgname.service"
  install -Dm644 "$pkgname/systemd/$pkgname.timer" "$pkgdir/usr/lib/systemd/system/$pkgname.timer"
}

