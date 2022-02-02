# Maintainer: uint2048_t
# report pkgbuild bugs to uint2048_t
# report game bugs to morten@rashbox.org
pkgname=pengupop
pkgver=2.2.2
pkgrel=28
pkgdesc="Clone of the retro arcade game Bust-a-move"
arch=('x86_64')
url='https://fedoraproject.org/wiki/Games/pengupop'
license=('GPL')
depends=('sdl')
source=("https://dl.fedoraproject.org/pub/fedora/linux/development/rawhide/Everything/x86_64/os/Packages/p/pengupop-2.2.2-28.fc36.x86_64.rpm")
sha256sums=('275c62c232b2af35b84f2e9b813878691ca45eba1561da0566e7c251f55d2cd8')

package() {
  install -Dm755 usr/bin/pengupop "$pkgdir"/usr/bin/pengupop
  install -Dm755 usr/share/applications/pengupop.desktop "$pkgdir"/usr/share/applications/pengupop.desktop
  install -Dm755 usr/share/icons/hicolor/48x48/apps/pengupop.png "$pkgdir"/usr/share/icons/hicolor/48x48/apps/pengupop.png
}

