# Maintainer: Mélanie Chauvel (ariasuni) <perso@hack-libre.org>

_appname=whalebird
pkgname="$_appname-bin"
pkgver=4.0.1
pkgrel=1
pkgdesc='An Electron based Mastodon client for Windows, Mac and Linux'
arch=(x86_64)
url='https://whalebird.org/'
license=(MIT)
depends=(c-ares ffmpeg gtk3 http-parser libevent libvpx libxslt libxss minizip nss re2 snappy libnotify libappindicator-gtk3)
source=("https://github.com/h3poteto/whalebird-desktop/releases/download/$pkgver/Whalebird-$pkgver-linux-x64.rpm")
sha256sums=('6ca97b967044b9c41f6f6474f70d124e47c9351a0f648a2031d651ea29044b59')

package() {
  mkdir -p "$pkgdir/usr/bin"
  cp -R opt "$pkgdir/"
  cp -R usr/share "$pkgdir/usr/"
  ln -s /opt/Whalebird/whalebird "$pkgdir/usr/bin/whalebird"
}
