# Maintainer: amesgen <amesgen AT amesgen DOT de>
# Contributor: Rodrigo Gryzinski <rogryza@gmail.com>

pkgname='dhall-lsp-server-bin'
pkgver=1.0.12
pkgrel=1
pkgdesc="Language Server Protocol implementation for Dhall"
arch=('x86_64')
url='https://github.com/dhall-lang/dhall-haskell'
license=('custom:MIT')

_dhall_ver=1.37.0

source=("dhall-lsp-server-$_dhall_ver-$pkgver.tar.bz2::https://github.com/dhall-lang/dhall-haskell/releases/download/$_dhall_ver/dhall-lsp-server-$pkgver-x86_64-linux.tar.bz2"
        "LICENSE-$pkgver::https://raw.githubusercontent.com/dhall-lang/dhall-haskell/$_dhall_ver/dhall-lsp-server/LICENSE")
sha256sums=('7d503129a9d8a71dac10dd870613a9dbc8072c5bba7ca90980f446b2a526e425'
            '9e2f0e499b5406faffffd32d0a1d69d519dc8c681fb0648ee5e9970e0299d4a7')

package() {
  install -Dm755 "$srcdir/bin/dhall-lsp-server" -t "$pkgdir/usr/bin/"
  install -Dm644 LICENSE-$pkgver "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

  _install_completion_script bash bash-completion/completions/dhall-lsp-server
  _install_completion_script zsh zsh/site-functions/_dhall-lsp-server
  _install_completion_script fish fish/vendor_completions.d/dhall-lsp-server.fish
}

_install_completion_script() {
  install -Dm644 <("$pkgdir/usr/bin/dhall-lsp-server" --$1-completion-script "/usr/bin/dhall-lsp-server") "$pkgdir/usr/share/$2"
}
