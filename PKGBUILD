# Maintainer: dragon <ExplodingFKL@gmail.com>

pkgname=asciidoc-static-pages
_pkgname=${pkgname}
pkgver=2.0.0
pkgrel=1
pkgdesc="asciidoc document builder"
arch=('x86_64' 'i686')
url="https://github.com/d7z-team/asciidoc-static-pages"
license=('MIT')
makedepends=('cargo' 'git' 'upx' 'musl' 'binutils')
depends=('asciidoctor')
provides=("$_pkgname=$pkgver")
conflicts=("$_pkgname")
source=("$_pkgname::git+$url.git")
sha256sums=('SKIP')
install="${pkgname}.install.sh"

prepare() {
    cd "$_pkgname"
    cargo fetch --locked --target "$CARCH-unknown-linux-musl"
}


build() {
    cd $_pkgname
    export RUSTUP_TOOLCHAIN=stable
    export CARGO_TARGET_DIR=target
    cargo build --frozen --release --all-features
    strip -s target/release/$_pkgname
    upx -9 target/release/$_pkgname
}

check() {
    cd $_pkgname
    export RUSTUP_TOOLCHAIN=stable
    cargo test --frozen --all-features
}


package() {
    cd "$_pkgname"
    install -Dm755 -t "$pkgdir/usr/bin" "target/release/$_pkgname"
    ln -sf "/usr/bin/$_pkgname" "$pkgdir/usr/bin/pages"
    install -Dm644 -t "$pkgdir/usr/share/doc/$pkgname/" README.adoc
}
