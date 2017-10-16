# Contributor: Zeph <zeph33@gmail.com>
# Maintainer: Zeph <zeph33@gmail.com>
pkgname=pamac-aur
_pkgver=6.1.1
pkgver=$_pkgver
pkgrel=1
pkgdesc="A Gtk3 frontend for libalpm"
arch=('i686' 'x86_64' 'armv6h' 'armv7')
url="https://github.com/manjaro/pamac"
license=('GPL3')
depends=('glib2>=2.42' 'json-glib' 'libsoup' 'dbus-glib' 'polkit' 'vte3>=0.38' 'gtk3>=3.22'
         'libnotify' 'desktop-file-utils' 'pacman>=5.0' 'gnutls>=3.4'
         'appstream-glib' 'archlinux-appstream-data')

  optdepends=('polkit-gnome: needed for authentification in Cinnamon, Gnome'
              'lxsession: needed for authentification in Xfce, LXDE etc.'
              'pamac-tray-appindicator: tray icon for KDE')
makedepends=('gettext' 'itstool' 'vala>=0.36' 'meson' 'ninja')
backup=('etc/pamac.conf')
conflicts=('pamac')
provides=('pamac')
options=(!emptydirs)
install=pamac.install

source=("pamac-$pkgver-$pkgrel.tar.gz::$url/archive/v$_pkgver.tar.gz")
sha256sums=('fb4d8f9754ca11d32132cbf5d8c8cb49963e53e39069d3801ced45d3902544a5')

prepare() {
  cd "$srcdir/pamac-$_pkgver"
  # patches here

  # adjust version string
  sed -i -e "s|\"$_pkgver\"|\"$pkgver-$pkgrel\"|g" src/manager_window.vala
}

build() {
  cd "$srcdir/pamac-$_pkgver"
  mkdir -p builddir  
  cd builddir
#  meson --prefix="$pkgdir"/usr --sysconfdir="$pkgdir"/etc ./ ./builddir/
  meson --prefix=/usr --sysconfdir=/etc

  # build
  ninja
}

package() {
  cd "$srcdir/pamac-$_pkgver/builddir"
  
  DESTDIR="$pkgdir" ninja install
  # enable systemd timer
  mkdir -p "$pkgdir/etc/systemd/system/multi-user.target.wants"
  ln -sf "/usr/lib/systemd/system/pamac-cleancache.timer" "$pkgdir/etc/systemd/system/multi-user.target.wants"
  
  # remove pamac-tray-appindicator
#  rm "$pkgdir/usr/bin/pamac-tray-appindicator"
#  rm "$pkgdir/etc/xdg/autostart/pamac-tray-appindicator.desktop"
}
# vim:set ts=2 sw=2 et:
