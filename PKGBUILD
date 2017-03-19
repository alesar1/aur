# Maintainer: Adria Arrufat <adria DOT arrufat+aur AT protonmail DOT ch>

_pkgname=epiphany
pkgname=$_pkgname-git
pkgver=3.24.0
pkgrel=1
install=epiphany.install
pkgdesc="A GNOME web browser based on the WebKit rendering engine."
url="http://www.gnome.org/projects/epiphany/"
arch=('i686' 'x86_64')
license=('GPL')
depends=(webkit2gtk gcr gnome-desktop)
makedepends=(intltool itstool docbook-xml startup-notification lsb-release
             gobject-introspection yelp-tools autoconf-archive appstream-glib git)
groups=(gnome)
replaces=('epiphany')
provides=("epiphany")
conflicts=('epiphany')
source=("git://git.gnome.org/epiphany"
	"git://git.gnome.org/libgd"
	"git://git.gnome.org/gvdb"
	pluginsdir.diff
)
sha256sums=('SKIP'
            'SKIP'
            'SKIP'
            '96973321fe715b82a69f95f77b150853b43909b05f8aaa0bec46c12aff305763')

pkgver() {
  cd $_pkgname
  git describe --always | sed 's/-/+/g'
}

prepare() {
  cd $_pkgname
  patch -Np1 -i ../pluginsdir.diff
  git submodule init
  git config --local libgd.url "${srcdir}/libgd"
  git config --local gvdb.url "${srcdir}/gvdb/gvdb"
  git submodule update
  NOCONFIGURE=1 ./autogen.sh
}

build() {
  cd $_pkgname
  ./configure --prefix=/usr --sysconfdir=/etc \
      --localstatedir=/var --libexecdir=/usr/lib/$pkgname

  # https://bugzilla.gnome.org/show_bug.cgi?id=655517
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool
  make
}

package() {
  cd $_pkgname
  make DESTDIR=$pkgdir install
}
