# Maintainer: Alois Nespor <info@aloisnespor.info>

pkgname=boomaga-qt5
_name=boomaga
pkgver=1.0.0
pkgrel=1
pkgdesc="is a virtual printer for viewing a document before printing it out using the physical printer - QT5 version"
arch=('i686' 'x86_64')
url="http://www.boomaga.org/"
license=('LGPL')
depends=('qt5-tools' 'snappy' 'poppler')
makedepends=('cmake' 'cups')
conflicts=('boomaga')
source=("https://github.com/Boomaga/boomaga/archive/v$pkgver.tar.gz")


build() {
 cd $_name-$pkgver
 cmake . -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release
   make 
}

package() {
  cd $_name-$pkgver
    make "DESTDIR=$pkgdir" install
  install -D -m755 $srcdir/$_name-$pkgver/scripts/installPrinter.sh ${pkgdir}/usr/bin/
}
sha256sums=('ffdd9c55a2bb104fab3f3d684b56e18906eb33dfb1e7e23c828a21102dc59909')
