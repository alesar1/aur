# Maintainer: Josef Vybihal <josef dot vybihal at gmail dot com>
# Ported to GTK3 by https://github.com/dallenwilson
# Old Maintainer: Jeff Henson <jeff at henson dot io>
# Old Maintainer: cuihao <cuihao dot leo at gmail dot com>
# Original PKGBUILD (community/gstm):
# Contributor: Roman Kyrylych <Roman.Kyrylych@gmail.com>
# Contributor: William Rea <sillywilly@gmail.com>
# Contributor: Daniel J Griffiths <ghost1227@archlinux.us>

pkgname=gstm
pkgver=1.3.4
pkgrel=1
pkgdesc="Gnome SSH Tunnel Manager - Gtk3 Edition"
arch=('i686' 'x86_64')
url="https://github.com/dallenwilson/gstm"
license=('GPL')
depends=('openssh' 'libxml2' 'glib2' 'gdk-pixbuf2' 'gtk3')
makedepends=('intltool')
conflicts=('gstm-git' 'gstm-gtk2')
provides=('gstm')
source=(https://github.com/dallenwilson/gstm/releases/download/${pkgver}/gstm-${pkgver}.tar.gz)
sha256sums=('9d0428f5573a44de8355bafa283360bc233bff0dcc2f3a72a8dd3efc5c986b0b')

build() {
   cd ${srcdir}/gstm-${pkgver}
   ./configure --prefix=/usr
   make || return 1
}

package() {
   cd ${srcdir}/gstm-${pkgver}
   make DESTDIR=${pkgdir} install
}
