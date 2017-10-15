# Contributor: Zeph <zeph33@gmail.com>
# Maintainer: Zeph <zeph33@gmail.com>
pkgname=pamac-aur
_pkgver=6.1.0
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
sha256sums=('2d63d33517c288f899eedab08c46dbae859d72b7c3f3a455a3e6622ce9b7851d')

prepare() {
  cd "$srcdir/pamac-$_pkgver"
  # patches here

  # adjust version string
  sed -i -e "s|\"$_pkgver\"|\"$pkgver-$pkgrel\"|g" src/manager_window.vala
}

build() {
  cd "$srcdir/pamac-$_pkgver"

  # build
  mkdir builddir  
  meson --prefix="$pkgdir"/usr --sysconfdir="$pkgdir"/etc ./ ./builddir/
}

package() {
  cd "$srcdir/pamac-$_pkgver/builddir"
  ninja
  ninja install
}
# vim:set ts=2 sw=2 et:
