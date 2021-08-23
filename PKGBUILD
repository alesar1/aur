# Maintainer: Cezary Drożak <czarek@drozak.net>
# Contributor: TDY <tdy@gmx.com>
# Contributor: Eduard "bekks" Warkentin <eduard.warkentin@gmail.com>
# Contributor: Luke Shumaker <lukeshu@sbcglobal.net>
# Contributor: Miguel Revilla <yo@miguelrevilla.com>

_pkgname=gmdb2
_pkgver=0.9.1-beta1
_srcname="${_pkgname}-${_pkgver}"
pkgname=gmdb2-beta
pkgver=${_pkgver//-/_}
pkgrel=2
provides=("gmdb2=$pkgver")
conflicts=("gmdb2")
pkgdesc="Graphical viewer for Microsoft Access database files"
arch=('i686' 'x86_64')
url="https://github.com/mdbtools/gmdb2"
license=('GPL')
depends=('mdbtools>=0.9.0' 'gtk3>=3.22')
makedepends=('yelp-tools')
optdepends=('yelp: for documentation')
source=("${_srcname}.tar.gz::$url/archive/v${_pkgver}.tar.gz")
md5sums=('12803e3ba8da83760645cbd466e027bf')

prepare() {
  cd "${srcdir}/${_srcname}"
  autoreconf -i -f
}

build() {
  cd "${srcdir}/${_srcname}"
  ./configure --prefix=/usr --sysconfdir=/etc --mandir=/usr/share/man
  make
}

package() {
  cd "${srcdir}/${_srcname}/src"
  make DESTDIR="${pkgdir}" install
  install -Dm644 gmdb.desktop "$pkgdir"/usr/share/applications/gmdb2.desktop
  install -Dm644 ../mdbtools.gmdb2.gschema.xml "$pkgdir"/usr/share/glib-2.0/schemas/mdbtools.gmdb2.gschema.xml
}
