# Maintainer: dudemanguy <random342@airmail.cc>
# Contributer: Wolfgang Frisch (wfr) <wfrisch@riseup.net>
# Contributer: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Contributor: Ionut Biru <ibiru@archlinux.org>

pkgname=gtk3-patched-filechooser-icon-view
pkgver=3.24.8+177+gae2ef1472c
pkgrel=1
epoch=1
pkgdesc="GTK3 patched with dudemanguy's fork of wfr's filechooser-icon-view patch."
arch=(x86_64)
url="https://github.com/Dudemanguy911/gtk"
provides=(gtk3=$pkgver gtk3-print-backends)
conflicts=(gtk3 gtk3-print-backends)
replaces=('gtk3-print-backends<=3.22.26-1')
depends=(atk cairo libxcursor libxinerama libxrandr libxi libepoxy gdk-pixbuf2 dconf
         libxcomposite libxdamage pango shared-mime-info at-spi2-atk wayland libxkbcommon
         adwaita-icon-theme json-glib librsvg wayland-protocols desktop-file-utils mesa
         cantarell-fonts colord rest libcups libcanberra fribidi iso-codes gtk-update-icon-cache)
optdepends=('glib2-patched-thumbnailer: Thumbnail generation in upload dialog')
makedepends=(gobject-introspection gtk-doc git glib2-docs sassc meson)

license=(LGPL)
install=gtk3.install
_commit=ae2ef1472c69ad61ed8d19d932da4ca04c2a13ef # gtk-3-24
source=("git+https://gitlab.gnome.org/GNOME/gtk.git#commit=$_commit"
        settings.ini
        gtk-query-immodules-3.0.hook
        gtk3-filechooser-icon-view.patch)        

sha256sums=('SKIP'
            '01fc1d81dc82c4a052ac6e25bf9a04e7647267cc3017bc91f9ce3e63e5eb9202'
            'de46e5514ff39a7a65e01e485e874775ab1c0ad20b8e94ada43f4a6af1370845'
            '90e94f1e287ec0821c995fd17c6a68265c965c72aad3a794d0866184930a5719')
pkgver() {
  cd gtk
  git describe --tags | sed 's/-/+/g'
}

prepare() {
  cd gtk

  # apply icon-view patch
  patch -Np1 -i ../gtk3-filechooser-icon-view.patch
}

build() {
  CFLAGS+=" -DG_ENABLE_DEBUG -DG_DISABLE_CAST_CHECKS"
  arch-meson gtk build \
    -D broadway_backend=true \
    -D colord=yes \
    -D gtk_doc=true \
    -D man=true
  ninja -C build
}

package() {
  DESTDIR="$pkgdir" meson install -C build

  install -Dt "$pkgdir/usre/share/gtk-3.0/settings.ini" -m644 settings.ini
  install -Dt "$pkgdir/usr/share/libalpm/hooks/gtk-query-immodules-3.0.hook" -m644 gtk-query-immodules-3.0.hook

  # split these out to avoid file conflicts with gtk-update-icon-cache
  rm "$pkgdir/usr/bin/gtk-update-icon-cache"
}

