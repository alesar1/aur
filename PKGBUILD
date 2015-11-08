# Contributor: Aaron Griffin <aaron@archlinux.org>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=goffice-light
_pkgname=goffice
pkgver=0.10.24
pkgrel=1
pkgdesc="A library of document-centric objects and utilities built on top of GLib and Gtk+"
arch=('i686' 'x86_64')
url="http://www.gnome.org"
license=('GPL')
provides=("goffice=$pkgver")
conflicts=('goffice')
options=('!libtool')
makedepends=('pkgconfig' 'intltool' 'gobject-introspection')
depends=('gtk3' 'librsvg' 'libgsf' 'libspectre' 'libxslt')
source=(http://ftp.gnome.org/pub/gnome/sources/${_pkgname}/${pkgver%.*}/${_pkgname}-${pkgver}.tar.xz)
sha256sums=('cda70eab0b0b0e29c3bea09849bcfca0c2ccc20038ee69e7e14cde664484af5a')

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  ./configure --prefix=/usr --sysconfdir=/etc --disable-gtk-doc-html           \
      --localstatedir=/var --enable-introspection 
  make
}

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
}
