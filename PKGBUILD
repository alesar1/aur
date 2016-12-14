# Maintainer: Norbert Pfeiler <norbert.pfeiler ät gmail.com>
# Contributor: Christian Assfalg <ch.assfalg_at_gmx_dot_de>
# Patch by Jan Holthuis
# Also Maintainers and Contributors of the ›mutter‹ package, this package is based on

_realname=mutter
pkgname=$_realname-catalyst
pkgver=3.22.2+5+gd9fc81e
pkgrel=1
pkgdesc="A window manager for GNOME with patches for catalyst compatibility"
url="https://git.gnome.org/browse/mutter"
arch=(i686 x86_64)
license=('GPL')
depends=('dconf'
  'gobject-introspection-runtime'
  'gsettings-desktop-schemas'
  'libcanberra'
  'startup-notification'
  'zenity'
  'libsm'
  'gnome-desktop'
  'upower'
  'libxkbcommon-x11'
  'gnome-settings-daemon'
  'libgudev'
  'libinput'
)
makedepends=('intltool'
  'gobject-introspection'
  'git'
  'gnome-common'
)
conflicts=('mutter' "gnome-shell>${pkgver:0:6}+999")
provides=("mutter=${pkgver}")
groups=('gnome')
options=('!emptydirs')
_commit=d9fc81e702a949980323b0f11b6764fcd1599872  # gnome-3-22
source=("git+https://git.gnome.org/browse/mutter#commit=$_commit"
  "catalyst-workaround.patch"
  "catalyst mutter cogl.patch")
sha256sums=('SKIP'
            'cf6c54cf23dc5898ab105d8bde2d60fd3f6671b319ffef12b0584544bfb23655'
            '55079a9daddedc22d9fe4dcfe2e87607345dfafb370f8e7fb6a98c0acae3348a')

prepare() {
  cd "$_realname"

  # https://bugzilla.gnome.org/show_bug.cgi?id=741581
  echo "Commenting out call to function with XRRChangeOutputProperty to fix issue with catalyst"
  patch -Np1 < "${srcdir}/catalyst-workaround.patch"
  # https://bugzilla.gnome.org/show_bug.cgi?id=756306
  echo "workaround compatibility shaders used in fw compat ctx in cogl"
  patch -Np1 -i "${srcdir}/catalyst mutter cogl.patch"
  echo "Patches applied"

  NOCONFIGURE=1 ./autogen.sh
}

build() {
  cd "$_realname"
  ./configure --prefix=/usr \
    --sysconfdir=/etc \
    --localstatedir=/var \
    --libexecdir=/usr/lib/$_realname \
    --disable-static \
    --disable-schemas-compile \
    --enable-compile-warnings=minimum \
    --enable-gtk-doc

  #https://bugzilla.gnome.org/show_bug.cgi?id=655517
  sed -e 's/ -shared / -Wl,-O1,--as-needed\0/g' \
      -i {.,cogl,clutter}/libtool

  make
}

package() {
  cd "$_realname"
  make DESTDIR="$pkgdir" install
}
