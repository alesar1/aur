# Maintainer: Adi Hascal <adi.hascal+aur@gmail.com>
pkgname=cargo-xwin-git
pkgver=v0.8.2.r0.3132c37
pkgrel=1
pkgdesc='Cross compile Cargo project to Windows msvc target with ease'
arch=(x86_64)
url="https://github.com/messense/cargo-xwin"
license=('MIT')
makedepends=('git' 'cargo')
optdepends=('clang: for C/C++ dependencies' 'llvm: for assembly dependencies')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=('git+https://github.com/messense/cargo-xwin')
md5sums=('SKIP')

# Please refer to the 'USING git SOURCES' section of the PKGBUILD man page for
# a description of each element in the source array.

pkgver() {
        cd "$srcdir/${pkgname%-git}"
        printf "%s" "$(git describe --long | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

build() {
        export RUSTUP_TOOLCHAIN=stable
        export CARGO_TARGET_DIR=target
        cd "$srcdir/${pkgname%-git}"
        cargo build --release --locked
}

check() {
        export RUSTUP_TOOLCHAIN=stable
        cd "$srcdir/${pkgname%-git}"
        cargo test --frozen
}

package() {
        cd "$srcdir/${pkgname%-git}"
        install -Dm0755 target/release/cargo-xwin "$pkgdir/usr/bin/cargo-xwin"
        install -Dm0644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
