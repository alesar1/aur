# Maintainer: Frederic Bezies <fredbezies at gmail dot com> 
# Contributor: Zeph <zeph33@gmail.com>
# Based on the PKGBUILD created by Zeph <zeph33@gmail.com>

pkgname=('pamac-aur-git')
_pkgname=pamac
pkgver=10.3.0.r17.gfe5ebe9
_pkgver=10.3.0
pkgrel=2
pkgdesc="A Gtk3 frontend for libalpm - git version"
arch=('i686' 'pentium4' 'x86_64' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://gitlab.manjaro.org/applications/pamac"
license=('GPL3')
depends=('libnotify' 'libpamac-git' 'libhandy')
optdepends=('polkit-gnome: needed for authentification in Cinnamon, Gnome'
            'lxsession: needed for authentification in Xfce, LXDE etc.')
makedepends=('gettext' 'itstool' 'vala' 'meson' 'ninja' 'gobject-introspection' 'xorgproto' 'asciidoc' 'git')
options=(!emptydirs)
# Only for Manjaro users who should not use it...
provides=('pamac')
conflicts=('pamac' 'pamac-all' 'pamac-aur' 'pamac-all-git')
# End of Manjaro users section
source=(git+https://gitlab.manjaro.org/applications/$_pkgname.git
	gnome42.patch
	metadata.patch)
sha256sums=('SKIP'
            'c1e946a4719754a932b84786d94f2be2f086909aae016f9d5f78df29ad170483'
            'd161347f13f87fbe0c66d8d6ef71291dc8caec904e72ccaf222d93396d0ced9d')

pkgver() {
  cd $_pkgname
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g' | cut -c2-48
}

prepare() {
  # adjust version string
  cd $_pkgname
  sed -i -e "s|\"$_pkgver\"|\"$pkgver-$pkgrel\"|g" src/manager_window.vala
  # patches here
  # First patch courtesy of Barnabás Pőcze
  patch -Np1 < ../gnome42.patch
  patch -Np1 < ../metadata.patch
}

build() {
  cd $_pkgname
  mkdir -p builddir
  cd builddir
  meson --prefix=/usr --sysconfdir=/etc --buildtype=release -Denable-fake-gnome-software=true
  # build
  ninja
}

package() {
  conflicts=('pamac-aur')
  install=pamac.install
  cd $_pkgname
  cd builddir
  DESTDIR="$pkgdir" ninja install
  # removed pamac-mirrorlist-timer, useless for Archlinux
  # remove pamac-gnome-integration
  rm "$pkgdir/usr/bin/gnome-software"
  rm "$pkgdir/usr/share/applications/org.gnome.Software.desktop"
  rm "$pkgdir/usr/share/dbus-1/services/org.gnome.Software.service"

}

#vim:set ts=2 sw=2 et:
