# Maintainer: Your name <bros at brocode dot sh>

pkgname=fw
pkgver=1.14.1
pkgrel=1
pkgdesc="faster workspace management"
depends=('fzf')
arch=('x86_64')
url="https://github.com/brocode/fw"
license=('WTFPL')
source=('https://github.com/brocode/fw/releases/download/1.14.1/fw')
sha256sums=('40dfa0db0775ed493b6741cb2dbf158fefaa34fa1b3f89d31533d8811ccfbd41')

package() {
  mkdir -p "${pkgdir}/usr/bin"
  chmod +x fw
  cp fw "${pkgdir}/usr/bin/fw"
}

