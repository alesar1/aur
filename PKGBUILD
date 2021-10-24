# $Id: PKGBUILD 278826 2016-10-15 00:15:40Z heftig $
# Contributor: Jan de Groot <jgc@archlinux.org>
# Contributor: Ian Hernández <badwolfie@archlinux.info>
# Maintainer: Albert Vaca Cintora <albertvaka@gmail.com>

_pkgbase=nautilus
pkgbase=nautilus-typeahead
pkgname=(nautilus-typeahead libnautilus-extension-typeahead)
packager="Albert Vaca Cintora <albertvaka@gmail.com>"
pkgver=40.2+7+g67c7bdbf8
pkgrel=1
pkgdesc="Default file manager for GNOME - Patched to bring back the 'typeahead find' feature"
url="https://wiki.gnome.org/Apps/Files"
arch=(x86_64)
license=(GPL)
depends=(libgexiv2 gnome-desktop gvfs dconf tracker3 tracker3-miners
         gnome-autoar gst-plugins-base-libs libhandy libportal)
makedepends=(gobject-introspection git gtk-doc meson appstream-glib 'meson>=0.44.1' ninja)
optdepends=('nautilus-sendto: right click to send files')
checkdepends=(python-gobject)
_commit=67c7bdbf8757c51d3b1bc1f5c40eaeddef9e3a89
source=("git+https://gitlab.gnome.org/GNOME/nautilus.git#commit=$_commit"
        'git+https://gitlab.gnome.org/GNOME/libgd.git'
        nautilus-restore-typeahead.patch
        meson-fix.patch)
sha256sums=('SKIP'
            'SKIP'
            'd3e1a3df1042a412aa23d0a1710c490c117239cd4d9ae9bae2ee32e190c8c03f'
            '1283bbe4a8614f994983373140d936c38ca9fd1dae7c72d016c001200eed9a96')

prepare() {
  cd "$_pkgbase"

  git submodule init
  git config submodule.libgd.url "$srcdir/libgd"
  git submodule update

  patch -p1 -i ../nautilus-restore-typeahead.patch
  patch -p1 -i ../meson-fix.patch

}

pkgver() {
  cd "$_pkgbase"
  git describe --tags | sed 's/-/+/g'
}

build() {
  if [ -e build ] ; then
      rm -r build
  fi
  arch-meson "$_pkgbase" build \
    -D docs=true \
    -D packagekit=false
  meson compile -C build
}

#check() {
#  meson test -C build --print-errorlogs
#}

_pick() {
  local p="$1" f d; shift
  for f; do
    d="$srcdir/$p/${f#$pkgdir/}"
    mkdir -p "$(dirname "$d")"
    mv "$f" "$d"
    rmdir -p --ignore-fail-on-non-empty "$(dirname "$f")"
  done
}

package_nautilus-typeahead() {
  depends+=(libnautilus-extension-typeahead)
  conflicts=(nautilus)
  provides=(nautilus)
  groups=(gnome)

  DESTDIR="$pkgdir" meson install -C build

### Split libnautilus-extension

  _pick libne "$pkgdir"/usr/include
  _pick libne "$pkgdir"/usr/lib/{girepository-1.0,libnautilus-extension*,pkgconfig}
  _pick libne "$pkgdir"/usr/share/{gir-1.0,gtk-doc}
}

package_libnautilus-extension-typeahead() {
  pkgdesc="Library for extending the $pkgdesc"
  depends=(gtk3)
  conflicts=(libnautilus-extension libnautilus-extension.so)
  provides=(libnautilus-extension libnautilus-extension.so)
  mv libne/* "$pkgdir"
}
