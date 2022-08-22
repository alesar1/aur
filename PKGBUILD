# Maintainer: Amirul Fitri <tounghacker@gmail.com>

# maintainer's variables
_commit=94712eea624b609e7b97829262b53a0e589e527a

pkgname=playit
pkgver=v0.9.3+1+g94712ee
pkgrel=2
pkgdesc="A tunneling tool to host a game server without port forwarding or sharing public IP"
arch=('x86_64')
url="https://playit.gg"
depends=('gcc-libs')
license=('BSD')
makedepends=('git' 'cargo')
source=("${pkgname}::git+https://github.com/playit-cloud/playit-agent.git#commit=${_commit}")
sha256sums=('SKIP')

prepare() {
  cd "${pkgname}"
  cargo update # FIXME: remove later when upstream update Cargo.lock
  cargo fetch --locked --target "${CARCH}-unknown-linux-gnu"
}

pkgver() {
  cd "${pkgname}"
  git describe --tags | sed 's/-/+/g'
}

build() {
  cd "${pkgname}"
  export RUSTUP_TOOLCHAIN=stable
  export CARGO_TARGET_DIR=target
  cargo build --frozen --release --all-features
}

check() {
  cd "${pkgname}"
  export RUSTUP_TOOLCHAIN=stable
  cargo test --frozen --all-features
}

package() {
  cd "${pkgname}"
  install -Dm755 target/release/agent "${pkgdir}"/usr/bin/"${pkgname}"
  install -Dm644 LICENSE.txt "${pkgdir}"/usr/share/licenses/"${pkgname}"/LICENSE
}
