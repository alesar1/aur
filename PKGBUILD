# Maintainer: twa022 <twa022 at gmail dot com>

_pkgname=exo
pkgname=${_pkgname}-devel
pkgver=0.12.6
pkgrel=1
pkgdesc="Extensions to Xfce (Development version)"
arch=('i686' 'x86_64')
url="https://www.xfce.org/"
license=('GPL2' 'LGPL')
groups=('xfce4-devel')
depends=('libxfce4ui' 'perl-uri' 'hicolor-icon-theme')
makedepends=('intltool' 'gtk-doc')
provides=("${_pkgname}=${pkgver}")
conflicts=("${_pkgname}")
source=("https://archive.xfce.org/src/xfce/$_pkgname/${pkgver%.*}/$_pkgname-$pkgver.tar.bz2")
sha256sums=('1417fffc593225d61ba57b050ae2ce66ef37615c9ec66944db32019761441003')

build() {
  cd "$srcdir/$_pkgname-$pkgver"

  ./configure \
    --prefix=/usr \
    --sysconfdir=/etc \
    --enable-gtk-doc \
    --disable-debug
  make
}

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  make DESTDIR="$pkgdir" install
}
