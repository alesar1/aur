# Contributor: Balló György <ballogyor+arch at gmail dot com>

pkgname=dooble
pkgver=2020.07.07
pkgrel=1
pkgdesc="Web browser based on QtWebEngine"
arch=(x86_64)
url="https://textbrowser.github.io/dooble/"
license=('BSD')
depends=('qt5-webengine')
source=("$pkgname-$pkgver.tar.gz::https://github.com/textbrowser/$pkgname/archive/$pkgver.tar.gz")
sha256sums=('589e5694bb9d819f23a8a32c4f794368b5f604d932195dcb2f9457b431e60e2c')

prepare() {
  cd $pkgname-$pkgver/2.x
  sed -i 's/-Werror //' dooble.pro
  sed -i 's|Categories=Web|Categories=Network;Qt;WebBrowser;|
          s|Exec=.*|Exec=dooble|
          s|Icon=.*|Icon=dooble|' dooble.desktop
  sed -i 's|QString path(QDir::currentPath());|QString path("/usr/share/dooble");|' Source/dooble_settings.cc
}

build() {
  cd $pkgname-$pkgver/2.x
  qmake
  make
}

package() {
  cd $pkgname-$pkgver/2.x
  install -Dm755 Dooble "$pkgdir/usr/bin/dooble"
  install -Dm644 Icons/Logo/dooble.png "$pkgdir/usr/share/pixmaps/dooble.png"
  install -Dm644 dooble.desktop "$pkgdir/usr/share/applications/dooble.desktop"
  install -Dm644 -t "$pkgdir/usr/share/dooble/Translations" Translations/dooble_*.qm
  install -Dm644 ../LICENSE "$pkgdir/usr/share/licenses/dooble/LICENSE"
}
