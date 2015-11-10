# Maintainer: Doug Newgard <scimmia at archlinux dot info>
# Contributor: Matias De la Puente <mfpuente.ar@gmail.com>

pkgname=moserial
pkgver=3.0.10
pkgrel=1
pkgdesc="Clean, friendly gtk-based serial terminal for the gnome desktop"
arch=('i686' 'x86_64')
url="http://live.gnome.org/moserial"
license=('GPL3')
depends=('gtk3')
optdepends=('lrzsz: for xmodem, ymodem and zmodem file transfer protocols'
            'yelp: help browser')
makedepends=('intltool' 'itstool')
install=$pkgname.install
source=("http://ftp.gnome.org/pub/GNOME/sources/$pkgname/${pkgver%.*}/$pkgname-$pkgver.tar.xz")
sha256sums=('3d7107a0fc69a58ee139241214351373d35ead5ac07c751854479d2c30442980')

build() {
  cd $pkgname-$pkgver

  ./configure --prefix=/usr

  make
}

package() {
  cd $pkgname-$pkgver

  make DESTDIR="$pkgdir" install
}
