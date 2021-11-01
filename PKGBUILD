# Maintainer: Terin Stock <terinjokes@gmail.com>
# Contributor: Johann Klähn <kljohann@gmail.com>
# Contributor: Gergely Imreh <imrehgATgmailDOTcom>
# Contributor: Ilkka Laukkanen <ilkka.s.laukkanen@gmail.com>

pkgname=stgit
pkgver=1.4
pkgrel=2
pkgdesc="Pushing/popping patches to/from a stack on top of Git, similar to Quilt"
url="https://stacked-git.github.io/"
arch=('any')
license=('GPL2')
depends=('python' 'git')
makedepends=('xmlto' 'asciidoc' 'python-setuptools')
source=(
  "https://github.com/stacked-git/stgit/releases/download/v${pkgver}/${pkgname}-${pkgver}.tar.gz"
)
sha256sums=('145cacd89127a31e0363e4e6a7997fb0510c193d4669aa7f614dd6a8b5def1af')

build() {
  cd "${pkgname}-${pkgver}"
  make build
  make doc
}

package() {
  cd "${pkgname}-${pkgver}"
  make prefix=/usr DESTDIR="${pkgdir}" install

  mkdir -p "${pkgdir}/usr/share/bash-completion/completions"
  mkdir -p "${pkgdir}/usr/share/zsh/site-functions"
  mkdir -p "${pkgdir}/usr/share/fish/vendor_completions.d"

  ln -s "/usr/share/stgit/completion/stgit.bash" "${pkgdir}/usr/share/bash-completion/completions/stg"
  ln -s "/usr/share/stgit/completion/stgit.zsh" "${pkgdir}/usr/share/zsh/site-functions/_stg"
  ln -s "/usr/share/stgit/completion/stg.fish" "${pkgdir}/usr/share/fish/vendor_completions.d/stg.fish"

  make prefix=/usr DESTDIR="${pkgdir}" install-doc

  install -d "${pkgdir}/usr/share/emacs/site-lisp"
  install -D -m644 ./contrib/stgit.el "${pkgdir}/usr/share/emacs/site-lisp"

  install -d "${pkgdir}/usr/share/vim/vimfiles/ftdetect"
  install -d "${pkgdir}/usr/share/vim/vimfiles/syntax"

  install -D -m644 ./contrib/vim/ftdetect/stg.vim "${pkgdir}/usr/share/vim/vimfiles/ftdetect"
  for vimsyntax in ./contrib/vim/syntax/*.vim; do
    install -D -m644 "${vimsyntax}" "${pkgdir}/usr/share/vim/vimfiles/syntax/$(basename $vimsyntax)"
  done
}
