# This file was generated by GoReleaser. DO NOT EDIT.
# Maintainer: jonah <me@jon4hz.io>

pkgname='wishbox-bin'
pkgver=0.5.2
pkgrel=1
pkgdesc='wishlist using netbox as inventory source'
url='https://jon4hz.io'
arch=('aarch64' 'armv7h' 'i686' 'x86_64')
license=('MIT')
provides=('wishbox')
conflicts=('wishbox')

source_aarch64=("${pkgname}_${pkgver}_aarch64.tar.gz::https://github.com/jon4hz/wishbox/releases/download/v0.5.2/wishbox-v0.5.2-linux-arm64.tar.gz")
sha256sums_aarch64=('f06c6c1e681ed81066e1be61b40074e3b8bdc46c46cbbf4fa6028914d0cc943a')

source_armv7h=("${pkgname}_${pkgver}_armv7h.tar.gz::https://github.com/jon4hz/wishbox/releases/download/v0.5.2/wishbox-v0.5.2-linux-armv7.tar.gz")
sha256sums_armv7h=('78287349a45581f1a7a31e04eff5ea9de56cfaca893e55b2c081d8d481b0287b')

source_i686=("${pkgname}_${pkgver}_i686.tar.gz::https://github.com/jon4hz/wishbox/releases/download/v0.5.2/wishbox-v0.5.2-linux-386.tar.gz")
sha256sums_i686=('b0b01003738dd08ebee75e3cdbb4f73b11a46d61a62b576632fe7f8295409342')

source_x86_64=("${pkgname}_${pkgver}_x86_64.tar.gz::https://github.com/jon4hz/wishbox/releases/download/v0.5.2/wishbox-v0.5.2-linux-amd64.tar.gz")
sha256sums_x86_64=('6e04b96619a6204ef47a77560778a0c66167a6a54694572429bceeae685b48d5')

package() {
  # bin
  install -Dm755 "./wishbox" "${pkgdir}/usr/bin/wishbox"
  # license
  install -Dm644 "./LICENSE" "${pkgdir}/usr/share/licenses/wishbox/LICENSE"
  # completions
  mkdir -p "${pkgdir}/usr/share/bash-completion/completions/"
  mkdir -p "${pkgdir}/usr/share/zsh/site-functions/"
  mkdir -p "${pkgdir}/usr/share/fish/vendor_completions.d/"
  install -Dm644 "./completions/wishbox.bash" "${pkgdir}/usr/share/bash-completion/completions/wishbox"
  install -Dm644 "./completions/wishbox.zsh" "${pkgdir}/usr/share/zsh/site-functions/_wishbox"
  install -Dm644 "./completions/wishbox.fish" "${pkgdir}/usr/share/fish/vendor_completions.d/wishbox.fish"
  # man pages
  install -Dm644 "./manpages/wishbox.1.gz" "${pkgdir}/usr/share/man/man1/wishbox.1.gz"
}
