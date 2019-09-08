# Maintainer: Maximilian Luz <luzmaximilian@gmail.com>

pkgname="surface-control"
pkgver=0.2.3
pkgrel=1
pkgdesc='Control various aspects of Microsoft Surface devices from the Command-Line'
license=('MIT')
arch=('x86_64')
depends=('gcc-libs')
makedepends=('rust' 'cargo')

source=(
    "src::git+https://github.com/qzed/linux-surface-control.git#tag=v${pkgver}"
)

sha256sums=(
    'SKIP'
)

build(){
    cd "src"
    env CARGO_TARGET_DIR="target" CARGO_INCREMENTAL=0 cargo build --release --locked
    strip --strip-all "target/release/surface"
}

package() {
    install -D -m755 "src/target/release/surface" "$pkgdir/usr/bin/surface"

    # completion files
    install -D -m644 "src/target/surface.bash" "$pkgdir/usr/share/bash-completion/completions/surface"
    install -D -m644 "src/target/_surface" "$pkgdir/usr/share/zsh/site-functions/_surface"
    install -D -m644 "src/target/surface.fish" "$pkgdir/usr/share/fish/completions/surface.fish"

    # license
    install -Dm644 "src/LICENSE" "${pkgdir}/usr/share/licenses/surface-control/LICENSE"
}
