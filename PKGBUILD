# Maintainer: Patrick Haun <bomgar85 at googlemail dot com>


pkgname=dotcopter
pkgver=0.4.5
pkgrel=1
pkgdesc="A small tool to manage dotfile installation."
arch=('x86_64')
url="https://github.com/bomgar/dotcopter"
license=('Apache-2.0')
source=('https://github.com/bomgar/dotcopter/releases/download/0.4.5/dotcopter')
sha256sums=('64e98d4fd5e2b9aa796dd9701ea655154d76d146c759b3c376462a9478ea5c1b')

package() {
  mkdir -p "${pkgdir}/usr/bin"
  chmod +x dotcopter
  cp dotcopter "${pkgdir}/usr/bin/dotcopter"
}

