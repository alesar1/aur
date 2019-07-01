# Maintainer: twa022 <twa022 at gmail dot com>

_pkgname=xfwm4
pkgname=${_pkgname}-devel
pkgver=4.13.3
pkgrel=1
pkgdesc="Xfce window manager"
arch=('i686' 'x86_64')
url="https://www.xfce.org/"
license=('GPL2')
groups=('xfce4-devel')
depends=('libxfce4ui>=4.12.0' 'libwnck3' 'xfconf' 'hicolor-icon-theme' 'libxpresent')
makedepends=('intltool' 'exo')
provides=("${_pkgname}=${pkgver}")
conflicts=("${_pkgname}")
options=('!libtool')
source=(https://archive.xfce.org/src/xfce/$_pkgname/${pkgver%.*}/$_pkgname-$pkgver.tar.bz2)
sha256sums=('12ad274f6662c8afee35fd9b9310e73bd462c423578d448b2d7353e3c8eda6c1')

build() {
  cd "$srcdir/$_pkgname-$pkgver"

  ./configure \
    --prefix=/usr \
    --sysconfdir=/etc \
    --libexecdir=/usr/lib \
    --localstatedir=/var \
    --disable-static \
    --enable-startup-notification \
    --enable-randr \
    --enable-compositor \
    --enable-xsync \
    --enable-xpresent \
    --disable-debug \
    --enable-maintainer-mode
  make
}

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  make DESTDIR="$pkgdir" install
}
