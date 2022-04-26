# This file was generated by GoReleaser. DO NOT EDIT.
# Maintainer: Chmouel Boudjnah <chmouel@chmouel.com>

pkgname='snazy-bin'
pkgver=0.3.0
pkgrel=1
pkgdesc='snazy - a snazzy json log viewer'
url='https://github.com/chmouel/snazy'
arch=('x86_64')
license=('Apache 2.0')
provides=('snazy')
conflicts=('snazy')

source_x86_64=("${pkgname}_${pkgver}_x86_64.tar.gz::https://github.com/chmouel/snazy/releases/download/0.3.0/snazy_0.3.0_linux_amd64.tar.gz")
sha256sums_x86_64=('7cd72734bc7f33382b07088e418f75a608474f06e4fa72e0e09643f5ef2dded3')

package() {
  # bin
  install -Dm755 "./snazy" "${pkgdir}/usr/bin/snazy"

  # license
  install -Dm644 "./LICENSE" "${pkgdir}/usr/share/licenses/snazy/LICENSE"

  # completions
  mkdir -p "${pkgdir}/usr/share/bash-completion/completions/"
  mkdir -p "${pkgdir}/usr/share/zsh/site-functions/"
  mkdir -p "${pkgdir}/usr/share/fish/vendor_completions.d/"

  install -Dm644 "completions/snazy.bash" "${pkgdir}/usr/share/bash-completion/completions/snazy"
  install -Dm644 "completions/snazy.fish" "${pkgdir}/usr/share/fish/vendor_completions.d/snazy.fish"
  install -Dm644 "completions/_snazy" "${pkgdir}/usr/share/zsh/site-functions/_snazy"

}
