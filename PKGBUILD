# Maintainer: Mélanie Chauvel (ariasuni) <perso@hack-libre.org>

_appname=whalebird
pkgname="$_appname-bin"
pkgver=3.0.0
pkgrel=1
pkgdesc='An Electron based Mastodon client for Windows, Mac and Linux'
arch=(x86_64)
url='https://whalebird.org/'
license=(MIT)
depends=(alsa-lib gconf gtk2 libxss libxtst nss)
source=("https://github.com/h3poteto/whalebird-desktop/releases/download/$pkgver/Whalebird-$pkgver-linux-x64.rpm")
sha256sums=('3fd537506f16cf144f5cd2107afc20e57c9703f6dd270acba28c828542f0a707')

package() {
  cp -R opt/ usr/ "$pkgdir"
  mkdir "$pkgdir/usr/bin"
  ln -s /opt/Whalebird/whalebird "$pkgdir/usr/bin/whalebird"
}
