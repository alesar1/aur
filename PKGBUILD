# Maintainer: Josef Vybihal <josef dot vybihal at gmail dot com>
# Ported to GTK3 by https://github.com/dallenwilson
# Old Maintainer: Jeff Henson <jeff at henson dot io>
# Old Maintainer: cuihao <cuihao dot leo at gmail dot com>
# Original PKGBUILD (community/gstm):
# Contributor: Roman Kyrylych <Roman.Kyrylych@gmail.com>
# Contributor: William Rea <sillywilly@gmail.com>
# Contributor: Daniel J Griffiths <ghost1227@archlinux.us>

pkgname=gstm
pkgver=1.3.6
pkgrel=1
pkgdesc="Gnome SSH Tunnel Manager - Gtk3 Edition"
arch=('i686' 'x86_64')
url="https://github.com/dallenwilson/gstm"
license=('GPL')
depends=('openssh' 'libxml2' 'glib2' 'gdk-pixbuf2' 'gtk3')
makedepends=('intltool')
conflicts=('gstm-git' 'gstm-gtk2')
provides=('gstm')
#source=(https://github.com/dallenwilson/gstm/releases/download/${pkgver}/gstm-${pkgver}.tar.gz)
source=('git+https://github.com/dallenwilson/gstm.git#commit=75d363138f3ba092e2d6a0464eaab33b2009ee90')
sha256sums=('SKIP')
#sha256sums=('a4971c710a062b2b3a67ffe73e619fbabb2a0efb6ba5e6c03bf7d938cd69bc53')

build() {
   cd ${srcdir}/gstm #-${pkgver}
   ./autogen.sh
   ./configure --prefix=/usr
   make || return 1
}

package() {
   cd ${srcdir}/gstm #-${pkgver}
   make DESTDIR=${pkgdir} install
}
