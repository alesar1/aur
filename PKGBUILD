# Maintainer:  <me@sfxr.de>

pkgname=stack-static
pkgver=2.7.1
pkgrel=4
pkgdesc="The Haskell Tool Stack (linked statically)"
arch=('x86_64')
url="https://github.com/commercialhaskell/stack"
license=('custom:BSD3')
provides=( stack=$pkgver )
conflicts=( stack stack-bin haskell-stack )
replaces=( stack stack-bin haskell-stack )
depends=( gmp gcc-libs zlib ) # needed for working ghc downloaded by stack
optdepends=(
  'bash-completion'
  "ncurses5-compat-libs: using older ghc's linking against libtinfo.so.5"
)
source=(
  "https://github.com/commercialhaskell/stack/releases/download/v${pkgver}/stack-${pkgver}-linux-x86_64.tar.gz"
  "https://github.com/commercialhaskell/stack/releases/download/v${pkgver}/stack-${pkgver}-linux-x86_64.tar.gz.asc"
)
sha256sums=('2bc47749ee4be5eccb52a2d4a6a00b0f3b28b92517742b40c675836d7db2777d'
            'SKIP')
validpgpkeys=('C5705533DA4F78D8664B5DC0575159689BEFB442')

package() {
  cd "${srcdir}"
  local d="stack-${pkgver}-linux-x86_64"
  mkdir -p "${pkgdir}"/usr/{bin,share/{doc,licenses}/"${pkgname}"}
  mkdir -p "${pkgdir}"/usr/share/{bash-completion/completions,fish/vendor_completions.d}
  cp "${d}/stack" "${pkgdir}/usr/bin"
  cp -R "${d}/doc/." "${pkgdir}/usr/share/doc/${pkgname}/"
  cp "${d}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/"

  local stack=${d}/stack
  "$stack" --bash-completion-script stack >"$pkgdir"/usr/share/bash-completion/completions/stack
  "$stack" --fish-completion-script stack > "$pkgdir"/usr/share/fish/vendor_completions.d/stack.fish
  # conflicts with zsh-completion:
  # "$stack" --zsh-completion-script stack > "$pkgdir"/usr/share/zsh/site-functions/_stack
}

# vim:set ts=2 sw=2 et:
