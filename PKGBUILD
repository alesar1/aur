# Maintainer: Jan “Khardix” Staněk <khardix [at] gmail [dot] com>

pkgname=greetd-artix-openrc
pkgver=0.8.0
pkgrel=1
pkgdesc="Generic greeter daemon, packaged for artix-openrc"
arch=('x86_64')
url="https://git.sr.ht/~kennylevinsen/greetd"
license=(GPL3)
source=("https://git.sr.ht/~kennylevinsen/greetd/archive/${pkgver}.tar.gz")
sha256sums=('47a73709df60f04b63fc50cfc409e47a451a9620777638f527b9d9333256035f')

depends=(pam)
makedepends=(cargo scdoc)
optdepends=(
    'greetd-gtkgreet: Simple GTK-based greeter'
    'greetd-wlgreet: Wayland greeter'
    'greetd-tuigreet: TUI-based greeter'
)

backup=(
    'etc/greetd/config.toml'
)

prepare() {
    cd "greetd-${pkgver}/"

    cargo fetch --locked --target "${CARCH}-unknown-linux-gnu"
}
build() {
    cd "greetd-${pkgver}/"

    export RUSTUP_TOOLCHAIN=stable CARGO_TARGET_DIR=target
    export RUSTFLAGS="--remap-path-prefix=${PWD}=/build/"
    cargo build --frozen --release --all-features \
        --workspace --exclude fakegreet

    find man/ -type f -name '*.scd'|while read -r page
    do
        scdoc <"${page}" >"${page%.scd}.roff"
    done

}
check() {
    cd "greetd-${pkgver}/"

    export RUSTUP_TOOLCHAIN=stable
    cargo test --frozen --all-features
}
package() {
    cd "greetd-${pkgver}/"

    find "target/release/" -maxdepth 1 -type f -executable \
        -exec install -m0755 -Dt "${pkgdir}/usr/bin/" '{}' +

    install -m0644 -Dt "${pkgdir}/etc/greetd/" config.toml

    for section in 1 5 7
    do
        find "man/" -type f -name "*-${section}.roff"|while read -r manpage
        do
            install -m0644 -D "${manpage}" "${pkgdir}/usr/share/man/man${section}/${manpage%-*}.${section}"
        done
    done
}
