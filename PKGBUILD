# This file was generated by GoReleaser. DO NOT EDIT.
# Maintainer: Budiman Jojo <budimanjojo at gmail dot com>

pkgname='talhelper-bin'
pkgver=1.5.0
pkgrel=1
pkgdesc='A tool to help creating Talos cluster in GitOps way.'
url='https://github.com/budimanjojo/talhelper'
arch=('aarch64' 'x86_64')
license=('BSD-3-Clause')
provides=('talhelper')
conflicts=('talhelper')

source_aarch64=("${pkgname}_${pkgver}_aarch64.tar.gz::https://github.com/budimanjojo/talhelper/releases/download/v1.5.0/talhelper_linux_arm64.tar.gz")
sha256sums_aarch64=('4f0d4b2000f5a3a9a16577b288e6e0445956a426656f54d684fb251af130fc96')

source_x86_64=("${pkgname}_${pkgver}_x86_64.tar.gz::https://github.com/budimanjojo/talhelper/releases/download/v1.5.0/talhelper_linux_amd64.tar.gz")
sha256sums_x86_64=('0c557f4a138cdfab193c26b625d172dd73ad2c853690bc0e7dfd2bbd0280911a')

package() {
  # bin
  install -Dm755 "./talhelper" "${pkgdir}/usr/bin/talhelper"
  # license
  install -Dm644 "./LICENSE" "${pkgdir}/usr/share/licenses/talhelper/LICENSE"
}
