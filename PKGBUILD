# $Id: PKGBUILD 239312 2015-05-13 21:24:40Z heftig $
# Contributor: Jan de Groot <jgc@archlinux.org>
# Maintainer: Ian Hernández <ihernandezs@openmailbox.org>

pkgbase=nautilus
pkgname=nautilus-typeahead
pkgver=3.16.2
pkgrel=1
pkgdesc="GNOME file manager - Patched to bring back the 'typeahead find' feature"
arch=(i686 x86_64)
license=(GPL)
depends=(libexif gnome-desktop exempi gvfs desktop-file-utils dconf 
         libtracker-sparql libnotify nautilus-sendto)
makedepends=(intltool gobject-introspection python python2 packagekit)
url="http://www.gnome.org"
options=('!emptydirs')
source=(http://download.gnome.org/sources/$pkgbase/${pkgver:0:4}/$pkgbase-$pkgver.tar.xz nautilus-restore-typeahead.patch)
sha256sums=('3e7ecdda3a47b6ad03098270940aa506782866fa3602d91e711d99f96741478f' '42baee0cd2a93bf8433da3c611a8acd30df39f15d89179dbbdbe65d08d0b3515')

prepare() {
  cd $pkgbase-$pkgver
  patch -p1 -i ../nautilus-restore-typeahead.patch
  autoreconf -f -i
}

build() {
  cd $pkgbase-$pkgver
  ./configure --prefix=/usr --sysconfdir=/etc \
      --localstatedir=/var --disable-static \
      --libexecdir=/usr/lib/nautilus \
      --disable-update-mimedb \
      --disable-schemas-compile
  make
}

package_nautilus-typeahead() {
  depends+=(libnautilus-extension)
  install=nautilus.install
  conflicts=$pkgbase
  provides=$pkgbase

  cd $pkgbase-$pkgver
  make DESTDIR="$pkgdir" install

### Split libnautilus-extension
  cd ..
  mkdir -p n-e/usr/{lib,share}
  mv "$pkgdir"/usr/include n-e/usr
  mv "$pkgdir"/usr/lib/{girepository-1.0,pkgconfig} n-e/usr/lib
  mv "$pkgdir"/usr/lib/libnautilus-extension.so* n-e/usr/lib
  mv "$pkgdir"/usr/share/{gir-1.0,gtk-doc} n-e/usr/share
}

# package_libnautilus-extension() {
#   pkgdesc="Library for extending the $pkgdesc"
#   depends=(gtk3)

#   mv n-e/* "$pkgdir"
# }
