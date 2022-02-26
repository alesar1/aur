# Maintainer: cyqsimon <28627918+cyqsimon@users.noreply.github.com>

pkgname=httplz
_pkgname=http
pkgver=1.12.4
pkgrel=1
pkgdesc="Host These Things Please - a basic http server written in Rust"
arch=("x86_64" "i686" "armv6h" "armv7h" "aarch64")
url="https://github.com/thecoshman/http"
license=("MIT")
conflicts=("httplz-bin")
depends=("openssl" "bzip2")
makedepends=("cargo")
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz")
sha256sums=('3ba1edfdbd8f34281a80ee6e43c06e69b53b757998e0469119ee5409087f229a')

prepare() {
  cd ${_pkgname}-${pkgver}
  cargo update
  cargo fetch --locked --target="${CARCH}-unknown-linux-gnu"
}

build() {
  cd ${_pkgname}-${pkgver}
  # only build and install the `httplz` binary and exclude `http`
  # they are identical and `httplz` is significantly less likely to cause conflicts
  cargo build --release --frozen --all-features --target-dir="target" --bin="httplz"
}

package() {
  cd ${_pkgname}-${pkgver}
  install -Dm755 target/release/httplz "${pkgdir}/usr/bin/httplz"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
