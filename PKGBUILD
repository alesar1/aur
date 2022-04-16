# Maintainer: UltimateKyle

pkgname=rpmlauncher
pkgver=1.0.6+859
pkgrel=1
pkgdesc="A better Minecraft Launcher that supports cross-platform and many functionalities for you to explore!"
license=('GPL3')
depends=()
makedepends=('git' 'ninja' 'cmake' 'clang' 'dart' 'flutter-beta')
arch=('x86_64')
source=("git+https://github.com/RPMTW/RPMLauncher#branch=main")
md5sums=('SKIP')

prepare(){
  cd "RPMLauncher"
  flutter config --enable-linux-desktop
}

build(){
  cd "$srcdir/RPMLauncher/"
  build_id=`git describe --tags --abbrev=0 | sed 's/[0-9]*\.[0-9]*\.[0-9]*\.//'`
  version_id=`git describe --tags --abbrev=0 | sed "s/\.$build_id//"`
  dart pub global activate cider
  dart pub global run cider version $version_id
  flutter build linux --dart-define="build_id=$build_id" --dart-define="version_type=stable" --dart-define="version=$version_id"
  chmod +x "$srcdir/RPMLauncher/build/linux/x64/release/bundle/RPMLauncher"
}

package() {
  mkdir -p "$pkgdir/usr/share/applications"
  mkdir -p "$pkgdir/opt/RPMLauncher"
  cp -R "$srcdir/RPMLauncher/build/linux/x64/release/bundle/." "$pkgdir/opt/RPMLauncher"
  echo "[Desktop Entry]
Categories=Game;ArcadeGame;
Comment="A better Minecraft Launcher that supports cross-platform and many functionalities for you to explore!"
Encoding=UTF-8
Exec="/opt/RPMLauncher/RPMLauncher --origin archUserRepository"
Icon="/opt/RPMLauncher/data/flutter_assets/assets/images/Logo.png"
Name=RPMLauncher
Path=/opt/RPMLauncher
StartupNotify=false
Terminal=false
Type=Application
Version=$PKGVER" >> "$pkgdir/usr/share/applications/RPMLauncher.desktop"
}
