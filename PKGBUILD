# This file was generated by GoReleaser. DO NOT EDIT.
# Maintainer: rsteube <rsteube@users.noreply.github.com>

pkgname='carapace-bin'
pkgver=0.17.0
pkgrel=1
pkgdesc='multi-shell multi-command argument completer'
url='https://github.com/rsteube/carapace-bin'
arch=('aarch64' 'i686' 'x86_64')
license=('MIT')
provides=('carapace')
conflicts=('carapace')

source_aarch64=("${pkgname}_${pkgver}_aarch64.tar.gz::https://github.com/rsteube/carapace-bin/releases/download/v0.17.0/carapace-bin_0.17.0_Linux_arm64.tar.gz")
sha256sums_aarch64=('e344b18fdfeb64c2817688f1b752ddffdc126b63476ae53c91285c58127ee61c')

source_i686=("${pkgname}_${pkgver}_i686.tar.gz::https://github.com/rsteube/carapace-bin/releases/download/v0.17.0/carapace-bin_0.17.0_Linux_i386.tar.gz")
sha256sums_i686=('ce7288725844a8140db093248533a1bc52285c9099558550407550b7f325a065')

source_x86_64=("${pkgname}_${pkgver}_x86_64.tar.gz::https://github.com/rsteube/carapace-bin/releases/download/v0.17.0/carapace-bin_0.17.0_Linux_x86_64.tar.gz")
sha256sums_x86_64=('4db6f87539356386c65795907a86a37d6462684f3a4c77c24ed0d88ebc88324a')

package() {
  install -Dm755 "./carapace" "${pkgdir}/usr/bin/carapace"
}
