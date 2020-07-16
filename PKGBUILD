# Maintainer: David Mehren <david.mehren@udo.edu>

pkgname=element-desktop-nightly-bin
pkgver=2020071501
pkgrel=1
pkgdesc="All-in-one secure chat app for teams, friends and organisations (nightly .deb build)."
arch=('x86_64')
url="https://element.io"
license=('Apache')
source=("https://packages.riot.im/debian/pool/main/e/element-nightly/element-nightly_${pkgver}_amd64.deb"
        "element-desktop-nightly.sh")
sha256sums=('180d448916fceec2012eaf09ddb93f8eb4d92800bf410d1f5ca1f52a62288554'
            '583d2888a1f13ddc1999814b3676046eeb3f448def1c9003ef69b158c4b922c9')
replaces=('riot-desktop-nightly-bin')

package() {
  msg2 "Extracting the data.tar.xz..."
  bsdtar -xf data.tar.xz -C "$pkgdir/"
  install -Dm755 "${srcdir}"/element-desktop-nightly.sh "${pkgdir}"/usr/bin/element-desktop-nightly
}
