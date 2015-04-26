# Maintainer: Frederik "Freso" S. Olesen <freso.dk@gmail.com>
pkgname=minecraft-save-seed-reader
pkgver=1.7.2
pkgrel=1
pkgdesc='Allows you to toggle the game mode of Minecraft worlds/saves.'
arch=(any)
url='https://github.com/thedarkfreak/Minecraft-Save-Seed-Reader/wiki'
license=('BSD')
depends=('java-runtime')
optdepends=('minecraft: The game whose files this program modifies')
changelog=ChangeLog
source=(minecraft-save-seed-reader
        minecraft-save-seed-reader.desktop
        "https://github.com/thedarkfreak/Minecraft-Save-Seed-Reader/releases/download/version-${pkgver}/MinecraftSeed.${pkgver}.zip")
md5sums=('f103f56c33d74318ac25cf5de8ecc541'
         'e84426095bec15f3df09aa5900015c90'
         '13f7238c9c900519bf884c3184792383')

package() {
  cd "$srcdir"

  install -Dm755 'minecraft-save-seed-reader' "$pkgdir/usr/bin/minecraft-save-seed-reader"
  install -Dm644 'minecraft-save-seed-reader.desktop' "$pkgdir/usr/share/applications/minecraft-save-seed-reader.desktop"
  install -Dm644 'MinecraftSeed.jar' "$pkgdir/usr/share/$pkgname/MinecraftSeed.jar"
  install -Dm644 'README.txt' "$pkgdir/usr/share/doc/$pkgname/README.txt"
  install -Dm644 'CHANGELOG.txt' "$pkgdir/usr/share/doc/$pkgname/CHANGELOG.txt"
  install -Dm644 'LICENSE.txt' "$pkgdir/usr/share/licenses/$pkgname/LICENSE.txt"
  install -Dm644 'NOTICE.txt' "$pkgdir/usr/share/licenses/$pkgname/NOTICE.txt"
}

# vim:set ts=2 sw=2 et:
