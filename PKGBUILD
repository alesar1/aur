# Maintainer: kpcyrd <git@rxv.cc>
# Contributor: Vlad M. <vlad@archlinux.net>
# Contributor: Andrea Scarpino <andrea@archlinux.org>

pkgname=cargo-tree
pkgver=0.26.0
pkgrel=1
pkgdesc="Cargo subcommand that visualizes a crate's dependency graph in a tree-like format"
url="https://github.com/sfackler/cargo-tree"
depends=('curl')
makedepends=('cargo')
arch=('i686' 'x86_64' 'armv6h')
license=('MIT' 'APACHE')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/sfackler/${pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=('dd250caddbef0162d7efd5edde3f265aa5fd9a7888861800aa2af4b1ff68261c')

build() {
  cd "${pkgname}-${pkgver}"
  cargo build --release --locked
}

# upstream doesn't have tests

package() {
  cd "${pkgname}-${pkgver}"
  install -Dm755 "target/release/${pkgname}" -t "${pkgdir}/usr/bin"
  install -Dm644 README.md -t "${pkgdir}/usr/share/doc/${pkgname}"
  install -Dm644 LICENSE-MIT -t "${pkgdir}/usr/share/licenses/${pkgname}"
}

# vim:set ts=2 sw=2 et:
