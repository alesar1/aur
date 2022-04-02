# This file was generated by GoReleaser. DO NOT EDIT.
# Maintainer: applewing <applewing@protonmail.com>

pkgname='mog-bin'
pkgver=1.1.0
pkgrel=1
pkgdesc='Git Hooks managment tool written in Go'
url='https://github.com/aw83/mog'
arch=('aarch64' 'armv7h' 'i686' 'x86_64')
license=('Apache-2.0')
provides=('mog')
conflicts=('mog')

source_aarch64=("${pkgname}_${pkgver}_aarch64.tar.gz::https://github.com/aw83/mog/releases/download/v1.1.0/mog_Linux_arm64.tar.gz")
sha256sums_aarch64=('49e4815d2333743d3772e1abc58ce7044e24171212a96f17ecb7f334771281e8')

source_armv7h=("${pkgname}_${pkgver}_armv7h.tar.gz::https://github.com/aw83/mog/releases/download/v1.1.0/mog_Linux_armv7.tar.gz")
sha256sums_armv7h=('23919309c8e92a96e79041917630becea045a175334edfdf64a1669f51eae379')

source_i686=("${pkgname}_${pkgver}_i686.tar.gz::https://github.com/aw83/mog/releases/download/v1.1.0/mog_Linux_i386.tar.gz")
sha256sums_i686=('7558c4136f0380cd5c9d8f706abe24ca3c47b7d90862ed6503bdaeb3a853e62a')

source_x86_64=("${pkgname}_${pkgver}_x86_64.tar.gz::https://github.com/aw83/mog/releases/download/v1.1.0/mog_Linux_x86_64.tar.gz")
sha256sums_x86_64=('78a6f4a1f1a0ea79d97e9ab0c3146a770b66c872e63a4c67a219c64b99fe998f')

package() {
  # bin
  install -Dm755 "./mog" "${pkgdir}/usr/bin/mog"

  # license
  install -Dm644 "./LICENSE" "${pkgdir}/usr/share/licenses/mog/LICENSE"

  # completions
  mkdir -p "${pkgdir}/usr/share/bash-completion/completions/"
  mkdir -p "${pkgdir}/usr/share/zsh/site-functions/"
  mkdir -p "${pkgdir}/usr/share/fish/vendor_completions.d/"
  ./mog completion bash > "./mog.bash"
  ./mog completion zsh > "./mog.zsh"
  ./mog completion fish > "./mog.fish"
  install -Dm644 "./mog.bash" "${pkgdir}/usr/share/bash-completion/completions/mog"
  install -Dm644 "./mog.zsh" "${pkgdir}/usr/share/zsh/site-functions/_mog"
  install -Dm644 "./mog.fish" "${pkgdir}/usr/share/fish/vendor_completions.d/mog.fish"
}
