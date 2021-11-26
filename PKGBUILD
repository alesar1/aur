# Maintainer: Steffen Hansen <steffengrundsoe@gmail.com>
pkgname=quickgui
pkgver=1.1.5
pkgrel=2
pkgdesc="A Flutter frontend for quickget and quickemu"
arch=('x86_64')
url="https://github.com/quickgui/quickgui"
license=('unknown')
depends=('quickemu' 'zenity')
makedepends=('flutter' 'cmake' 'ninja' 'clang')
provides=("$pkgname")
conflicts=("$pkgname")
source=("$pkgname-$pkgver.tar.xz"::"https://github.com/quickgui/quickgui/archive/refs/tags/v$pkgver.tar.gz")
sha256sums=('6c644d91cab88fe53cd3cba52dedb54fd500e2e0385d803846d961f39c517683')

package() {
  cd "$pkgname-$pkgver"

  flutter build linux --release

  install -Dm755 build/linux/x64/release/bundle/quickgui "$pkgdir/opt/$pkgname/quickgui"
  install -Dm644 assets/resources/quickgui.desktop "${pkgdir}/usr/share/applications/quickgui.desktop"
  install -Dm644 assets/resources/quickgui_512.png "${pkgdir}/usr/share/icons/quickgui_512.png"

  cp -R build/linux/x64/release/bundle/data "$pkgdir/opt/$pkgname"
  cp -R build/linux/x64/release/bundle/lib "$pkgdir/opt/$pkgname"

  install -d "$pkgdir/usr/bin/"
  ln -s /opt/$pkgname/quickgui "$pkgdir/usr/bin/quickgui"
}
