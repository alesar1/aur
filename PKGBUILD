# Maintainer: Luca Weiss <luca (at) z3ntu (dot) xyz>

pkgname=polychromatic
pkgver=0.3.7.1
pkgrel=1
pkgdesc='A graphical front end for managing Razer peripherals under GNU/Linux.'
arch=('any')
license=('GPL2')
source=("$pkgname-v$pkgver.tar.gz::https://github.com/lah7/polychromatic/archive/v$pkgver.tar.gz")
url='https://github.com/lah7/polychromatic'
makedepends=('rsync')
depends=('python' 'hicolor-icon-theme' 'python-razer' 'webkit2gtk' 'libappindicator-gtk3')
sha512sums=('985430cbc71550d9389119819e600d2d8c69308b1cd10e44c0a06752095a5db4797082c30ca7efb627ff4f130d65dd610a819aa8c0c36b9065fc991fff036e70')

package() {  
  _pythondir=$(python -c "from distutils.sysconfig import get_python_lib; print(get_python_lib())")

  cd $srcdir/$pkgname-$pkgver

  mkdir -p $pkgdir/etc/xdg/autostart
  mkdir -p $pkgdir/usr/bin
  mkdir -p $pkgdir/usr/share/polychromatic
  mkdir -p $pkgdir/usr/share/icons/hicolor
  mkdir -p $pkgdir/usr/share/locale
  mkdir -p $pkgdir/usr/share/applications
  mkdir -p $pkgdir/$_pythondir/polychromatic
  
  ### Modified parts from script in install/install.sh
  # Copy bin files.
  cp polychromatic-controller $pkgdir/usr/bin
  cp polychromatic-tray-applet $pkgdir/usr/bin
  chmod +x $pkgdir/usr/bin/polychromatic-controller
  chmod +x $pkgdir/usr/bin/polychromatic-tray-applet

  # Copy data files.
  cp -r data/* $pkgdir/usr/share/polychromatic

  # Copy Python modules
  cp -r pylib/* $pkgdir/$_pythondir/polychromatic

  # Copy icons
  cp -r install/hicolor/* $pkgdir/usr/share/icons/hicolor/

  # Copy locales
  rsync -rlpt --exclude="polychromatic-controller.pot" --exclude="polychromatic-tray-applet.pot" --exclude=*.po "locale/" $pkgdir/usr/share/locale

  # Copy desktop launchers
  cp "install/polychromatic-controller.desktop" $pkgdir/usr/share/applications
  cp "install/polychromatic-tray-applet.desktop" $pkgdir/usr/share/applications

  # Create an autostart entry for tray applet.
  cp "install/polychromatic-tray-applet.desktop" $pkgdir/etc/xdg/autostart
}

# vim:set ts=2 sw=2 et:
