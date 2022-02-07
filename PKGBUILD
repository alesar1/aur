# Maintainer: replydev <commoncargo@tutanota.com>

pkgname=cotp
pkgver=0.2.0
pkgrel=1
pkgdesc='Trustworthy, encrypted, command-line TOTP/HOTP authenticator app with import functionality.'
arch=('x86_64')
url='https://github.com/replydev/cotp'
license=('GPL3')
makedepends=('cargo' 'python')
depends=('libxcb' 'libxkbcommon-x11')
source=("$pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz")
sha256sums=('126b0a7bf5bd37cf4382a6c23bc4d40aaed12c36caa49dfacc183533d96d4fb6')
conflics=('cotp-bin')
provides=('cotp-bin')

prepare(){
  cd "$pkgname-$pkgver"
  cargo update
  cargo fetch --locked --target "$CARCH-unknown-linux-gnu"
}

build() {
  cd "$pkgname-$pkgver"
  export RUSTUP_TOOLCHAIN=stable
  export CARGO_TARGET_DIR=target
  cargo build --frozen --release --all-features
}

package() {
  cd "$pkgname-$pkgver"
  install -Dm755 target/release/$pkgname "$pkgdir/usr/bin/$pkgname"
}
