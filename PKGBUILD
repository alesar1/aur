# This file was generated by GoReleaser. DO NOT EDIT.
# Maintainer: Johannes Bruederl <johannes.bruederl@gmail.com>
# Contributor: Michał Lisowski <lisu@riseup.net>

pkgname='kaf-bin'
pkgver=0.1.47
pkgrel=1
pkgdesc='Kafka CLI inspired by kubectl & docker'
url=''
arch=('aarch64' 'x86_64')
license=('MIT')
provides=('kaf-bin')
conflicts=('kaf-bin' 'kaf')

source_aarch64=("${pkgname}_${pkgver}_aarch64.tar.gz::https://github.com/birdayz/kaf/releases/download/v0.1.47/kaf_0.1.47_Linux_arm64.tar.gz")
sha256sums_aarch64=('e3855041cf585aaf36db4b2e7f596ee2bcd3b0d6a498f9185f20bc8aecd4014f')

source_x86_64=("${pkgname}_${pkgver}_x86_64.tar.gz::https://github.com/birdayz/kaf/releases/download/v0.1.47/kaf_0.1.47_Linux_x86_64.tar.gz")
sha256sums_x86_64=('2a54ea7f7171621f38219afa1195deaa0710182e9992d03d6a291aaba07c0a12')

package() {
  # bin
  install -Dm755 "./kaf" "${pkgdir}/usr/bin/kaf"

  # completions
  # bash
  mkdir -p "${pkgdir}/etc/bash_completion.d"
  ./kaf completion bash > "${pkgdir}/etc/bash_completion.d/kaf"

  # zsh
  mkdir -p "${pkgdir}/usr/share/zsh/site-functions"
  ./kaf completion zsh > "${pkgdir}/usr/share/zsh/site-functions/_kaf"

  # Fish
  mkdir -p "${pkgdir}/usr/share/fish/vendor_completions.d"
  ./kaf completion fish > ${pkgdir}/usr/share/fish/vendor_completions.d/kaf.fish
}
