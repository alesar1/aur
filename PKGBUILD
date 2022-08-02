# This file was generated by GoReleaser. DO NOT EDIT.
# Maintainer: Randy Fay <randy at randyfay.com>

pkgname='rfay-test-ddev-bin'
pkgver=1.19.5
pkgrel=1
pkgdesc='DDEV-Local: a local web development environment (rfay test stable)'
url='https://github.com/drud/ddev'
arch=('aarch64' 'x86_64')
license=('Apache 2')
provides=('ddev')
conflicts=('ddev')

source_aarch64=("${pkgname}_${pkgver}_aarch64.tar.gz::https://github.com/drud/ddev/releases/download/v1.19.5/ddev_linux-arm64.v1.19.5.tar.gz")
sha256sums_aarch64=('fa2399e2031f1c7f3698e1eb71c3256c685c8dba61475dc574ccd79f12173a76')

source_x86_64=("${pkgname}_${pkgver}_x86_64.tar.gz::https://github.com/drud/ddev/releases/download/v1.19.5/ddev_linux-amd64.v1.19.5.tar.gz")
sha256sums_x86_64=('287547c7b2f7ae02c32a6bef23c2623cc12da061f67c2bb2434368f3faa5b2f5')

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
