# Contributor: Hy Goldsher <hyness-at-freshlegacycode-dot-org>
# Maintainer: Hy Goldsher <hyness-at-freshlegacycode-dot-org>
pkgname=davmail
pkgver=5.5.1
pkgrel=2
pkgdesc="a POP/IMAP/SMTP/Caldav/LDAP gateway for the exchange service"
arch=('i686' 'x86_64' 'armv7h' 'aarch64')
url="http://$pkgname.sourceforge.net/"
license=('GPL')
makedepends=('unzip')
depends=('java-runtime')
optdepends=('java-openjfx: Office 365 browser based authentication')
_rev=3299
source=(http://downloads.sourceforge.net/$pkgname/$pkgname-$pkgver-$_rev.zip
        $pkgname.desktop
        $pkgname.sh
        $pkgname@.system_service
        $pkgname@.user_service)
md5sums=('ae194c3571e107081164913a001d6f27'
         '1df37a6120d88de8df3cb735977336ba'
         '1eb24ff2a814058e55846a8e8f238f9b'
         '8d373851babe1d8bb860228c8b4db702'
         '271e9e66dfdb496d242c9a6102937c65')
install=$pkgname.install

package() {
  install -d $pkgdir/{usr/share/java/$pkgname/lib,usr/bin,etc/$pkgname}
  install -Dm644 $pkgname.jar $pkgdir/usr/share/java/$pkgname/
  install -D lib/* $pkgdir/usr/share/java/$pkgname/lib
  install -Dm755 $srcdir/$pkgname.sh $pkgdir/usr/share/java/$pkgname
  ln -s /usr/share/java/$pkgname/$pkgname.sh $pkgdir/usr/bin/$pkgname
  install -Dm644 $srcdir/$pkgname.desktop ${pkgdir}/usr/share/applications/$pkgname.desktop
  install -Dm644 $srcdir/$pkgname\@.system_service ${pkgdir}/usr/lib/systemd/system/$pkgname\@.service
  install -Dm644 $srcdir/$pkgname\@.user_service ${pkgdir}/usr/lib/systemd/user/$pkgname\@.service

  # Create icons
  unzip -q $pkgname.jar tray.png tray32.png tray48.png tray128.png
  install -Dm644 tray.png ${pkgdir}/usr/share/icons/hicolor/16x16/apps/$pkgname.png
  install -Dm644 tray32.png ${pkgdir}/usr/share/icons/hicolor/32x32/apps/$pkgname.png
  install -Dm644 tray48.png ${pkgdir}/usr/share/icons/hicolor/48x48/apps/$pkgname.png
  install -Dm644 tray128.png ${pkgdir}/usr/share/icons/hicolor/128x128/apps/$pkgname.png
}
