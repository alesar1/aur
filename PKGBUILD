# Maintainer: Viachaslau Khalikin <vkhinegret@gmail.com>

pkgname=phoenix-emu-project
pkgver=2.3.4
pkgrel=1
pkgdesc="An emulator of 3DO consoles. 100% compatible!"
url="http://www.arts-union.ru/node/23"
license=('custom')
arch=('x86_64')
depends=('qt5-base' 'openal' 'glu')
install="phoenix-emu-project.install"
source=("http://www.arts-union.ru/sites/default/files/ph234-linux-x64.zip"
        phoenix-emu-project.desktop)
md5sums=('a3ab1a102a1788b91eeeb327d3191b1f'
         '7f9b5652c512887d7e034cc8c07b2045')
package() {
  cd "$srcdir"
  # about licenses
  install -d "$pkgdir/usr/share/licenses/phoenix-emu-project"
  install -m644 licenses.txt "$pkgdir/usr/share/licenses/phoenix-emu-project"
  # startup script and executable
  install -Dm755 PhoenixEmuProject-2.3.4 "$pkgdir/usr/bin/phoenix-emu-project"
  # desktop icon
  install -Dm645 phoenix-emu-project.desktop "$pkgdir/usr/share/applications/phoenix-emu-project.desktop"
  install -Dm644 logo.png "$pkgdir/usr/share/pixmaps/phoenix-emu-project-logo.png"
}
