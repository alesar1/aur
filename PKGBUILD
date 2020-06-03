# Maintainer: Petr Mrázek <petr@mojang.com>
pkgname=minecraft-launcher
pkgver=2.1.15166
pkgrel=1
pkgdesc="Official Minecraft Launcher"
arch=('x86_64')
url="https://mojang.com/"
license=('All rights reserved')
depends=('java-runtime' 'xorg-xrandr' 'libxss' 'libx11' 'libxcb' 'alsa-lib' 'gtk2' 'gtk3' 'gconf' 'libxtst' 'nss')
optdepends=('flite: narrator support')
conflicts=('minecraft-launcher-beta')
provides=('minecraft-launcher-beta')
source=(
https://launcher.mojang.com/download/linux/x86_64/minecraft-launcher_${pkgver}.tar.gz
minecraft-launcher.desktop
https://launcher.mojang.com/download/minecraft-launcher.svg
)
sha256sums=(
'1c7ab4a11384ba1f85c3549090484f14a51c0277d0fa25c5fffb8333e60f0493'
'677e2442a1ae83cc58d8d403666e508129e97dbed37fdfafdceac6101dc0dee7'
'35c2bcaeb09fa4b8864e9422fd66bf60847706f8b4400ec4a66ba6436b101f71'
)

build() {

  cd "$srcdir/minecraft-launcher"

}

package () {

  cd "$pkgdir"

  mkdir -p "opt"
  mkdir -p "usr/bin"

  install -Dm644 "$srcdir/minecraft-launcher.svg"    "$pkgdir/usr/share/icons/hicolor/symbolic/apps/minecraft-launcher.svg"

  install -Dm644 "$srcdir/minecraft-launcher.desktop"    "$pkgdir/usr/share/applications/minecraft-launcher.desktop"

  cp -Rv "$srcdir/minecraft-launcher" "$pkgdir/opt/$pkgname"
  ln -s "/opt/$pkgname/minecraft-launcher" "$pkgdir/usr/bin/$pkgname"

}
