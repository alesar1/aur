# Maintainer: slurpee <aur@lylat.io>
# Contributors: Felix Seidel, Claudia Pellegrino, Liu Yuxuan

pkgname=1password-cli
pkgver=1.0.0
pkgrel=1
pkgdesc="1Password command line tool"
arch=('x86_64' 'i686' 'arm' 'armv6h' 'aarch64')
url="https://app-updates.agilebits.com/product_history/CLI"
license=('custom')
options=('!strip' '!emptydirs')

source_x86_64=("https://cache.agilebits.com/dist/1P/op/pkg/v${pkgver}/op_linux_amd64_v${pkgver}.zip")
source_i686=("https://cache.agilebits.com/dist/1P/op/pkg/v${pkgver}/op_linux_386_v${pkgver}.zip")
source_arm=("https://cache.agilebits.com/dist/1P/op/pkg/v${pkgver}/op_linux_arm_v${pkgver}.zip")
source_armv6h=("${source_arm}")
source_aarch64=("${source_arm}")

sha256sums_x86_64=('8e75fe12895245271b52f8492dbae33f892cb9e62e25307813b02ef224f78103')
sha256sums_i686=('db9f8f3295df77cb87a6e106c8b1db1d0915cca13d6145db52658690615e0b6d')
sha256sums_arm=('dc3fbf6a24fc16578a521c5ac8b507473e9a57a42ae56b169c50324555b1ee1b')
sha256sums_armv6h=('dc3fbf6a24fc16578a521c5ac8b507473e9a57a42ae56b169c50324555b1ee1b')
sha256sums_aarch64=('dc3fbf6a24fc16578a521c5ac8b507473e9a57a42ae56b169c50324555b1ee1b')

check() {
  if (( ! SKIPPGPCHECK )); then
    gpg --verify-files ${srcdir}/op.sig
  fi
}

package() {
  install -Dm755 op "$pkgdir/usr/bin/op"
}

# vim:set ts=2 sw=2 et:
