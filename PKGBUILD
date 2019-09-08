# Maintainer: Maximilian Luz <luzmaximilian@gmail.com>

pkgname="surface-control"
pkgver=0.2.3
pkgrel=2
pkgdesc='Control various aspects of Microsoft Surface devices from the Command-Line'
url='https://github.com/qzed/linux-surface-control'
license=('MIT')
arch=('x86_64')
depends=('gcc-libs')
makedepends=('rust' 'cargo')

source=(
    "${pkgname}::git+https://github.com/qzed/linux-surface-control.git#tag=v${pkgver}"
)

sha256sums=(
    'SKIP'
)

build(){
    cd "${srcdir}/${pkgname}"
    env CARGO_TARGET_DIR="target" CARGO_INCREMENTAL=0 cargo build --release --locked
    strip --strip-all "target/release/surface"
}

package() {
    install -D -m755 "${srcdir}/${pkgname}/target/release/surface" "$pkgdir/usr/bin/surface"

    # completion files
    install -D -m644 "${srcdir}/{$pkgname}/target/surface.bash" "$pkgdir/usr/share/bash-completion/completions/surface"
    install -D -m644 "${srcdir}/{$pkgname}/target/_surface" "$pkgdir/usr/share/zsh/site-functions/_surface"
    install -D -m644 "${srcdir}/{$pkgname}/target/surface.fish" "$pkgdir/usr/share/fish/completions/surface.fish"

    # license
    install -Dm644 "${srcdir}/${pkgname}/LICENSE" "${pkgdir}/usr/share/licenses/surface-control/LICENSE"
}
