# Maintainer: João Vitor S. Anjos <jvanjos at protonmail dot com>
# Contributor: Sven-Hendrik Haase <svenstaro@gmail.com>

pkgname=wapm
_pkgrepo=${pkgname}-cli
pkgver=0.5.3
pkgrel=1
pkgdesc='WebAssembly Package Manager'
arch=('x86_64')
url="https://github.com/wasmerio/wapm-cli"
license=('MIT')
depends=('gcc-libs')
makedepends=('cargo')
source=("${_pkgrepo}-${pkgver}.tar.gz::${url}/archive/refs/tags/v${pkgver}.tar.gz")
sha512sums=('67fe92a85ccfd986f13f11207d476885c276071e27db6b80503a0d0679d3f328b50d57f37353017381c8edc913808891594466856f204007c6ee83cb41cbda95')

prepare() {
  cd ${_pkgrepo}-${pkgver}
  cargo fetch --locked --target $CARCH-unknown-linux-gnu
}

build() {
  cd ${_pkgrepo}-${pkgver}
  cargo build --release --frozen
}

check() {
  cd ${_pkgrepo}-${pkgver}
  cargo test --frozen
}

package() {
  cd ${_pkgrepo}-${pkgver}

  install -Dm 755 target/release/wapm -t "${pkgdir}/usr/bin"
  ln -s wapm "${pkgdir}/usr/bin/wax"

  install -Dm 644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"

  target/release/wapm completions bash > bash-completions
  target/release/wapm completions zsh > zsh-completions
  target/release/wapm completions fish > fish-completions
  install -Dm 644 bash-completions "${pkgdir}/usr/share/bash-completion/completions/wapm"
  install -Dm 644 zsh-completions "${pkgdir}/usr/share/zsh/site-functions/_wapm"
  install -Dm 644 fish-completions "${pkgdir}/usr/share/fish/completions/wapm.fish"
}

# vim:set ts=2 sw=2 et:
