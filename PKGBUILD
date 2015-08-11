# Maintainer: Julian Sparber <julian@sparber.net>
# Maintainer: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Maintainer: Ionut Biru <ibiru@archlinux.org>
# Contributor: Michael Kanis <mkanis_at_gmx_dot_de>

pkgname=mutter-hide-legacy-decorations
_pkgname=mutter
pkgver=3.16.3
pkgrel=1
pkgdesc="A window manager for GNOME (with a little hack to hide the window decorations on maximized legacy applications)"
arch=(i686 x86_64)
license=('GPL')
depends=('clutter' 'dconf' 'gobject-introspection-runtime' 'gsettings-desktop-schemas' 'libcanberra' 'startup-notification' 'zenity' 'libsm' 'gnome-desktop' 'upower' 'libxkbcommon-x11' 'gnome-settings-daemon')
makedepends=('intltool' 'libxkbcommon-x11' 'gobject-introspection')
conflicts=('mutter-wayland' 'mutter')
replaces=('mutter-wayland' 'mutter')
provides=('mutter')
url="https://github.com/jsparber/mutter-hide-legacy-decorations"
groups=('gnome')
options=('!emptydirs')
install=mutter.install
source=("http://ftp.gnome.org/pub/gnome/sources/${_pkgname}/${pkgver:0:4}/${_pkgname}-$pkgver.tar.xz" "hideTitlebar.patch")

sha256sums=('ee0098487d1bfb8f28e3927fbb9df227d846555142d352f8693f56a08441c755' 'ec1a0f5f98213c340e907761e72fc3e22cb9c8ff503c6c234a4a41aac4ec7ac4')

prepare() {
  cd "${_pkgname}-$pkgver"
}

build() {
  cd "${_pkgname}-$pkgver"
  patch -p1 -i $srcdir/hideTitlebar.patch

  ./configure --prefix=/usr --sysconfdir=/etc \
      --libexecdir=/usr/lib/mutter \
      --localstatedir=/var --disable-static \
      --disable-schemas-compile --enable-compile-warnings=minimum

  #https://bugzilla.gnome.org/show_bug.cgi?id=655517
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool

  make
}

package() {
  cd "${_pkgname}-$pkgver"
  make DESTDIR="$pkgdir" install
}
