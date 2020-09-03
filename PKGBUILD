# Maintainer: Danilo Bargen <aur at dbrgn dot ch>
# Contributor: Maxim Andersson <thesilentboatman@gmail.com>
pkgname=tealdeer
_binname=tldr
pkgver=1.4.0
pkgrel=1
pkgdesc="A fast tldr client in Rust."
arch=('any')
url="https://github.com/dbrgn/tealdeer"
license=('MIT' 'Apache')
depends=('openssl')
makedepends=('rust' 'cargo')
provides=('tldr')
conflicts=('tldr' 'nodejs-tldr' 'nodejs-tldr-git' 'tldr-cpp-client' 'tldr-git' 'tldr-python-client' 'tldr++')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/dbrgn/${pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=('a9a08203956ba07a36c8bdebab0613db449a108566dd8ea7735e8948add4df9a')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  cargo build --release
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  # Install binary
  install -Dm 755 target/release/${_binname} -t "${pkgdir}/usr/bin"

  # Install shell completions
  install -D -o root -g root -m 644 bash_tealdeer "${pkgdir}/usr/share/bash-completion/completions/${_binname}"
  install -D -o root -g root -m 644 fish_tealdeer "${pkgdir}/usr/share/fish/completions/${_binname}.fish"
  install -D -o root -g root -m 644 zsh_tealdeer "${pkgdir}/usr/share/zsh/site-functions/_${_binname}"

  # Install MIT license
  install -Dm 644 LICENSE-MIT "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE-MIT"
}

# vim:set ts=2 sw=2 et:
