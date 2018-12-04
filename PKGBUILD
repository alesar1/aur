# Maintainer: Marco Donadoni <marcodonadoni at live dot it>
# Contributor: Jeroen Rijken <jeroen dot rijken at gmail dot com>
pkgname=archi
pkgver=4.3.1
pkgrel=1
pkgdesc="Free, open source, cross-platform tool and editor to create ArchiMate models."
arch=('x86_64')
url="http://www.archimatetool.com/"
license=('MIT')
depends=('java-runtime-openjdk=8' 'bash')
optdepends=('webkitgtk2: hints view support')
provides=('archi')
source=('https://www.archimatetool.com/downloads/4.3.1/Archi-Linux64-4.3.1.tgz'
        "$pkgname.desktop"
        "$pkgname-launcher.sh"
        'LICENSE')
md5sums=('3299c60bd55f32d0d885b5fdda968f23'
         '7b9a0cf8e67790ff9ca1afc6578e3adc'
         '7813e905142baeb290d396e349beeb13'
         '66653b079752362c3e9fc7142027cb7e')

package() {
  cd "$srcdir"

  # Docs
  install -d "$pkgdir/usr/share/doc/$pkgname"
  install -m644 Archi/docs/*       "$pkgdir/usr/share/doc/$pkgname/"
  install -m644 Archi/README       "$pkgdir/usr/share/doc/$pkgname/"

  # Icon and desktop file
  install -Dm644 Archi/icon.xpm     "$pkgdir/usr/share/pixmaps/$pkgname.xpm"
  install -Dm644 "$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"

  # Launcher
  install -Dm755 "$pkgname-launcher.sh" "$pkgdir/usr/bin/$pkgname"
  
  # Copy binaries
  rm -R Archi/docs
  rm Archi/icon.xpm Archi/README Archi/Archi-Ubuntu.sh
  install -d "$pkgdir/opt"
  cp -R Archi/ "$pkgdir/opt/$pkgname"
  chmod 755 "$pkgdir/opt/$pkgname/Archi"

  # Install license
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

