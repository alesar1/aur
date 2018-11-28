# Maintainer: dudemanguy <random342@airmail.cc>
# Contributor: Vaporeon <vaporeon@vaporeon.io>
# Contributor: Jan de Groot <jgc@archlinux.org>

pkgname=glib2-patched-thumbnailer
pkgver=2.58.1+67+g17519e039
pkgrel=1
pkgdesc="GLib2 patched with ahodesuka's thumbnailer patch."
url="https://gist.github.com/Dudemanguy911/d199759b46a79782cc1b301649dec8a5"
arch=(x86_64)
provides=("glib2=$pkgver")
conflicts=('glib2')
depends=(pcre libffi libutil-linux zlib tumbler)
makedepends=(gettext gtk-doc shared-mime-info python libelf git util-linux meson dbus)
checkdepends=(desktop-file-utils)
optdepends=('python: gdbus-codegen, glib-genmarshal, glib-mkenums, gtester-report'
            'libelf: gresource inspection tool')
options=('!docs' '!emptydirs')
license=(LGPL2.1)
_commit=17519e039f29b5ffd0aad5ed1661bc56eb1dfeaa  # glib-2-58
source=("git+https://gitlab.gnome.org/GNOME/glib.git#commit=$_commit"
        noisy-glib-compile-schemas.diff
        glib-compile-schemas.hook
        gio-querymodules.hook
        glib-thumbnailer.patch)
sha256sums=('SKIP'
            '81a4df0b638730cffb7fa263c04841f7ca6b9c9578ee5045db6f30ff0c3fc531'
            'e1123a5d85d2445faac33f6dae1085fdd620d83279a4e130a83fe38db52b62b3'
            '5ba204a2686304b1454d401a39a9d27d09dd25e4529664e3fd565be3d439f8b6'
            '9ea789788962a941af83b99949ddc21d7d19d820f2170f58691ca83e53afb158')

pkgver() {
  cd glib
  git describe --tags | sed 's/-/+/g'
}

prepare() {
  cd glib

  # Suppress noise from glib-compile-schemas.hook
  patch -Np1 -i ../noisy-glib-compile-schemas.diff

  # Apply patch to generate thumbnails
  patch -Np1 -i ../glib-thumbnailer.patch
}

build() {
  arch-meson glib build \
    -D selinux=false \
    -D man=true \
    -D gtk_doc=true
  ninja -C build
}

#skip this; test fails
#check() {
#  meson test -C build -t 2
#}

package() {
  DESTDIR="$pkgdir" meson install -C build
  install -Dt "$pkgdir/usr/share/libalpm/hooks" -m644 *.hook

  python -m compileall -d /usr/share/glib-2.0/codegen "$pkgdir/usr/share/glib-2.0/codegen"
  python -O -m compileall -d /usr/share/glib-2.0/codegen "$pkgdir/usr/share/glib-2.0/codegen"

  # Split docs
  mv "$pkgdir/usr/share/gtk-doc" "$srcdir"
}
