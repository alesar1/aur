# Maintainer: Jan Neumann <neum dot ja at gmail dot com>


pkgname=ksmoothdock
pkgver=5.9
pkgrel=1
pkgdesc='A cool desktop panel for KDE Plasma 5'
arch=('i686' 'x86_64')
url='https://github.com/dangvd/ksmoothdock'
license=('GPL3')
depends=('kxmlgui')
makedepends=('cmake' 'extra-cmake-modules' 'python')
source=("${pkgname}-${pkgver}::${url}/archive/v${pkgver}.tar.gz")
sha256sums=('e6909a179fe1069a822d48acc423dcf34cdf2f45e4808c98aefb28bed25f8805')

build() {
  cd ${srcdir}/${pkgname}-${pkgver}

  cmake src \
    -DCMAKE_INSTALL_PREFIX=/usr \
  
  make
    
  }

package() {
  make -C ${srcdir}/${pkgname}-${pkgver} DESTDIR="$pkgdir" install
}
