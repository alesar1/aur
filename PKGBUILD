# Contributor: Zeph <zeph33@gmail.com>
# Maintainer: Zeph <zeph33@gmail.com>
# https://gitlab.manjaro.org/packages/extra/pamac
pkgname=pamac-aur
pkgver=7.3.1
pkgrel=1
_pkgfixver=$pkgver

_pkgvercommit=v$pkgver
#_pkgvercommit=dc9740eb755182dd32292b595512caebef5da1a2
sha256sums=('39a166701a604e69a426640fe80329398179954bc85091d1b419b288368f2295')

pkgdesc="A Gtk3 frontend for libalpm"
arch=('i686' 'x86_64' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://gitlab.manjaro.org/applications/pamac"
license=('GPL3')
depends=('glib2>=2.42' 'json-glib' 'libsoup' 'dbus-glib' 'polkit' 'vte3>=0.38' 'gtk3>=3.22'
         'libnotify' 'desktop-file-utils' 'pacman>=5.1' 'gnutls>=3.4'
         'appstream-glib' 'archlinux-appstream-data')

  optdepends=('polkit-gnome: needed for authentification in Cinnamon, Gnome'
              'lxsession: needed for authentification in Xfce, LXDE etc.'
              'pamac-tray-appindicator: tray icon for KDE')
makedepends=('gettext' 'itstool' 'vala>=0.36.6' 'meson' 'ninja' 'git' 'gobject-introspection')
backup=('etc/pamac.conf')
conflicts=('pamac')
provides=('pamac')
options=(!emptydirs)
install=pamac.install

source=("pamac-$pkgver-$pkgrel.tar.gz::$url/-/archive/$_pkgvercommit/pamac-$_pkgvercommit.tar.gz")

prepare() {
  cd "$srcdir/pamac-$_pkgvercommit"

  # adjust version string
  sed -i -e "s|\"$_pkgfixver\"|\"$pkgver-$pkgrel\"|g" src/version.vala
}

build() {
  cd "$srcdir/pamac-$_pkgvercommit"
  mkdir -p builddir
  cd builddir
  meson --prefix=/usr --sysconfdir=/etc

  # build
  ninja
}

package() {
  cd "$srcdir/pamac-$_pkgvercommit/builddir"
  
  DESTDIR="$pkgdir" ninja install
}
# vim:set ts=2 sw=2 et:
