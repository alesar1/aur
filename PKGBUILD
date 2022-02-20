# Maintainer: Omeed Safi <aur@safi.ms>
_pkgname=akr
pkgname="${_pkgname}-git"
pkgver=1.0.r6.g9babada
pkgrel=1
pkgdesc="Akamai Krypton CLI and SSH Agent"
arch=("x86_64")
url="https://github.com/akamai/akr"
license=("custom:Akamai")
makedepends=("git" "cargo")
provides=("${_pkgname}")
conflicts=("${_pkgname}")
md5sums=("SKIP")

source=("${_pkgname}::git+${url}.git")

pkgver() {
    git -C "${_pkgname}" describe --long --tags | sed 's/-/.r/;s/-/./'
}

prepare() {
    cd "${_pkgname}"
    cargo fetch --locked --target "${CARCH}-unknown-linux-gnu"
}

build() {
    cd "${_pkgname}"
    export RUSTUP_TOOLCHAIN=stable
    export CARGO_TARGET_DIR=target
    cargo build --frozen --release --all-features
}

package() {
    cd "${_pkgname}"
    install -Dm0755 -t "${pkgdir}/usr/bin/" "target/release/${_pkgname}"
    install -Dm0644 LICENSE "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"
}
