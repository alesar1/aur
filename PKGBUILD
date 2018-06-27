# Maintainer: Limao Luo <luolimao+AUR@gmail.com>
# Contributor: Yichao Yu <yyc1992@gmail.com>
# Contributor: kfgz <kfgz@interia.pl>

pkgbase=glib2-git
_pkgname=glib2
pkgname=(glib2-git glib2-docs-git)
pkgver=2.57.1.325.gc40e8a55b
pkgrel=1
pkgdesc="Low Level Core Library"
arch=('x86_64')
url="https://wiki.gnome.org/Projects/GLib"
license=(LGPL2.1)
depends=(
     pcre libffi libutil-linux zlib
)
makedepends=(
     gettext gtk-doc shared-mime-info python libelf git util-linux dbus
)
checkdepends=(
     desktop-file-utils
)
optdepends=(
            'python: gdbus-codegen, glib-genmarshal, glib-mkenums, gtester-report'
            'libelf: gresource inspection tool'
)
conflicts=($_pkgname)
provides=($_pkgname=$pkgver)
options=(!emptydirs)
source=("git+https://gitlab.gnome.org/GNOME/glib.git"
        0001-noisy-glib-compile-schemas.patch
        glib-compile-schemas.hook
        gio-querymodules.hook )
sha512sums=('SKIP'
            'ddbf4a8eaf60e943a10a1ad67f2de078143558df8cc06e8009da87d8068af0cf8c66f443474b8b2848239c003e6210ff9ceb1ba5ffda1b95b80687adbf813722'
            'c04fe25afc217c295b5ce4034733cec046126482d00fb8d0299e4815ac57129dd3f1c9ac824b9386d208a4f113e9dae682ea5b72f75387ed6b6b96a9cbbee8ca'
            '5afd6f275c8fff16df3e685818f2e7989b39ffb3b8f5fc261a5a6d54a9b28ef53af62f3bf5067cf87cb74691572f85730cbc508691956ae048a0f3ecc1a0a39c')

pkgver() {
    cd glib
    git describe  --tags | sed 's/-/./g'
}

prepare() {
    cd $srcdir/glib
    # Suppress noise from glib-compile-schemas.hook
    patch -Np1 -i ../0001-noisy-glib-compile-schemas.patch
    NOCONFIGURE=1 ./autogen.sh

  }

build () {
     local debug=minimum
     check_option debug y && debug=yes

    cd "$srcdir/glib"
    ./configure \
    --prefix=/usr \
    --libdir=/usr/lib \
    --sysconfdir=/etc \
    --with-pcre=system \
    --enable-debug=$debug \
    --enable-gtk-doc \
    --disable-fam
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool
}

#check() {internal_pcre
#    cd "$srcdir/glib"
#    make check
#}

package_glib2-git() {
    cd "$srcdir/glib"
    DESTDIR="$pkgdir" make install

    mv "$pkgdir/usr/share/gtk-doc" "$srcdir"
    install -Dt "$pkgdir/usr/share/libalpm/hooks" -m644 $srcdir/*.hook
}

package_glib2-docs-git() {
  pkgdesc="Documentation for GLib"
  depends=()
  optdepends=()
  provides=($_pkgname-docs)
  conflicts=($_pkgname-docs)
  license+=(custom)

  mkdir -p "$pkgdir/usr/share"
  mv gtk-doc "$pkgdir/usr/share"

  install -Dt "$pkgdir/usr/share/licenses/glib2-docs" -m644 glib/docs/reference/COPYING
}

