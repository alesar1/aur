# Maintainer: twa022 <twa022 at gmail dot com>

_pkgname=exo
pkgname=${_pkgname}-devel
pkgver=0.12.5
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
sha256sums=('8e8629f33783eba1ce6d092a42c28217458a0cc3d1ad7474097b9187054955c1')

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
