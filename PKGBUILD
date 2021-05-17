pkgname=banano-vanity
pkgver=1.41
pkgrel=1
pkgdesc="A vanity address generator for banano cryptocurrency"
arch=('x86_64')
source=("git+https://github.com/flammenderdrache/banano-vanity.git")
url="https://github.com/flammenderdrache/banano-vanity"
sha512sums=('SKIP')
makedepends=(
   'rust'
   'cargo'
   'git'
   'ocl-icd'
)

build() {
    cd "${srcdir}/${_pkgname}"
    cargo build --release --locked
}

check() {
    cd "${srcdir}/${_pkgname}"
    cargo test --release --features gpu --locked
}

package() {
    cd "${srcdir}/${_pkgname}"
    install -Dm 755 "target/release/${_pkgname}" "${pkgdir}/usr/bin/${_pkgname}"
}

