# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Co-Maintainer: Slimbook <dev at slimbook dot es>
pkgname=slimbookamdcontroller
pkgver=0.3.4beta
pkgrel=6
pkgdesc="Application for the performance management of AMD processors"
arch=('any')
url="https://github.com/slimbook/slimbookamdcontroller"
license=('GPL')
depends=('dbus-python' 'gtk3' 'libappindicator-gtk3' 'libnotify' 'python-gobject'
         'python-pillow' 'python-pyamdgpuinfo' 'ryzenadj' 'systemd-libs')
install="$pkgname.install"
source=("https://github.com/slimbook/slimbookamdcontroller/releases/download/v0.3.4betA/${pkgname}_${pkgver}_all.deb")
sha256sums=('221448371218785671e50f5acce9a8b0d4497d34bb88ba93dd6d8417a0544790')

package() {
  bsdtar xf data.tar.xz -C "$pkgdir"

  ln -s /usr/bin/ryzenadj "$pkgdir/usr/share/$pkgname"

  # Remove duplicate GPL license & changelog.gz
  rm -rf "$pkgdir/usr/share/doc"

  # Install locales
  cd "$pkgdir/usr/share/$pkgname/src/locale"
  for lang in $(ls -d */); do
    install -d "$pkgdir/usr/share/locale/${lang}LC_MESSAGES"
    mv "$pkgdir/usr/share/$pkgname/src/locale/${lang}LC_MESSAGES"/*.mo \
      "$pkgdir/usr/share/locale/${lang}LC_MESSAGES"
  done
  rm -rf "$pkgdir/usr/share/$pkgname/src/locale"
  rm "$pkgdir/usr/share/$pkgname/src/update_po.sh"

  # App permissions
  chmod +x "$pkgdir/usr/lib/systemd/system-sleep/$pkgname"
  chmod -R 755 "$pkgdir/usr/share/$pkgname/src"
}
