# Maintainer: jtts
# Contributor: Jan de Groot <jgc@archlinux.org>

_pkgbasename=librsvg
pkgname=lib32-$_pkgbasename
pkgver=2.40.9
pkgrel=5
#epoch=1
pkgdesc="A SVG viewing library (32-bit)"
arch=(x86_64)
license=(LGPL)
depends=(lib32-gdk-pixbuf2 lib32-pango lib32-libcroco $_pkgbasename)
makedepends=(gcc-multilib intltool gobject-introspection vala python2)
options=('!emptydirs')
url="https://live.gnome.org/LibRsvg"
#install=librsvg.install
source=("http://ftp.gnome.org/pub/gnome/sources/$_pkgbasename/${pkgver:0:4}/$_pkgbasename-$pkgver.tar.xz"
        librsvg-gtk-optional.patch::https://bug712693.bugzilla-attachments.gnome.org/attachment.cgi?id=260258)
sha256sums=('13964c5d35357552b47d365c34215eee0a63bf0e6059b689f048648c6bf5f43a'
            '060ad4965c51d334da543970f959022d519bd3e714c1ee22c4cf9081e875c1e3')

prepare() {
  cd $_pkgbasename-$pkgver
  sed s/configure.in/configure.ac/ <../librsvg-gtk-optional.patch | patch -p1
  autoconf
  aclocal
  automake
}

build() {
  export CC="gcc -m32"
  export CXX="g++ -m32"
  export PKG_CONFIG_PATH="/usr/lib32/pkgconfig"

  cd $_pkgbasename-$pkgver
  ./configure --prefix=/usr --disable-static --enable-vala \
	      --libdir=/usr/lib32 \
	      --disable-gtk-doc \
	      --disable-gtk-doc-html  \
	      --disable-gtk-doc-pdf \
	      --without-gtk3 \
	      --enable-introspection=yes
  make
}

package() {
  cd $_pkgbasename-$pkgver
  make DESTDIR="$pkgdir" install

  # remove unneeded stuff
  rm -fr ${pkgdir}/{usr/{bin,include,share},etc}
}
