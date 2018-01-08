# Maintainer: Jan Neumann <neum dot ja at gmail dot com>


pkgname=dnscrypt-proxy-gui
pkgver=1.11.10
pkgrel=1
pkgdesc='Qt/KF5 GUI wrapper over dnscrypt-proxy'
arch=('i686' 'x86_64')
url='https://github.com/F1ash/dnscrypt-proxy-gui'
license=('GPL2')
depends=('kauth' 'knotifications' 'hicolor-icon-theme' 'dnscrypt-proxy')
makedepends=('cmake' 'extra-cmake-modules' 'desktop-file-utils')
conflicts=('dnscrypt-proxy-gui-git')
source=("${pkgname}-${pkgver}::${url}/archive/${pkgver}.tar.gz")
sha256sums=('4b103500fb260d1837e80b1dec1513df4def8dfddd0df08db380c04df31fb11c')


build() {
  cd ${pkgname}-${pkgver}

  mkdir build && cd build

  cmake .. \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DSHARE_INSTALL_PREFIX=/usr/share \
   
    
  make
}

package() {
  cd ${pkgname}-${pkgver}/build

  make DESTDIR=${pkgdir} install
}

