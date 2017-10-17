# $Id$
# Maintainer: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Maintainer: Ionut Biru <ibiru@archlinux.org>
# Contributor: Michael Kanis <mkanis_at_gmx_dot_de>

# Patched package maintainer: Saren Arterius <saren@wtako.net>
# Patch origin: https://gist.github.com/DeadMetaler/12622bf9415c1100f2d436ffbd6778c6

pkgname=mutter-781835-workaround
_pkgname=mutter
pkgver=3.26.1+15+gb48c34979
pkgrel=1
pkgdesc="A window manager for GNOME"
url="https://git.gnome.org/browse/mutter"
arch=(i686 x86_64)
license=(GPL)
depends=(dconf gobject-introspection-runtime gsettings-desktop-schemas
         libcanberra startup-notification zenity libsm gnome-desktop upower
         libxkbcommon-x11 gnome-settings-daemon libgudev libinput pipewire)
makedepends=(intltool gobject-introspection git gnome-common)
provides=(mutter)
conflicts=(mutter)
groups=(gnome)
options=(!emptydirs)

_commit=b48c3497940883816416735f992aaae61396fbda  # gnome-3-26
source=("git+https://git.gnome.org/browse/mutter#commit=$_commit"
        startup-notification.patch)
sha256sums=('SKIP'
            '5a35ca4794fc361219658d9fae24a3ca21a365f2cb1901702961ac869c759366')

pkgver() {
  cd $_pkgname
  git describe --tags | sed 's/-/+/g'
}

prepare() {
  cd $_pkgname

  # Revert offending commit
  git revert -n 383ba566bd7c2a76d0856015a66e47caedef06b6

  # https://bugs.archlinux.org/task/51940
  patch -Np1 -i ../startup-notification.patch

  NOCONFIGURE=1 ./autogen.sh
}

build() {
  cd $_pkgname

  # Try to get a bit more performance out of this fps-critical component
  CFLAGS+=" -O3 -flto=jobserver"
  LDFLAGS+=" $CFLAGS"

  ./configure --prefix=/usr --sysconfdir=/etc --localstatedir=/var \
      --libexecdir=/usr/lib/$_pkgname --disable-static \
      --disable-schemas-compile --enable-compile-warnings=minimum \
      --enable-gtk-doc --enable-egl-device --enable-remote-desktop

  #https://bugzilla.gnome.org/show_bug.cgi?id=655517
  sed -e 's/ -shared / -Wl,-O1,--as-needed\0/g' \
      -i {.,cogl,clutter}/libtool

  make
}

package() {
  cd $_pkgname
  make DESTDIR="$pkgdir" install
}
