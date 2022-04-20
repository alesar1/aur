# Maintainer: Hisbaan Noorani <hisbaan@gmail.com>
pkgname=didyoumean-git
pkgver=1.1.0
pkgrel=1
pkgdesc="A CLI spelling corrector"
arch=('i686' 'pentium4' 'x86_64' 'arm' 'armv7h' 'armv6h' 'aarch64')
url="https://github.com/hisbaan/didyoumean"
license=('GPL3')
depends=('libxcb' 'gcc-libs' 'wayland')
makedepends=('git' 'cargo')
provides=("dym")
conflicts=("dym")
source=('git+https://github.com/hisbaan/didyoumean')
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
    printf "%s" "$(git describe --long | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

prepare() {
    export RUSTUP_TOOLCHAIN=stable
    export CARGO_TARGET_DIR=target

    cd "$srcdir/${pkgname%-git}"
    cargo fetch --locked --target "$CARCH-unknown-linux-gnu"
}

build() {
    export RUSTUP_TOOLCHAIN=stable
    export CARGO_TARGET_DIR=target

    cd "$srcdir/${pkgname%-git}"
    cargo build --release --frozen
    strip target/release/dym
}

check() {
    cd "$srcdir/${pkgname%-git}"
    export RUSTUP_TOOLCHAIN=stable
    export CARGO_TARGET_DIR=target
    cargo test --release --frozen
}

package() {
	cd "$srcdir/${pkgname%-git}"

    install -Dm755 target/release/dym -t "${pkgdir}/usr/bin/"

    install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname%-git}/"
    install -Dm644 docs/README.md -t "${pkgdir}/usr/share/doc/${pkgname%-git}/"
}
