# This file was generated by GoReleaser. DO NOT EDIT.
# Maintainer: Blacktop <https://github.com/blacktop>

pkgname='ipsw-bin'
pkgver=3.1.213
pkgrel=1
pkgdesc='iOS/macOS Research Swiss Army Knife'
url='https://github.com/blacktop/ipsw'
arch=('aarch64' 'x86_64')
license=('MIT')
provides=('ipsw')
conflicts=('ipsw')

source_aarch64=("${pkgname}_${pkgver}_aarch64.tar.gz::https://github.com/blacktop/ipsw/releases/download/v3.1.213/ipsw_3.1.213_linux_arm64.tar.gz")
sha256sums_aarch64=('ca35628094af96d34abec76504f6a9c855782ca8c9453d9d22b256dd0bb426c0')

source_x86_64=("${pkgname}_${pkgver}_x86_64.tar.gz::https://github.com/blacktop/ipsw/releases/download/v3.1.213/ipsw_3.1.213_linux_x86_64.tar.gz")
sha256sums_x86_64=('da94358f69b77c2e62aa9e08304822341f8be80ebcd59a4a1d0c093a879c3fac')

package() {
  # bin
  install -Dm755 "./ipsw" "${pkgdir}/usr/bin/ipsw"

  # license
  install -Dm644 "./LICENSE.md" "${pkgdir}/usr/share/licenses/ipsw/LICENSE"

  # completions
  mkdir -p "${pkgdir}/usr/share/bash-completion/completions/"
  mkdir -p "${pkgdir}/usr/share/zsh/site-functions/"
  mkdir -p "${pkgdir}/usr/share/fish/vendor_completions.d/"
  install -Dm644 "./completions/ipsw" "${pkgdir}/usr/share/bash-completion/completions/ipsw"
  install -Dm644 "./completions/_ipsw" "${pkgdir}/usr/share/zsh/site-functions/_ipsw"
  install -Dm644 "./completions/ipsw.fish" "${pkgdir}/usr/share/fish/vendor_completions.d/ipsw.fish"

  # man pages
  install -Dm644 "./manpages/ipsw.1.gz" "${pkgdir}/usr/share/man/man1/ipsw.1.gz"
}
