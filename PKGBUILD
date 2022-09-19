# This file was generated by GoReleaser. DO NOT EDIT.
# Maintainer: Fernandez Ludovic <lfernandez dot dev at gmail dot com>
# Maintainer: Carlos Alexandro Becker <carlos at becker dot software>

pkgname='goreleaser-bin'
pkgver=1.11.4
pkgrel=1
pkgdesc='Deliver Go binaries as fast and easily as possible'
url='https://goreleaser.com'
arch=('aarch64' 'armv7h' 'i686' 'x86_64')
license=('MIT')
provides=('goreleaser')
conflicts=('goreleaser')

source_aarch64=("${pkgname}_${pkgver}_aarch64.tar.gz::https://github.com/goreleaser/goreleaser/releases/download/v1.11.4/goreleaser_Linux_arm64.tar.gz")
sha256sums_aarch64=('71a5800ac293fee4e49bc6a926fc9ac9d60e90632bd065ad3db741ee2be5669a')

source_armv7h=("${pkgname}_${pkgver}_armv7h.tar.gz::https://github.com/goreleaser/goreleaser/releases/download/v1.11.4/goreleaser_Linux_armv7.tar.gz")
sha256sums_armv7h=('33e1fab0981d5071f86023d68f3d0b5b37b52f894cc4d857a69863d8ab1a1144')

source_i686=("${pkgname}_${pkgver}_i686.tar.gz::https://github.com/goreleaser/goreleaser/releases/download/v1.11.4/goreleaser_Linux_i386.tar.gz")
sha256sums_i686=('5e18bd1c010e196a2a0e31c63257e4f938a05eb86277336f4d1d4047667863ef')

source_x86_64=("${pkgname}_${pkgver}_x86_64.tar.gz::https://github.com/goreleaser/goreleaser/releases/download/v1.11.4/goreleaser_Linux_x86_64.tar.gz")
sha256sums_x86_64=('55c2a911b33f1da700d937e51696a8be376fe64afe6f6681fd194456a640c3d6')

package() {
  # bin
  install -Dm755 "./goreleaser" "${pkgdir}/usr/bin/goreleaser"

  # license
  install -Dm644 "./LICENSE.md" "${pkgdir}/usr/share/licenses/goreleaser/LICENSE"

  # completions
  mkdir -p "${pkgdir}/usr/share/bash-completion/completions/"
  mkdir -p "${pkgdir}/usr/share/zsh/site-functions/"
  mkdir -p "${pkgdir}/usr/share/fish/vendor_completions.d/"
  install -Dm644 "./completions/goreleaser.bash" "${pkgdir}/usr/share/bash-completion/completions/goreleaser"
  install -Dm644 "./completions/goreleaser.zsh" "${pkgdir}/usr/share/zsh/site-functions/_goreleaser"
  install -Dm644 "./completions/goreleaser.fish" "${pkgdir}/usr/share/fish/vendor_completions.d/goreleaser.fish"

  # man pages
  install -Dm644 "./manpages/goreleaser.1.gz" "${pkgdir}/usr/share/man/man1/goreleaser.1.gz"
}
