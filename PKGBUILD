# Maintainer: twilinx <twilinx@mesecons.net>

pkgname=gtk3-typeahead
pkgver=3.22.9+2+gaebe3a74ec
pkgrel=1
conflicts=(gtk3)
provides=("gtk3=$pkgver")
pkgdesc="GTK+ 3 with typeahead feature enabled for the file chooser widget"
arch=(i686 x86_64)
url="http://www.gtk.org/"
install=gtk3.install
depends=(atk cairo libxcursor libxinerama libxrandr libxi libepoxy gdk-pixbuf2 dconf
         libxcomposite libxdamage pango shared-mime-info at-spi2-atk wayland libxkbcommon
         adwaita-icon-theme json-glib librsvg wayland-protocols desktop-file-utils mesa gtk-update-icon-cache)
optdepends=('libcanberra: gtk3-widget-factory demo'
            'gtk3-print-backends: Printing')
makedepends=(gobject-introspection libcanberra gtk-doc git colord rest libcups glib2-docs)
license=(LGPL)
_commit=aebe3a74ec9c2da5fe6eb0826274d4b971068b8f # gtk-3-22~31
source=("git://git.gnome.org/gtk+#commit=$_commit"
        settings.ini
        gtk-query-immodules-3.0.hook
        typeahead.patch)
sha256sums=('SKIP'
            '01fc1d81dc82c4a052ac6e25bf9a04e7647267cc3017bc91f9ce3e63e5eb9202'
            'de46e5514ff39a7a65e01e485e874775ab1c0ad20b8e94ada43f4a6af1370845'
            '33fe0e01c3eb8d7539af702eea999acb95c6c527979a2912dbf5b21a59540ceb')

prepare() {
    cd gtk+

    # Typeahead-specific changes
    patch gtk/gtkfilechooserwidget.c -i $srcdir/typeahead.patch

    NOCONFIGURE=1 ./autogen.sh
}

build() {
    cd gtk+

    CXX=/bin/false ./configure --prefix=/usr \
        --sysconfdir=/etc \
        --localstatedir=/var \
        --disable-schemas-compile \
        --enable-x11-backend \
        --enable-broadway-backend \
        --enable-wayland-backend \
        --enable-gtk-doc

    #https://bugzilla.gnome.org/show_bug.cgi?id=655517
    sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool

    make -j4
}

package() {
    install=gtk3.install

    cd gtk+
    make DESTDIR="$pkgdir" install
    install -Dm644 ../settings.ini "$pkgdir/usr/share/gtk-3.0/settings.ini"
    install -Dm644 ../gtk-query-immodules-3.0.hook "$pkgdir/usr/share/libalpm/hooks/gtk-query-immodules-3.0.hook"

    # gtk-update-icon-cache will be provided in a separate package
    rm $pkgdir/usr/bin/gtk-update-icon-cache

    # remove files that are already provided by gtk3-print-backends
    cd "$pkgdir"
    for _f in usr/lib/*/*/printbackends/*; do
        case $_f in
            *-file.so|*-lpr.so) continue;;
        esac

        rm "$_f"
    done
}
