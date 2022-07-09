# This file was generated by GoReleaser. DO NOT EDIT.
# Maintainer: Randy Fay <randy at randyfay.com>

pkgname='ddev-bin'
pkgver=1.19.4
pkgrel=1
pkgdesc='DDEV-Local: a local web development environment'
url='https://github.com/drud/ddev'
arch=('aarch64' 'x86_64')
license=('Apache 2')
provides=('ddev')
conflicts=('ddev')

source_aarch64=("${pkgname}_${pkgver}_aarch64.tar.gz::https://github.com/rfay/ddev/releases/download/v1.19.4/ddev_linux-arm64.v1.19.4.tar.gz")
sha256sums_aarch64=('0384f2d86641032893d2bdcce0252728a0555a5145130fbe43e59a71ecd95809')

source_x86_64=("${pkgname}_${pkgver}_x86_64.tar.gz::https://github.com/rfay/ddev/releases/download/v1.19.4/ddev_linux-amd64.v1.19.4.tar.gz")
sha256sums_x86_64=('bee671995e835ff8d0bd274472a2aa45064e062fdb9fea0e0745f8c061db7654')

package() {
  # bin
  install -Dm755 "./ddev" "${pkgdir}/usr/bin/ddev"
  install -Dm644 "./LICENSE" "${pkgdir}/usr/share/licenses/ddev/LICENSE"

  # completions
  mkdir -p "${pkgdir}/usr/share/bash-completion/completions/"
  mkdir -p "${pkgdir}/usr/share/zsh/site-functions/"
  mkdir -p "${pkgdir}/usr/share/fish/vendor_completions.d/"
  install -Dm644 "./ddev_bash_completion.sh" "${pkgdir}/usr/share/bash-completion/completions/ddev"
  install -Dm644 "./ddev_zsh_completion.sh" "${pkgdir}/usr/share/zsh/site-functions/_ddev"
  install -Dm644 "./ddev_fish_completion.sh" "${pkgdir}/usr/share/fish/vendor_completions.d/ddev.fish"
}
