# Maintainer: Grey Christoforo <first name [at] last name [dot] net>

pkgname=curaengine
pkgver=2.3.1
pkgrel=1
pkgdesc="CuraEngine is a powerful, fast and robust engine for processing 3D models into 3D printing instruction for Ultimaker and other GCode based 3D printers. It is part of the larger open source project called Cura."
url="https://github.com/Ultimaker/CuraEngine"
arch=('any')
license=('GPLv3')
depends=('arcus')
makedepends=('cmake')
source=("https://github.com/Ultimaker/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=('414a37c98d722e0ba4a76293394bc8c2')


build() {
  cd CuraEngine-${pkgver}
  mkdir -p build
  cd build
    
   cmake .. \
     -DCMAKE_INSTALL_PREFIX=/usr \
     -DCMAKE_BUILD_TYPE=Release

  make
}

package() {
  cd CuraEngine-${pkgver}/build
  make DESTDIR="${pkgdir}" install
  #install -Dm644 COPYING "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}

# vim:set ts=2 sw=2 et:
