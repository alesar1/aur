pkgname=rpmlauncher-git
pkgver=1.0.6+880.r1.g45fe3b5
pkgrel=1
pkgdesc="A multi-functional Minecraft Launcher power by the RPMTW Team, made with Flutter and Dart"
license=('GPL')
depends=('git')
makedepends=('ninja' 'cmake' 'clang' 'dart' 'flutter-beta')
arch=('x86_64')
checkdepends=()
optdepends=()
provides=('rpmlauncher')
conflicts=('rpmlauncher' 'rpmlauncher-bin')
replaces=()
backup=()
options=()
changelog=
source=('RPMLauncher::git+https://github.com/RPMTW/RPMLauncher#branch=develop')
md5sums=('SKIP')
pkgver(){
  cd "RPMLauncher"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}
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
  flutter build linux --dart-define="build_id=$build_id" --dart-define="version_type=debug" --dart-define="version=$version_id"
  chmod +x "$srcdir/RPMLauncher/build/linux/x64/release/bundle/RPMLauncher"
}
package() {
  mkdir -p "$pkgdir/usr/share/applications"
  mkdir -p "$pkgdir/opt/RPMLauncher"
  cp -R "$srcdir/RPMLauncher/build/linux/x64/release/bundle/." "$pkgdir/opt/RPMLauncher"
  echo "[Desktop Entry]
Categories=Game;ArcadeGame;
Comment=Edit
Encoding=UTF-8
Exec="/opt/RPMLauncher/RPMLauncher"
Icon="/opt/RPMLauncher/data/flutter_assets/assets/images/Logo.png"
Name=RPMLauncher
Path=/opt/RPMLauncher
StartupNotify=false
Terminal=false
Type=Application
Version=$PKGVER" >> "$pkgdir/usr/share/applications/RPMLauncher.desktop"
}
