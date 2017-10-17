# Maintainer: Frederic Bezies <fredbezies at gmail dot com> 
# Contributor: Zeph <zeph33@gmail.com>
# Based on the PKGBUILD created by Zeph <zeph33@gmail.com>

pkgname=('pamac-aur-git' 'pamac-aur-tray-appindicator-git') 
_pkgname=pamac
pkgver=v6.1.1.r1.g7ae235f
_pkgver=6.1
pkgrel=1
pkgdesc="A Gtk3 frontend for libalpm - git version"
arch=('any')
url="https://github.com/manjaro/pamac"
license=('GPL3')
depends=('glib2>=2.42' 'json-glib' 'libsoup' 'dbus-glib' 'polkit' 'vte3>=0.38' 'gtk3>=3.22' 'libnotify' 'desktop-file-utils' 'pacman>=5.0' 'pacman<5.1' 'gnutls>=3.4' 'appstream-glib' 'archlinux-appstream-data' 'libappindicator-gtk3')
optdepends=('polkit-gnome: needed for authentification in Cinnamon, Gnome'
            'lxsession: needed for authentification in Xfce, LXDE etc.')
makedepends=('gettext' 'itstool' 'vala>=0.36' 'meson' 'ninja')
options=(!emptydirs)

source=(git+https://github.com/manjaro/pamac.git)
sha256sums=('SKIP')

pkgver() {
	cd $_pkgname
  git describe --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  # adjust version string
  cd "$_pkgname"
  sed -i -e "s|\"$_pkgver\"|\"$pkgver-$pkgrel\"|g" src/manager_window.vala
  # patches here
}

build() {
  cd "$_pkgname"
  mkdir -p builddir
  cd builddir
  meson --prefix=/usr --sysconfdir=/etc -Denable-appindicator=true

  # build
  ninja
}

package_pamac-aur-git() {
  optdepends=('pamac-tray-appindicator-git: tray icon for KDE')
  backup=('etc/pamac.conf')
  replaces=('pamac-aur')
  install=pamac.install
  cd "$_pkgname"
  cd builddir
  DESTDIR="$pkgdir" ninja install
  # enable systemd timer
  mkdir -p "$pkgdir/etc/systemd/system/multi-user.target.wants"
  ln -sf "/usr/lib/systemd/system/pamac-cleancache.timer" "$pkgdir/etc/systemd/system/multi-user.target.wants"
  ln -sf "/usr/lib/systemd/system/pamac-mirrorlist.timer" "$pkgdir/etc/systemd/system/multi-user.target.wants"
  # remove pamac-tray-appindicator
  rm "$pkgdir/usr/bin/pamac-tray-appindicator"
  rm "$pkgdir/etc/xdg/autostart/pamac-tray-appindicator.desktop"
}

package_pamac-aur-tray-appindicator-git() {
  pkgdesc="Tray icon using appindicator which feets better in KDE - git version"
  depends=('pamac-aur-git' 'libappindicator-gtk3')
  cd "$_pkgname"
  install -Dm755 "builddir/src/pamac-tray-appindicator" "$pkgdir/usr/bin/pamac-tray-appindicator"
  install -Dm644 "data/applications/pamac-tray-appindicator.desktop" "$pkgdir/etc/xdg/autostart/pamac-tray-appindicator.desktop"
}

# vim:set ts=2 sw=2 et:


