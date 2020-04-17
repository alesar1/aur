# Maintainer:  Dimitris Kiziridis <ragouel at outlook dot com>
# Contributor: Jan de Groot <jgc@archlinux.org>
# Contributor: Sarah Hay <sarahhay@mb.sympatico.ca>

pkgname=pygtk
pkgver=2.24.0
pkgrel=12
pkgdesc="Python bindings for the GTK widget set"
url="http://www.pygtk.org/"
arch=('x86_64')
license=('LGPL')
depends=('libglade' 'python2-cairo' 'python2-gobject2')
makedepends=('python2-numpy' 'pygobject2-devel' 'wget')
optdepends=('python2-numpy')
source=("https://download.gnome.org/sources/${pkgname}/${pkgver%.*}/${pkgname}-${pkgver}.tar.bz2"
        "https://gitlab.gnome.org/Archive/pygtk/-/commit/4aaa48eb80c6802aec6d03e5695d2a0ff20e0fc2.patch"
        'python27.patch'
        'fix-leaks-of-pango-objects.patch')
md5sums=('a1051d5794fd7696d3c1af6422d17a49'
         '956d35fc408e8815476a8f0e4f8ab1c8'
         '12acfacd26f19c504a0a2d0edeb66121'
         'd7bbcdacd34b16dbf94e7f4df9e27b88')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  # Detect latest architecture
  wget 'http://git.savannah.gnu.org/gitweb/?p=config.git;a=blob_plain;f=config.guess;hb=HEAD' \
  -O config.guess
  wget 'http://git.savannah.gnu.org/gitweb/?p=config.git;a=blob_plain;f=config.sub;hb=HEAD' \
  -O config.sub
  # https://bugzilla.gnome.org/show_bug.cgi?id=623965
  patch -Np1 -i "${srcdir}/python27.patch"
  # https://bugzilla.gnome.org/show_bug.cgi?id=660216
  patch -Np1 -i "${srcdir}/fix-leaks-of-pango-objects.patch"
  # fix build with new pango:
  # https://gitlab.gnome.org/Archive/pygtk/-/merge_requests/1
  patch -p1 -i ../4aaa48eb80c6802aec6d03e5695d2a0ff20e0fc2.patch
  # Python 2
  sed -i -e 's#env python$#env python2#' examples/pygtk-demo/{,demos/}*.py
  # No docs
  sed -i '/^SUBDIRS =/s/docs//' Makefile.in
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  PYTHON=/usr/bin/python2 ./configure --prefix=/usr --disable-docs
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
  install -m644 gtk/gtk-extrafuncs.defs "${pkgdir}/usr/share/pygtk/2.0/defs/"
}