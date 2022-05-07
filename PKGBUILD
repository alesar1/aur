# This file was generated by GoReleaser. DO NOT EDIT.
# Maintainer: Chmouel Boudjnah <chmouel@chmouel.com>

pkgname='tkn-watch-bin'
pkgver=0.1.0
pkgrel=1
pkgdesc='tkn-watch - watch tekton pipelinerun execution'
url='https://github.com/chmouel/tkn-watch'
arch=('x86_64')
license=('Apache 2.0')
provides=('tkn-watch')
conflicts=('tkn-watch')

source_x86_64=("${pkgname}_${pkgver}_x86_64.tar.gz::https://github.com/chmouel/tkn-watch/releases/download/0.1.0/tkn-watch_0.1.0_linux_amd64.tar.gz")
sha256sums_x86_64=('203963e91dfd4565a92e7be490737d18d1570e34b3dd295d2da438cc038537b4')

package() {
  # bin
  install -Dm755 "./tkn-watch" "${pkgdir}/usr/bin/tkn-watch"

  # license
  install -Dm644 "./LICENSE" "${pkgdir}/usr/share/licenses/tkn-watch/LICENSE"

  # completions
  mkdir -p "${pkgdir}/usr/share/bash-completion/completions/"
  mkdir -p "${pkgdir}/usr/share/zsh/site-functions/"
  mkdir -p "${pkgdir}/usr/share/fish/vendor_completions.d/"

  install -Dm644 "completions/tkn-watch.bash" "${pkgdir}/usr/share/bash-completion/completions/tkn-watch"
  install -Dm644 "completions/tkn-watch.fish" "${pkgdir}/usr/share/fish/vendor_completions.d/tkn-watch.fish"
  install -Dm644 "completions/_tkn-watch" "${pkgdir}/usr/share/zsh/site-functions/_tkn-watch"

}
