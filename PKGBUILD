# Maintainer: Nissar Chababy <funilrys at outlook dot com>
# Ex-Maintainer : Frederic Bezies <fredbezies at gmail dot com>
# Contributor: Adria Arrufat <swiftscythe at gmail _dot_com>

pkgname=cronopete
pkgver=3.22.0
pkgrel=1
pkgdesc="A graphical backup utility based on Apple Time Machine idea."
arch=('i686' 'x86_64')
url="http://www.rastersoft.com/programas/cronopete.html"
license=('GPL2')
depends=('gsl' 'glib2' 'gtk3' 'libgee' 'libx11')
makedepends=('vala' 'glib2' 'cmake' 'intltool' )
source=(https://github.com/rastersoft/cronopete/archive/${pkgver}.tar.gz)
sha512sums=('2c179da9534546b2d6d586cce47096de41ba170fe0942cd9117d679844517664fde7552d5e92ed7772070c8a99bfbbf1feec81354e8447ad856030929a376a98')
install=${pkgname}.install

build() {
  cd ${srcdir}/${pkgname}-${pkgver}
  mkdir -p build
  cd build
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DNO_APPINDICATOR=on ..
  make
}

package() {
  cd ${srcdir}/${pkgname}-${pkgver}/build
  make DESTDIR=${pkgdir} install
}
