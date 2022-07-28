# Maintainer: orhun <orhunparmaksiz@gmail.com>
# Contributor: Vlad Frolov <frolvlad@gmail.com>

# https://github.com/orhun/pkgbuilds

pkgname=cargo-workspaces
pkgver=0.2.35
pkgrel=1
pkgdesc="Cargo plugin for managing cargo workspaces and their crates"
url="https://github.com/pksunkara/cargo-workspaces"
depends=('gcc-libs' 'openssl' 'zlib')
makedepends=('cargo')
arch=('x86_64')
license=('MIT')
source=("${pkgname}-${pkgver}.tar.gz::$url/archive/v$pkgver.tar.gz")
sha512sums=('70f661fd21abb8f3d16007e460252391cac717f3ecc8019226428aa0a6f0adc9d65b155be83afe861aaef68856d24802b30bf9e7d3e1817c344d1e22729b9a2f')
options=('!lto')

prepare() {
  cd "${pkgname}-${pkgver}/${pkgname}"
  cargo fetch --locked --target "$CARCH-unknown-linux-gnu"
}

build() {
  cd "${pkgname}-${pkgver}/${pkgname}"
  cargo build --release --frozen
}

check() {
  cd "${pkgname}-${pkgver}/${pkgname}"
  cargo test --frozen
}

package() {
  cd "${pkgname}-${pkgver}"
  install -Dm 755 "${pkgname}/target/release/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
  install -Dm 644 README.md -t "${pkgdir}/usr/share/doc/${pkgname}"
  install -Dm 644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}

# vim:set ts=2 sw=2 et:
