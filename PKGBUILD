pkgname=mqttui
pkgver=0.16.2
pkgrel=1
pkgdesc="Subscribe to a MQTT Topic or publish something quickly from the terminal"
arch=('x86_64' 'aarch64' 'armv6h' 'armv7h')
url="https://github.com/EdJoPaTo/${pkgname}"
license=('GPL3')
depends=('gcc-libs')
makedepends=('cargo')
provides=("${pkgname}")

source=($pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz)
sha256sums=('79eb9bb529dcaf8047242434ffab5546200a203bddcccf35825d50783b39198f')

build() {
  cd $pkgname-$pkgver
  RUSTUP_TOOLCHAIN=stable cargo build --release --locked --all-features
}

package() {
  cd $pkgname-$pkgver
  install -Dm755 target/release/$pkgname -t "${pkgdir}/usr/bin"
  install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
  install -Dm644 README.md -t "${pkgdir}/usr/share/doc/${pkgname}"

  install -Dm644 "target/completions/${pkgname}.bash" "${pkgdir}/usr/share/bash-completion/completions/${pkgname}.bash"
  install -Dm644 "target/completions/${pkgname}.fish" "${pkgdir}/usr/share/fish/vendor_completions.d/${pkgname}.fish"
  install -Dm644 "target/completions/_${pkgname}" "${pkgdir}/usr/share/zsh/site-functions/_${pkgname}"
}
